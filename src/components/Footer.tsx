
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleCoursesClick = () => {
    navigate('/courses');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <footer className="bg-dental-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div 
              className="text-2xl font-bold mb-4 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleLogoClick}
            >
              CorrectDentistry
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Elevating dental expertise through evidence-based, specialist-delivered continuing education.
            </p>
            <div className="text-sm text-white/60">
              © 2024 CorrectDentistry. All rights reserved.
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <div className="space-y-3 text-white/80">
              <button 
                onClick={handleCoursesClick}
                className="block hover:text-white transition-colors text-left"
              >
                Courses
              </button>
              <button 
                onClick={handleAboutClick}
                className="block hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button className="block hover:text-white transition-colors text-left">
                Log In
              </button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-3 text-white/80">
              <button className="block hover:text-white transition-colors text-left">
                Help Center
              </button>
              <button className="block hover:text-white transition-colors text-left">
                Contact Us
              </button>
              <button className="block hover:text-white transition-colors text-left">
                Privacy Policy
              </button>
              <button className="block hover:text-white transition-colors text-left">
                Terms of Service
              </button>
              <div className="pt-4 text-xs text-white/50">
                <a 
                  href="https://lordicon.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white/70 transition-colors"
                >
                  Icons by Lordicon.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>
            Professional dental education for the modern practitioner.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
