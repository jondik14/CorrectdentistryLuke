
import { ChevronLeft } from 'lucide-react';
import { Button } from './button';

interface BreadcrumbSimpleProps {
  onBack: () => void;
  label: string;
}

export const BreadcrumbSimple = ({ onBack, label }: BreadcrumbSimpleProps) => {
  return (
    <Button
      variant="ghost"
      onClick={onBack}
      className="text-muted-foreground hover:text-foreground mb-4 p-0 h-auto font-normal"
    >
      <ChevronLeft className="w-4 h-4 mr-1" />
      {label}
    </Button>
  );
};
