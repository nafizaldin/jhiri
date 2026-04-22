"use client";

import { useEffect, RefObject } from "react";

export function useCursor(
  cursorRef: RefObject<HTMLDivElement | null>,
  ringRef: RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let rafId: number;

    const handleMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + "px";
        cursorRef.current.style.top = my + "px";
      }
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, [cursorRef, ringRef]);
}
