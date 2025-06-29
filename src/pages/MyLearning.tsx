
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { BookOpen, Clock, Award, Play } from 'lucide-react';

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
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dental-blue mb-4">
              My Learning Dashboard
            </h1>
            <p className="text-xl text-dental-gray mb-8">
              Continue your professional development journey
            </p>
            
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-dental-blue-light p-6 rounded-xl">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="text-dental-blue" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-dental-blue">2</h3>
                <p className="text-dental-gray">Courses Enrolled</p>
              </div>
              <div className="bg-dental-blue-light p-6 rounded-xl">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="text-dental-blue" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-dental-blue">3.2</h3>
                <p className="text-dental-gray">Hours Completed</p>
              </div>
              <div className="bg-dental-blue-light p-6 rounded-xl">
                <div className="flex items-center justify-center mb-2">
                  <Award className="text-dental-blue" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-dental-blue">1</h3>
                <p className="text-dental-gray">Certificates Earned</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrolled Courses */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-dental-blue">Continue Learning</h2>
              <Button 
                onClick={() => navigate('/courses')}
                variant="outline" 
                className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white"
              >
                Browse More Courses
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video relative">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-dental-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                        {course.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button
                        onClick={() => handleContinueCourse(course.id)}
                        className="bg-white text-dental-blue hover:bg-gray-100"
                      >
                        <Play size={16} className="mr-2" />
                        Continue
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl text-dental-blue">{course.title}</CardTitle>
                      <span className="text-sm text-dental-gray">{course.duration}</span>
                    </div>
                    <p className="text-dental-gray text-sm">{course.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-dental-gray">Progress</span>
                        <span className="font-medium text-dental-blue">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <div className="flex items-center justify-between text-sm text-dental-gray">
                        <span>Last accessed: {course.lastAccessed}</span>
                        <Button
                          onClick={() => handleContinueCourse(course.id)}
                          size="sm"
                          className="bg-dental-blue hover:bg-dental-blue-dark"
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
