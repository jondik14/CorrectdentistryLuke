
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
        background: 'linear-gradient(135deg, #475569 0%, #64748b 20%, #94a3b8 40%, #cbd5e1 60%, #e2e8f0 80%, #ffffff 100%)',
        opacity: 0.7
      }}
    />
  );
};

export default AnimatedGradientBackground;
