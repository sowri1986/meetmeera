import { Calendar, User, ArrowRight, MessageCircle, BookOpen, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Connecting through play - the beginning of my journey",
      excerpt: "Supporting parents and carers of autistic children matters deeply because many, like myself, start out unaware of what autism truly is. Often, even doctors need to conduct numerous tests before confidently confirming an autism diagnosis, which can be frustrating and confusing for families.",
      category: "Personal Journey",
      date: "2025-07-24",
      readTime: "5 min read",
      featured: true,
      slug: "connecting-through-play-beginning-of-journey"
    },
    {
      id: 2,
      title: "Turning Everyday Moments into Therapy",
      excerpt: "After reading my earlier blog, some of you might wonder, 'Is it really possible to get a autistic child to play in the park or even play together at home?' My answer is a confident yes! If your child isn't playing, it doesn't mean they don't want to, it often means they don't know how to play.",
      category: "Life Skills",
      date: "2025-08-07",
      readTime: "5 min read",
      featured: false,
      slug: "turning-everyday-moments-into-therapy"
    }
    ,
    {
      id: 3,
      title: "Healthy Eating Starts at Home",
      excerpt: "Healthy eating habits can be built at home through routines, gentle changes, and family modeling—start small, introduce variety, and use favorites wisely.",
      category: "Life Skills",
      date: "2025-08-18",
      readTime: "6 min read",
      featured: false,
      slug: "healthy-eating-starts-at-home"
    }
    ,
    {
      id: 4,
      title: "Teaching Grooming Skills to Our Neurodivergent Children: A Parent’s Journey",
      excerpt: "A patient, personalized approach to nail clipping and haircuts—what finally worked for us.",
      category: "Life Skills",
      date: "2025-08-28",
      readTime: "7 min read",
      featured: false,
      slug: "teaching-grooming-skills-neurodivergent-children-parents-journey"
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length, active: true },
    { name: "Personal Journey", count: blogPosts.filter(p => p.category === "Personal Journey").length, active: false },
    { name: "Life Skills", count: blogPosts.filter(p => p.category === "Life Skills").length, active: false }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sharing practical insights on autism support, inclusive education, and communication strategies 
            from both professional experience and personal journey as a parent.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center">
                <Heart className="h-5 w-5 text-accent mr-2" />
                Featured Posts
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="shadow-card border-border hover:shadow-floating transition-all duration-300 group cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-GB', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </div>
                      </div>
                      <CardTitle className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <BookOpen className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                        <Button variant="ghost" size="sm" className="group-hover:bg-primary-soft transition-colors">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center">
                <MessageCircle className="h-5 w-5 text-primary mr-2" />
                Recent Posts
              </h2>
              
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`}>
                    <Card className="shadow-card border-border hover:shadow-soft transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                          <div className="flex items-center space-x-4 mb-2 md:mb-0">
                            <Badge variant="outline">{post.category}</Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(post.date).toLocaleDateString('en-GB', { 
                                day: 'numeric', 
                                month: 'short', 
                                year: 'numeric' 
                              })}
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">{post.readTime}</div>
                        </div>
                        
                        <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <Button variant="ghost" size="sm" className="p-0 h-auto group-hover:text-primary transition-colors">
                          Continue reading
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* About */}
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="font-serif text-lg text-foreground">About This Blog</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  I share insights from my dual perspective as both a teaching assistant 
                  in special education and a parent of a neurodivergent child.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/about">Learn More About Me</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="font-serif text-lg text-foreground">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div 
                      key={category.name}
                      className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors ${
                        category.active 
                          ? 'bg-primary-soft text-primary font-medium' 
                          : 'hover:bg-muted text-muted-foreground'
                      }`}
                    >
                      <span className="text-sm">{category.name}</span>
                      <span className="text-xs">{category.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="shadow-card border-border bg-gradient-accent/10">
              <CardHeader>
                <CardTitle className="font-serif text-lg text-foreground">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions about autism support or want to share your experience? 
                  I'd love to hear from you.
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;