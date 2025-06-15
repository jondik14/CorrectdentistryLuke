
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <header className="absolute top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <img 
              src="/lovable-uploads/b5b93f05-f98a-4fa9-887e-ceb54e5c52a8.png" 
              alt="CorrectDentistry Logo" 
              className="h-8 w-auto hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={handleCoursesClick}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Courses
            </button>
            <button 
              onClick={handleAboutClick}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button className="btn-secondary">
              Log In
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={handleCoursesClick}
                className="text-foreground hover:text-primary transition-colors duration-200 text-left"
              >
                Courses
              </button>
              <button 
                onClick={handleAboutClick}
                className="text-foreground hover:text-primary transition-colors duration-200 text-left"
              >
                About
              </button>
              <button className="btn-secondary w-full">
                Log In
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
