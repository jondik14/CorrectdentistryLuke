
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
        
        // Create very subtle moving blob gradients - much slower movement
        p.noStroke();
        
        // Main blue color: #2563eb (37, 99, 235 in RGB) - much more subtle
        const mainBlue = [37, 99, 235];
        
        // Create fewer, larger, more subtle blobs with very slow movement
        for (let i = 0; i < 2; i++) {
          // Much slower movement - reduced speed by ~75%
          const offsetX = p.sin(time * 0.0002 + i * 2) * 60;
          const offsetY = p.cos(time * 0.00015 + i * 1.5) * 40;
          
          const centerX = (p.width / 3) * (i + 1) + offsetX;
          const centerY = p.height * 0.6 + offsetY;
          
          // Create very subtle radial gradient effect for each blob
          const maxRadius = 300 + p.sin(time * 0.0003 + i) * 20;
          
          for (let r = maxRadius; r > 0; r -= 12) {
            // Much lower opacity for subtlety
            const alpha = p.map(r, 0, maxRadius, 6, 0);
            const size = r * 1.8;
            
            p.fill(mainBlue[0], mainBlue[1], mainBlue[2], alpha);
            p.ellipse(centerX, centerY, size, size * 0.7);
          }
        }
        
        // Add one central very subtle accent
        const offsetX = p.cos(time * 0.0001) * 80;
        const offsetY = p.sin(time * 0.00008) * 60;
        
        const centerX = p.width * 0.5 + offsetX;
        const centerY = p.height * 0.4 + offsetY;
        
        const maxRadius = 200;
        
        for (let r = maxRadius; r > 0; r -= 10) {
          const alpha = p.map(r, 0, maxRadius, 4, 0);
          const size = r * 1.2;
          
          p.fill(mainBlue[0], mainBlue[1], mainBlue[2], alpha);
          p.ellipse(centerX, centerY, size, size);
        }
        
        // Much slower time increment - about 50% of original speed
        time += 8;
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
