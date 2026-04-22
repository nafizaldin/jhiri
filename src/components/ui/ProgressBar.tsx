"use client";

import { useScrollState } from "@/hooks/useScroll";
import styles from "./ProgressBar.module.scss";

export default function ProgressBar() {
  const { progress, showBtt } = useScrollState();

  return (
    <>
      <div
        className={styles.bar}
        style={{ width: `${progress}%` }}
        aria-hidden
      />
      <button
        className={`${styles.btt} ${showBtt ? styles.visible : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Back to top"
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}
