
import { useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div 
              className="mb-4 cursor-pointer hover:opacity-80 transition-opacity inline-block"
              onClick={handleLogoClick}
            >
              <img src="/lovable-uploads/b5b93f05-f98a-4fa9-887e-ceb54e5c52a8.png" alt="CorrectDentistry Logo" className="h-8 w-auto" />
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Elevating dental expertise through evidence-based, specialist-delivered continuing education.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-white/60 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter" className="text-white/60 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-white transition-colors"><Linkedin size={20} /></a>
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
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-white/60">
          <p className="mb-4">
            Professional dental education for the modern practitioner.
          </p>
          <div className="text-xs space-y-1">
            <p>© 2024 CorrectDentistry. All rights reserved.</p>
            <a href="https://lordicon.com/" className="underline hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Icons by Lordicon.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
