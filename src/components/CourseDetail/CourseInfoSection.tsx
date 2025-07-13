
import { Clock, Users, Award, Star } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';

interface Course {
  title: string;
  subtitle: string;
  instructor: string;
  rating: number;
  duration: string;
  enrolledCount: number;
  cpdHours: number;
}

interface CourseInfoSectionProps {
  course: Course;
  progress?: number;
  isSubscribed: boolean;
}

const CourseInfoSection = ({ course, progress, isSubscribed }: CourseInfoSectionProps) => {
  const getLevelColor = (duration: string) => {
    // Simple logic based on duration
    const minutes = parseInt(duration);
    if (minutes < 60) return 'bg-green-100 text-green-800';
    if (minutes < 120) return 'bg-blue-100 text-blue-800';
    return 'bg-purple-100 text-purple-800';
  };

  const getDifficultyFromDuration = (duration: string) => {
    const minutes = parseInt(duration);
    if (minutes < 60) return 'Beginner';
    if (minutes < 120) return 'Intermediate';
    return 'Advanced';
  };

  return (
    <div className="space-y-6">
      {/* Course Header */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {course.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {course.subtitle}
            </p>
          </div>
          {isSubscribed && progress !== undefined && (
            <Badge className="bg-green-100 text-green-800 font-semibold">
              {progress}% Complete
            </Badge>
          )}
        </div>

        {/* Metadata Pills */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
          <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">{course.enrolledCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full">
            <Award className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">{course.cpdHours} CPD Hours</span>
          </div>
          <Badge className={`${getLevelColor(course.duration)} text-xs font-semibold`}>
            {getDifficultyFromDuration(course.duration)}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">
          Instructor: <span className="font-medium text-foreground">{course.instructor}</span>
        </p>
      </div>
    </div>
  );
};

export default CourseInfoSection;
