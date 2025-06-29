
import { useEffect, useRef } from 'react';

interface AnimatedGradientBackgroundProps {
  className?: string;
}

const AnimatedGradientBackground = ({ className = '' }: AnimatedGradientBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 ${className}`}
      style={{ 
        zIndex: 1,
        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 20%, #cbd5e1 40%, #94a3b8 70%, #64748b 100%)',
        opacity: 0.6
      }}
    />
  );
};

export default AnimatedGradientBackground;
