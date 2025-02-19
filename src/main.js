// import { gsap } from "gsap";

// const awardBoxes = document.querySelectorAll('[data-item="box"]');

// awardBoxes.forEach((box) => {
//   const h2 = box.querySelector("h2");
//   const h4 = box.querySelector("h4");

//   // Initially set h4 invisible but ready for animation
//   gsap.set(h4, { opacity: 0, y: "100%", pointerEvents: "none" });

//   let hoverImg = document.createElement("img");
//   hoverImg.classList.add(
//     "absolute",
//     "size-32",
//     "opacity-0",
//     "pointer-events-none"
//   );
//   hoverImg.style.position = "absolute";
//   hoverImg.style.transform = "translate(-50%, -50%)";
//   hoverImg.style.top = "0";
//   hoverImg.style.left = "0";
//   box.appendChild(hoverImg);

//   box.addEventListener("mouseenter", (e) => {
//     gsap.to(h2, {
//       y: "-250%",
//       duration: 0.5,
//       ease: "power1.inOut",
//       opacity: 0, // Hide smoothly
//     });

//     gsap.to(h4, {
//       y: "0%",
//       opacity: 1,
//       duration: 0.5,
//       ease: "power1.inOut",
//       pointerEvents: "auto",
//     });

//     hoverImg.src = box.getAttribute("data-img"); // Change image source

//     gsap.fromTo(
//       hoverImg,
//       { scale: 0.5, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
//     );
//   });

//   box.addEventListener("mousemove", (e) => {
//     const rect = box.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     gsap.to(hoverImg, { x: x, y: y, duration: 0.1, ease: "power1.out" });
//   });

//   box.addEventListener("mouseleave", () => {
//     gsap.to(h2, {
//       y: "0%",
//       opacity: 1,
//       duration: 0.5,
//       ease: "power1.inOut",
//     });

//     gsap.to(h4, {
//       y: "100%", // Move it back down instead of hiding instantly
//       opacity: 0,
//       duration: 0.5,
//       ease: "power1.inOut",
//       pointerEvents: "none",
//     });

//     gsap.to(hoverImg, {
//       opacity: 0,
//       scale: 0.5,
//       duration: 0.3,
//       ease: "power2.inOut",
//     });
//   });
// });
import { gsap } from "gsap";

const awardBoxes = document.querySelectorAll('[data-item="box"]');

awardBoxes.forEach((box) => {
  const h2 = box.querySelector("h2");
  const h4 = box.querySelector("h4");

  // Ensure h4 is hidden initially
  gsap.set(h4, { y: "100%", opacity: 0 });

  // Create hover image element
  let hoverImg = document.createElement("img");
  hoverImg.classList.add(
    "absolute",
    "size-32",
    "opacity-0",
    "pointer-events-none",
    "z-[200]"
  );
  hoverImg.style.position = "absolute";
  hoverImg.style.transform = "translate(-50%, -50%)";
  hoverImg.style.top = "0";
  hoverImg.style.left = "0";
  box.appendChild(hoverImg);

  box.addEventListener("mouseenter", (e) => {
    gsap.to(h2, {
      y: "-100%",
      duration: 0.5,
      ease: "power1.inOut",
    });

    gsap.to(h4, {
      y: "0%",
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
    });

    hoverImg.src = box.getAttribute("data-img");

    gsap.fromTo(
      hoverImg,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  });

  box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(hoverImg, { x: x, y: y, duration: 0.1, ease: "power1.out" });
  });

  box.addEventListener("mouseleave", () => {
    gsap.to(h2, {
      y: "0%",
      duration: 0.5,
      ease: "power1.inOut",
    });

    gsap.to(h4, {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });

    gsap.to(hoverImg, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      ease: "power2.inOut",
    });
  });
});
