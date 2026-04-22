import { ROOMS } from "@/lib/constants";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { BookingData } from "@/types";
import Button from "@/components/ui/Button";
import FormField from "./FormField";
import { SummaryBox, SummaryRow } from "./SummaryBox";
import styles from "./StepGuest.module.scss";

interface StepGuestProps {
  data: BookingData;
  onChange: (patch: Partial<BookingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepGuest({ data, onChange, onNext, onBack }: StepGuestProps) {
  const canProceed = data.firstName.trim() && data.lastName.trim() && data.email.includes("@") && data.phone.trim();
  const roomName = ROOMS.find((r) => r.id === data.room)?.name ?? "—";

  return (
    <div>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${styles.guestGrid}`}>
        <FormField label="First Name *">
          <input type="text" placeholder="Your first name" value={data.firstName} onChange={(e) => onChange({ firstName: e.target.value })} />
        </FormField>
        <FormField label="Last Name *">
          <input type="text" placeholder="Your last name" value={data.lastName} onChange={(e) => onChange({ lastName: e.target.value })} />
        </FormField>
        <FormField label="Email Address *">
          <input type="email" placeholder="your@email.com" value={data.email} onChange={(e) => onChange({ email: e.target.value })} />
        </FormField>
        <FormField label="Phone Number *">
          <input type="tel" placeholder="+880 XXXX XXXXXX" value={data.phone} onChange={(e) => onChange({ phone: e.target.value })} />
        </FormField>
        <FormField label="Special Requests (optional)" fullWidth>
          <input type="text" placeholder="Honeymoon setup, early check-in, dietary requirements…" value={data.requests} onChange={(e) => onChange({ requests: e.target.value })} />
        </FormField>
        <FormField label="How did you hear about us?" fullWidth>
          <select value={data.source} onChange={(e) => onChange({ source: e.target.value })}>
            <option>Google Search</option>
            <option>Social Media</option>
            <option>Friend / Family</option>
            <option>Travel Agent</option>
            <option>Returning Guest</option>
            <option>Other</option>
          </select>
        </FormField>
      </div>

      <SummaryBox title="Booking Summary">
        <SummaryRow label="Room" value={roomName} />
        <SummaryRow label="Dates" value={`${formatDate(data.checkIn)} → ${formatDate(data.checkOut)}`} />
        <SummaryRow label="Guests" value={data.guests} />
        <SummaryRow label="Total" value={formatCurrency(data.total)} total />
      </SummaryBox>

      <div className={`flex justify-between mt-8 ${styles.btnRow}`}>
        <Button variant="back" onClick={onBack}>← Back</Button>
        <Button variant="moss" onClick={onNext} disabled={!canProceed}>Proceed to Payment →</Button>
      </div>
    </div>
  );
}
