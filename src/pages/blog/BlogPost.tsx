import { ArrowLeft, Calendar, BookOpen, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlogPost2 from "./BlogPost2";
import ReactMarkdown from "react-markdown";
import blogData from "../../data/blog-posts.json";

const BlogPost = () => {
  const { slug } = useParams();
  const posts = blogData.posts;



  const post = posts.find(p => p.slug === slug);
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Blog post not found.</h2>
        <Button asChild variant="ghost" className="ml-4">
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
            <Link to="/blog" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center text-sm text-muted-foreground">
              <User className="h-4 w-4 mr-2" />
              By {post.author}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <ReactMarkdown
              components={{
                // Custom renderer for headings to match current style
                h3: ({ node, ...props }) => <h3 className="text-2xl font-semibold text-foreground mb-4" {...props} />,
                p: ({ node, ...props }) => <p className="text-lg leading-relaxed mb-6" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc pl-6 text-lg leading-relaxed mb-6" {...props} />
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Footer CTA */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <h3 className="font-serif text-xl font-bold text-foreground mb-4">
            Want to share your experience or ask questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            I'd love to hear from you and connect with other parents and carers on similar journeys.
          </p>
          <Button asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;