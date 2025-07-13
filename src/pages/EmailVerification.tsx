
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Mail, CheckCircle, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';

const EmailVerification = () => {
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get email from navigation state (passed from signup)
  const email = location.state?.email || 'your email';

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

  const handleResendEmail = async () => {
    setIsResending(true);
    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
    }, 2000);
  };

  const handleBackToSignup = () => {
    navigate('/signup');
  };

  const handleContinue = () => {
    // For now, simulate successful verification and continue to courses
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    navigate('/courses');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />
      
      {/* Background grid - same as signup */}
      <div 
        className="background-grid angled blur-mask fixed inset-0 z-0" 
        style={{
          transform: 'rotate(-4deg) scale(1.1)',
          transformOrigin: 'center center',
        }}
      >
        <div className="grid grid-cols-6 gap-1 h-full w-full p-8">
          {Array.from({ length: 30 }, (_, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img
                src={courseImages[index % courseImages.length]}
                alt="Dental course"
                className="w-full h-full object-cover brightness-110"
                style={{ filter: 'blur(1px)' }}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
      </div>

      {/* Verification Card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-[460px]">
          <Card className="bg-white shadow-2xl border border-gray-100 rounded-xl">
            <CardHeader className="space-y-6 pb-6 text-center">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-dental-blue/10 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-dental-blue" />
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-dental-blue">Check your email</h1>
                <p className="text-dental-gray text-base leading-relaxed">
                  We've sent a verification link to
                  <br />
                  <span className="font-medium text-dental-blue">{email}</span>
                </p>
              </div>
            </CardHeader>
            
            <CardContent className="px-8 py-6 space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Almost there!</p>
                    <p>Click the verification link in your email to activate your account and start learning.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-dental-gray text-center">
                  Didn't receive the email? Check your spam folder or
                </p>
                
                <Button
                  onClick={handleResendEmail}
                  disabled={isResending}
                  variant="outline"
                  className="w-full h-12 border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white"
                >
                  {isResending ? 'Sending...' : 'Resend verification email'}
                </Button>
              </div>

              {/* Temporary bypass for development */}
              <div className="pt-4 border-t border-gray-200">
                <Button
                  onClick={handleContinue}
                  className="w-full h-12 bg-gradient-to-r from-dental-blue to-dental-blue-dark text-white hover:from-dental-blue-dark hover:to-[hsl(210_100%_25%)]"
                >
                  Continue to Courses (Skip Verification)
                </Button>
                <p className="text-xs text-dental-gray text-center mt-2">
                  For demo purposes only
                </p>
              </div>

              <div className="text-center">
                <button
                  onClick={handleBackToSignup}
                  className="inline-flex items-center gap-2 text-sm text-dental-gray hover:text-dental-blue transition-colors"
                >
                  <ArrowLeft size={16} />
                  Back to Sign Up
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
