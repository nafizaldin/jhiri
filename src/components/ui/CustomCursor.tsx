"use client";

import { useRef } from "react";
import { useCursor } from "@/hooks/useCursor";
import styles from "./CustomCursor.module.scss";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useCursor(cursorRef, ringRef);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} aria-hidden />
      <div ref={ringRef} className={styles.ring} aria-hidden />
    </>
  );
}
