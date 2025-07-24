import React, { useEffect, useRef } from 'react';
import logo from '../assets/logo.png';

interface LoaderProps {
  zoomingOut?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ zoomingOut }) => {
  const pulseRef1 = useRef<SVGCircleElement>(null);
  const pulseRef2 = useRef<SVGCircleElement>(null);
  const pulseRef3 = useRef<SVGCircleElement>(null);
  const pulseRef4 = useRef<SVGCircleElement>(null);
  const pulseRef5 = useRef<SVGCircleElement>(null);

  useEffect(() => {
    let animationFrame: number;
    let start: number | null = null;
    const duration = 1200; // ms

    function animatePulse(
      ref: React.RefObject<SVGCircleElement>,
      x1: number, y1: number, x2: number, y2: number,
      delay: number
    ) {
      return (timestamp: number) => {
        if (!start) start = timestamp;
        const elapsed = ((timestamp - start - delay + duration) % duration);
        const t = Math.min(Math.max(elapsed / duration, 0), 1);
        const x = x1 + (x2 - x1) * t;
        const y = y1 + (y2 - y1) * t;
        if (ref.current) {
          ref.current.setAttribute('cx', x.toString());
          ref.current.setAttribute('cy', y.toString());
        }
      };
    }

    function animate(timestamp: number) {
      // Pulsos sobre las conexiones
      animatePulse(pulseRef1, 60, 20, 30, 50, 0)(timestamp);
      animatePulse(pulseRef2, 60, 20, 90, 50, 200)(timestamp);
      animatePulse(pulseRef3, 30, 50, 45, 90, 400)(timestamp);
      animatePulse(pulseRef4, 90, 50, 75, 90, 600)(timestamp);
      animatePulse(pulseRef5, 45, 90, 75, 90, 800)(timestamp);
      animationFrame = requestAnimationFrame(animate);
    }
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Animación de nodos (orbitar)
  const [angle, setAngle] = React.useState(0);
  useEffect(() => {
    let frame: number;
    function animateOrbit() {
      setAngle(a => (a + 1.5) % 360);
      frame = requestAnimationFrame(animateOrbit);
    }
    frame = requestAnimationFrame(animateOrbit);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Cálculo de posiciones orbitales
  const rad = (deg: number) => (deg * Math.PI) / 180;
  // Eliminado: nodos de animación SVG
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black loader-zoom-transition ${zoomingOut ? 'loader-zoom-out' : ''}`}>
      <div className="relative flex flex-col items-center">
        <span className="sr-only">Cargando...</span>
        <img
          src={logo}
          alt="Logo TutorIA"
          className="w-28 h-28 rounded-full"
          style={{ 
            animation: 'cube-rotate 2s linear infinite',
            filter: 'drop-shadow(0 0 8px #349de9) drop-shadow(0 0 3px #1f6ae1)'
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
