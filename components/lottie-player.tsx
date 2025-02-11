'use client';

import Lottie from 'react-lottie-player';

interface LottiePlayerProps {
  animationData: any;
  className?: string;
}

export function LottiePlayer({ animationData, className = "w-64 h-64" }: LottiePlayerProps) {
  return (
    <Lottie
      loop
      animationData={animationData}
      play
      className={className}
    />
  );
}
