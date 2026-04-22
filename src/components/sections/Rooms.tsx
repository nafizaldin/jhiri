"use client";

import { useRef } from "react";
import Image from "next/image";
import { ROOMS } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useGSAP";
import { useModalStore } from "@/lib/stores/useModalStore";
import Modal from "@/components/ui/Modal";
import type { RoomType } from "@/types";
import styles from "./Rooms.module.scss";

interface RoomsProps {
  onQuickBook: (roomId: RoomType) => void;
}

export default function Rooms({ onQuickBook }: RoomsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);
  const openModal = useModalStore((s) => s.openModal);

  return (
    <>
      <section ref={sectionRef} id="rooms" className={styles.section}>
        <div className={`text-center ${styles.header}`} data-reveal>
          <p className={`section-label ${styles.labelLight}`}>Accommodations</p>
          <h2 className={`section-heading ${styles.headingLight}`}>
            Rooms &amp; <em>Suites</em>
          </h2>
          <p>
            Three distinct tiers of comfort — each immersed in Sreemangal's breathtaking landscape.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto ${styles.grid}`}>
          {ROOMS.map((room, i) => (
            <div key={room.id} className={styles.card} data-reveal style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className={styles.scene}>
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover", transition: "transform 0.6s" }}
                />
                <div className={styles.cardOverlay} />
              </div>

              <div className={styles.body}>
                <p className={styles.tier}>{room.tier}</p>
                <h3 className={styles.name}>{room.name}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.cur}>BDT</span>
                  <span className={styles.amt}>{room.price.toLocaleString()}</span>
                  <span className={styles.per}>/ night</span>
                </div>
                <div className={styles.tags}>
                  {room.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
                <div className={styles.btns}>
                  <button className={styles.viewBtn} onClick={() => openModal(room.id)}>
                    View Details
                  </button>
                  <button className={styles.bookBtn} onClick={() => onQuickBook(room.id)}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Modal onBook={onQuickBook} />
    </>
  );
}
