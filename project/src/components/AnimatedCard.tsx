import { ReactNode, useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedCard({
  children,
  delay = 0,
  className = "",
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <div
      ref={ref}
      className={`h-full transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
