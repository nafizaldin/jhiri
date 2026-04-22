"use client";

import Image from "next/image";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useModalStore } from "@/lib/stores/useModalStore";
import { ROOMS } from "@/lib/constants";
import type { RoomType } from "@/types";
import styles from "./Modal.module.scss";

interface ModalProps {
  onBook: (roomId: RoomType) => void;
}

export default function Modal({ onBook }: ModalProps) {
  const { open, roomId, closeModal } = useModalStore();
  const room = ROOMS.find((r) => r.id === roomId);

  useScrollLock(open);

  if (!room) return null;

  return (
    <div
      className={`${styles.overlay} ${open ? styles.open : ""}`}
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div className={styles.modal}>
        <button className={styles.close} onClick={closeModal} aria-label="Close">
          ✕
        </button>

        <div className={styles.hero}>
          <Image
            src={room.image}
            alt={room.name}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.body}>
          <p className={styles.tier}>{room.tier}</p>
          <h2 className={styles.name}>{room.name}</h2>

          <div className={styles.priceRow}>
            <span className={styles.price}>BDT {room.price.toLocaleString()}</span>
            <span className={styles.per}>/ night incl. breakfast</span>
          </div>

          <p className={styles.desc}>{room.description}</p>

          <div className={`grid grid-cols-2 gap-2 ${styles.features}`}>
            {room.features.map((f) => (
              <div key={f} className={styles.feature}>
                {f}
              </div>
            ))}
          </div>

          <button
            className={styles.bookBtn}
            onClick={() => {
              closeModal();
              onBook(room.id);
            }}
          >
            Reserve This Room →
          </button>
        </div>
      </div>
    </div>
  );
}
