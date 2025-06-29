
import { useState, useEffect } from 'react';
import { Menu, X, User, Settings, LogOut } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const email = localStorage.getItem('userEmail') || '';
    setIsLoggedIn(loggedIn);
    setUserEmail(email);
  }, [location]);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleCoursesClick = () => {
    if (isLoggedIn) {
      navigate('/my-learning');
    } else {
      navigate('/courses');
    }
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setUserEmail('');
    navigate('/');
  };

  const getUserInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
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
              {isLoggedIn ? 'My Learning' : 'Courses'}
            </button>
            <button 
              onClick={handleAboutClick}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-dental-blue text-white text-sm">
                      {getUserInitials(userEmail)}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-2 py-1.5 text-sm text-dental-gray">
                    {userEmail}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings size={16} className="mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                    <LogOut size={16} className="mr-2" />
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button onClick={handleLoginClick} className="btn-secondary">
                Log In
              </button>
            )}
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
                {isLoggedIn ? 'My Learning' : 'Courses'}
              </button>
              <button 
                onClick={handleAboutClick}
                className="text-foreground hover:text-primary transition-colors duration-200 text-left"
              >
                About
              </button>
              
              {isLoggedIn ? (
                <div className="space-y-3 pt-3 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-dental-blue text-white text-sm">
                        {getUserInitials(userEmail)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-dental-gray">{userEmail}</span>
                  </div>
                  <button className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors text-left">
                    <Settings size={16} />
                    <span>Settings</span>
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors text-left"
                  >
                    <LogOut size={16} />
                    <span>Log Out</span>
                  </button>
                </div>
              ) : (
                <button onClick={handleLoginClick} className="btn-secondary w-full">
                  Log In
                </button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
