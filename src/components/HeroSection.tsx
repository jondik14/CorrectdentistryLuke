
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreCourses = () => {
    navigate('/courses');
  };

  const handleWatchDemo = () => {
    // You can add demo video functionality here
    console.log('Watch demo clicked');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/49ac1a3e-4bba-442e-a648-00c73776b5b1.png"
          alt="Dental Education"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dental-blue/5"></div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/25 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="mb-6 text-white drop-shadow-lg opacity-0 animate-fadeInUp">
            The Way the Specialists Do It
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md opacity-0 animate-fadeInUp animate-delay-200">
            Elevate your dental expertise with CorrectDentistry's trusted online learning platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 opacity-0 animate-fadeInUp animate-delay-400">
            <button 
              onClick={handleExploreCourses}
              className="btn-primary text-lg px-8 py-4 bg-white text-dental-blue hover:bg-white/90"
            >
              Explore Courses
            </button>
          </div>

          {/* Trust indicators */}
          <div className="opacity-0 animate-fadeInUp animate-delay-600">
            <p className="text-white drop-shadow-lg text-sm mb-4 font-medium">Trusted by dental professionals worldwide</p>
            <div className="flex justify-center items-center space-x-8 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold drop-shadow-lg">25+</div>
                <div className="text-sm drop-shadow-lg">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold drop-shadow-lg">500+</div>
                <div className="text-sm drop-shadow-lg">CPD Hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold drop-shadow-lg">10k+</div>
                <div className="text-sm drop-shadow-lg">Practitioners</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
