import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Users, 
  BookOpen, 
  Award, 
  MessageCircle, 
  Trophy,
  Globe,
  Zap,
  Clock,
  Target,
  Lightbulb,
  FileText,
  Video,
  Presentation,
  Settings,
  Calendar,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Globe as Web
} from "lucide-react";
import heroImage from "@/assets/hero-ai-teachers.jpg";
import transformationImage from "@/assets/ai-transformation.jpg";
import qrImage from "@/assets/qr-placeholder.jpg";
import certificateImage from "@/assets/certificate-template.jpg";

const Index = () => {
  const keyFeatures = [
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

  const aiTools = [
    "ChatGPT", "Gemini", "Claude", "Perplexity", "Ideogram", "Gamma",
    "Canva", "ElevenLabs", "Curipod", "NotebookLM", "HeyGen", "Suno AI", "Google AI Studio"
  ];

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

  const registrationSteps = [
    { step: 1, title: "Register", description: "Fill the registration form shared with your school" },
    { step: 2, title: "Verification & Group Access", description: "Once verified, you'll be added to the official WhatsApp group" },
    { step: 3, title: "Course Access & Materials", description: "Get all program details, class links, and resources directly in the group" },
    { step: 4, title: "Learn, Participate & Get Certified", description: "Attend live sessions, complete tasks, join activities, and receive your certificate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-secondary to-primary-glow overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-white space-y-8">
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-bold">
                Edapt
              </h1>
              <div className="text-2xl lg:text-3xl font-semibold text-primary-glow">
                'എല്ലാർക്കും AI' Presents
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-tertiary bg-clip-text text-transparent">
                AI For Every Teacher
              </h2>
            </div>
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl">
              Every student deserves an AI-powered teacher
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Button size="lg" variant="secondary" className="text-xl px-8 py-4 font-semibold">
                Register Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <div className="flex flex-col text-sm text-white/80">
                <span>📞 Contact: [Phone Number]</span>
                <span>🌐 Website: [URL]</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 space-y-6">
            <img 
              src={heroImage} 
              alt="AI-powered teachers learning in Kerala" 
              className="rounded-2xl shadow-2xl w-full max-w-2xl mx-auto"
            />
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <img 
                  src={qrImage} 
                  alt="QR Code for school registration" 
                  className="w-32 h-32 mx-auto rounded-lg mb-2"
                />
                <p className="text-white/80 text-sm">Scan to Register</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-gradient-to-r from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                A Groundbreaking Initiative by <span className="text-primary">Edapt</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A groundbreaking initiative by Edapt to transform teachers with AI skills and build a generation ready for an AI-first world. 
                Launched in 2023, Ellarkkum AI is Edapt's flagship mission to establish Kerala as India's first AI-literate state.
              </p>
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="text-2xl font-semibold mb-4 text-primary">A Mission with a Vision</h3>
                <p className="text-muted-foreground">
                  The role of a teacher has never been more critical than in today's AI-driven world. 
                  After multiple successful initiatives, the focus now turns to teachers — empowering them 
                  with AI-driven skills and tools to transform classrooms.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={transformationImage} 
                alt="AI transformation in education" 
                className="rounded-2xl shadow-medium w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why This Program Matters */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why This Program Matters Right Now?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Today's students are growing up in an AI-first world. Unless teachers embrace AI right now, 
              the gap between what students know and what teachers can guide them with will only widen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Policy Push", desc: "NEP 2020 places AI at the center of education", icon: FileText },
              { title: "Student Reality", desc: "Students use AI daily; teachers must lead the way", icon: Users },
              { title: "Teaching Advantage", desc: "AI reduces planning time, boosts creativity, personalizes learning", icon: Lightbulb },
              { title: "Career Impact", desc: "Future-ready teachers gain promotions and recognition", icon: Award },
              { title: "Global Trend", desc: "Educators worldwide are mastering AI. India's teachers must be at the forefront", icon: Globe }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader className="text-center">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-feature">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Key Features of the Program
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <feature.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg leading-tight">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills You Will Master */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Skills You Will Master
            </h2>
            <p className="text-xl text-muted-foreground">
              By the end of this program, you will confidently master skills that make you a true AI-Powered Teacher
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-card rounded-lg p-4 shadow-soft hover:shadow-medium transition-all duration-300 text-center">
                <skill.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-sm">{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools & Platforms */}
      <section className="py-20 bg-gradient-feature">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              AI Tools & Platforms You Will Master
            </h2>
            <p className="text-xl text-muted-foreground">
              Get hands-on experience with the world's most powerful and easy-to-use AI tools — specially curated for teachers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
            {aiTools.map((tool, index) => (
              <div key={index} className="bg-card rounded-lg p-4 shadow-soft hover:shadow-medium transition-all duration-300 text-center">
                <div className="bg-gradient-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xs">{tool.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-xs">{tool}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Path to Becoming an <span className="text-primary">AI-POWERED Teacher</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPath.map((session, index) => (
              <Card key={index} className="border-l-4 border-l-primary shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="text-primary bg-primary/10">
                      Live {session.session}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{session.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2">Topics:</h4>
                    <p className="text-muted-foreground text-sm">{session.topics}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-secondary mb-2">Skills Learned:</h4>
                    <p className="text-muted-foreground text-sm">{session.skills}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-feature">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Snapshots from Our AI Teacher Movement
            </h2>
            <p className="text-xl text-muted-foreground">
              We have already empowered 15+ schools and trained 500+ teachers to become AI-powered educators
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-tertiary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.school}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How to Join this Program
            </h2>
            <p className="text-xl text-muted-foreground">Step by Step Procedure</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Preview */}
      <section className="py-20 bg-gradient-feature">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Certificate You Will Receive
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src={certificateImage} 
              alt="AI-Powered Teacher Certificate Template" 
              className="rounded-2xl shadow-strong w-full"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Register Now – Limited Seats!
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Become part of India's first large-scale movement to create AI-Powered Teachers
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <p className="text-lg mb-4">
              Though the program is worth <span className="font-bold text-tertiary">₹6,000</span>, 
              you get it <span className="font-bold text-tertiary">100% FREE</span> under the Ellarkkum AI mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Contact: [Your Number]</span>
              </div>
              <div className="flex items-center gap-2">
                <Web className="h-5 w-5" />
                <span>Website: [Your Website]</span>
              </div>
            </div>
          </div>
          
          <Button size="lg" variant="secondary" className="text-xl px-12 py-6 font-bold">
            Register Today
            <ArrowRight className="ml-3 h-7 w-7" />
          </Button>
          
          <p className="mt-6 text-white/80">
            Don't miss this opportunity — limited seats available per school
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;