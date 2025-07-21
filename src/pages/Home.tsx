import { ArrowRight, Heart, Users, BookOpen, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: "Personal Experience",
      description: "Mother of a wonderful neurodivergent child, bringing firsthand understanding to professional practice."
    },
    {
      icon: Users,
      title: "Professional Expertise",
      description: "2+ years as a teaching assistant at Perseid School, supporting children with diverse learning needs."
    },
    {
      icon: BookOpen,
      title: "Evidence-Based Approach",
      description: "Specialized training in PECS, Autism Awareness, and inclusive communication strategies."
    },
    {
      icon: MessageCircle,
      title: "Communication Focus",
      description: "Helping children find their voices through understanding, empathy, and practical support."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Empowering Voices,
            <br />
            <span className="text-primary">Building Connections</span>
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              I am a teaching assistant and parent of a wonderful, neurodivergent child. 
              My passion is helping children find their voices, express needs, and connect 
              with the world through understanding, empathy, and practical support. I bring 
              a holistic approach to communication barriers and am committed to both 
              classroom and therapeutic progress.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/about">
                Learn About My Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bridging Professional Excellence with Personal Understanding
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Combining years of professional experience with the unique insights 
              that come from being both an educator and a parent of a child on the autism spectrum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary-soft rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Connect?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a parent seeking guidance, an educator looking for insights, 
            or someone interested in inclusive practices, I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/blog">
                Read My Blog
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/highlights">
                View Success Stories
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;