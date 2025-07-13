
import { Play, Lock } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface Course {
  id: string;
  title: string;
  thumbnail: string;
}

interface CoursePreviewProps {
  course: Course;
  onSubscribe: () => void;
}

const CoursePreview = ({ course, onSubscribe }: CoursePreviewProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* [[UNSUBSCRIBED VIEW]] - Preview Thumbnail */}
      <div className="aspect-video bg-black relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover filter blur-sm"
        />
        
        {/* Preview Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <div className="w-20 h-20 bg-dental-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Subscribe to unlock this course</h3>
            <p className="text-white/80 mb-6">
              Get unlimited access to all courses and earn CPD credits
            </p>
            <Button 
              onClick={onSubscribe}
              className="bg-gradient-to-r from-dental-blue to-dental-blue-dark hover:from-dental-blue-dark hover:to-dental-blue text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Subscribe & Start Learning
            </Button>
          </div>
        </div>

        {/* Preview Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-yellow-500 text-white">
            Free Preview
          </Badge>
        </div>
        
        {/* Play Button (Disabled) */}
        <div className="absolute top-4 right-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-50">
            <Play className="text-white w-6 h-6 ml-1" />
          </div>
        </div>
      </div>

      {/* Preview Benefits */}
      <div className="p-6 bg-dental-blue-light/10 border-t border-dental-blue-light/30">
        <div className="text-center">
          <h4 className="font-semibold text-dental-blue mb-3">What you'll get with a subscription:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-dental-gray">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-dental-blue rounded-full flex-shrink-0"></div>
              <span>Full HD video access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-dental-blue rounded-full flex-shrink-0"></div>
              <span>Downloadable resources</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-dental-blue rounded-full flex-shrink-0"></div>
              <span>CPD certification</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-dental-blue rounded-full flex-shrink-0"></div>
              <span>Mobile app access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
