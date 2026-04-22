"use client";

import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { useScrollReveal } from "@/hooks/useGSAP";
import { useToastStore } from "@/lib/stores/useToastStore";
import { generateRef } from "@/lib/utils";
import type { BookingData, RoomType } from "@/types";
import Stepper from "@/components/booking/Stepper";
import StepDates from "@/components/booking/StepDates";
import StepGuest from "@/components/booking/StepGuest";
import StepPayment from "@/components/booking/StepPayment";
import StepConfirm from "@/components/booking/StepConfirm";
import styles from "./Booking.module.scss";

const INITIAL: BookingData = {
  room: null,
  rate: 0,
  nights: 0,
  checkIn: "",
  checkOut: "",
  guests: "2 Guests",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  requests: "",
  source: "Google Search",
  paymentMethod: "card",
  total: 0,
  subtotal: 0,
  tax: 0,
  reference: "",
};

export interface BookingHandle {
  quickBook: (roomId: RoomType) => void;
}

const Booking = forwardRef<BookingHandle>((_, ref) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingData>(INITIAL);
  const sectionRef = useRef<HTMLElement>(null);
  const showToast = useToastStore((s) => s.showToast);

  useScrollReveal(sectionRef);

  useImperativeHandle(ref, () => ({
    quickBook(roomId: RoomType) {
      const rates: Record<RoomType, number> = { standard: 1000, junior: 5000, presidency: 15000 };
      setData((prev) => ({ ...prev, room: roomId, rate: rates[roomId] }));
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      showToast(`Room selected! Set your dates below.`, "");
    },
  }));

  const patch = (p: Partial<BookingData>) => setData((prev) => ({ ...prev, ...p }));

  const handleConfirm = () => {
    const ref = generateRef();
    setData((prev) => ({ ...prev, reference: ref }));
    setStep(4);
  };

  const handleReset = () => {
    setData(INITIAL);
    setStep(1);
  };

  return (
    <section ref={sectionRef} id="book" className={styles.section}>
      <div className={styles.inner}>
        <div className={`text-center ${styles.header}`} data-reveal>
          <p className="section-label">Reservations</p>
          <h2 className="section-heading">
            Plan Your <em>Escape</em>
          </h2>
          <p className={styles.intro}>
            Complete your booking in three simple steps. Every reservation includes complimentary breakfast and access to all resort amenities.
          </p>
        </div>

        {step < 4 && <Stepper currentStep={step} />}

        {step === 1 && (
          <StepDates data={data} onChange={patch} onNext={() => setStep(2)} />
        )}
        {step === 2 && (
          <StepGuest data={data} onChange={patch} onNext={() => setStep(3)} onBack={() => setStep(1)} />
        )}
        {step === 3 && (
          <StepPayment data={data} onChange={patch} onConfirm={handleConfirm} onBack={() => setStep(2)} />
        )}
        {step === 4 && (
          <StepConfirm data={data} onReset={handleReset} />
        )}
      </div>
    </section>
  );
});

Booking.displayName = "Booking";
export default Booking;
