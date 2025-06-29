
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Info } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
    { value: 'all', label: 'All', count: '2 courses' },
    { value: 'short', label: 'Quick CPD', count: '5-20 min', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { value: 'medium', label: 'Core Module', count: '3-4 hrs', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    { value: 'long', label: 'Full Program', count: '18+ hrs', color: 'bg-blue-50 text-blue-700 border-blue-200' }
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-dental-gray">Filter by course type:</span>
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
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <strong>Quick CPD:</strong> Short 5–20 min knowledge refreshers
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <strong>Core Module:</strong> Medium 3–4 hour CPD content
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <strong>Full Program:</strong> In-depth 18+ hour structured learning
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <Tabs value={selectedFilter} onValueChange={onFilterChange} className="w-full sm:w-auto">
        <TabsList className="grid w-full grid-cols-4 bg-gray-50 p-1 h-auto">
          {filterOptions.map((option) => (
            <TabsTrigger
              key={option.value}
              value={option.value}
              className={`flex flex-col items-center gap-1 px-3 py-3 text-sm font-medium transition-all duration-200 data-[state=active]:bg-white data-[state=active]:shadow-sm ${
                option.value === selectedFilter ? 'text-dental-blue' : 'text-dental-gray'
              }`}
            >
              <span className="font-semibold">{option.label}</span>
              {option.count && (
                <Badge 
                  variant="outline" 
                  className={`text-xs px-2 py-0.5 ${
                    option.color || 'border-gray-300 text-gray-600'
                  }`}
                >
                  {option.count}
                </Badge>
              )}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default CourseFilter;
