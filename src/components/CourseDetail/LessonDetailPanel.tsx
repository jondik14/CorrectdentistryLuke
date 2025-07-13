
import { useState } from 'react';
import { Download, Award, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';

interface LessonDetailPanelProps {
  currentLesson: {
    id: string;
    title: string;
    number: number;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  };
  downloads: string[];
  isSubscribed: boolean;
  progress: number;
  totalLessons: number;
  onPreviousLesson: () => void;
  onNextLesson: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

const LessonDetailPanel = ({
  currentLesson,
  downloads,
  isSubscribed,
  progress,
  totalLessons,
  onPreviousLesson,
  onNextLesson,
  canGoPrevious,
  canGoNext
}: LessonDetailPanelProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="lesson-detail-panel shadow-lg border-dental-blue/10">
      <CardContent className="p-6">
        {/* Main Lesson Info */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
          {/* Left Side - Lesson Meta */}
          <div className="lesson-meta flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h4 className="lesson-title text-xl font-bold text-dental-blue">
                {currentLesson.number}. {currentLesson.title}
              </h4>
              <Badge className={`difficulty-tag ${getDifficultyColor(currentLesson.difficulty)}`}>
                {currentLesson.difficulty}
              </Badge>
            </div>
            <p className="text-sm text-dental-gray">
              Lesson {currentLesson.number} of {totalLessons} • {progress}% Complete
            </p>
          </div>

          {/* Right Side - Actions */}
          <div className="lesson-actions flex flex-wrap gap-3">
            {isSubscribed ? (
              <>
                {downloads.map((download, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Download size={16} />
                    {download}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 text-dental-blue border-dental-blue hover:bg-dental-blue hover:text-white"
                >
                  <Award size={16} />
                  Answer Quiz
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                size="sm"
                disabled
                className="flex items-center gap-2"
              >
                <Download size={16} />
                Subscribe to Download
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-dental-gray hover:text-dental-blue"
            >
              <HelpCircle size={16} />
              Help
            </Button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="course-navigation-arrows flex items-center justify-between pt-4 border-t border-gray-200">
          <Button
            variant="ghost"
            size="sm"
            onClick={onPreviousLesson}
            disabled={!canGoPrevious}
            className="flex items-center gap-2 text-dental-gray hover:text-dental-blue disabled:opacity-50"
          >
            <ChevronLeft size={16} />
            Previous Lesson
          </Button>

          <div className="flex items-center gap-2 text-sm text-dental-gray">
            <span>{progress}% Complete</span>
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-dental-blue transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onNextLesson}
            disabled={!canGoNext}
            className="flex items-center gap-2 text-dental-gray hover:text-dental-blue disabled:opacity-50"
          >
            Next Lesson
            <ChevronRight size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LessonDetailPanel;
