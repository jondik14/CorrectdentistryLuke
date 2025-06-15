import { useState } from 'react';
import { Play, Award, BookOpenCheck, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

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
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/25 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Supporting Text */}
          <p className={`text-sm md:text-base mb-4 text-white/80 drop-shadow-md opacity-0 ${imageLoaded ? 'animate-fadeInUp' : ''}`}>
            Accredited by top specialists. Trusted by 10,000+ dental professionals.
          </p>

          {/* Main Headline */}
          <h1 className={`mb-6 text-white drop-shadow-lg opacity-0 ${imageLoaded ? 'animate-fadeInUp animate-delay-200' : ''}`}>
            The Way the Specialists Do It
          </h1>
          
          {/* Subtext */}
          <p className={`text-xl md:text-2xl mb-10 text-white drop-shadow-md opacity-0 ${imageLoaded ? 'animate-fadeInUp animate-delay-400' : ''}`}>
            Elevate your dental expertise with CorrectDentistry's trusted online learning platform.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 opacity-0 ${imageLoaded ? 'animate-fadeInUp animate-delay-600' : ''}`}>
            <Button
              onClick={handleExploreCourses}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 shadow-lg"
            >
              Explore Courses
            </Button>
          </div>

          {/* Trust indicators */}
          <div className={`flex justify-center items-center opacity-0 ${imageLoaded ? 'animate-fadeInUp animate-delay-800' : ''}`}>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-12 text-white">
              <div className="flex items-center gap-3">
                <Award className="h-7 w-7 text-white/80" />
                <div className="text-left">
                  <div className="text-2xl font-bold drop-shadow-lg">25+</div>
                  <div className="text-sm drop-shadow-lg text-white/80">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BookOpenCheck className="h-7 w-7 text-white/80" />
                <div className="text-left">
                  <div className="text-2xl font-bold drop-shadow-lg">500+</div>
                  <div className="text-sm drop-shadow-lg text-white/80">CPD Hours</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-7 w-7 text-white/80" />
                <div className="text-left">
                  <div className="text-2xl font-bold drop-shadow-lg">10k+</div>
                  <div className="text-sm drop-shadow-lg text-white/80">Practitioners</div>
                </div>
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
