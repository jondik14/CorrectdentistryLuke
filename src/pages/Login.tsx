
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Eye, EyeOff } from 'lucide-react';
import Header from '../components/Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      // Store login state in localStorage for demo purposes
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      setIsLoading(false);
      navigate('/my-learning');
    }, 1000);
  };

  // Course thumbnail images for the grid background
  const courseImages = [
    '/lovable-uploads/a040261a-5ae0-465d-83f0-430b2c67b064.png',
    '/lovable-uploads/10aa0220-71b9-474c-ad0a-0656b85e32c9.png',
    '/lovable-uploads/49ac1a3e-4bba-442e-a648-00c73776b5b1.png',
    '/lovable-uploads/16b5aafa-0533-4ad2-9897-92b8639ddc5e.png',
    '/lovable-uploads/2c1ad50a-4066-4519-afcd-f6f16071ea8d.png',
    '/lovable-uploads/368c6b6a-e95a-4dd2-b51a-e03063a74279.png',
    '/lovable-uploads/4bd9d5d8-b153-4b4d-bd4d-fe5fdfe884b2.png',
    '/lovable-uploads/a789cbd9-0692-4db5-9658-3da85ff73e3e.png',
    '/lovable-uploads/be0a9319-69c6-47c3-9019-671d5ffc8fd6.png',
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />
      
      {/* Background grid with reduced tilt */}
      <div 
        className="background-grid angled blur-mask fixed inset-0 z-0" 
        data-testid="login-background-angled-grid"
        style={{
          transform: 'rotate(-4deg) scale(1.1)',
          transformOrigin: 'center center',
        }}
      >
        <div className="grid grid-cols-6 gap-1 h-full w-full p-8">
          {Array.from({ length: 30 }, (_, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden"
            >
              <img
                src={courseImages[index % courseImages.length]}
                alt="Dental course"
                className="w-full h-full object-cover brightness-110"
                style={{
                  filter: 'blur(1px)',
                }}
              />
            </div>
          ))}
        </div>
        {/* Light blur and semi-transparent white overlay */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
      </div>

      {/* Form Card Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-[460px]">
          <Card 
            className="login-modal bg-white shadow-2xl border border-gray-100 rounded-xl"
            data-testid="login-form-elevation"
          >
            <CardHeader className="space-y-1 pb-6 text-center">
              <CardTitle className="text-2xl font-bold text-dental-blue mb-2">Welcome Back</CardTitle>
              <CardDescription className="text-dental-gray">
                Sign in to access your courses
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 py-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-dental-gray">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input-field w-full h-12 rounded-md border border-gray-300 focus:border-dental-blue focus:ring-dental-blue"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-dental-gray">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="input-field w-full h-12 rounded-md border border-gray-300 focus:border-dental-blue focus:ring-dental-blue pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dental-gray hover:text-dental-blue"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full h-12 py-3 rounded-md font-semibold transition-all bg-gradient-to-r from-dental-blue to-dental-blue-dark text-white hover:from-dental-blue-dark hover:to-[hsl(210_100%_25%)]"
                >
                  {isLoading ? 'Signing In...' : 'Log In'}
                </Button>
              </form>

              <div className="mt-6 flex items-center justify-between text-sm">
                <button
                  type="button"
                  className="text-dental-blue hover:text-dental-blue-dark transition-colors"
                >
                  Forgot Password?
                </button>
                <Link 
                  to="/signup" 
                  className="text-dental-blue hover:text-dental-blue-dark font-medium transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
