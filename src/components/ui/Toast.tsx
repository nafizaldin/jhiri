"use client";

import { useToastStore } from "@/lib/stores/useToastStore";
import styles from "./Toast.module.scss";
import clsx from "clsx";

export default function Toast() {
  const { message, type, visible } = useToastStore();

  return (
    <div
      className={clsx(styles.toast, styles[type || "default"], {
        [styles.show]: visible,
      })}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
