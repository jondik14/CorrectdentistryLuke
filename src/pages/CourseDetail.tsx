import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoPlayer from '../components/CourseDetail/VideoPlayer';
import CoursePreview from '../components/CourseDetail/CoursePreview';
import ChapterList from '../components/CourseDetail/ChapterList';
import CourseInfo from '../components/CourseDetail/CourseInfo';
import SubscriptionModal from '../components/SubscriptionModal';
import { Badge } from '../components/ui/badge';
import { Star, Clock, Users, Award, Lock } from 'lucide-react';
import { Button } from '../components/ui/button';

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
        {/* [[PRE-SUBSCRIPTION STATE]] - Course Locked Warning Banner */}
        {!isSubscribed && (
          <div 
            className="course-lock-warning bg-dental-blue-light/20 border-b border-dental-blue-light/30 py-4"
            data-testid="course-locked-warning"
          >
            <div className="container mx-auto px-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-dental-blue" />
                <p className="text-dental-blue font-medium">
                  Subscribe to unlock this course and earn CPD credits
                </p>
              </div>
              <Button 
                onClick={handleSubscribe}
                className="cta-subscribe bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white px-8 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                data-testid="subscribe-button-locked"
              >
                Subscribe & Start Learning
              </Button>
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

              {/* [[POST-SUBSCRIPTION STATE]] - Progress Badge */}
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
              {/* [[POST-SUBSCRIPTION STATE]] - Video Player */}
              {isSubscribed ? (
                <div className="course-player" data-testid="course-video-player">
                  <VideoPlayer 
                    course={course}
                    progress={progress}
                    onProgressUpdate={setProgress}
                  />
                </div>
              ) : (
                /* [[PRE-SUBSCRIPTION STATE]] - Course Preview */
                <CoursePreview 
                  course={course}
                  onSubscribe={handleSubscribe}
                />
              )}

              {/* Continuous Scrollable Sections - No Tabs */}
              <div className="mt-8 space-y-12">
                {/* What You'll Learn Section */}
                <section id="what-youll-learn" data-testid="scroll-section-learn">
                  <h2 className="text-2xl font-bold text-dental-blue mb-6">What You'll Learn</h2>
                  <CourseInfo.LearningObjectives objectives={course.learningObjectives} />
                </section>
                
                {/* Downloads Section */}
                <section id="downloads" data-testid="scroll-section-downloads">
                  <h2 className="text-2xl font-bold text-dental-blue mb-6">Downloads & CPD</h2>
                  <CourseInfo.Downloads 
                    downloads={course.downloads} 
                    cpdHours={course.cpdHours}
                    isSubscribed={isSubscribed}
                  />
                </section>
                
                {/* Reviews Section */}
                <section id="reviews" data-testid="scroll-section-reviews">
                  <h2 className="text-2xl font-bold text-dental-blue mb-6">Student Reviews</h2>
                  <CourseInfo.Testimonials testimonials={course.testimonials} />
                </section>
                
                {/* Instructor Section */}
                <section id="instructor" data-testid="scroll-section-instructor">
                  <h2 className="text-2xl font-bold text-dental-blue mb-6">About the Instructor</h2>
                  <CourseInfo.InstructorBio 
                    instructor={course.instructor}
                    bio={course.instructorBio}
                  />
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {isSubscribed ? (
                /* [[POST-SUBSCRIPTION STATE]] - Unlocked Chapter List */
                <div className="user-progress" data-testid="user-chapter-progress">
                  <ChapterList 
                    chapters={course.chapters}
                    isSubscribed={isSubscribed}
                    onSubscribe={handleSubscribe}
                  />
                </div>
              ) : (
                /* [[PRE-SUBSCRIPTION STATE]] - Locked Chapter List */
                <ChapterList 
                  chapters={course.chapters}
                  isSubscribed={isSubscribed}
                  onSubscribe={handleSubscribe}
                />
              )}
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
