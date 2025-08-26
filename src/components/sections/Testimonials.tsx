import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "This training completely changed how I prepare lessons. What once took me 3 hours, I can now do in 30 minutes with AI.",
      name: "Anitha Teacher",
      school: "Higher Secondary School, Malappuram"
    },
    {
      quote: "Students are so much more engaged when I use AI tools in class. They love the visuals and interactive activities.",
      name: "Shaji Sir",
      school: "Govt. High School, Kozhikode"
    },
    {
      quote: "The Ellarkkum AI program gave me confidence. I can now create posters, videos, and lesson plans without depending on anyone.",
      name: "Fathima Teacher",
      school: "Thrissur"
    },
    {
      quote: "This is not just training, it's a movement. Every teacher must learn these skills to stay relevant in the AI era.",
      name: "Joseph Sir",
      school: "CBSE School, Kochi"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Snapshots from Our AI Teacher Movement
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            We have already empowered 15+ schools and trained 500+ teachers to become AI-powered educators
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 lg:h-5 lg:w-5 text-tertiary fill-current" 
                    />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground italic mb-6 text-sm lg:text-base leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm lg:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-xs lg:text-sm">
                      {testimonial.school}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};