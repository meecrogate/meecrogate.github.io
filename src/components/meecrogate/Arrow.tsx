
import React from "react";

interface ArrowProps {
  from: { x: number; y: number }; // départ (ex: {x:100,y:80})
  to: { x: number; y: number };   // arrivée (ex: {x:200,y:40})
  className?: string;
}

const Arrow: React.FC<ArrowProps> = ({ from, to, className }) => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  // On dessine une ligne droite avec une flèche à la fin (style gradient moderne)
  return (
    <svg
      className={`pointer-events-none absolute ${className || ""}`}
      style={{
        left: from.x,
        top: from.y,
        width: length,
        height: 40,
        overflow: "visible",
        zIndex: 1
      }}
    >
      <defs>
        <linearGradient id="arrow-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#007AFF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FFB300" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <g transform={`rotate(${angle},0,20)`}>
        <line
          x1={0}
          y1={20}
          x2={length - 20}
          y2={20}
          stroke="url(#arrow-gradient)"
          strokeWidth={5}
          strokeLinecap="round"
        />
        {/* Flèche */}
        <polygon
          points={`${length - 20},12 ${length},20 ${length - 20},28`}
          fill="#FFB300"
          opacity="0.9"
        />
      </g>
    </svg>
  );
};

export default Arrow;
