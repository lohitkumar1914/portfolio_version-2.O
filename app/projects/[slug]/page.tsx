import { getPostData, getAllPostIds } from '@/lib/markdown';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, Globe } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
    const paths = getAllPostIds('projects');
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getPostData('projects', slug);
    if (!project) return { title: 'Project Not Found' };

    return {
        title: project.title,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getPostData('projects', slug);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <article className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
            <Link
                href="/projects"
                className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors group"
            >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                    {project.image ? (
                        <div className="rounded-xl overflow-hidden border border-border shadow-2xl">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    ) : (
                        <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border border-border">
                            <span className="text-4xl font-bold opacity-10">{project.type || 'Project'}</span>
                        </div>
                    )}
                </div>

                <div className="flex flex-col justify-center">
                    <div className="mb-4">
                        <Badge variant="outline" className="mb-2">{project.category}</Badge>
                        <h1 className="text-4xl font-bold tracking-tight mb-4">{project.title}</h1>
                        <p className="text-xl text-muted-foreground">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6">
                        {project.github_link && (
                            <Button asChild variant="outline" className="gap-2">
                                <Link href={project.github_link} target="_blank">
                                    <Github className="h-4 w-4" /> View Code
                                </Link>
                            </Button>
                        )}
                        {project.live_demo_link && (
                            <Button asChild className="gap-2">
                                <Link href={project.live_demo_link} target="_blank">
                                    <Globe className="h-4 w-4" /> Live Demo
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 prose prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
                </div>

                <div className="space-y-8">
                    <div className="bg-muted/50 p-6 rounded-xl border border-border">
                        <h3 className="font-semibold text-lg mb-4">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech_stack?.map((tech: string) => (
                                <Badge key={tech} variant="secondary">{tech}</Badge>
                            ))}
                        </div>
                    </div>

                    {project.features && (
                        <div className="bg-muted/50 p-6 rounded-xl border border-border">
                            <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                            <ul className="space-y-2">
                                {project.features.map((feature: string) => (
                                    <li key={feature} className="flex items-start">
                                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}
