
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b2c8e5dc-f2dd-4f28-87d8-a0b7fb49b5b1.png" 
              alt="CorrectDentistry Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-foreground hover:text-primary transition-colors duration-200">
              Courses
            </a>
            <a href="#faculty" className="text-foreground hover:text-primary transition-colors duration-200">
              Faculty
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-200">
              About
            </a>
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
              <a href="#courses" className="text-foreground hover:text-primary transition-colors duration-200">
                Courses
              </a>
              <a href="#faculty" className="text-foreground hover:text-primary transition-colors duration-200">
                Faculty
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors duration-200">
                About
              </a>
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
