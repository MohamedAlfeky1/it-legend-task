"use client";

import { useEffect, useRef, useState } from "react";
import { CaretDownIcon } from "@/components/common/Icons";

export function ProgressBar() {
  const progress = 63;
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentProgress = isVisible ? progress : 0;

  return (
    <div ref={containerRef} className="mb-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Topics for This Course
      </h3>

      <div className="relative pt-12 pb-1">
        {/* Thumb indicator — circle with "You" + caret */}
        <div
          className="absolute top-0 flex flex-col items-center transition-all duration-1000 ease-out"
          style={{ left: `${currentProgress}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center">
            <span className="text-xs text-gray-500 font-medium">You</span>
          </div>
          <CaretDownIcon />
        </div>

        {/* Track */}
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-green-500 transition-all duration-1000 ease-out"
            style={{ width: `${currentProgress}%` }}
          />
        </div>

        {/* Percentage below the thumb */}
        <p
          className="absolute text-sm text-green-500 font-semibold mt-1 transition-all duration-1000 ease-out"
          style={{ left: `${currentProgress}%`, transform: "translateX(-50%)" }}
        >
          {progress}%
        </p>
      </div>
    </div>
  );
}
