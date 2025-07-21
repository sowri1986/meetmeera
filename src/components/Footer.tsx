import { Heart, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
              About Meera
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Teaching assistant and autism support specialist dedicated to empowering 
              children with learning differences through communication, understanding, and inclusive practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About Me
                </a>
              </li>
              <li>
                <a href="/resume" className="text-muted-foreground hover:text-primary transition-smooth">
                  Professional Experience
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary transition-smooth">
                  Blog & Insights
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
              Connect
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                Perseid School, Morden, UK
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                Professional inquiries welcome
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-accent" /> for inclusive education
            <span className="mx-2">•</span>
            © {new Date().getFullYear()} Meera
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;