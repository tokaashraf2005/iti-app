import { useEffect } from 'react';

export default function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.matches("a[href^='#']")) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}