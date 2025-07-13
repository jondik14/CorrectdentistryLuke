
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    if (!agreedToTerms) {
      return;
    }

    setIsValidating(true);
    
    // Simulate email validation
    setTimeout(() => {
      setIsValidating(false);
      // Store email for the subscription flow
      localStorage.setItem('signupEmail', email);
      // Navigate to subscription/payment plan selection
      navigate('/course-subscription/1');
    }, 1000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient and subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E0F0FF] to-[#C2DFFF]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-dental-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <img 
              src="/lovable-uploads/b5b93f05-f98a-4fa9-887e-ceb54e5c52a8.png" 
              alt="CorrectDentistry Logo" 
              className="h-10 w-auto mx-auto mb-6"
            />
          </div>

          {/* Sign-up Card */}
          <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/95">
            <CardHeader className="space-y-2 pb-6 text-center">
              <h1 className="text-2xl font-bold text-dental-blue mb-2">Create Your Account</h1>
              <p className="text-dental-gray text-sm">Start your journey with CorrectDentistry</p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-dental-gray">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      className={`h-12 rounded-lg border-gray-200 focus:border-dental-blue focus:ring-dental-blue pl-10 ${
                        emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dental-gray" size={18} />
                    {email && !emailError && (
                      <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" size={18} />
                    )}
                    {emailError && (
                      <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" size={18} />
                    )}
                  </div>
                  {emailError && (
                    <p className="text-red-500 text-sm flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {emailError}
                    </p>
                  )}
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm text-dental-gray leading-relaxed cursor-pointer">
                    I agree to the{' '}
                    <button
                      type="button"
                      className="text-dental-blue hover:text-dental-blue-dark underline font-medium"
                      onClick={() => console.log('Terms clicked')}
                    >
                      Terms
                    </button>
                    {' & '}
                    <button
                      type="button"
                      className="text-dental-blue hover:text-dental-blue-dark underline font-medium"
                      onClick={() => console.log('Privacy Policy clicked')}
                    >
                      Privacy Policy
                    </button>
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={!email || !!emailError || !agreedToTerms || isValidating}
                  className="w-full h-12 bg-gradient-to-r from-[#3D8BFF] to-[#5BBEFF] hover:from-[#2E7AFF] to-[#4AADFF] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isValidating ? 'Validating...' : 'Next: Choose Plan'}
                </Button>
              </form>

              {/* Footer */}
              <div className="mt-6 text-center">
                <p className="text-sm text-dental-gray">
                  Already have an account?{' '}
                  <Link 
                    to="/login" 
                    className="text-dental-blue hover:text-dental-blue-dark font-medium transition-colors underline"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
