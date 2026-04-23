import Image from "next/image";
import type { Room, RoomType } from "@/types";
import styles from "./RoomCard.module.scss";
import clsx from "clsx";

interface RoomCardProps {
  room: Room;
  selected: boolean;
  onSelect: (id: RoomType, price: number) => void;
}

export default function RoomCard({ room, selected, onSelect }: RoomCardProps) {
  return (
    <div
      className={clsx(styles.card, { [styles.selected]: selected })}
      onClick={() => onSelect(room.id, room.price)}
      role="radio"
      aria-checked={selected}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(room.id, room.price)}
    >
      <div className={styles.imgWrap}>
        <Image
          src={room.image}
          alt={room.name}
          priority
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover", transition: "transform 0.5s" }}
        />
      </div>

      <div className={styles.body}>
        <p className={styles.tier}>{room.tier.split(" · ")[0]}</p>
        <h3 className={styles.name}>{room.name}</h3>
        <p className={styles.price}>
          BDT {room.price.toLocaleString()} <span>/ night</span>
        </p>
        <div className={styles.features}>
          {room.tags.map((tag) => (
            <span key={tag} className={styles.feat}>{tag}</span>
          ))}
        </div>
      </div>

      {selected && <div className={styles.check} aria-hidden>✓</div>}
    </div>
  );
}
