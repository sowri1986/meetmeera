import { GraduationCap, Heart, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            My Professional Journey
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A unique blend of professional expertise and personal experience in special education
          </p>
        </div>

        {/* Main Story */}
        <Card className="mb-12 shadow-card border-border">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-foreground flex items-center">
              <Heart className="h-6 w-6 text-accent mr-3" />
              My Story
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              As both a mother of a 6-year-old non-verbal child on the autism spectrum and a teaching 
              assistant with 2 years' experience in a UK SEND school, I offer a unique blend of 
              professional and personal expertise. This dual perspective has shaped my understanding 
              of the challenges and triumphs that families and educators face daily.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              I specialise in supporting children with severe communication challenges, working closely 
              with multidisciplinary teams on Education, Health and Care Plans. My approach is rooted 
              in empathy, evidence-based practices, and the belief that every child has the potential 
              to communicate and connect with the world around them.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I am motivated by a desire to empower young people with learning differences and am 
              currently completing a Level 3 Diploma in Supporting Teaching and Learning. Previously, 
              I earned a Masters and Bachelors in Commerce and have completed extensive training in 
              PECS, Autism Awareness, Safeguarding, PROACT-SCIPr-UK, and more.
            </p>
          </CardContent>
        </Card>

        {/* Key Areas */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-card border-border">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-foreground flex items-center">
                <GraduationCap className="h-5 w-5 text-primary mr-2" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Level 3 Diploma in Supporting Teaching and Learning (ongoing)</li>
                <li>• Master of Commerce, University of Madras</li>
                <li>• Bachelor of Commerce, University of Madras</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-foreground flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Teaching Assistant at Perseid School</li>
                <li>• Supporting 15+ neurodivergent children</li>
                <li>• 1:1 and 2:1 support specialist</li>
                <li>• Parent advocate and therapist</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-foreground flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                Specializations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>• PECS & Alternative Communication</li>
                <li>• Sensory Regulation Techniques</li>
                <li>• Behaviour Management</li>
                <li>• Inclusive Learning Practices</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Philosophy */}
        <Card className="shadow-card border-border bg-primary-soft/30">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-foreground text-center">
              My Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              "Every child deserves to be heard, understood, and valued. My role is to bridge 
              the gap between potential and expression, creating pathways for communication 
              and connection that honor each child's unique way of experiencing the world."
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;