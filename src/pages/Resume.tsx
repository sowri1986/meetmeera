import { GraduationCap, Briefcase, Award, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Resume = () => {
  const education = [
    {
      degree: "Level 3 Diploma in Supporting Teaching and Learning in Schools",
      institution: "South Thames College",
      period: "Completing June 2025",
      description: "Comprehensive training in educational support, inclusive practices, and working with children with special educational needs."
    },
    {
      degree: "Master of Commerce",
      institution: "University of Madras",
      period: "2014–2016",
      description: "Advanced studies in commerce with focus on analytical and organizational skills."
    },
    {
      degree: "Bachelor of Commerce",
      institution: "University of Madras", 
      period: "2008–2011",
      description: "Foundation in business principles, accounting, and management."
    }
  ];

  const experience = [
    {
      title: "Teaching Assistant",
      organization: "Perseid School, Morden",
      period: "September 2023–present",
      responsibilities: [
        "Supported teaching 15 neuro-divergent children with diverse learning needs",
        "Used PECS, Grid 3 App, and colourful semantics to build communication skills",
        "Facilitated behaviour management using Zones of Regulation and sensory rooms",
        "Ran physical, creative, and daily living skills activities",
        "Helped with safeguarding and health reporting protocols",
        "Worked in 1:1 and 2:1 support scenarios with specialized attention",
        "Provided detailed feedback on pupil progress to multidisciplinary teams"
      ]
    },
    {
      title: "Personal Therapy and Support",
      organization: "Parent and Home Therapist",
      period: "Ongoing",
      responsibilities: [
        "Developed and implemented fine and gross motor skills activities at home",
        "Integrated household tasks and yoga for independence building",
        "Designed social stories and custom sensory spaces",
        "Built PECS communication system tailored to child's specific needs",
        "Collaborated with school teams to ensure consistency across environments"
      ]
    }
  ];

  const skills = [
    { category: "Communication", items: ["PECS", "Grid 3 App", "Colourful Semantics", "Intensive Interaction"] },
    { category: "Behaviour Support", items: ["Zones of Regulation", "De-escalation techniques", "Sensory regulation", "PROACT-SCIPr-UK"] },
    { category: "Educational", items: ["Activity planning", "Curriculum support", "1:1 & 2:1 support", "Progress tracking"] },
    { category: "Technical", items: ["Microsoft Office Suite", "CPOMS", "Digital communication tools", "GDPR compliance"] }
  ];

  const certifications = [
    "Awareness in Autism (Education, Causes, Diagnosis, Living with Autism)",
    "Attention Autism",
    "Cybersecurity & Online Safety for Teaching Staff",
    "Picture Exchange Communication System (PECS)",
    "Sensory Learning",
    "Intensive Interaction",
    "Vision and Hearing Impairments",
    "PROACT-SCIPr-UK",
    "Moving and Handling",
    "GDPR Compliance"
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Resume
          </h1>
          <p className="text-xl text-muted-foreground">
            Dedicated to empowering children through inclusive education and communication
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education */}
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-foreground flex items-center">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold text-foreground text-lg">{edu.degree}</h3>
                    <p className="text-accent font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-foreground flex items-center">
                  <Briefcase className="h-6 w-6 text-primary mr-3" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold text-foreground text-lg">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.organization}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-foreground flex items-center">
                  <Award className="h-5 w-5 text-primary mr-2" />
                  Core Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-foreground mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-foreground">
                  Trainings & Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;