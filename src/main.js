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
// gsap.set("#myPath", { strokeDasharray: 100, strokeDashoffset: 100 });

let path = document.querySelector("#myPath");
let pathLength = path.getTotalLength();
gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
gsap.to(path, {
  strokeDashoffset: 0,
  duration: 10,
  ease: "power2.out",
  repeat: -1,
  repeatRefresh: true,
  yoyo: true,
});
