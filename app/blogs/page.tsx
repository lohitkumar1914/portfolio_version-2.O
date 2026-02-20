import { getSortedPostsData } from '@/lib/markdown';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Blog | My Portfolio',
    description: 'Thoughts on software development, tech, and more.',
};

export default function BlogsPage() {
    const blogs = getSortedPostsData('blogs');

    return (
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Latest Updates
                </h1>
                <p className="text-xl text-muted-foreground">
                    Sharing my journey and learnings in tech.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogs.map((blog: any) => (
                    <Link key={blog.id} href={`/blogs/${blog.id}`} className="group h-full">
                        <Card className="h-full flex flex-col justify-between hover:border-primary/50 transition-colors duration-300">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant="secondary" className="mb-2">{blog.category}</Badge>
                                    <time dateTime={blog.date} className="text-sm text-muted-foreground">
                                        {format(new Date(blog.date), 'MMMM d, yyyy')}
                                    </time>
                                </div>
                                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                                    {blog.title}
                                </CardTitle>
                                <CardDescription className="line-clamp-3 mt-2">
                                    {blog.summary}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter className="pt-0">
                                <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read More <ArrowRight className="w-4 h-4" />
                                </span>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
