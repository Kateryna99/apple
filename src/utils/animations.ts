import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

interface AnimationProps {
  duration?: number;
  delay?: number;
  ease?: string;
  [key: string]: any;
}

interface ScrollProps {
  start?: string;
  end?: string;
  scrub?: boolean | number;
  [key: string]: any;
}

export const animateWithGsap = (
  target: string | HTMLElement | null,
  animationProps: AnimationProps,
  scrollProps?: ScrollProps
): void => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline: gsap.core.Timeline,
  rotationRef: React.RefObject<THREE.Group>,
  rotationState: number,
  firstTarget: string | HTMLElement,
  secondTarget: string | HTMLElement,
  animationProps: AnimationProps
): void => {
  if (rotationRef.current?.rotation) {
    timeline.to(rotationRef.current.rotation, {
      y: rotationState,
      duration: 1,
      ease: "power2.inOut",
    });
  }

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
