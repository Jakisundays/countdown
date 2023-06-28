import React, { useEffect, useState } from "react";
import bgVid from "../assets/bgVid.mp4";

const Timer = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <div className="timer-wrapper">
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <section>
              <p>{timerDays}</p>
              <small>Days</small>
            </section>
            {/* <span>:</span> */}
            <section>
              <p>{timerHours}</p>
              <small>Hours</small>
            </section>{" "}
            {/* <span>:</span> */}
            <section>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </section>{" "}
            {/* <span>:</span> */}
            <section>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

const Btn = () => {
  const toInsta = () => {
    window.open(
      "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTQxNjEzNzIwNDI2NDg2?igshid=MDJmNzVkMjY=",
      "_blank"
    );
  };

  return (
    <button className="button-2" onClick={() => toInsta()}>
      Don't click here.
    </button>
  );
};

const Clock = () => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval;

  const startTimer = () => {
    const countDownDate = Date.UTC(2023, 6, 5, 21, 0, 0, 0);

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        clearInterval(interval.current);
        window.location.replace("https://weareindomita.com");
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <section className="clock-container">
      <video src={bgVid} loop autoPlay muted playsInline controls />
      <Btn />
      <Timer
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </section>
  );
};

export default Clock;
