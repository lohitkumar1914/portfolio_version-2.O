import { getPostData, getAllPostIds } from '@/lib/markdown';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
    const paths = getAllPostIds('blogs');
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostData('blogs', slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: post.title,
        description: post.summary,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostData('blogs', slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    // Estimate read time (avg 200 words per minute)
    const wordCount = post.contentHtml.split(/\s+/g).length;
    const readTime = Math.ceil(wordCount / 200);

    return (
        <article className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
            <div className="mb-8">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Link>
            </div>

            <header className="mb-10">
                {post.image && (
                    <div className="rounded-xl overflow-hidden mb-8 border border-border/50 shadow-2xl">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-auto object-cover max-h-[500px]"
                        />
                    </div>
                )}

                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                    <time dateTime={post.date} className="flex items-center">
                        {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </time>
                    <span>•</span>
                    <span>{readTime} min read</span>
                    {post.category && (
                        <>
                            <span>•</span>
                            <Badge variant="secondary" className="rounded-md px-2 py-0 font-normal">{post.category}</Badge>
                        </>
                    )}
                </div>

                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground leading-tight">
                    {post.title}
                </h1>
            </header>

            <div
                className="prose prose-lg prose-invert max-w-none 
                prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
                prose-p:text-muted-foreground prose-p:leading-8
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:rounded
                prose-img:rounded-xl prose-img:border prose-img:border-border/50"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <hr className="my-12 border-border/50" />

            <div className="flex justify-between items-center">
                <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </div>
        </article>
    );
}
