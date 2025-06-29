
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Lock, Clock, Users, Award, Tag, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ScrollArea } from '../components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  enrolled: string;
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
  const [mobileChaptersOpen, setMobileChaptersOpen] = useState(false);

  useEffect(() => {
    // Check subscription status
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsSubscribed(loggedIn); // For demo purposes, treat logged in as subscribed

    // Mock course data - in real app, this would be fetched from API
    const mockCourse: Course = {
      id: courseId || '1',
      title: 'Impressions for Veneers',
      description: 'Master the art of creating precise impressions for veneer procedures with advanced techniques.',
      duration: '45 min',
      enrolled: '1,200+',
      thumbnail: '/lovable-uploads/a789cbd9-0692-4db5-9658-3da85ff73e3e.png',
      category: 'Restorative',
      level: 'Intermediate',
      cpdHours: 2,
      totalRuntime: '45:32',
      chapters: [
        { id: '1', title: 'Introduction to Veneer Impressions', duration: '8:45', isLocked: !loggedIn },
        { id: '2', title: 'Material Selection and Preparation', duration: '12:30', isLocked: !loggedIn },
        { id: '3', title: 'Advanced Impression Techniques', duration: '15:20', isLocked: !loggedIn },
        { id: '4', title: 'Common Mistakes and Solutions', duration: '8:57', isLocked: !loggedIn },
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
    navigate('/course-subscription/' + courseId);
  };

  const handleStartLearning = () => {
    console.log('Starting course:', course?.title);
    // In real app, navigate to course player
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 pb-8 bg-gradient-to-br from-dental-blue-light/20 to-white">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/courses')}
            className="mb-6 text-dental-blue hover:text-dental-blue-dark"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Courses
          </Button>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Video Player Section */}
            <div className="lg:col-span-2">
              <div className="aspect-video bg-black rounded-xl overflow-hidden relative group">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="text-white ml-1" size={32} />
                  </div>
                </div>
                
                {/* Course Title Overlay */}
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-white/90 text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded">
                    {course.title}
                  </h2>
                </div>
                
                {/* Runtime Badge */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-sm">
                    {course.totalRuntime}
                  </span>
                </div>
                
                {/* Preview Badge */}
                {!isSubscribed && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-500 text-white">
                      Preview Only
                    </Badge>
                  </div>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-dental-blue mt-6 mb-4">
                {course.title}
              </h1>
              <p className="text-dental-gray text-lg leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Chapter List Sidebar - Desktop */}
            <div className="lg:col-span-1 hidden lg:block">
              <Card className="sticky top-24">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Play size={18} />
                    Course Content
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-1 p-6 pt-0">
                      {course.chapters.map((chapter, index) => (
                        <div
                          key={chapter.id}
                          className={`group flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                            chapter.isLocked
                              ? 'bg-gray-50/80 text-gray-400 cursor-not-allowed border-gray-200'
                              : 'bg-white hover:bg-dental-blue-light/10 hover:border-dental-blue/30 cursor-pointer border-gray-200 hover:shadow-sm'
                          }`}
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-dental-blue-light/20 flex items-center justify-center">
                              <span className="text-xs font-medium text-dental-blue">
                                {index + 1}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate group-hover:text-dental-blue-dark transition-colors">
                                {chapter.title}
                              </div>
                              <div className="text-xs text-dental-gray mt-1">{chapter.duration}</div>
                            </div>
                          </div>
                          {chapter.isLocked && (
                            <Lock size={14} className="flex-shrink-0 text-gray-400" />
                          )}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Chapter List - Mobile Collapsible */}
            <div className="lg:hidden col-span-full">
              <Collapsible open={mobileChaptersOpen} onOpenChange={setMobileChaptersOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <span className="flex items-center gap-2">
                      <Play size={18} />
                      Course Content ({course.chapters.length} chapters)
                    </span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        {course.chapters.map((chapter, index) => (
                          <div
                            key={chapter.id}
                            className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                              chapter.isLocked
                                ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                                : 'bg-white hover:bg-dental-blue-light/10 cursor-pointer'
                            }`}
                          >
                            <div className="flex items-center gap-3 flex-1">
                              <span className="text-sm font-medium text-dental-blue w-6">
                                {index + 1}
                              </span>
                              <div className="flex-1">
                                <div className="font-medium text-sm">{chapter.title}</div>
                                <div className="text-xs text-dental-gray">{chapter.duration}</div>
                              </div>
                            </div>
                            {chapter.isLocked && <Lock size={16} />}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>

      {/* Course Details Section */}
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Course Info - Two Rows */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {/* Row 1: Duration & CPD */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <Clock className="mx-auto mb-2 text-dental-blue" size={24} />
                <div className="font-semibold">{course.duration}</div>
                <div className="text-xs text-dental-gray">Duration</div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <Award className="mx-auto mb-2 text-dental-blue" size={24} />
                <div className="font-semibold">{course.cpdHours} Hours</div>
                <div className="text-xs text-dental-gray">CPD Credit</div>
              </CardContent>
            </Card>
            
            {/* Row 2: Enrolled & Tags */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <Users className="mx-auto mb-2 text-dental-blue" size={24} />
                <div className="font-semibold">{course.enrolled}</div>
                <div className="text-xs text-dental-gray">Enrolled</div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <Tag className="mx-auto mb-2 text-dental-blue" size={24} />
                <div className="flex flex-col items-center gap-2">
                  <Badge className={getLevelColor(course.level)} variant="secondary">
                    {course.level}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {course.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What You'll Learn */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What You'll Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {course.summary.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-dental-blue flex-shrink-0 mt-0.5" />
                    <span className="text-dental-gray text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Enhanced CTA Section */}
          <Card className="bg-gradient-to-br from-dental-blue-light/30 via-dental-blue-light/20 to-dental-blue-light/10 border-dental-blue/20 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-dental-blue mb-3">
                {isSubscribed ? 'Ready to Start Learning?' : 'Unlock This Course'}
              </h3>
              <p className="text-dental-gray mb-2 text-lg">
                {isSubscribed
                  ? 'Begin your journey with this comprehensive course'
                  : 'Subscribe to CorrectDentistry to access this course and our entire library'
                }
              </p>
              {!isSubscribed && (
                <p className="text-sm text-dental-blue mb-6 font-medium">
                  Get unlimited access to all CPD-certified dental courses
                </p>
              )}
              <Button
                size="lg"
                className="bg-dental-blue text-white hover:bg-dental-blue-dark px-8 py-3 text-lg shadow-md hover:shadow-lg transition-all"
                onClick={isSubscribed ? handleStartLearning : handleSubscribe}
              >
                {isSubscribed ? 'Start Learning' : 'Subscribe to Access This Course'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseOverview;
