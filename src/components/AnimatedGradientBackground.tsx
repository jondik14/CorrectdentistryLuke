
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
        background: 'linear-gradient(135deg, #64748b 0%, #94a3b8 25%, #cbd5e1 50%, #e2e8f0 75%, #ffffff 100%)',
        opacity: 0.6
      }}
    />
  );
};

export default AnimatedGradientBackground;
