import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Lock, Clock, Users, Award, Tag, CheckCircle, TrendingUp, BarChart3 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubscriptionModal from '../components/SubscriptionModal';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ScrollArea } from '../components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';
import { Tooltip, TooltipContent, TooltipTrigger } from '../components/ui/tooltip';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  category: string;
  level: string;
  cpdHours: number;
  chapters: Chapter[];
  summary: string[];
  totalRuntime: string;
}

interface Chapter {
  id: string;
  title: string;
  duration: string;
  isLocked: boolean;
}

const CourseOverview = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileChaptersOpen, setMobileChaptersOpen] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  useEffect(() => {
    // Check login and subscription status
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const subscribed = localStorage.getItem('isSubscribed') === 'true';
    setIsLoggedIn(loggedIn);
    setIsSubscribed(subscribed);

    // Mock course data - in real app, this would be fetched from API
    const mockCourse: Course = {
      id: courseId || '1',
      title: 'Impressions for Veneers',
      description: 'Master the art of creating precise impressions for veneer procedures with advanced techniques.',
      duration: '45 min',
      thumbnail: '/lovable-uploads/a789cbd9-0692-4db5-9658-3da85ff73e3e.png',
      category: 'Restorative',
      level: 'Intermediate',
      cpdHours: 2,
      totalRuntime: '45:32',
      chapters: [
        { id: '1', title: 'Introduction to Veneer Impressions', duration: '8:45', isLocked: !subscribed },
        { id: '2', title: 'Material Selection and Preparation', duration: '12:30', isLocked: !subscribed },
        { id: '3', title: 'Advanced Impression Techniques', duration: '15:20', isLocked: !subscribed },
        { id: '4', title: 'Common Mistakes and Solutions', duration: '8:57', isLocked: !subscribed },
      ],
      summary: [
        'Learn advanced impression techniques for optimal veneer fit',
        'Master material selection for different clinical scenarios',
        'Understand troubleshooting common impression issues',
        'Gain confidence in complex veneer cases',
        'Apply evidence-based protocols in your practice',
        'Achieve predictable aesthetic outcomes'
      ]
    };
    setCourse(mockCourse);
  }, [courseId]);

  const handleSubscribe = () => {
    if (!isLoggedIn) {
      navigate('/signup');
    } else {
      navigate('/course-subscription/' + courseId);
    }
  };

  const handleStartLearning = () => {
    if (!isLoggedIn) {
      navigate('/signup');
    } else if (!isSubscribed) {
      setShowSubscriptionModal(true);
    } else {
      navigate('/course-detail/' + courseId);
    }
  };

  const handlePlayClick = () => {
    if (!isLoggedIn) {
      navigate('/signup');
    } else if (!isSubscribed) {
      setShowSubscriptionModal(true);
    } else {
      navigate('/course-detail/' + courseId);
    }
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800';
      case 'Expert':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'Intermediate':
        return <TrendingUp size={14} className="mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-dental-blue-light/20 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => navigate('/courses')}
            className="mb-8 text-dental-blue hover:text-dental-blue-dark"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Courses
          </Button>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Video Player Section */}
            <div className="lg:col-span-2">
              {/* Video Player */}
              <div className="aspect-video bg-black rounded-xl overflow-hidden relative group mb-6">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div 
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer"
                    onClick={handlePlayClick}
                  >
                    <Play className="text-white ml-1" size={32} />
                  </div>
                </div>
                
                {/* Runtime Badge */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-sm">
                    {course.totalRuntime}
                  </span>
                </div>
                
                {/* Free Preview Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">
                    Free Preview
                  </Badge>
                </div>
              </div>
              
              {/* Course Title and Description */}
              <div className="mb-6">
                <h1 className="course-title text-3xl font-bold text-dental-blue mb-3">
                  {course.title}
                </h1>
                <p className="course-tagline text-dental-gray/80 text-lg mb-4 font-medium">
                  Master the art of creating precise impressions for veneer procedures with advanced techniques.
                </p>
                <p className="course-description text-dental-gray leading-relaxed mb-6">
                  This comprehensive course provides hands-on training in creating perfect impressions for veneer cases. Learn from industry experts using proven techniques that ensure optimal fit and patient satisfaction.
                </p>
                
                {/* Section Divider */}
                <div className="section-divider border-t border-gray-200 mb-6"></div>
              </div>

              {/* Metadata Cards - Horizontal Layout */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                  <Clock className="text-dental-blue flex-shrink-0" size={16} />
                  <div>
                    <div className="font-semibold text-sm course-stats">{course.duration}</div>
                    <div className="text-xs text-dental-gray">Duration</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                  <Award className="text-dental-blue flex-shrink-0" size={16} />
                  <div>
                    <div className="font-semibold text-sm course-stats">{course.cpdHours} Hours</div>
                    <div className="text-xs text-dental-gray">CPD Credit</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                  <Tag className="text-dental-blue flex-shrink-0" size={16} />
                  <div>
                    <div className="font-semibold text-sm course-stats">{course.category}</div>
                    <div className="text-xs text-dental-gray">Category</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                  <div className="flex-shrink-0">
                    <Badge className={`${getLevelColor(course.level)} flex items-center text-xs course-info-badge font-semibold`} variant="secondary">
                      {getLevelIcon(course.level)}
                      {course.level}
                    </Badge>
                  </div>
                  <div className="text-xs text-dental-gray">Level</div>
                </div>
              </div>
            </div>

            {/* Course Content Sidebar - Desktop */}
            <div className="lg:col-span-1">
              <Card className="border-2 border-dental-blue/20 mb-8">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Lock size={18} className="text-dental-blue" />
                    Course Content
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[400px]">
                    <div className="course-content-list locked neutral-bg space-y-1 p-6 pt-0 mb-4">
                      {course.chapters.map((chapter, index) => (
                        <Tooltip key={chapter.id}>
                          <TooltipTrigger asChild>
                            <div className="group flex items-center justify-between p-3 rounded-lg border transition-all duration-200 relative bg-gray-50 text-gray-500 cursor-not-allowed border-gray-200">
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-dental-blue-light/20 flex items-center justify-center">
                                  <span className="text-xs font-medium text-dental-blue">
                                    {index + 1}
                                  </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-sm truncate transition-colors text-gray-500">
                                    {chapter.title}
                                  </div>
                                  <div className="text-xs text-dental-gray mt-1">{chapter.duration}</div>
                                </div>
                              </div>
                              <Lock size={14} className="flex-shrink-0 text-gray-500" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Subscribe to unlock this chapter</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </ScrollArea>
                  
                  {/* Subscribe CTA in Course Content */}
                  <div id="subscribe-to-unlock-button" className="p-6 pt-0 border-t border-gray-200">
                    <Button
                      className="w-full bg-dental-blue text-white hover:bg-dental-blue-dark"
                      onClick={handleSubscribe}
                    >
                      Subscribe to Unlock
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Course Content - Mobile Collapsible */}
            <div className="lg:hidden col-span-full">
              <Collapsible open={mobileChaptersOpen} onOpenChange={setMobileChaptersOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between border-2 border-dental-blue/20 mb-4">
                    <span className="flex items-center gap-2">
                      <Lock size={18} />
                      Course Content ({course.chapters.length} chapters)
                    </span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mb-8">
                  <Card className="border-2 border-dental-blue/20">
                    <CardContent className="p-4">
                      <div className="space-y-2 mb-4">
                        {course.chapters.map((chapter, index) => (
                          <div
                            key={chapter.id}
                            className="flex items-center justify-between p-3 rounded-lg border transition-colors bg-gray-50 text-gray-500 cursor-not-allowed border-gray-200"
                          >
                            <div className="flex items-center gap-3 flex-1">
                              <span className="text-sm font-medium text-dental-blue w-6">
                                {index + 1}
                              </span>
                              <div className="flex-1">
                                <div className="font-medium text-sm text-gray-500">
                                  {chapter.title}
                                </div>
                                <div className="text-xs text-dental-gray">{chapter.duration}</div>
                              </div>
                            </div>
                            <Lock size={16} className="text-gray-500" />
                          </div>
                        ))}
                      </div>
                      <Button
                        className="w-full bg-dental-blue text-white hover:bg-dental-blue-dark"
                        onClick={handleSubscribe}
                      >
                        Subscribe to Unlock
                      </Button>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Sections - No Tabs */}
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* What You'll Learn Section */}
          <section id="what-youll-learn" className="mb-8">
            <Card className="info-card border border-gray-200 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-dental-blue">What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.summary.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-dental-blue flex-shrink-0 mt-0.5" />
                      <span className="text-dental-gray text-sm leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Downloads Section */}
          <section id="downloads" className="mb-8">
            <Card className="info-card border border-gray-200 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-dental-blue">Downloads & Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Award className="text-dental-blue" size={20} />
                    <div>
                      <div className="font-medium course-info-badge">{course.cpdHours} Hours CPD Certificate</div>
                      <div className="text-sm text-dental-gray">Continuing education credit</div>
                    </div>
                  </div>
                  <div className="text-sm text-dental-gray">
                    Additional downloadable resources will be available after subscription.
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Reviews Section */}
          <section id="reviews" className="mb-8">
            <Card className="info-card border border-gray-200 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-dental-blue">Student Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-dental-gray">
                  Student reviews and testimonials will be displayed here.
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Instructor Section */}
          <section id="instructor" className="mb-8">
            <Card className="info-card border border-gray-200 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-dental-blue">About the Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-dental-gray">
                  Detailed instructor information and biography will be displayed here.
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Enhanced CTA Section */}
          <Card className="bg-gradient-to-br from-dental-blue-light/20 via-dental-blue-light/15 to-dental-blue-light/10 border-dental-blue/20">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                {!isSubscribed && <Lock size={24} className="text-dental-blue" />}
                <h3 className="text-2xl font-bold text-dental-blue">
                  {isSubscribed ? 'Ready to Start Learning?' : 'Subscribe to Unlock This Course'}
                </h3>
              </div>
              <p className="text-dental-gray mb-2 text-lg">
                {isSubscribed
                  ? 'Begin your journey with this comprehensive course'
                  : 'This course is available exclusively for Pro subscribers. Get unlimited access to all CPD content.'
                }
              </p>
              {!isSubscribed && (
                <p className="text-sm text-dental-blue mb-6 font-medium">
                  30-day money-back guarantee · Instant access · Cancel anytime
                </p>
              )}
              <Button
                size="lg"
                className="bg-dental-blue text-white hover:bg-dental-blue-dark px-8 py-3 text-lg transition-all"
                onClick={isSubscribed ? handleStartLearning : handleSubscribe}
              >
                {isSubscribed ? 'Start Learning' : 'Subscribe & Unlock All Courses'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
      
      {/* Subscription Modal */}
      <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
        courseTitle={course.title}
      />
    </div>
  );
};

export default CourseOverview;
