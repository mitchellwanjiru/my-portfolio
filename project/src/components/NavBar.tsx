import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface NavItem {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export const NavBar = ({ items, className }: NavBarProps) => {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // setIsVisible(scrollY > 100);
      setIsVisible(scrollY < 3000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ 
        x: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed left-6 top-1/2 -translate-y-1/2 z-50",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-3 bg-black/80 border border-gray-800 backdrop-blur-lg py-3 px-3 rounded-2xl shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer p-3 rounded-xl transition-all duration-300 group",
                "text-gray-400 hover:text-white hover:bg-purple-500/20",
                isActive && "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg",
              )}
              title={item.name}
            >
              <Icon size={20} strokeWidth={2} />
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
              
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-black border border-gray-800 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {item.name}
              </div>
            </a>
          );
        })}
      </div>
    </motion.div>
  );
};