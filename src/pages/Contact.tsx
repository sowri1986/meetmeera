import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    role: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      role: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactReasons = [
    {
      icon: MessageCircle,
      title: "Professional Collaboration",
      description: "Connect about educational strategies, training opportunities, or professional partnerships"
    },
    {
      icon: Users,
      title: "Parent Support",
      description: "Seeking guidance, sharing experiences, or discussing autism support strategies"
    },
    {
      icon: BookOpen,
      title: "Speaking Engagements",
      description: "Invitations for workshops, presentations, or educational events"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a parent seeking guidance, an educator looking for collaboration, 
            or someone interested in autism support and inclusive practices, I'd love to connect with you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-foreground flex items-center">
                  <Send className="h-6 w-6 text-primary mr-3" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="role" className="text-foreground font-medium">
                        I am a...
                      </Label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Select your role</option>
                        <option value="parent">Parent</option>
                        <option value="teacher">Teacher/Educator</option>
                        <option value="therapist">Therapist</option>
                        <option value="student">Student</option>
                        <option value="researcher">Researcher</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-foreground font-medium">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="Brief subject line"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="mt-1"
                      placeholder="Please share your questions, thoughts, or how I can help you..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Reasons */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Perseid School, Morden, UK</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">Professional inquiries welcome</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-sm text-muted-foreground">Usually within 24-48 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Connect */}
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-foreground">
                  Why Connect With Me?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactReasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 bg-primary-soft rounded-lg flex-shrink-0">
                      <reason.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="shadow-card border-border bg-accent-soft/30">
              <CardContent className="p-6 text-center">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Let's Build Inclusive Communities
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Together, we can create more understanding, supportive environments 
                  for children with diverse learning needs. Every conversation is a step 
                  toward better inclusion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;