
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
        background: 'linear-gradient(180deg, #F1F6FF 0%, #E6EEFA 100%)',
        opacity: 1
      }}
    />
  );
};

export default AnimatedGradientBackground;
