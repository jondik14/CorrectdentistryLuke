
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Info } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface CourseFilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const CourseFilter = ({ selectedFilter, onFilterChange }: CourseFilterProps) => {
  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'short', label: 'Quick CPD' },
    { value: 'medium', label: 'Core Module' },
    { value: 'long', label: 'Full Program' }
  ];

  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-dental-gray">Filter by duration:</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1 text-dental-gray hover:text-dental-blue transition-colors">
              <Info size={16} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80 p-4 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
            <div className="space-y-3">
              <h4 className="font-semibold text-dental-blue mb-2">Course Duration Types</h4>
              <div className="space-y-2 text-sm">
                <div><strong>Quick CPD:</strong> Short 5–15 min knowledge refreshers</div>
                <div><strong>Core Module:</strong> Medium 3–4 hour CPD content</div>
                <div><strong>Full Program:</strong> In-depth 12–18+ hour long-form content</div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="flex gap-2">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onFilterChange(option.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedFilter === option.value
                ? 'bg-dental-blue text-white shadow-sm'
                : 'bg-white border border-gray-200 text-dental-gray hover:border-dental-blue hover:text-dental-blue'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseFilter;
