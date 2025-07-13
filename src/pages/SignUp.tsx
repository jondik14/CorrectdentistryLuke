import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Mail, Lock, CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import Header from '../components/Header';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
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

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    
    if (value && !validatePassword(value)) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    
    if (value && value !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword) {
      if (!email) setEmailError('Email is required');
      if (!password) setPasswordError('Password is required');
      if (!confirmPassword) setConfirmPasswordError('Please confirm your password');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    }
    
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }
    
    if (!agreedToTerms) {
      return;
    }

    setIsValidating(true);
    
    // Simulate account creation
    setTimeout(() => {
      setIsValidating(false);
      // Navigate to email verification instead of directly to courses
      navigate('/verify-email', { state: { email } });
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
      <Header data-testid="navbar-signup-visible" />
      
      {/* Background grid with reduced tilt */}
      <div 
        className="background-grid angled blur-mask fixed inset-0 z-0" 
        data-testid="signup-background-angled-grid"
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
            className="signup-modal bg-white shadow-2xl border border-gray-100 rounded-xl"
            data-testid="signup-form-elevation"
          >
            <CardHeader className="space-y-3 pb-6 text-center">
              <h1 className="text-2xl font-bold text-dental-blue">Create your account</h1>
              <p className="text-dental-gray text-base">Start your learning journey with trusted dental specialists</p>
            </CardHeader>
            
            <CardContent className="px-8 py-6">
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
                      className={`input-field w-full h-12 rounded-md border border-gray-300 focus:border-dental-blue focus:ring-dental-blue pl-10 ${
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

                {/* Password Input */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-dental-gray">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a strong password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                      className={`input-field w-full h-12 rounded-md border border-gray-300 focus:border-dental-blue focus:ring-dental-blue pl-10 pr-10 ${
                        passwordError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dental-gray" size={18} />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dental-gray hover:text-dental-blue"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {passwordError && (
                    <p className="text-red-500 text-sm flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {passwordError}
                    </p>
                  )}
                </div>

                {/* Confirm Password Input */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-dental-gray">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      required
                      className={`input-field w-full h-12 rounded-md border border-gray-300 focus:border-dental-blue focus:ring-dental-blue pl-10 pr-10 ${
                        confirmPasswordError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dental-gray" size={18} />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dental-gray hover:text-dental-blue"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {confirmPasswordError && (
                    <p className="text-red-500 text-sm flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {confirmPasswordError}
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
                      Terms of Service
                    </button>
                    {' and '}
                    <button
                      type="button"
                      className="text-dental-blue hover:text-dental-blue-dark underline font-medium"
                      onClick={() => console.log('Privacy Policy clicked')}
                    >
                      Privacy Policy
                    </button>
                  </Label>
                </div>

                {/* Submit Button with gradient hover */}
                <Button
                  type="submit"
                  disabled={!email || !password || !confirmPassword || !!emailError || !!passwordError || !!confirmPasswordError || !agreedToTerms || isValidating}
                  className="btn-primary w-full h-12 py-3 rounded-md font-semibold transition-all bg-gradient-to-r from-dental-blue to-dental-blue-dark text-white hover:from-dental-blue-dark hover:to-[hsl(210_100%_25%)] disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="signup-submit-button"
                >
                  {isValidating ? 'Creating Account...' : 'Create Account'}
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
