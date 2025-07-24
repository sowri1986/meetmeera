import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Connect with me on LinkedIn for professional inquiries and collaboration opportunities.
        </p>
        
        <Button 
          asChild 
          size="lg" 
          className="bg-primary hover:bg-primary/90"
        >
          <a 
            href="https://www.linkedin.com/in/meerabr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            Connect on LinkedIn
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Contact;