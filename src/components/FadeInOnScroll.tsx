import React, { useRef, useState, useEffect, ReactNode } from "react";

/**
 * Props for FadeInOnScroll:
 *  - children: ReactNode elements to wrap
 *  - delay: number (ms) before starting the animation (default: 0)
 *  - threshold: number proportion of visibility to trigger (default: 0.1)
 *  - duration: number (ms) duration of the animation (default: 600)
 *  - distance: string distance to translate on enter (default: '20px')
 */
interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  duration?: number;
  distance?: string;
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  delay = 100,
  threshold = 0.1,
  duration = 600,
  distance = "35px",
}) => {
  const domRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "none" : `translateY(${distance})`,
    transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
  };

  return (
    <div ref={domRef} style={style}>
      {children}
    </div>
  );
};

export default FadeInOnScroll;
