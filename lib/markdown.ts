import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface PostData {
    id: string;
    contentHtml: string;
    title: string;
    description: string;
    date?: string;
    category?: string;
    tech_stack?: string[];
    features?: string[];
    github_link?: string;
    live_demo_link?: string;
    image?: string;
    type?: string;
    [key: string]: any;
}

export async function getPostData(category: string, id: string): Promise<PostData | null> {
    const fullPath = path.join(contentDirectory, category, `${id}.md`);
    if (!fs.existsSync(fullPath)) {
        return null;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        title: matterResult.data.title,
        description: matterResult.data.description,
        ...matterResult.data,
    };
}

export function getAllPostIds(category: string) {
    const dir = path.join(contentDirectory, category);
    if (!fs.existsSync(dir)) {
        return [];
    }
    const fileNames = fs.readdirSync(dir);
    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export function getSortedPostsData(category: string): PostData[] {
    const dir = path.join(contentDirectory, category);
    if (!fs.existsSync(dir)) {
        return [];
    }
    const fileNames = fs.readdirSync(dir);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(dir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            contentHtml: '', // Not needed for list
            title: matterResult.data.title,
            description: matterResult.data.description,
            ...matterResult.data,
        } as PostData;
    });

    // Sort posts by date (if available) or title
    return allPostsData.sort((a, b) => {
        if (a.date && b.date) {
            if (a.date < b.date) {
                return 1;
            } else {
                return -1;
            }
        }
        return 0;
    });
}
