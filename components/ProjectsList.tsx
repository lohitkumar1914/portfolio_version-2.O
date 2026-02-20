'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    tech_stack?: string[];
    image?: string;
    github_link?: string;
    live_demo_link?: string;
}

const categories = ["All", "Frontend", "Backend", "Full Stack", "ML", "AI"];

export default function ProjectsList({ projects }: { projects: Project[] }) {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter(project =>
        filter === "All" || project.category === filter
    );

    return (
        <div className="space-y-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center pb-8">
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        variant={filter === cat ? "default" : "outline"}
                        className={`rounded-full px-6 transition-all duration-300 ${filter === cat
                                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                                : "hover:bg-accent hover:text-accent-foreground"
                            }`}
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href={`/projects/${project.id}`} className="block h-full group">
                                <Card className="h-full flex flex-col overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
                                    <div className="aspect-video w-full overflow-hidden bg-muted relative">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-gray-400">
                                                <span className="text-4xl font-bold opacity-20">{project.title[0]}</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="text-white font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                View Details <ArrowUpRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>

                                    <CardHeader className="p-5">
                                        <div className="flex justify-between items-start gap-2">
                                            <h3 className="font-bold text-xl line-clamp-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                                                {project.category}
                                            </Badge>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="p-5 pt-0 flex-grow">
                                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech_stack?.slice(0, 3).map((tech) => (
                                                <span key={tech} className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.tech_stack && project.tech_stack.length > 3 && (
                                                <span className="text-xs text-muted-foreground px-2 py-1">+ {project.tech_stack.length - 3}</span>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                    <p>No projects found in this category.</p>
                    <Button variant="link" onClick={() => setFilter("All")}>View all projects</Button>
                </div>
            )}
        </div>
    );
}
