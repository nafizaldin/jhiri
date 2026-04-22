import { ROOMS } from "@/lib/constants";
import { calcPricing, calcNights, formatCurrency } from "@/lib/utils";
import type { BookingData, RoomType } from "@/types";
import RoomCard from "./RoomCard";
import Button from "@/components/ui/Button";
import FormField from "./FormField";
import { SummaryBox, SummaryRow } from "./SummaryBox";
import styles from "./StepDates.module.scss";

interface StepDatesProps {
  data: BookingData;
  onChange: (patch: Partial<BookingData>) => void;
  onNext: () => void;
}

export default function StepDates({ data, onChange, onNext }: StepDatesProps) {
  const handleRoom = (id: RoomType, rate: number) => {
    const nights = calcNights(data.checkIn, data.checkOut);
    const pricing = nights > 0 ? calcPricing(rate, nights) : { subtotal: 0, tax: 0, total: 0 };
    onChange({ room: id, rate, nights, ...pricing });
  };

  const handleDate = (field: "checkIn" | "checkOut", value: string) => {
    const ci = field === "checkIn" ? value : data.checkIn;
    const co = field === "checkOut" ? value : data.checkOut;
    const nights = calcNights(ci, co);
    const pricing = nights > 0 && data.rate > 0 ? calcPricing(data.rate, nights) : { subtotal: 0, tax: 0, total: 0 };
    onChange({ [field]: value, nights, ...pricing });
  };

  const canProceed = !!data.room && data.nights > 0;

  return (
    <div>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${styles.dateGrid}`}>
        <FormField label="Check-In Date">
          <input type="date" value={data.checkIn} onChange={(e) => handleDate("checkIn", e.target.value)} />
        </FormField>
        <FormField label="Check-Out Date">
          <input type="date" value={data.checkOut} onChange={(e) => handleDate("checkOut", e.target.value)} />
        </FormField>
        <FormField label="Guests">
          <select value={data.guests} onChange={(e) => onChange({ guests: e.target.value })}>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>
        </FormField>
      </div>

      <p className={styles.pickLabel}>Select Your Room</p>

      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${styles.roomGrid}`}>
        {ROOMS.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            selected={data.room === room.id}
            onSelect={handleRoom}
          />
        ))}
      </div>

      {canProceed && (
        <SummaryBox>
          <SummaryRow label={ROOMS.find((r) => r.id === data.room)?.name ?? ""} value={`${formatCurrency(data.rate)} × ${data.nights} night${data.nights > 1 ? "s" : ""}`} />
          <SummaryRow label="Subtotal" value={formatCurrency(data.subtotal)} />
          <SummaryRow label="Breakfast (included)" value="✓ Free" green />
          <SummaryRow label="Taxes & Fees (10%)" value={formatCurrency(data.tax)} />
          <SummaryRow label="Total" value={formatCurrency(data.total)} total />
        </SummaryBox>
      )}

      <div className={`flex justify-end mt-8 ${styles.btnRow}`}>
        <Button variant="moss" onClick={onNext} disabled={!canProceed}>
          Continue to Details →
        </Button>
      </div>
    </div>
  );
}
