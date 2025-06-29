
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedGradientBackground from '../components/AnimatedGradientBackground';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { Separator } from '../components/ui/separator';
import { Settings as SettingsIcon, User, Lock, Bell, Shield, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Personal Info State
  const [personalInfo, setPersonalInfo] = useState({
    username: 'luke.niccol@hotmail.com',
    email: 'luke.niccol@hotmail.com',
    firstName: 'Luke',
    lastName: 'Niccol'
  });

  // Password State
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [showPasswordSection, setShowPasswordSection] = useState(false);

  // Notification Preferences State
  const [notifications, setNotifications] = useState({
    courseReminders: true,
    newCourseLaunches: true,
    promotionalOffers: false
  });

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
  }, [navigate]);

  const handlePersonalInfoSave = () => {
    // Save personal info logic here
    localStorage.setItem('userEmail', personalInfo.email);
    toast({
      title: "Settings Updated",
      description: "Your personal information has been saved successfully.",
    });
  };

  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Password Error",
        description: "New passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    
    // Password change logic here
    toast({
      title: "Password Updated",
      description: "Your password has been changed successfully.",
    });
    
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    setShowPasswordSection(false);
  };

  const handleLogoutAllDevices = () => {
    toast({
      title: "Logged Out",
      description: "You have been logged out from all devices.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Animated Blue Gradient Background */}
      <section className="relative pt-24 pb-16 bg-white border-b overflow-hidden">
        {/* Animated gradient background */}
        <AnimatedGradientBackground />
        
        {/* Enhanced overlay for better text readability with white tint */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" style={{ zIndex: 2 }}></div>
        
        <div className="relative container mx-auto px-6" style={{ zIndex: 3 }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-dental-blue mb-4 drop-shadow-sm">
                  Settings
                </h1>
                <p className="text-xl text-dental-gray drop-shadow-sm">
                  Manage your account preferences and personal details
                </p>
              </div>
              <div className="hidden md:flex items-center justify-center w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/50">
                <SettingsIcon className="text-dental-blue" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Settings Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Personal Information Card */}
              <Card className="overflow-hidden border border-gray-100 bg-white shadow-sm">
                <CardHeader className="pb-4 px-6 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-dental-blue/10 rounded-lg">
                      <User className="text-dental-blue" size={20} />
                    </div>
                    <CardTitle className="text-2xl text-dental-blue">Personal Information</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        value={personalInfo.username}
                        onChange={(e) => setPersonalInfo({...personalInfo, username: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={personalInfo.email}
                        onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={personalInfo.firstName}
                          onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={personalInfo.lastName}
                          onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handlePersonalInfoSave}
                      className="bg-dental-blue hover:bg-dental-blue-dark text-white font-medium px-6 py-2 mt-4"
                    >
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Password Settings Card */}
              <Card className="overflow-hidden border border-gray-100 bg-white shadow-sm">
                <CardHeader className="pb-4 px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg">
                        <Lock className="text-red-600" size={20} />
                      </div>
                      <CardTitle className="text-2xl text-dental-blue">Password & Security</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <Button 
                      variant="outline"
                      onClick={() => setShowPasswordSection(!showPasswordSection)}
                      className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white"
                    >
                      Change Password
                    </Button>
                    
                    {showPasswordSection && (
                      <div className="space-y-4 pt-4 border-t">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <div className="relative">
                            <Input
                              id="currentPassword"
                              type={showPasswords.current ? "text" : "password"}
                              value={passwordData.currentPassword}
                              onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                              onClick={() => setShowPasswords({...showPasswords, current: !showPasswords.current})}
                            >
                              {showPasswords.current ? <EyeOff size={16} /> : <Eye size={16} />}
                            </Button>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <div className="relative">
                            <Input
                              id="newPassword"
                              type={showPasswords.new ? "text" : "password"}
                              value={passwordData.newPassword}
                              onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                              onClick={() => setShowPasswords({...showPasswords, new: !showPasswords.new})}
                            >
                              {showPasswords.new ? <EyeOff size={16} /> : <Eye size={16} />}
                            </Button>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <div className="relative">
                            <Input
                              id="confirmPassword"
                              type={showPasswords.confirm ? "text" : "password"}
                              value={passwordData.confirmPassword}
                              onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                              onClick={() => setShowPasswords({...showPasswords, confirm: !showPasswords.confirm})}
                            >
                              {showPasswords.confirm ? <EyeOff size={16} /> : <Eye size={16} />}
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 pt-2">
                          <Button 
                            onClick={handlePasswordChange}
                            className="bg-dental-blue hover:bg-dental-blue-dark text-white"
                          >
                            Update Password
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={() => setShowPasswordSection(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    <Separator />
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-dental-gray">Last Login</span>
                        <span className="text-sm text-dental-blue">Today at 2:30 PM</span>
                      </div>
                      
                      <Button 
                        variant="outline"
                        onClick={handleLogoutAllDevices}
                        className="text-red-600 border-red-200 hover:bg-red-50"
                      >
                        Log out from all devices
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Notification Preferences Card */}
              <Card className="overflow-hidden border border-gray-100 bg-white shadow-sm">
                <CardHeader className="pb-4 px-6 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg">
                      <Bell className="text-blue-600" size={20} />
                    </div>
                    <CardTitle className="text-2xl text-dental-blue">Notifications</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-dental-blue">Course Reminders</p>
                        <p className="text-xs text-dental-gray">Get notified about upcoming courses</p>
                      </div>
                      <Switch
                        checked={notifications.courseReminders}
                        onCheckedChange={(checked) => setNotifications({...notifications, courseReminders: checked})}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-dental-blue">New Course Launches</p>
                        <p className="text-xs text-dental-gray">Be the first to know about new courses</p>
                      </div>
                      <Switch
                        checked={notifications.newCourseLaunches}
                        onCheckedChange={(checked) => setNotifications({...notifications, newCourseLaunches: checked})}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-dental-blue">Promotional Offers</p>
                        <p className="text-xs text-dental-gray">Receive special deals and discounts</p>
                      </div>
                      <Switch
                        checked={notifications.promotionalOffers}
                        onCheckedChange={(checked) => setNotifications({...notifications, promotionalOffers: checked})}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Account Security Overview Card */}
              <Card className="overflow-hidden border border-gray-100 bg-white shadow-sm">
                <CardHeader className="pb-4 px-6 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-green-50 rounded-lg">
                      <Shield className="text-green-600" size={20} />
                    </div>
                    <CardTitle className="text-2xl text-dental-blue">Account Security</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm font-medium text-dental-gray">Account Status</span>
                      <span className="text-sm text-green-600 font-medium">Secure</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm font-medium text-dental-gray">Two-Factor Authentication</span>
                      <span className="text-sm text-dental-gray">Not enabled</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm font-medium text-dental-gray">Active Sessions</span>
                      <span className="text-sm text-dental-blue">1 device</span>
                    </div>
                    
                    <Button 
                      variant="outline"
                      className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white mt-4"
                    >
                      Review Security Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Settings;
