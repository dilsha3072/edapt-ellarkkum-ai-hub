import { 
  Brain, BookOpen, FileText, Settings, Lightbulb, 
  Presentation, Video, Users, Target, Globe, Clock, Award 
} from "lucide-react";

export const SkillsMaster = () => {
  const skills = [
    { icon: Brain, title: "Prompt Engineering" },
    { icon: BookOpen, title: "Lesson Planning with AI" },
    { icon: FileText, title: "Teaching Material Creation" },
    { icon: Settings, title: "Assessment Automation" },
    { icon: Lightbulb, title: "Creative Teaching with AI" },
    { icon: Presentation, title: "Poster & Flyer Design" },
    { icon: Video, title: "AI Video Creation" },
    { icon: Presentation, title: "Presentation Skills" },
    { icon: Settings, title: "Administrative Efficiency" },
    { icon: FileText, title: "Report Card Automation" },
    { icon: Users, title: "Student Engagement Tools" },
    { icon: Target, title: "AI for Projects" },
    { icon: Globe, title: "Language & Global Awareness" },
    { icon: Clock, title: "Time Management & Productivity" },
    { icon: Award, title: "Exam & Career Preparation" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Skills You Will Master
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            By the end of this program, you will confidently master skills that make you a true AI-Powered Teacher
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group bg-card/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-soft hover:shadow-medium transition-all duration-300 text-center hover:-translate-y-1"
            >
              <div className="mb-3 p-2 rounded-full bg-primary/10 w-fit mx-auto">
                <skill.icon className="h-6 w-6 lg:h-8 lg:w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm lg:text-base leading-tight">
                {skill.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};