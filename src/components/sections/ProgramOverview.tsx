import { Card, CardContent } from "@/components/ui/card";
import transformationImage from "@/assets/ai-transformation.jpg";

export const ProgramOverview = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              A Groundbreaking Initiative by{" "}
              <span className="text-primary">Edapt</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              A groundbreaking initiative by Edapt to transform teachers with AI skills and build a generation ready for an AI-first world. 
              Launched in 2023, Ellarkkum AI is Edapt's flagship mission to establish Kerala as India's first AI-literate state.
            </p>
            
            <Card className="border-none shadow-soft bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-primary">
                  A Mission with a Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The role of a teacher has never been more critical than in today's AI-driven world. 
                  After multiple successful initiatives, the focus now turns to teachers — empowering them 
                  with AI-driven skills and tools to transform classrooms.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <img 
              src={transformationImage} 
              alt="AI transformation in education" 
              className="rounded-2xl shadow-medium w-full hover:shadow-strong transition-shadow duration-300"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};