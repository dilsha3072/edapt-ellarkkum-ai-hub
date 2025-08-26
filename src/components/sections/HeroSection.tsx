import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, Star, Users, Award, Zap, Sparkles, TrendingUp, Globe, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-ai-teachers.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        {/* Floating orbs with different animations */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl animate-float-delay-2"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-float-delay-3"></div>
        <div className="absolute top-1/4 left-1/3 w-56 h-56 bg-yellow-500/10 rounded-full blur-3xl animate-float-delay-4"></div>
        
        {/* Central gradient orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Enhanced floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        {/* Enhanced animated lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-line-sweep"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-line-sweep-delay"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent animate-line-sweep-delay-2"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-10 right-10 w-16 h-16 border border-blue-400/20 rotate-45 animate-float-delay-5"></div>
        <div className="absolute bottom-10 left-10 w-12 h-12 border border-purple-400/20 rounded-full animate-float-delay-6"></div>
        <div className="absolute top-1/3 left-10 w-8 h-8 border border-pink-400/20 rotate-12 animate-float-delay-7"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-white space-y-8 max-w-2xl">
            {/* Enhanced Badge with sparkles */}
            <div className="flex items-center gap-3 animate-fade-in-up">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105">
                <Sparkles className="w-3 h-3 mr-1 animate-spin group-hover:animate-pulse" />
                #1 AI Education Program in Kerala
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </Badge>
            </div>

            {/* Enhanced Main Headlines */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-fade-in-up animate-text-gradient hover:scale-105 transition-transform duration-500 cursor-default">
                Edapt
              </h1>
                <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-300 animate-fade-in-up delay-200 hover:text-blue-200 transition-colors duration-300">
                'എല്ലാർക്കും AI' Presents
              </div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight animate-fade-in-up delay-300 animate-text-gradient hover:scale-105 transition-transform duration-500 cursor-default">
                AI For Every Teacher
              </h2>
            </div>
            
            {/* Enhanced Description */}
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-xl animate-fade-in-up delay-400 hover:text-white transition-colors duration-300">
              Transform education with cutting-edge AI technology. Every student deserves an AI-powered teacher.
            </p>

            {/* Enhanced Stats with better animations */}
            <div className="grid grid-cols-3 gap-6 py-6 animate-fade-in-up delay-500">
              <div className="text-center group cursor-pointer">
                <div className="text-2xl font-bold text-blue-300 group-hover:scale-110 transition-transform duration-300 group-hover:text-blue-200">500+</div>
                <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">Teachers Trained</div>
                <div className="w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl font-bold text-purple-300 group-hover:scale-110 transition-transform duration-300 group-hover:text-purple-200">50+</div>
                <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">Schools Partnered</div>
                <div className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl font-bold text-pink-300 group-hover:scale-110 transition-transform duration-300 group-hover:text-pink-200">95%</div>
                <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">Success Rate</div>
                <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 to-transparent mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up delay-600">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-10 py-7 font-bold hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/25 glow-on-hover relative overflow-hidden group"
              >
                <Zap className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Get Started Today
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/15 text-lg px-10 py-7 font-semibold hover:scale-105 transition-all duration-300 group backdrop-blur-sm"
              >
                <Play className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Watch Demo
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-col gap-4 pt-8 animate-fade-in-up delay-700">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/90 text-sm font-medium">Live Online Classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <span className="text-white/90 text-sm font-medium">Expert Instructors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                  <span className="text-white/90 text-sm font-medium">24/7 Support</span>
                </div>
              </div>
              
              {/* Enhanced Social Proof */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white/20 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-white/80 text-sm">
                  <span className="font-semibold text-white">500+</span> teachers already enrolled
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Right Side - Images and Cards */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Enhanced Main Hero Image */}
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src={heroImage} 
                alt="AI-powered teachers learning in Kerala" 
                className="relative rounded-3xl shadow-2xl w-full max-w-2xl mx-auto transform group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-5 border border-white/20 animate-float group-hover:bg-gradient-to-br group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <Users className="w-5 h-5 text-blue-300" />
                  <span className="text-white text-sm font-semibold">Live Session</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-5 border border-white/20 animate-float-delay group-hover:bg-gradient-to-br group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <Award className="w-5 h-5 text-purple-300" />
                  <span className="text-white text-sm font-semibold">Certified</span>
                </div>
              </div>
              
              {/* Enhanced floating sparkle elements */}
              <div className="absolute top-1/4 -left-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full p-3 border border-white/10 animate-float-delay-2 group-hover:bg-gradient-to-br group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-500 shadow-lg">
                <Sparkles className="w-5 h-5 text-cyan-300" />
              </div>
              
              <div className="absolute bottom-1/4 -right-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full p-3 border border-white/10 animate-float-delay-3 group-hover:bg-gradient-to-br group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-all duration-500 shadow-lg">
                <Zap className="w-5 h-5 text-pink-300" />
              </div>
              
              {/* New floating achievement badge */}
              <div className="absolute top-1/2 -right-8 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-xl p-4 border border-white/20 animate-float-delay-4 group-hover:bg-gradient-to-br group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-500 shadow-xl">
                <div className="text-center">
                  <div className="text-yellow-400 text-lg font-bold">95%</div>
                  <div className="text-white text-xs">Success Rate</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Feature Cards */}
            <div className="grid grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-blue-500/15 to-purple-500/15 backdrop-blur-xl border border-blue-400/30 hover:border-blue-400/50 transition-all duration-500 group hover:scale-110 cursor-pointer relative overflow-hidden shadow-2xl hover:shadow-blue-500/30">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Zap className="w-8 h-8 text-blue-200 group-hover:text-blue-100 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-3 group-hover:text-blue-200 transition-colors duration-300">AI-Powered Learning</h3>
                  <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300 leading-relaxed">Advanced AI technology for personalized education experiences</p>
                  <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-500/15 to-pink-500/15 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/50 transition-all duration-500 group hover:scale-110 cursor-pointer relative overflow-hidden shadow-2xl hover:shadow-purple-500/30">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Award className="w-8 h-8 text-purple-200 group-hover:text-purple-100 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-3 group-hover:text-purple-200 transition-colors duration-300">Certification</h3>
                  <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300 leading-relaxed">Industry-recognized certificates and professional credentials</p>
                  <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-pink-500/15 to-cyan-500/15 backdrop-blur-xl border border-pink-400/30 hover:border-pink-400/50 transition-all duration-500 group hover:scale-110 cursor-pointer relative overflow-hidden shadow-2xl hover:shadow-pink-500/30">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500/40 to-cyan-500/40 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <TrendingUp className="w-8 h-8 text-pink-200 group-hover:text-pink-100 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-3 group-hover:text-pink-200 transition-colors duration-300">Career Growth</h3>
                  <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300 leading-relaxed">Continuous learning and professional advancement opportunities</p>
                  <div className="w-full h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </CardContent>
              </Card>
              </div>
            </div>
          </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300 group">
        <div className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center hover:border-white/60 transition-colors duration-300 bg-white/5 backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-gradient-to-b from-white/60 to-white/30 rounded-full mt-3 animate-pulse group-hover:animate-bounce"></div>
        </div>
        <div className="text-center mt-3">
          <span className="text-white/60 text-xs font-medium group-hover:text-white/80 transition-colors duration-300">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};