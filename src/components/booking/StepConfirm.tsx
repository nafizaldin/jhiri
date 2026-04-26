import { ROOMS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import type { BookingData } from "@/types";
import Button from "@/components/ui/Button";
import styles from "./StepConfirm.module.scss";

interface StepConfirmProps {
  data: BookingData;
  onReset: () => void;
}

export default function StepConfirm({ data, onReset }: StepConfirmProps) {
  const roomName = ROOMS.find((r) => r.id === data.room)?.name ?? "—";

  return (
    <div className={styles.wrap}>
      <div className={styles.icon}>✓</div>
      <h2 className={styles.title}>Booking Confirmed!</h2>
      <p className={styles.sub}>
        Thank you for choosing Jhiri Resort. Your reservation is confirmed and a confirmation email has been sent to your inbox.
      </p>
      <p className={styles.ref}>{data.reference}</p>

      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${styles.details}`}>
        <DetailItem label="Guest" value={`${data.firstName} ${data.lastName}`} />
        <DetailItem label="Room" value={roomName} />
        <DetailItem label="Check-In" value={formatDate(data.checkIn)} />
        <DetailItem label="Check-Out" value={formatDate(data.checkOut)} />
      </div>

      <div className={`flex gap-4 justify-center flex-wrap ${styles.actions}`}>
        <Button variant="solid">🖨 Download Confirmation</Button>
        <Button variant="back" onClick={onReset}>Make Another Booking</Button>
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.detailItem}>
      <p className={styles.detailLabel}>{label}</p>
      <p className={styles.detailValue}>{value}</p>
    </div>
  );
}
