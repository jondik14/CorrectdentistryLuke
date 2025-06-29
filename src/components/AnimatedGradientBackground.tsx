
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
        
        // Create a subtle moving gradient
        for (let y = 0; y < p.height; y += 4) {
          for (let x = 0; x < p.width; x += 4) {
            // Calculate distance from center for radial effect
            const centerX = p.width * 0.5;
            const centerY = p.height * 0.4;
            const dist = p.dist(x, y, centerX, centerY);
            
            // Create subtle wave motion
            const wave1 = p.sin(time * 0.001 + dist * 0.005) * 10;
            const wave2 = p.cos(time * 0.0015 + x * 0.01) * 5;
            const wave3 = p.sin(time * 0.002 + y * 0.008) * 8;
            
            // Base blue color with subtle variations
            const baseHue = 210;
            const hueVariation = wave1 + wave2 + wave3;
            const finalHue = baseHue + hueVariation * 0.5;
            
            // Saturation and brightness variations
            const saturation = 85 + wave1 * 0.3;
            const brightness = 65 + (wave2 + wave3) * 0.2;
            
            p.colorMode(p.HSB, 360, 100, 100, 100);
            p.fill(finalHue, saturation, brightness, 80);
            p.noStroke();
            p.rect(x, y, 4, 4);
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
