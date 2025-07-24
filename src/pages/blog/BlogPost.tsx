import { ArrowLeft, Calendar, BookOpen, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BlogPost = () => {
  const { slug } = useParams();

  // In a real app, this would fetch the blog post by slug
  const post = {
    title: "Connecting through play - the beginning of my journey",
    excerpt: "Supporing parents and carers of autistic children matters deeply because many, like myself, start out unaware of what autism truly is. Often, even doctors need to conduct numerous tests before confidently confirming an autism diagnosis, which can be frustrating and confusing for families.",
    category: "Personal Journey",
    date: "2025-07-24",
    readTime: "5 min read",
    author: "Meera",
    content: `
      <p class="text-lg leading-relaxed mb-6">
      
 Parents may feel overwhelmed when their child doesn’t respond to their name, shows repetitive behaviors, avoids eye contact, or doesn’t engage with other children, especially if they haven’t encountered the term "autism" before. Learning about autism can bring heartbreak as parents worry about their child’s current challenges and future well-being, leading to anxiety and distress. Sometimes we need to make big decisions for the children’s well-being. These decisions can range from changing them to the suitable special education, choosing the right support strategies to even moving to a new country if required like we did. Parents and carers must navigate these difficult emotions, build understanding, find hope and effective ways to support their children’s growth and happiness.
</p>

<p class="text-lg leading-relaxed mb-6">
In today’s blog, I want to share what parents can do immediately after their child has been identified as autistic.
</p>

<p class="text-lg leading-relaxed mb-6">
If you’re reading this, it’s likely you’ve recognized autism in your child. There are many interventions available such as Applied Behavior Analysis (ABA), Speech and Language Therapy, Occupational Therapy, Physical Therapy, Educational Programs, Augmentative and Alternative Communication (AAC), Social Skills Training, Sensory Integration Therapy, and more. It’s easy to feel overwhelmed wondering where to begin and which path to follow.
</p>

<p class="text-lg leading-relaxed mb-6">
My suggestion is simple: take time to sit, play, and enter your child’s world instead of rushing to therapy centres. Remember, your child has their whole life ahead to attend sessions. Just like our parents or grandparents sometimes started school late, young autistic children need time to play and connect with you, their siblings, and in the outdoors without pressure.
</p>

<p class="text-lg leading-relaxed mb-6">
I understand that outings like going to the park can be overwhelming for children, parents, and others. That’s why I take my son to the park during quiet times, like early mornings or late evenings. There’s more space, less crowd, and no judgment. He can explore freely such as running, climbing, or simply resting. For example, near our home is a busy ramp. When I noticed it emptied after 9 PM in summer, I began taking my son there. We run up and down the ramp together, slide, and relax. Moments like these are exactly what young autistic children need.
Throughout this shared play, I made eye contact with my son, he joined in with me, initiated sliding, and followed my lead when it was time to go home. This is the connection all parents hope for and often the reason we reach out to therapists.
</p>

<p class="text-lg leading-relaxed mb-6">
In short, alongside professional therapies, never underestimate the power of simple, loving play. It builds bonds, communication, and trust foundations that support every step of your child’s journey.
</p>

<p class="text-lg leading-relaxed mb-6">
Follow my blog for more experiences from a Special Mom and special educator.

      
      
      </p>
      
         `
  };

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
          <div 
            className="prose prose-lg max-w-none text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
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