export const AITools = () => {
  const aiTools = [
    "ChatGPT", "Gemini", "Claude", "Perplexity", "Ideogram", "Gamma",
    "Canva", "ElevenLabs", "Curipod", "NotebookLM", "HeyGen", "Suno AI", "Google AI Studio"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            AI Tools & Platforms You Will Master
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Get hands-on experience with the world's most powerful and easy-to-use AI tools — specially curated for teachers
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 lg:gap-6">
          {aiTools.map((tool, index) => (
            <div 
              key={index} 
              className="group bg-card/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-soft hover:shadow-medium transition-all duration-300 text-center hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-primary to-secondary rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm lg:text-lg">
                  {tool.charAt(0)}
                </span>
              </div>
              <h3 className="font-semibold text-xs lg:text-sm leading-tight">
                {tool}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};