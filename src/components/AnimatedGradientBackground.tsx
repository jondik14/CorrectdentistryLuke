
import { useEffect, useRef } from 'react';
import p5 from 'p5';

interface AnimatedGradientBackgroundProps {
  className?: string;
}

const AnimatedGradientBackground = ({ className = '' }: AnimatedGradientBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let time = 0;
      let isSetup = false;
      
      p.setup = () => {
        if (!containerRef.current) return;
        
        const canvas = p.createCanvas(
          containerRef.current.offsetWidth || 800,
          containerRef.current.offsetHeight || 400
        );
        canvas.parent(containerRef.current);
        isSetup = true;
      };

      p.windowResized = () => {
        if (containerRef.current && isSetup) {
          p.resizeCanvas(
            containerRef.current.offsetWidth || 800,
            containerRef.current.offsetHeight || 400
          );
        }
      };

      p.draw = () => {
        if (!isSetup || !p.width || !p.height) return;
        
        // White background
        p.background(255, 255, 255);
        
        // Create subtle moving blob gradients
        p.noStroke();
        
        // Main blue color: #2563eb (37, 99, 235 in RGB)
        const mainBlue = [37, 99, 235];
        
        // Create multiple moving blobs
        for (let i = 0; i < 3; i++) {
          const offsetX = p.sin(time * 0.0008 + i * 2) * 100;
          const offsetY = p.cos(time * 0.0006 + i * 1.5) * 80;
          
          const centerX = (p.width / 4) * (i + 1) + offsetX;
          const centerY = p.height * 0.5 + offsetY;
          
          // Create radial gradient effect for each blob
          const maxRadius = 200 + p.sin(time * 0.001 + i) * 30;
          
          for (let r = maxRadius; r > 0; r -= 8) {
            const alpha = p.map(r, 0, maxRadius, 15, 0);
            const size = r * 2;
            
            p.fill(mainBlue[0], mainBlue[1], mainBlue[2], alpha);
            p.ellipse(centerX, centerY, size, size * 0.8);
          }
        }
        
        // Add some smaller moving accents
        for (let i = 0; i < 2; i++) {
          const offsetX = p.cos(time * 0.001 + i * 3) * 150;
          const offsetY = p.sin(time * 0.0012 + i * 2.5) * 100;
          
          const centerX = p.width * 0.3 + offsetX;
          const centerY = p.height * 0.7 + offsetY;
          
          const maxRadius = 120;
          
          for (let r = maxRadius; r > 0; r -= 6) {
            const alpha = p.map(r, 0, maxRadius, 8, 0);
            const size = r * 1.5;
            
            p.fill(mainBlue[0], mainBlue[1], mainBlue[2], alpha);
            p.ellipse(centerX, centerY, size, size * 1.2);
          }
        }
        
        time += 16; // Increment time for animation
      };

      // Animation loop
      const animate = () => {
        if (isSetup) {
          p.draw();
        }
        requestAnimationFrame(animate);
      };
      animate();
    };

    try {
      p5InstanceRef.current = new p5(sketch);
    } catch (error) {
      console.error('Error initializing p5.js:', error);
    }

    return () => {
      if (p5InstanceRef.current) {
        try {
          p5InstanceRef.current.remove();
        } catch (error) {
          console.error('Error removing p5.js instance:', error);
        }
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};

export default AnimatedGradientBackground;
