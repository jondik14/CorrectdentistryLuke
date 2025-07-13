
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoPlayer from '../components/CourseDetail/VideoPlayer';
import CoursePreview from '../components/CourseDetail/CoursePreview';
import ChapterList from '../components/CourseDetail/ChapterList';
import CourseInfo from '../components/CourseDetail/CourseInfo';
import SubscriptionModal from '../components/SubscriptionModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Star, Clock, Users, Award } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  subtitle: string;
  instructor: string;
  instructorBio: string;
  rating: number;
  duration: string;
  enrolledCount: number;
  thumbnail: string;
  chapters: Chapter[];
  learningObjectives: string[];
  testimonials: Testimonial[];
  cpdHours: number;
  downloads: string[];
}

interface Chapter {
  id: string;
  title: string;
  duration: string;
  isCompleted?: boolean;
}

interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [progress, setProgress] = useState(50); // Mock progress

  useEffect(() => {
    // Check login and subscription status
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const subscribed = localStorage.getItem('isSubscribed') === 'true';
    setIsLoggedIn(loggedIn);
    setIsSubscribed(subscribed);

    // Mock course data
    const mockCourse: Course = {
      id: courseId || '1',
      title: 'Impressions for Veneers',
      subtitle: 'Master precision techniques for optimal aesthetic outcomes',
      instructor: 'Dr. Sarah Mitchell',
      instructorBio: 'Dr. Sarah Mitchell is a leading prosthodontist with 15+ years of experience in cosmetic dentistry. She has trained hundreds of dentists worldwide and is known for her innovative approach to veneer procedures.',
      rating: 4.8,
      duration: '2h 15m',
      enrolledCount: 1247,
      thumbnail: '/lovable-uploads/a789cbd9-0692-4db5-9658-3da85ff73e3e.png',
      cpdHours: 2,
      chapters: [
        { id: '1', title: 'Introduction to Veneer Impressions', duration: '8:45', isCompleted: true },
        { id: '2', title: 'Material Selection and Preparation', duration: '12:30', isCompleted: true },
        { id: '3', title: 'Advanced Impression Techniques', duration: '15:20', isCompleted: false },
        { id: '4', title: 'Common Mistakes and Solutions', duration: '8:57', isCompleted: false },
        { id: '5', title: 'Case Studies and Examples', duration: '18:33', isCompleted: false },
      ],
      learningObjectives: [
        'Master advanced impression techniques for optimal veneer fit',
        'Select appropriate materials for different clinical scenarios',
        'Troubleshoot common impression issues effectively',
        'Apply evidence-based protocols in your practice',
        'Achieve predictable aesthetic outcomes',
        'Understand patient communication strategies'
      ],
      testimonials: [
        {
          id: '1',
          name: 'Dr. James Rodriguez',
          text: 'This course completely transformed my approach to veneer impressions. The techniques are practical and immediately applicable.',
          rating: 5
        },
        {
          id: '2', 
          name: 'Dr. Emily Chen',
          text: 'Excellent content and presentation. I\'ve already implemented these methods with great success.',
          rating: 5
        }
      ],
      downloads: [
        'Impression Protocol Checklist',
        'Material Selection Guide',
        'Patient Communication Templates',
        'Troubleshooting Reference Card'
      ]
    };
    setCourse(mockCourse);
  }, [courseId]);

  const handleSubscribe = () => {
    setShowSubscriptionModal(true);
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        {/* [[UNSUBSCRIBED VIEW]] - Preview Banner */}
        {!isSubscribed && (
          <div className="bg-dental-blue-light/20 border-b border-dental-blue-light/30 py-3">
            <div className="container mx-auto px-4 text-center">
              <p className="text-dental-blue font-medium">
                You're viewing a preview. Subscribe to access the full course and earn CPD credit.
              </p>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 py-8">
          {/* Course Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-bold text-dental-blue mb-2">
                  {course.title}
                </h1>
                <p className="text-lg text-dental-gray mb-4">{course.subtitle}</p>
                
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-5 h-5 text-dental-blue" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-5 h-5 text-dental-blue" />
                    <span>{course.enrolledCount.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-5 h-5 text-dental-blue" />
                    <span>{course.cpdHours} CPD Hours</span>
                  </div>
                </div>

                <p className="text-dental-gray">
                  Instructor: <span className="font-medium">{course.instructor}</span>
                </p>
              </div>

              {/* [[SUBSCRIBED VIEW]] - Progress Badge */}
              {isSubscribed && (
                <div className="flex flex-col items-end gap-2">
                  <Badge className="bg-green-100 text-green-800">
                    {progress}% Complete
                  </Badge>
                </div>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* [[SUBSCRIBED VIEW]] - Video Player */}
              {isSubscribed ? (
                <VideoPlayer 
                  course={course}
                  progress={progress}
                  onProgressUpdate={setProgress}
                />
              ) : (
                /* [[UNSUBSCRIBED VIEW]] - Course Preview */
                <CoursePreview 
                  course={course}
                  onSubscribe={handleSubscribe}
                />
              )}

              {/* Course Information Tabs */}
              <div className="mt-8">
                <Tabs defaultValue="learn" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="learn">What You'll Learn</TabsTrigger>
                    <TabsTrigger value="downloads">Downloads</TabsTrigger>
                    <TabsTrigger value="testimonials">Reviews</TabsTrigger>
                    <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="learn" className="mt-6">
                    <CourseInfo.LearningObjectives objectives={course.learningObjectives} />
                  </TabsContent>
                  
                  <TabsContent value="downloads" className="mt-6">
                    <CourseInfo.Downloads 
                      downloads={course.downloads} 
                      cpdHours={course.cpdHours}
                      isSubscribed={isSubscribed}
                    />
                  </TabsContent>
                  
                  <TabsContent value="testimonials" className="mt-6">
                    <CourseInfo.Testimonials testimonials={course.testimonials} />
                  </TabsContent>
                  
                  <TabsContent value="instructor" className="mt-6">
                    <CourseInfo.InstructorBio 
                      instructor={course.instructor}
                      bio={course.instructorBio}
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* [[SUBSCRIBED VIEW]] / [[UNSUBSCRIBED VIEW]] - Sidebar */}
            <div className="lg:col-span-1">
              <ChapterList 
                chapters={course.chapters}
                isSubscribed={isSubscribed}
                onSubscribe={handleSubscribe}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
        courseTitle={course.title}
      />
    </div>
  );
};

export default CourseDetail;
