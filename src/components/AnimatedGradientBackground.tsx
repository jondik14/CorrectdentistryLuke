
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
      
      p.setup = () => {
        const canvas = p.createCanvas(
          containerRef.current!.offsetWidth,
          containerRef.current!.offsetHeight
        );
        canvas.parent(containerRef.current!);
        p.noLoop(); // We'll use draw() manually for better performance
      };

      p.windowResized = () => {
        if (containerRef.current) {
          p.resizeCanvas(
            containerRef.current.offsetWidth,
            containerRef.current.offsetHeight
          );
        }
      };

      p.draw = () => {
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
        p.draw();
        requestAnimationFrame(animate);
      };
      animate();
    };

    p5InstanceRef.current = new p5(sketch);

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
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
