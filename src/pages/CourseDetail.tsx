import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoPlayer from '../components/CourseDetail/VideoPlayer';
import CoursePreview from '../components/CourseDetail/CoursePreview';
import ChapterList from '../components/CourseDetail/ChapterList';
import CourseInfoSection from '../components/CourseDetail/CourseInfoSection';
import ContentSections from '../components/CourseDetail/ContentSections';
import LessonDetailPanel from '../components/CourseDetail/LessonDetailPanel';
import SubscriptionModal from '../components/SubscriptionModal';
import { BreadcrumbSimple } from '../components/ui/breadcrumb-simple';
import { Lock } from 'lucide-react';
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
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [progress, setProgress] = useState(50); // Mock progress
  const [currentLessonIndex, setCurrentLessonIndex] = useState(1); // Current lesson (0-based)

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

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  const handleNextLesson = () => {
    if (course && currentLessonIndex < course.chapters.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  const currentLesson = {
    id: course.chapters[currentLessonIndex].id,
    title: course.chapters[currentLessonIndex].title,
    number: currentLessonIndex + 1,
    difficulty: (currentLessonIndex < 2 ? 'Beginner' : currentLessonIndex < 4 ? 'Intermediate' : 'Advanced') as 'Beginner' | 'Intermediate' | 'Advanced'
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        {/* Course Locked Warning Banner */}
        {!isSubscribed && (
          <div className="bg-primary/10 border-b border-primary/20 py-3">
            <div className="container mx-auto px-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Lock className="w-4 h-4 text-primary" />
                <p className="text-primary font-medium text-sm">
                  Subscribe to unlock this course and earn CPD credits
                </p>
              </div>
              <Button 
                onClick={handleSubscribe}
                size="sm"
                className="px-6"
              >
                Subscribe & Start Learning
              </Button>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <BreadcrumbSimple 
            onBack={() => navigate('/courses')}
            label="Back to Courses"
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Course Info Section */}
              <CourseInfoSection 
                course={course}
                progress={isSubscribed ? progress : undefined}
                isSubscribed={isSubscribed}
              />

              {/* Video Player */}
              {isSubscribed ? (
                <div className="space-y-4">
                  <VideoPlayer 
                    course={course}
                    progress={progress}
                    onProgressUpdate={setProgress}
                  />
                  
                  {/* Lesson Detail Panel */}
                  <LessonDetailPanel
                    currentLesson={currentLesson}
                    downloads={course.downloads}
                    isSubscribed={isSubscribed}
                    progress={progress}
                    totalLessons={course.chapters.length}
                    onPreviousLesson={handlePreviousLesson}
                    onNextLesson={handleNextLesson}
                    canGoPrevious={currentLessonIndex > 0}
                    canGoNext={currentLessonIndex < course.chapters.length - 1}
                  />
                </div>
              ) : (
                <CoursePreview 
                  course={course}
                  onSubscribe={handleSubscribe}
                />
              )}

              {/* Content Sections */}
              <ContentSections
                learningObjectives={course.learningObjectives}
                downloads={course.downloads}
                testimonials={course.testimonials}
                instructor={course.instructor}
                instructorBio={course.instructorBio}
                cpdHours={course.cpdHours}
                isSubscribed={isSubscribed}
                onSubscribe={handleSubscribe}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ChapterList 
                  chapters={course.chapters}
                  isSubscribed={isSubscribed}
                  onSubscribe={handleSubscribe}
                />
              </div>
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
