
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Info } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CourseFilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const CourseFilter = ({ selectedFilter, onFilterChange }: CourseFilterProps) => {
  const filterOptions = [
    { value: 'all', label: 'All Courses' },
    { value: 'short', label: 'Quick CPD' },
    { value: 'medium', label: 'Core Module' },
    { value: 'long', label: 'Full Program' }
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
      <div className="flex items-center gap-3">
        <span className="text-base font-medium text-dental-gray">Filter by course type:</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 text-dental-gray hover:text-dental-blue transition-colors rounded-full hover:bg-gray-100">
              <Info size={18} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80 p-4 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
            <div className="space-y-3">
              <h4 className="font-semibold text-dental-blue mb-3">Course Duration Types</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <strong>Quick CPD:</strong> Short 5–20 min knowledge refreshers
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <strong>Core Module:</strong> Medium 3–4 hour CPD content
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <strong>Full Program:</strong> In-depth 18+ hour structured learning
                  </div>
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <Tabs value={selectedFilter} onValueChange={onFilterChange} className="w-full sm:w-auto">
        <TabsList className="grid w-full grid-cols-4 bg-gray-50/80 p-1 h-12 border border-gray-200">
          {filterOptions.map((option) => (
            <TabsTrigger
              key={option.value}
              value={option.value}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md
                data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border-dental-blue/20
                ${selectedFilter === option.value 
                  ? 'text-dental-blue bg-white shadow-sm' 
                  : 'text-dental-gray hover:text-dental-blue hover:bg-white/60'
                }`}
            >
              {option.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default CourseFilter;
