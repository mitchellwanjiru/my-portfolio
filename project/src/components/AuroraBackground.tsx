import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-[#0a0a0a] text-white transition-bg",
          className
        )}
        {...props}
      >
        {/* Starfield background */}
        <div className="starfield"></div>
        
        {/* Aurora effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            [--purple-gradient:repeating-linear-gradient(100deg,var(--purple)_0%,var(--purple)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--purple)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--purple-500)_10%,var(--pink-500)_15%,var(--purple-400)_20%,var(--pink-400)_25%,var(--purple-600)_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-30 will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
            style={{
              '--purple': 'rgba(139, 92, 246, 0.3)',
              '--black': 'rgba(0,0,0,0.4)',
              '--transparent': 'rgba(255,255,255,0)',
              '--purple-500': '#8b5cf6',
              '--pink-500': '#ec4899',
              '--purple-400': '#a78bfa',
              '--pink-400': '#f472b6',
              '--purple-600': '#7c3aed',
            } as React.CSSProperties}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};