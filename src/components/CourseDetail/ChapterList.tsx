
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
    <Card className="border-2 border-dental-blue/20 shadow-sm">
      <CardHeader className="pb-3">
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
          <div className="space-y-1 px-6">
            <ul className="chapter-list" data-testid={isSubscribed ? "unlocked-chapter-list" : "locked-chapter-list"}>
              {chapters.map((chapter, index) => (
                <li key={chapter.id}>
                  <div
                    className={`chapter-item group flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                      isSubscribed
                        ? 'bg-white hover:bg-dental-blue-light/20 hover:border-dental-blue/50 border-gray-200 cursor-pointer hover:shadow-sm'
                        : 'bg-[#F0F6FF] border-[#EAF3FF] cursor-not-allowed opacity-80'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0 relative z-10">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center">
                        {isSubscribed ? (
                          chapter.isCompleted ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <span className="text-xs font-semibold text-dental-blue bg-dental-blue-light/30 w-6 h-6 rounded-full flex items-center justify-center">
                              {index + 1}
                            </span>
                          )
                        ) : (
                          <span className="text-xs font-medium text-dental-blue/60">
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
                            : 'text-dental-blue/70'
                        }`}>
                          {chapter.title}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock size={12} className={isSubscribed ? 'text-dental-gray' : 'text-dental-blue/60'} />
                          <span className={`text-xs font-medium ${isSubscribed ? 'text-dental-gray' : 'text-dental-blue/60'}`}>
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
                          <Play size={14} className="text-dental-blue opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        )
                      ) : (
                        <Lock size={14} className="text-dental-blue/60" />
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
        
        {/* Subscribe CTA with reduced spacing */}
        {!isSubscribed && (
          <div className="px-6 py-4 border-t border-gray-200">
            <Button
              onClick={onSubscribe}
              className="subscribe-button w-full bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Subscribe to Unlock
            </Button>
            <p className="text-xs text-dental-gray text-center mt-2 font-medium">
              Get access to all {chapters.length} chapters
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ChapterList;
