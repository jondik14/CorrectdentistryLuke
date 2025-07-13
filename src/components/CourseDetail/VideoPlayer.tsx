
import { useState } from 'react';
import { Play, Pause, Volume2, Maximize, RotateCcw } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface Course {
  id: string;
  title: string;
  thumbnail: string;
  chapters: Chapter[];
}

interface Chapter {
  id: string;
  title: string;
  duration: string;
  isCompleted?: boolean;
}

interface VideoPlayerProps {
  course: Course;
  progress: number;
  onProgressUpdate: (progress: number) => void;
}

const VideoPlayer = ({ course, progress, onProgressUpdate }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('12:34');
  const [totalTime] = useState('25:20');

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMarkComplete = () => {
    onProgressUpdate(100);
  };

  const handleResumeLearning = () => {
    setIsPlaying(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* [[SUBSCRIBED VIEW]] - Video Player */}
      <div className="aspect-video bg-black relative group">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        
        {/* Video Controls Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              {isPlaying ? (
                <Pause className="text-white w-8 h-8" />
              ) : (
                <Play className="text-white w-8 h-8 ml-1" />
              )}
            </button>
          </div>
          
          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-1 mb-3">
              <div 
                className="bg-dental-blue h-1 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={handlePlayPause} className="text-white hover:text-dental-blue-light transition-colors">
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <button className="text-white hover:text-dental-blue-light transition-colors">
                  <Volume2 size={20} />
                </button>
                <span className="text-white text-sm">
                  {currentTime} / {totalTime}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="text-white hover:text-dental-blue-light transition-colors">
                  <RotateCcw size={20} />
                </button>
                <button className="text-white hover:text-dental-blue-light transition-colors">
                  <Maximize size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-black/60 text-white">
            Chapter 2 of 5
          </Badge>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 border-t border-gray-200 bg-gray-50/50">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={handleResumeLearning}
            className="flex-1 bg-dental-blue hover:bg-dental-blue-dark text-white"
          >
            {progress < 100 ? 'Resume Learning' : 'Rewatch Course'}
          </Button>
          
          {progress < 100 && (
            <Button 
              onClick={handleMarkComplete}
              variant="outline"
              className="flex-1 border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white"
            >
              Mark as Complete
            </Button>
          )}
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-dental-gray">
            Progress: {progress}% • {progress === 100 ? 'Course Complete!' : `${Math.round(progress/20)} of 5 chapters completed`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
