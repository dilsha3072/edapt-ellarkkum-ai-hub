import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Globe as Web } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-secondary to-primary-glow relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Register Now – Limited Seats!
        </h2>
        
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Become part of India's first large-scale movement to create AI-Powered Teachers
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 max-w-2xl mx-auto mb-8 hover:bg-white/20 transition-colors duration-300">
          <p className="text-base lg:text-lg mb-6 leading-relaxed">
            Though the program is worth{" "}
            <span className="font-bold text-tertiary text-xl">₹6,000</span>, 
            you get it{" "}
            <span className="font-bold text-tertiary text-xl">100% FREE</span>{" "}
            under the Ellarkkum AI mission.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm lg:text-base">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Phone className="h-4 w-4 lg:h-5 lg:w-5" />
              <span>Contact: [Your Number]</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Web className="h-4 w-4 lg:h-5 lg:w-5" />
              <span>Website: [Your Website]</span>
            </div>
          </div>
        </div>
        
        <Button 
          size="lg" 
          variant="secondary" 
          className="text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-6 font-bold hover:scale-105 transition-transform duration-300 mb-6"
        >
          Register Today
          <ArrowRight className="ml-3 h-6 w-6 lg:h-7 lg:w-7" />
        </Button>
        
        <p className="text-white/80 text-sm lg:text-base">
          Don't miss this opportunity — limited seats available per school
        </p>
      </div>
    </section>
  );
};