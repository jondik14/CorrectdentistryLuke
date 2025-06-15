
import { X, Clock, Users, CheckCircle, Play, Award, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  enrolled: string;
  thumbnail: string;
  category: string;
  level: string;
}

interface CourseDetailModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
}

const CourseDetailModal = ({ course, isOpen, onClose }: CourseDetailModalProps) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const learningOutcomes = [
    'Master advanced clinical techniques used by specialists',
    'Gain confidence in complex procedure execution',
    'Learn evidence-based best practices and protocols',
    'Access to downloadable resources and templates',
    'Certificate of completion for CPD requirements'
  ];

  const handleSubscribe = () => {
    navigate(`/course-subscription/${course.id}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
        >
          <X size={20} />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Course Image */}
          <div className="lg:w-1/2 relative">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-64 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute top-6 left-6">
              <span className="bg-dental-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                {course.category}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span className="text-sm">{course.enrolled} enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} />
                  <span className="text-sm">{course.level}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Course Details */}
          <div className="lg:w-1/2 p-8 lg:p-10 overflow-y-auto">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-3xl font-bold text-dental-blue mb-3">
                  {course.title}
                </h2>
                <p className="text-lg text-dental-gray leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Course Features */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-dental-blue-light/20 rounded-lg">
                  <Play className="text-dental-blue" size={20} />
                  <span className="text-dental-blue font-medium">On-demand video content</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-dental-blue-light/20 rounded-lg">
                  <BookOpen className="text-dental-blue" size={20} />
                  <span className="text-dental-blue font-medium">Downloadable resources</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-dental-blue-light/20 rounded-lg">
                  <Award className="text-dental-blue" size={20} />
                  <span className="text-dental-blue font-medium">CPD certificate included</span>
                </div>
              </div>

              {/* Learning Outcomes */}
              <div>
                <h3 className="text-xl font-semibold text-dental-blue mb-4">
                  What You'll Learn
                </h3>
                <ul className="space-y-3">
                  {learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-dental-gray leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Section */}
              <div className="pt-6 border-t">
                <Button
                  onClick={handleSubscribe}
                  className="w-full h-14 text-lg font-semibold bg-dental-blue hover:bg-dental-blue-dark"
                >
                  Subscribe to Access Course
                </Button>
                <p className="text-sm text-dental-gray text-center mt-3">
                  30-day money-back guarantee • Instant access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailModal;
