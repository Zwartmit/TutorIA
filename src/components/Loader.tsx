import React, { useEffect, useRef } from 'react';

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
  const node1 = { x: 60 + 40 * Math.cos(rad(angle)), y: 60 + 40 * Math.sin(rad(angle)) };
  const node2 = { x: 60 + 40 * Math.cos(rad(angle + 72)), y: 60 + 40 * Math.sin(rad(angle + 72)) };
  const node3 = { x: 60 + 40 * Math.cos(rad(angle + 144)), y: 60 + 40 * Math.sin(rad(angle + 144)) };
  const node4 = { x: 60 + 40 * Math.cos(rad(angle + 216)), y: 60 + 40 * Math.sin(rad(angle + 216)) };
  const node5 = { x: 60 + 40 * Math.cos(rad(angle + 288)), y: 60 + 40 * Math.sin(rad(angle + 288)) };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 loader-zoom-transition ${zoomingOut ? 'loader-zoom-out' : ''}`}>
      <div className="relative flex flex-col items-center">
        <span className="sr-only">Cargando...</span>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0ff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ee00ff" stopOpacity="0.5" />
            </radialGradient>
            <linearGradient id="neuron" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0ff" />
              <stop offset="1" stopColor="#ee00ff" />
            </linearGradient>
          </defs>
          {/* Conexiones */}
          <line x1={node1.x} y1={node1.y} x2={node2.x} y2={node2.y} stroke="url(#neuron)" strokeWidth="2.5" opacity="0.7" />
          <line x1={node2.x} y1={node2.y} x2={node3.x} y2={node3.y} stroke="url(#neuron)" strokeWidth="2.5" opacity="0.7" />
          <line x1={node3.x} y1={node3.y} x2={node4.x} y2={node4.y} stroke="url(#neuron)" strokeWidth="2.5" opacity="0.7" />
          <line x1={node4.x} y1={node4.y} x2={node5.x} y2={node5.y} stroke="url(#neuron)" strokeWidth="2.5" opacity="0.7" />
          <line x1={node5.x} y1={node5.y} x2={node1.x} y2={node1.y} stroke="url(#neuron)" strokeWidth="2.5" opacity="0.7" />
          {/* Pulsos animados */}
          <circle ref={pulseRef1} r="3" fill="#0ff" filter="url(#glow)" />
          <circle ref={pulseRef2} r="2.5" fill="#ee00ff" filter="url(#glow)" />
          <circle ref={pulseRef3} r="2.5" fill="#0ff" filter="url(#glow)" />
          <circle ref={pulseRef4} r="2.5" fill="#ee00ff" filter="url(#glow)" />
          <circle ref={pulseRef5} r="2" fill="#0ff" filter="url(#glow)" />
          {/* Nodos principales */}
          <circle cx={node1.x} cy={node1.y} r="8" fill="url(#glow)" stroke="url(#neuron)" strokeWidth="2" />
          <circle cx={node2.x} cy={node2.y} r="7" fill="url(#glow)" stroke="url(#neuron)" strokeWidth="2" />
          <circle cx={node3.x} cy={node3.y} r="7" fill="url(#glow)" stroke="url(#neuron)" strokeWidth="2" />
          <circle cx={node4.x} cy={node4.y} r="7" fill="url(#glow)" stroke="url(#neuron)" strokeWidth="2" />
          <circle cx={node5.x} cy={node5.y} r="7" fill="url(#glow)" stroke="url(#neuron)" strokeWidth="2" />
          {/* Nodo central animado */}
          <circle cx="60" cy="60" r="13">
            <animate attributeName="r" values="13;16;13" dur="1.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.7;1" dur="1.4s" repeatCount="indefinite" />
            <animate attributeName="fill" values="#0ff;#ee00ff;#0ff" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
