import React from 'react';

interface WaveAnimationProps {
  riskPercentage: number;
}

export const WaveAnimation: React.FC<WaveAnimationProps> = ({
  riskPercentage,
}) => {
  // Determine color based on risk percentage
  const getWaveColor = () => {
    if (riskPercentage < 30) {
      return 'rgba(59, 130, 246, 0.5)'; // blue
    } else if (riskPercentage < 70) {
      return 'rgba(249, 115, 22, 0.5)'; // orange
    } else {
      return 'rgba(239, 68, 68, 0.5)'; // red
    }
  };

  // Calculate height based on risk percentage
  const height = `${Math.min(85, riskPercentage)}%`;
  const color = getWaveColor();

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <div
        className="absolute bottom-0 left-0 w-full transition-all duration-1000 ease-in-out"
        style={{
          height,
          background: color,
          borderTopLeftRadius: '100%',
          borderTopRightRadius: '100%',
          transform: 'scale(1.5, 1)',
          transformOrigin: 'bottom',
          animation: 'wave 8s infinite ease-in-out',
        }}
      >
        <style jsx>{`
          @keyframes wave {
            0%, 100% {
              transform: scale(1.5, 1) translateX(-25px);
            }
            50% {
              transform: scale(2, 1) translateX(25px);
            }
          }
        `}</style>
      </div>
    </div>
  );
};
