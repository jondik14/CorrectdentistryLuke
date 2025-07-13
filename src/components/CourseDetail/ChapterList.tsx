
import { Lock, Play, CheckCircle, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';

interface Chapter {
  id: string;
  title: string;
  duration: string;
  isCompleted?: boolean;
}

interface ChapterListProps {
  chapters: Chapter[];
  isSubscribed: boolean;
  onSubscribe: () => void;
}

const ChapterList = ({ chapters, isSubscribed, onSubscribe }: ChapterListProps) => {
  return (
    <Card className="border-2 border-dental-blue/20">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          {isSubscribed ? (
            <>
              <Play size={18} className="text-dental-blue" />
              Course Content
            </>
          ) : (
            <>
              <Lock size={18} className="text-dental-blue" />
              Course Content
            </>
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0">
        <ScrollArea className="h-[400px]">
          <div className="space-y-1 p-6 pt-0">
            {chapters.map((chapter, index) => (
              <div
                key={chapter.id}
                className={`group flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                  isSubscribed
                    ? 'bg-white hover:bg-dental-blue-light/10 border-gray-200 hover:border-dental-blue/30 cursor-pointer'
                    : 'bg-gray-50/80 text-gray-400 cursor-not-allowed border-gray-200 opacity-70'
                }`}
              >
                {/* [[UNSUBSCRIBED VIEW]] - Locked Overlay */}
                {!isSubscribed && (
                  <div className="absolute inset-0 bg-yellow-50/30 rounded-lg border border-yellow-200/50" />
                )}
                
                <div className="flex items-center gap-3 flex-1 min-w-0 relative z-10">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center">
                    {isSubscribed ? (
                      chapter.isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <span className="text-xs font-medium text-dental-blue bg-dental-blue-light/20 w-6 h-6 rounded-full flex items-center justify-center">
                          {index + 1}
                        </span>
                      )
                    ) : (
                      <span className="text-xs font-medium text-gray-400">
                        {index + 1}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className={`font-medium text-sm truncate transition-colors ${
                      isSubscribed 
                        ? chapter.isCompleted 
                          ? 'text-green-700' 
                          : 'text-dental-gray group-hover:text-dental-blue'
                        : 'text-gray-400'
                    }`}>
                      {chapter.title}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock size={12} className={isSubscribed ? 'text-dental-gray' : 'text-gray-400'} />
                      <span className={`text-xs ${isSubscribed ? 'text-dental-gray' : 'text-gray-400'}`}>
                        {chapter.duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0 relative z-10">
                  {isSubscribed ? (
                    chapter.isCompleted ? (
                      <CheckCircle size={14} className="text-green-500" />
                    ) : (
                      <Play size={14} className="text-dental-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                    )
                  ) : (
                    <Lock size={14} className="text-gray-400" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        {/* [[UNSUBSCRIBED VIEW]] - Subscribe CTA */}
        {!isSubscribed && (
          <div className="p-6 pt-4 border-t border-gray-200">
            <Button
              onClick={onSubscribe}
              className="w-full bg-dental-blue text-white hover:bg-dental-blue-dark"
            >
              Subscribe to Unlock
            </Button>
            <p className="text-xs text-dental-gray text-center mt-2">
              Get access to all {chapters.length} chapters
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ChapterList;
