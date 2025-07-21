import { Calendar, User, ArrowRight, MessageCircle, BookOpen, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding PECS: A Parent's Journey to Communication",
      excerpt: "How Picture Exchange Communication System transformed my child's ability to express needs and connect with family. A personal and professional perspective on implementing PECS at home.",
      category: "Communication",
      date: "2024-01-15",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Creating Sensory Corners at Home: DIY Solutions That Work",
      excerpt: "Simple, budget-friendly ways to create calming sensory spaces using household items. Practical tips from both classroom and home experience.",
      category: "Sensory Support",
      date: "2024-01-10",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 3,
      title: "Debunking Autism Myths: Facts Every Educator Should Know",
      excerpt: "Addressing common misconceptions about autism and providing evidence-based information to support better understanding in educational settings.",
      category: "Autism Awareness",
      date: "2024-01-05",
      readTime: "10 min read",
      featured: true
    },
    {
      id: 4,
      title: "Colourful Semantics in Practice: Building Sentence Structure",
      excerpt: "Step-by-step guide to implementing Colourful Semantics to support language development, with real examples from classroom experience.",
      category: "Language Development",
      date: "2023-12-28",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 5,
      title: "Parent-Educator Collaboration: Building Bridges for Success",
      excerpt: "How to create effective partnerships between home and school to support children with special educational needs. Communication strategies that work.",
      category: "Collaboration",
      date: "2023-12-20",
      readTime: "9 min read",
      featured: false
    },
    {
      id: 6,
      title: "Zones of Regulation: Helping Children Navigate Emotions",
      excerpt: "Practical implementation of the Zones of Regulation framework in both classroom and home settings to support emotional self-regulation.",
      category: "Behavior Support",
      date: "2023-12-15",
      readTime: "8 min read",
      featured: false
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length, active: true },
    { name: "Communication", count: 2, active: false },
    { name: "Sensory Support", count: 1, active: false },
    { name: "Autism Awareness", count: 1, active: false },
    { name: "Language Development", count: 1, active: false },
    { name: "Collaboration", count: 1, active: false }
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
                  <Card key={post.id} className="shadow-card border-border hover:shadow-floating transition-all duration-300 group">
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
                  <Card key={post.id} className="shadow-card border-border hover:shadow-soft transition-all duration-300 group">
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