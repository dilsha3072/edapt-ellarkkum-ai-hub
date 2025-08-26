import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Clock, Target, Zap, Award, MessageCircle, Trophy,
  Globe, Users, CheckCircle, Star
} from "lucide-react";

export const KeyFeatures = () => {
  const features = [
    { icon: Clock, title: "10 Live Online Classes (1 Hour Each)", description: "Learn directly from expert instructors" },
    { icon: Target, title: "Hands-on Activities & Assessments", description: "Apply every concept in real classroom scenarios" },
    { icon: Zap, title: "Future-Ready Skills", description: "Learn skills that make you more valuable in your career" },
    { icon: Award, title: "Certificate of Completion", description: "Showcase your achievement as an AI-Powered Teacher" },
    { icon: MessageCircle, title: "WhatsApp Group Support", description: "Get real-time help and connect with peers" },
    { icon: Trophy, title: "Leaderboard & Gamified Learning", description: "Stay motivated through friendly competition" },
    { icon: Globe, title: "Daily AI Updates & Active Community", description: "Never miss the latest updates in AI and Education" },
    { icon: Users, title: "Networking Across Kerala", description: "Build lasting connections with like-minded teachers" },
    { icon: CheckCircle, title: "Flexibility & Convenience", description: "Attend classes online, from anywhere" },
    { icon: Star, title: "Exclusive Community Challenges", description: "Fun, task-based learning to apply AI in teaching" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Key Features of the Program
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 rounded-full bg-primary/10 w-fit">
                  <feature.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-base lg:text-lg leading-tight">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};