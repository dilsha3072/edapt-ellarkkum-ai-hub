import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const LearningPath = () => {
  const learningPath = [
    {
      session: 1,
      title: "Introduction to the Program",
      topics: "Program overview & mission, Ellarkkum AI vision, gamification & certification flow",
      skills: "Understand program goals, clarity on deliverables & journey"
    },
    {
      session: 2,
      title: "Introduction to Technology & AI",
      topics: "AI basics, Generative AI, popular tools in text, image, video & audio",
      skills: "Understand AI evolution, identify key tools, recognize real-world impact"
    },
    {
      session: 3,
      title: "Introduction to ChatGPT",
      topics: "Account setup, interface, prompt engineering tips for teachers",
      skills: "Create ChatGPT account, navigate interface, write effective prompts"
    },
    {
      session: 4,
      title: "ChatGPT for Teaching Tasks",
      topics: "Lesson planning, teaching materials, student engagement, assessments",
      skills: "Design lesson plans faster, create interactive activities"
    },
    {
      session: 5,
      title: "Creative Teaching with AI",
      topics: "Creative classroom ideas, storylines, scripts, AI tools for projects",
      skills: "Make lessons engaging, create stories and activities students love"
    },
    {
      session: 6,
      title: "Poster Creation with AI",
      topics: "Content preparation, copywriting, poster design, branding & logos",
      skills: "Write clear content, create attractive posters in minutes"
    },
    {
      session: 7,
      title: "AI Avatar Video Creation",
      topics: "Avatar tools, talking videos, script, voice & expressions",
      skills: "Create avatar videos for lessons, convert text to video"
    },
    {
      session: 8,
      title: "AI for Presentation & Slides",
      topics: "Content creation, slide layouts, design, fonts & visuals",
      skills: "Generate slide content quickly, design professional presentations"
    },
    {
      session: 9,
      title: "AI for Administrative Support",
      topics: "Draft emails, notices, checklists, report card remarks & schedules",
      skills: "Write professional emails, create checklists, automate remarks"
    },
    {
      session: 10,
      title: "AI for Personal & Professional Growth",
      topics: "Exam preparation, staying updated, learning new skills, continuous growth",
      skills: "Use AI for exam prep, stay current, learn faster with AI guidance"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Path to Becoming an{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI-POWERED Teacher
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {learningPath.map((session, index) => (
            <Card 
              key={index} 
              className="group border-l-4 border-l-primary shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <Badge 
                    variant="secondary" 
                    className="text-primary bg-primary/10 border-primary/20 px-3 py-1"
                  >
                    Live {session.session}
                  </Badge>
                </div>
                <CardTitle className="text-lg lg:text-xl group-hover:text-primary transition-colors duration-300">
                  {session.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-primary">Topics:</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {session.topics}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-secondary">Skills Learned:</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {session.skills}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};