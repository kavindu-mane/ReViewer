import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorEffect = () => {
  // Check if it's a touch device
  const isTouchDevice = "ontouchstart" in window;
  const cursorRef = useRef(null);

  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    // function run only no touch devices
    const cursor = cursorRef.current;

    // If device is touchable or cursor element
    // doesn't exist, stop here
    if (isTouchDevice || !cursor) {
      return;
    }

    window.addEventListener("mousemove", (e) => {
      const { target, x, y } = e;
      // Check if target is inside a link or button
      const isTargetLinkOrBtn =
        target?.closest("a") || target?.closest("button");

      gsap.to(cursor, {
        duration: 0.7,
        x: x,
        y: y,
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        backgroundColor: isTargetLinkOrBtn ? "#10b981" : "#00000000",
        ease: "power4",
        overwrite: "auto",
        stagger: 0.02,
      });
    });

    // when the mouse cursor is moved off the page
    document.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        duration: 0.7,
        opacity: 0,
      });
    });
  }, []);

  return (
    <div
      ref={cursorRef}
      className={
        "ball pointer-events-none fixed z-50 h-8 w-8 select-none rounded-full border-4 border-emerald-500"
      }
    ></div>
  );
};

export default CursorEffect;
