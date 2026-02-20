import { getSortedPostsData } from '@/lib/markdown';
import ProjectsList from '@/components/ProjectsList';

export const metadata = {
    title: 'Projects | My Portfolio',
    description: 'A showcase of my projects in Frontend, Backend, ML, and AI.',
};

export default function ProjectsPage() {
    const projects = getSortedPostsData('projects');

    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    My Projects
                </h1>
                <p className="text-xl text-muted-foreground">
                    Explore a collection of my work across various technologies and domains.
                </p>
            </div>

            <ProjectsList projects={projects as any[]} />
        </div>
    );
}
