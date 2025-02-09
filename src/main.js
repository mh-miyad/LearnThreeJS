import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
const cards = document.querySelectorAll(".card");

gsap.registerPlugin(ScrollTrigger);

cards.forEach((card) => {
  gsap.to(card, {
    scale: 0.8,
    opacity: 0.5,
    duration: 0.6,
    scrollTrigger: {
      trigger: card,
      start: "top 10%",
      end: "bottom -45%",
      scrub: true,
    },
  });
});
