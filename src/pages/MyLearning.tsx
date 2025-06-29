import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedGradientBackground from '../components/AnimatedGradientBackground';
import CourseFilter from '../components/CourseFilter';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { BookOpen, Clock, Award, Play } from 'lucide-react';

interface EnrolledCourse {
  id: string;
  title: string;
  description: string;
  progress: number;
  duration: string;
  durationType: 'short' | 'medium' | 'long';
  thumbnail: string;
  category: string;
  lastAccessed: string;
}

const MyLearning = () => {
  const navigate = useNavigate();
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<EnrolledCourse[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    // Mock enrolled courses data with duration types
    const courses = [
      {
        id: '1',
        title: 'Impressions for Veneers',
        description: 'Master the art of creating precise impressions for veneer procedures.',
        progress: 65,
        duration: '45 min',
        durationType: 'short' as const,
        thumbnail: '/lovable-uploads/a789cbd9-0692-4db5-9658-3da85ff73e3e.png',
        category: 'Restorative',
        lastAccessed: '2 days ago'
      },
      {
        id: '3',
        title: 'Digital Dentistry Workflows',
        description: 'Learn modern digital workflows for enhanced precision.',
        progress: 30,
        duration: '3.5 hrs',
        durationType: 'medium' as const,
        thumbnail: '/lovable-uploads/368c6b6a-e95a-4dd2-b51a-e03063a74279.png',
        category: 'Digital',
        lastAccessed: '1 week ago'
      }
    ];
    
    setEnrolledCourses(courses);
    setFilteredCourses(courses);
  }, [navigate]);

  useEffect(() => {
    if (selectedFilter === 'all') {
      setFilteredCourses(enrolledCourses);
    } else {
      setFilteredCourses(enrolledCourses.filter(course => course.durationType === selectedFilter));
    }
  }, [selectedFilter, enrolledCourses]);

  const handleContinueCourse = (courseId: string) => {
    navigate(`/course-subscription/${courseId}`);
  };

  const getDurationTypeLabel = (durationType: string) => {
    switch (durationType) {
      case 'short':
        return 'Quick CPD';
      case 'medium':
        return 'Core Module';
      case 'long':
        return 'Full Program';
      default:
        return '';
    }
  };

  const getDurationTypeColor = (durationType: string) => {
    switch (durationType) {
      case 'short':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'medium':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'long':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'border-gray-500 text-gray-700 bg-gray-50';
    }
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
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dental-blue mb-4 drop-shadow-sm">
              My Learning Dashboard
            </h1>
            <p className="text-xl text-dental-gray mb-12 drop-shadow-sm max-w-2xl mx-auto">
              Continue your professional development journey
            </p>
            
            {/* Stats with Blue Glow Effect */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/50 transition-all duration-300 hover:shadow-xl">
                {/* Blue glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl opacity-70"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-transparent rounded-xl blur-sm opacity-30"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <BookOpen className="text-dental-blue" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-dental-blue mb-2">2</h3>
                  <p className="text-dental-gray text-base font-medium">Courses Enrolled</p>
                </div>
              </div>
              
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/50 transition-all duration-300 hover:shadow-xl">
                {/* Blue glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl opacity-70"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-transparent rounded-xl blur-sm opacity-30"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <Award className="text-dental-blue" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-dental-blue mb-2">0</h3>
                  <p className="text-dental-gray text-base font-medium">Courses Completed</p>
                </div>
              </div>
              
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/50 transition-all duration-300 hover:shadow-xl">
                {/* Blue glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl opacity-70"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-transparent rounded-xl blur-sm opacity-30"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <Award className="text-dental-blue" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-dental-blue mb-2">0</h3>
                  <p className="text-dental-gray text-base font-medium">Certificates Earned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrolled Courses */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-dental-blue mb-8">Continue Learning</h2>
              
              {/* Course Filter with Browse More Courses button inline */}
              <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <CourseFilter 
                  selectedFilter={selectedFilter}
                  onFilterChange={setSelectedFilter}
                />
                
                <Button 
                  variant="outline"
                  onClick={() => navigate('/courses')}
                  className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 shrink-0"
                >
                  Browse More Courses
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {filteredCourses.map((course, index) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-dental-blue/30 bg-white">
                  <div className="aspect-video relative">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-dental-blue text-white border-none text-sm font-medium px-3 py-1.5 shadow-sm">
                        {course.category}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className={`text-sm font-medium px-3 py-1.5 shadow-sm border ${getDurationTypeColor(course.durationType)}`}
                      >
                        {getDurationTypeLabel(course.durationType)}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button
                        onClick={() => handleContinueCourse(course.id)}
                        className="bg-white text-dental-blue hover:bg-gray-100 font-medium shadow-lg px-6 py-3"
                      >
                        <Play size={18} className="mr-2" />
                        Continue
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4 px-6 pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <CardTitle className="text-2xl text-dental-blue leading-tight pr-4">{course.title}</CardTitle>
                      <Badge variant="outline" className="text-sm text-dental-gray font-medium whitespace-nowrap border-gray-200">
                        <Clock size={14} className="mr-1.5" />
                        {course.duration}
                      </Badge>
                    </div>
                    <p className="text-dental-gray text-base leading-relaxed">{course.description}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0 px-6 pb-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-dental-gray font-medium">Progress</span>
                        <span className="font-semibold text-dental-blue text-lg">{course.progress}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={course.progress} 
                          className="h-3"
                        />
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-dental-gray">Last accessed: {course.lastAccessed}</span>
                        <Button
                          onClick={() => handleContinueCourse(course.id)}
                          size="sm"
                          className="bg-dental-blue hover:bg-dental-blue-dark text-white font-medium px-6 py-2.5 rounded-md shadow-sm"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-16">
                <p className="text-dental-gray text-xl mb-6">No courses found for the selected filter.</p>
                <Button 
                  onClick={() => setSelectedFilter('all')}
                  variant="outline"
                  className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white px-6 py-3"
                >
                  Show All Courses
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyLearning;
