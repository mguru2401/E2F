import { useEffect, useRef, useState } from "react";
import * as Icons from "lucide-react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import { industries } from "../../data/industries";

const loopedIndustries = Array(30).fill(industries).flat();
const DURATION = 4000; // 4 seconds per card

export default function Industries() {
  const [itemsVisible, setItemsVisible] = useState(3);
  // Start far enough in the list so we have plenty of preceding items
  const [activeIndex, setActiveIndex] = useState(industries.length * 15);
  useEffect(() => {
    const getItemsVisible = () => {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };
    const handleResize = () => setItemsVisible(getItemsVisible());
    setItemsVisible(getItemsVisible());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, DURATION);

    return () => clearInterval(timer);
  }, []);

  // General formula to exactly center the activeIndex card regardless of screen width
  const itemWidthPercent = 100 / itemsVisible;
  const offsetForCentering = (100 - itemWidthPercent) / 2;
  const translateX = -(activeIndex * itemWidthPercent) + offsetForCentering;

  return (
    <Section id="industries" background="white">
      <SectionTitle
        title="Industry Specialisations"
        subtitle="We serve organizations across diverse sectors with tailored workforce solutions"
      />

      {/* Animated border keyframes */}
      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes loadBorder {
          0% { --angle: 0deg; }
          100% { --angle: 360deg; }
        }
        .industry-card-wrap {
          position: relative;
          border-radius: 20px;
          padding: 3px;
          background-color: #f3f4f6; /* Gray border for inactive */
          overflow: hidden;
          height: 100%;
          transition: transform 0.5s ease-in-out, background-color 0.5s;
        }
        .industry-card-wrap.active {
          transform: scale(1.05); /* Enlarge center card */
          z-index: 20;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
        /* The loading border animation applied to active card */
        .industry-card-wrap.active::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 250%;
          height: 250%;
          /* Solid single color that 'grows' around the card like a loading bar */
          background: conic-gradient(#14b8a6 var(--angle), transparent 0);
          animation: loadBorder ${DURATION}ms linear infinite;
          transform: translate(-50%, -50%);
        }
        .industry-card-inner {
          position: relative;
          z-index: 10;
          background: white;
          border-radius: 17px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.5rem;
        }
      `}</style>

      <div className="overflow-hidden py-10">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {loopedIndustries.map((industry, idx) => {
            const iconName = industry.icon
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join("") as keyof typeof Icons;
            const IconComponent = Icons[iconName] as
              | React.ComponentType<{
                  size?: number;
                  className?: string;
                }>
              | undefined;

            const isActive = idx === activeIndex;

            return (
              <div
                key={`${industry.id}-${idx}`}
                className="flex-shrink-0 px-4 py-4"
                style={{ width: `${itemWidthPercent}%` }}
              >
                <div
                  className={`industry-card-wrap ${isActive ? "active" : ""}`}
                >
                  <div className="industry-card-inner">
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 shadow-lg flex-shrink-0 ${
                        isActive
                          ? "bg-gradient-to-br from-teal-500 to-emerald-600 scale-110"
                          : "bg-gray-100"
                      }`}
                    >
                      {IconComponent && (
                        <IconComponent
                          size={36}
                          className={isActive ? "text-white" : "text-gray-400"}
                        />
                      )}
                    </div>
                    <h3
                      className={`text-lg font-bold mb-2 transition-colors ${isActive ? "text-teal-600" : "text-navy-900"}`}
                    >
                      {industry.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed transition-colors ${isActive ? "text-gray-600" : "text-gray-400"}`}
                    >
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicator dots mapping to the 4 real industries */}
      <div className="flex justify-center mt-4 space-x-2">
        {industries.map((ind, i) => {
          const isRealActive = activeIndex % industries.length === i;
          return (
            <div
              key={ind.id}
              className={`h-2 rounded-full transition-all duration-500 ${
                isRealActive ? "bg-teal-500 w-8" : "bg-gray-300 w-2"
              }`}
            />
          );
        })}
      </div>
    </Section>
  );
}
