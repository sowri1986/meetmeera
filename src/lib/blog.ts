import matter from 'gray-matter';

export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    featured: boolean;
    author: string;
    content: string;
}

export const getAllPosts = (): BlogPost[] => {
    const modules = import.meta.glob('/src/content/blog/*.md', { query: '?raw', eager: true, import: 'default' });

    const posts: BlogPost[] = Object.entries(modules).map(([path, rawContent]) => {
        const { data, content } = matter(rawContent as string);
        return {
            ...data,
            content,
        } as BlogPost;
    });

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
    const posts = getAllPosts();
    return posts.find((post) => post.slug === slug);
};
