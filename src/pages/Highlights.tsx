import { Star, Users, MessageSquare, Target, Heart, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Highlights = () => {
  const achievements = [
    {
      icon: MessageSquare,
      title: "Sensory Exploration with Grid 3",
      description: "Set up a sensory exploration adventure using Grid 3, enabling a nonverbal pupil to request preferred activities using an iPad.",
      impact: "Student gained independence in expressing preferences and initiating activities",
      category: "Communication Technology"
    },
    {
      icon: BookOpen,
      title: "Colourful Semantics Success",
      description: "Supported a child to develop expressive language through Colourful Semantics, progressing from single words to structured sentences.",
      impact: "Significant improvement in sentence construction and language comprehension",
      category: "Language Development"
    },
    {
      icon: Users,
      title: "Social Stories Implementation",
      description: "Implemented social stories and visual sequences to reduce anxiety and improve task sequencing for multiple students.",
      impact: "Reduced behavioral incidents and increased task completion rates",
      category: "Behavioral Support"
    },
    {
      icon: Target,
      title: "PECS Problem-Solving",
      description: "Used PECS to solve behavioural challenges, successfully redirecting unsafe outdoor behaviour to using a gate appropriately.",
      impact: "Enhanced safety awareness and appropriate environment navigation",
      category: "Safety & Behavior"
    },
    {
      icon: Heart,
      title: "Home-Based Motor Skills",
      description: "Initiated fine and gross motor skills routines at home that translated to improved independence for her own child.",
      impact: "Increased self-care abilities and confidence in daily activities",
      category: "Personal Development"
    },
    {
      icon: Star,
      title: "Holistic Communication Approach",
      description: "Developed individualized communication strategies combining multiple modalities for each child's unique needs.",
      impact: "Improved overall communication outcomes across diverse learning profiles",
      category: "Individualized Support"
    }
  ];

  const stats = [
    { number: "15+", label: "Children Supported", description: "Neurodivergent students receiving individualized support" },
    { number: "2+", label: "Years Experience", description: "Dedicated service in special education" },
    { number: "10+", label: "Certifications", description: "Professional training programs completed" },
    { number: "100%", label: "Commitment", description: "To inclusive and empowering education" }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Highlights & Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Success stories and case studies that demonstrate the power of individualized, 
            empathetic approaches to supporting children with diverse learning needs.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-card border-border bg-gradient-secondary">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
            Success Stories & Case Studies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-card border-border hover:shadow-floating transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-start space-x-3">
                    <div className="p-2 bg-primary-soft rounded-lg">
                      <achievement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg text-foreground">{achievement.title}</h3>
                      <span className="text-sm text-accent font-medium">{achievement.category}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="bg-success/10 border border-success/20 rounded-lg p-3">
                    <p className="text-sm font-medium text-success-foreground">
                      <strong>Impact:</strong> {achievement.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <Card className="shadow-card border-border bg-gradient-accent/10">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-foreground text-center">
              Approach & Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Empathy-Driven</h3>
                <p className="text-sm text-muted-foreground">
                  Understanding each child's unique perspective and needs
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Evidence-Based</h3>
                <p className="text-sm text-muted-foreground">
                  Using proven methodologies and continuous assessment
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Collaborative</h3>
                <p className="text-sm text-muted-foreground">
                  Working with families, teams, and communities
                </p>
              </div>
            </div>
            
            <blockquote className="text-center italic text-lg text-muted-foreground border-l-4 border-primary pl-6 ml-6">
              "Success is measured not just in achievements, but in the confidence, 
              joy, and sense of belonging that each child develops along their unique journey."
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Highlights;