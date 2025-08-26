export const HowToJoin = () => {
  const registrationSteps = [
    { 
      step: 1, 
      title: "Register", 
      description: "Fill the registration form shared with your school" 
    },
    { 
      step: 2, 
      title: "Verification & Group Access", 
      description: "Once verified, you'll be added to the official WhatsApp group" 
    },
    { 
      step: 3, 
      title: "Course Access & Materials", 
      description: "Get all program details, class links, and resources directly in the group" 
    },
    { 
      step: 4, 
      title: "Learn, Participate & Get Certified", 
      description: "Attend live sessions, complete tasks, join activities, and receive your certificate" 
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How to Join this Program
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Step by Step Procedure
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {registrationSteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-full w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center mx-auto text-2xl lg:text-3xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-medium">
                  {step.step}
                </div>
                {index < registrationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
              
              <h3 className="text-lg lg:text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};