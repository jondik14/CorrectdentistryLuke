
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
        background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 25%, #60a5fa 50%, #93c5fd 75%, #ffffff 100%)',
        opacity: 1
      }}
    />
  );
};

export default AnimatedGradientBackground;
