
import { useState, useEffect } from 'react';
import { Play, Award, BookOpenCheck, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hasPlayedInitialAnimation, setHasPlayedInitialAnimation] = useState(false);

  const heroImages = [
    {
      src: "/lovable-uploads/a040261a-5ae0-465d-83f0-430b2c67b064.png",
      alt: "Dental training session",
      objectPosition: "center 30%"
    },
    {
      src: "/lovable-uploads/0a7ddcc2-e956-4460-ba74-9f01b86d18e1.png",
      alt: "Dental seminar and education",
      objectPosition: "center 40%"
    },
    {
      src: "/lovable-uploads/16b5aafa-0533-4ad2-9897-92b8639ddc5e.png",
      alt: "Dental X-ray consultation",
      objectPosition: "center 50%"
    }
  ];

  const handleExploreCourses = () => {
    navigate('/courses');
  };

  const handleWatchDemo = () => {
    // You can add demo video functionality here
    console.log('Watch demo clicked');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // Auto-cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle initial image load and animation trigger
  useEffect(() => {
    if (imageLoaded && !hasPlayedInitialAnimation) {
      setHasPlayedInitialAnimation(true);
    }
  }, [imageLoaded, hasPlayedInitialAnimation]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20 md:py-24">
      {/* Dental training background image */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img 
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ objectPosition: image.objectPosition }}
            onLoad={() => index === 0 && setImageLoaded(true)}
          />
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/lovable-uploads/2c1ad50a-4066-4519-afcd-f6f16071ea8d.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        ></div>
      </div>

      {/* Image navigation controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button
          onClick={prevImage}
          className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button
          onClick={nextImage}
          className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
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
          <p className={`text-sm md:text-base mb-4 text-white/90 drop-shadow-md ${hasPlayedInitialAnimation ? 'opacity-100' : 'opacity-0 animate-fadeInUp'}`}>
            Accredited by top specialists. Trusted by 10,000+ dental professionals.
          </p>

          {/* Main Headline */}
          <h1 className={`mb-6 text-white drop-shadow-lg ${hasPlayedInitialAnimation ? 'opacity-100' : 'opacity-0 animate-fadeInUp animate-delay-200'}`}>
            The Way the Specialists Do It
          </h1>
          
          {/* Subtext */}
          <p className={`text-xl md:text-2xl mb-10 text-white/95 drop-shadow-md ${hasPlayedInitialAnimation ? 'opacity-100' : 'opacity-0 animate-fadeInUp animate-delay-400'}`}>
            Elevate your dental expertise with CorrectDentistry's trusted online learning platform.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 ${hasPlayedInitialAnimation ? 'opacity-100' : 'opacity-0 animate-fadeInUp animate-delay-600'}`}>
            <Button
              onClick={handleExploreCourses}
              size="lg"
              className="bg-dental-blue hover:bg-dental-blue-dark text-white text-lg px-8 py-6 shadow-lg font-medium rounded-lg"
            >
              Explore Courses
            </Button>
          </div>

          {/* Trust indicators */}
          <div className={`flex justify-center items-center ${hasPlayedInitialAnimation ? 'opacity-100' : 'opacity-0 animate-fadeInUp animate-delay-800'}`}>
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
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
