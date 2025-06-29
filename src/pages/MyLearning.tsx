import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedGradientBackground from '../components/AnimatedGradientBackground';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { BookOpen, Clock, Award, Play, ArrowRight } from 'lucide-react';

interface EnrolledCourse {
  id: string;
  title: string;
  description: string;
  progress: number;
  duration: string;
  thumbnail: string;
  category: string;
  lastAccessed: string;
}

const MyLearning = () => {
  const navigate = useNavigate();
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([]);

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    // Mock enrolled courses data
    setEnrolledCourses([
      {
        id: '1',
        title: 'Impressions for Veneers',
        description: 'Master the art of creating precise impressions for veneer procedures.',
        progress: 65,
        duration: '45 min',
        thumbnail: '/lovable-uploads/a789cbd9-0692-4db5-9658-3da85ff73e3e.png',
        category: 'Restorative',
        lastAccessed: '2 days ago'
      },
      {
        id: '3',
        title: 'Digital Dentistry Workflows',
        description: 'Learn modern digital workflows for enhanced precision.',
        progress: 30,
        duration: '2 hours',
        thumbnail: '/lovable-uploads/368c6b6a-e95a-4dd2-b51a-e03063a74279.png',
        category: 'Digital',
        lastAccessed: '1 week ago'
      }
    ]);
  }, [navigate]);

  const handleContinueCourse = (courseId: string) => {
    navigate(`/course-subscription/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Animated Blue Gradient Background */}
      <section className="relative pt-24 pb-12 bg-white border-b overflow-hidden">
        {/* Animated gradient background */}
        <AnimatedGradientBackground />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/5" style={{ zIndex: 2 }}></div>
        
        <div className="relative container mx-auto px-4" style={{ zIndex: 3 }}>
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              My Learning Dashboard
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md">
              Continue your professional development journey
            </p>
            
            {/* Stats - Non-interactive informational cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/20">
                <div className="flex items-center justify-center mb-3">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">2</h3>
                <p className="text-white/80 text-sm font-semibold drop-shadow-sm">Courses Enrolled</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/20">
                <div className="flex items-center justify-center mb-3">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">3.2</h3>
                <p className="text-white/80 text-sm font-semibold drop-shadow-sm">Hours Completed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/20">
                <div className="flex items-center justify-center mb-3">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">1</h3>
                <p className="text-white/80 text-sm font-semibold drop-shadow-sm">Certificates Earned</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrolled Courses */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <h2 className="text-3xl font-bold text-dental-blue">Continue Learning</h2>
              <Button 
                variant="outline"
                onClick={() => navigate('/courses')}
                className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 md:self-start flex items-center gap-2"
              >
                Browse More Courses
                <ArrowRight size={16} />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {enrolledCourses.map((course, index) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-dental-blue/20">
                  <div className="aspect-video relative">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-dental-blue text-white px-2 py-1 rounded-md text-xs font-medium shadow-sm">
                        {course.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button
                        onClick={() => handleContinueCourse(course.id)}
                        className="bg-white text-dental-blue hover:bg-gray-100 font-medium shadow-lg"
                      >
                        <Play size={16} className="mr-2" />
                        Continue
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl text-dental-blue leading-tight">{course.title}</CardTitle>
                      <span className="text-sm text-dental-gray font-medium ml-4 whitespace-nowrap">{course.duration}</span>
                    </div>
                    <p className="text-dental-gray text-sm leading-relaxed">{course.description}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-dental-gray font-medium">Progress</span>
                        <span className="font-semibold text-dental-blue">{course.progress}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={course.progress} 
                          className="h-2"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-dental-gray">Last accessed: {course.lastAccessed}</span>
                        <Button
                          onClick={() => handleContinueCourse(course.id)}
                          size="sm"
                          className="bg-dental-blue hover:bg-dental-blue-dark text-white font-medium px-4 py-2 rounded-md shadow-sm"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyLearning;
