import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Lightbulb, Award, Globe } from "lucide-react";

export const WhyMatters = () => {
  const reasons = [
    { 
      title: "Policy Push", 
      desc: "NEP 2020 places AI at the center of education", 
      icon: FileText,
      color: "text-primary" 
    },
    { 
      title: "Student Reality", 
      desc: "Students use AI daily; teachers must lead the way", 
      icon: Users,
      color: "text-secondary" 
    },
    { 
      title: "Teaching Advantage", 
      desc: "AI reduces planning time, boosts creativity, personalizes learning", 
      icon: Lightbulb,
      color: "text-tertiary" 
    },
    { 
      title: "Career Impact", 
      desc: "Future-ready teachers gain promotions and recognition", 
      icon: Award,
      color: "text-primary" 
    },
    { 
      title: "Global Trend", 
      desc: "Educators worldwide are mastering AI. India's teachers must be at the forefront", 
      icon: Globe,
      color: "text-secondary" 
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why This Program Matters Right Now?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Today's students are growing up in an AI-first world. Unless teachers embrace AI right now, 
            the gap between what students know and what teachers can guide them with will only widen.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((item, index) => (
            <Card 
              key={index} 
              className="group border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-muted/50 w-fit">
                  <item.icon className={`h-8 w-8 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <CardTitle className={`${item.color} text-lg lg:text-xl`}>
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};