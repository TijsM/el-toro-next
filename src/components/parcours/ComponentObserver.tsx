import React, { useRef, useState, useEffect, ReactNode } from "react";

interface ComponentObserverProps {
  children: ReactNode;
  index: number;
  threshold?: number;
  onVisibilityChange?: (index: number, ratio: number) => void;
}
const ComponentObserver: React.FC<ComponentObserverProps> = ({
  children,
  index,
  threshold = 0.1,
  onVisibilityChange,
}) => {
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        onVisibilityChange?.(index, entry.intersectionRatio);
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) } // smooth updates
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [index, onVisibilityChange]);

  return <div ref={domRef}>{children}</div>;
};

export default ComponentObserver;
