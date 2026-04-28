import { useEffect, useRef } from "react";

const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  
  const {
    threshold = 0.1,
    rootMargin = "0px",
    once = true,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Déclenche l'animation
            entry.target.classList.add("scroll-animated");
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove("scroll-animated");
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, once]);

  return ref;
};

export default useScrollAnimation;
