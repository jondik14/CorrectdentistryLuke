import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedGradientBackground from '../components/AnimatedGradientBackground';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { User, Crown, CreditCard, Edit2 } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
  }, [navigate]);

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
                  My Profile
                </h1>
                <p className="text-xl text-dental-gray drop-shadow-sm">
                  Manage your personal and account details
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              
              {/* Personal Information Card */}
              <Card className="overflow-hidden border border-gray-100 bg-white shadow-sm">
                <CardHeader className="pb-4 px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-dental-blue/10 rounded-lg">
                        <User className="text-dental-blue" size={20} />
                      </div>
                      <CardTitle className="text-2xl text-dental-blue">Personal Info</CardTitle>
                    </div>
                    <Button variant="ghost" size="sm" className="text-dental-gray hover:text-dental-blue">
                      <Edit2 size={16} />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-dental-gray">Username</label>
                      <p className="text-dental-blue font-medium">luke.niccol@hotmail.com</p>
                    </div>
                    <Separator />
                    <div>
                      <label className="text-sm font-medium text-dental-gray">First Name</label>
                      <p className="text-dental-blue font-medium">Luke</p>
                    </div>
                    <Separator />
                    <div>
                      <label className="text-sm font-medium text-dental-gray">Last Name</label>
                      <p className="text-dental-blue font-medium">Niccol</p>
                    </div>
                    <Separator />
                    <div>
                      <label className="text-sm font-medium text-dental-gray">Email</label>
                      <p className="text-dental-blue font-medium">luke.niccol@hotmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Subscription Details Card */}
              <Card className="overflow-hidden border border-gray-100 bg-white shadow-sm">
                <CardHeader className="pb-4 px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-amber-50 rounded-lg">
                        <Crown className="text-amber-600" size={20} />
                      </div>
                      <CardTitle className="text-2xl text-dental-blue">Subscription</CardTitle>
                    </div>
                    <Button variant="ghost" size="sm" className="text-dental-gray hover:text-dental-blue">
                      <Edit2 size={16} />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-dental-gray">Plan</label>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-dental-blue font-medium">Pro Plan</p>
                        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
                          Active
                        </Badge>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <label className="text-sm font-medium text-dental-gray">Status</label>
                      <p className="text-dental-blue font-medium">Active</p>
                    </div>
                    <Separator />
                    <div>
                      <label className="text-sm font-medium text-dental-gray">Next Renewal</label>
                      <p className="text-dental-blue font-medium">Aug 15, 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment History Card */}
              <Card className="overflow-hidden border border-gray-100 bg-white shadow-sm lg:col-span-2 xl:col-span-1">
                <CardHeader className="pb-4 px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg">
                        <CreditCard className="text-blue-600" size={20} />
                      </div>
                      <CardTitle className="text-2xl text-dental-blue">Payment History</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  <div className="text-center py-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mx-auto mb-4">
                      <CreditCard className="text-gray-400" size={24} />
                    </div>
                    <p className="text-dental-gray text-lg mb-2">No payments found</p>
                    <p className="text-sm text-dental-gray/70">You haven't made any payments yet.</p>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Additional Actions */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline"
                className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white font-medium px-8 py-3"
              >
                Edit Profile
              </Button>
              <Button 
                className="bg-dental-blue hover:bg-dental-blue-dark text-white font-medium px-8 py-3"
              >
                Manage Subscription
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
