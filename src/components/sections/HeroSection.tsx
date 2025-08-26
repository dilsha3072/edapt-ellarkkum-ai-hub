import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ai-teachers.jpg";
import qrImage from "@/assets/qr-placeholder.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-secondary to-primary-glow overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-white space-y-8 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                Edapt
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-glow">
                'എല്ലാർക്കും AI' Presents
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-tertiary bg-clip-text text-transparent leading-tight">
                AI For Every Teacher
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
              Every student deserves an AI-powered teacher
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg sm:text-xl px-6 sm:px-8 py-4 font-semibold hover:scale-105 transition-transform duration-300"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
              
              <div className="flex flex-col gap-2 text-sm text-white/80">
                <span className="flex items-center gap-2">
                  📞 Contact: [Phone Number]
                </span>
                <span className="flex items-center gap-2">
                  🌐 Website: [URL]
                </span>
              </div>
            </div>
          </div>
          
          {/* Images */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI-powered teachers learning in Kerala" 
                className="rounded-2xl shadow-2xl w-full max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
                <img 
                  src={qrImage} 
                  alt="QR Code for school registration" 
                  className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-lg mb-3"
                />
                <p className="text-white/90 text-sm font-medium">Scan to Register</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};