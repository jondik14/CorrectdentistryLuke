
import { CheckCircle, Award, Download, User, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

interface ContentSectionsProps {
  learningObjectives: string[];
  downloads: string[];
  testimonials: Array<{
    id: string;
    name: string;
    text: string;
    rating: number;
  }>;
  instructor: string;
  instructorBio: string;
  cpdHours: number;
  isSubscribed: boolean;
  onSubscribe: () => void;
}

const ContentSections = ({
  learningObjectives,
  downloads,
  testimonials,
  instructor,
  instructorBio,
  cpdHours,
  isSubscribed,
  onSubscribe
}: ContentSectionsProps) => {
  return (
    <div className="space-y-6">
      {/* What You'll Learn */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold text-primary">What You'll Learn</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {learningObjectives.map((objective, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{objective}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Downloads & Resources */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold">Downloads & Resources</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <Award className="w-5 h-5 text-primary" />
            <div>
              <div className="font-medium text-sm">{cpdHours} Hours CPD Certificate</div>
              <div className="text-xs text-muted-foreground">Continuing education credit</div>
            </div>
          </div>
          
          {isSubscribed ? (
            <div className="space-y-2">
              {downloads.map((download, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Download className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{download}</span>
                  </div>
                  <Button size="sm" variant="outline">Download</Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-4">
              <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-3">
                Additional resources available after subscription
              </p>
              <Button onClick={onSubscribe} size="sm">
                Subscribe to Access
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Student Reviews */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold">Student Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          {testimonials.length > 0 ? (
            <div className="space-y-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="border-l-2 border-primary/20 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-sm">{testimonial.name}</span>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <CheckCircle key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-4">
              Reviews will be displayed here.
            </p>
          )}
        </CardContent>
      </Card>

      {/* About the Instructor */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold">About the Instructor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">{instructor}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{instructorBio}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Subscription CTA */}
      {!isSubscribed && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Lock className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Subscribe to Unlock This Course</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Get unlimited access to all CPD content and earn certificates.
            </p>
            <div className="space-y-3">
              <Button onClick={onSubscribe} size="lg" className="px-8">
                Subscribe & Start Learning
              </Button>
              <p className="text-xs text-muted-foreground">
                30-day money-back guarantee • Cancel anytime
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ContentSections;
