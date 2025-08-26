import certificateImage from "@/assets/certificate-template.jpg";

export const CertificatePreview = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Certificate You Will Receive
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Showcase your achievement as an AI-Powered Teacher
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <img 
              src={certificateImage} 
              alt="AI-Powered Teacher Certificate Template" 
              className="rounded-2xl shadow-strong w-full group-hover:shadow-2xl transition-shadow duration-300"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};