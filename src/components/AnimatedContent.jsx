import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AnimatedContent = ({
  children,
  distance = 130,
  direction = "vertical",
  duration = 1,
  ease = "power1.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  delay = 0,
}) => {
  const el = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        {
          opacity: initialOpacity,
          y: direction === "vertical" ? distance : 0,
          x: direction === "horizontal" ? distance : 0,
          scale,
        },
        {
          opacity: animateOpacity ? 1 : initialOpacity,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          ease,
          delay,
          scrollTrigger: {
            trigger: el.current,
            start: "top 95%",
            once: true, // <--- animasi cuma jalan 1x
            // toggleActions: "play none none none", // opsional
            markers: false,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [
    distance,
    direction,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    delay,
  ]);

  return <div ref={el}>{children}</div>;
};
