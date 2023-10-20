"use client";
import { useEffect, useState } from "react";
import styles from "@/styles";

const Countdown = ({ targetDate = new Date() }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const target = targetDate;

    const interval = setInterval(() => {
      const now = new Date();

      const difference = target.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(days);

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(hours);

      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(minutes);

      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(seconds);

      if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        //when time is up
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.flexCenter} gap-2 md:gap-8`}>
      <div
        className={`${styles.flexCenter} flex-col rounded-full border-2 border-primary-400 bg-tertiary bg-opacity-20 w-20 h-20 md:w-36 md:h-36`}
      >
        <div className=" text-4xl md:text-6xl text-white text-center">
          {days}
        </div>
        <div className="text-xs md:text-base text-white text-center">DAYS</div>
      </div>
      <div
        className={`${styles.flexCenter} flex-col rounded-full border-2 border-primary-400 bg-tertiary bg-opacity-20 w-20 h-20 md:w-36 md:h-36`}
      >
        <div className="text-4xl md:text-6xl text-white text-center">
          {hours}
        </div>
        <div className="text-xs md:text-base text-white text-center">HOURS</div>
      </div>
      <div
        className={`${styles.flexCenter} flex-col rounded-full border-2 border-primary-400 bg-tertiary bg-opacity-20 w-20 h-20 md:w-36 md:h-36`}
      >
        <div className="text-4xl md:text-6xl text-white text-center">
          {minutes}
        </div>
        <div className="text-xs md:text-base text-white text-center">
          MINUTES
        </div>
      </div>
      <div
        className={`${styles.flexCenter} flex-col rounded-full border-2 border-primary-400 bg-tertiary bg-opacity-20 w-20 h-20 md:w-36 md:h-36`}
      >
        <div className="text-4xl md:text-6xl text-white text-center">
          {seconds}
        </div>
        <div className="text-xs md:text-base text-white text-center">
          SECONDS
        </div>
      </div>
    </div>
  );
};

export default Countdown;
