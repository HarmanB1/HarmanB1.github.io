import React, { useState, useEffect, useRef } from "react";
import "./Rotation.css";

export const Rotation = ({ cards }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrIndex((c) => (c + 1) % cards.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [cards.length]);

  const prevCard = () => {
    setCurrIndex((c) => (c === 0 ? cards.length - 1 : c - 1));
    startTimer();
  };

  const nextCard = () => {
    setCurrIndex((c) => (c + 1) % cards.length);
    startTimer();
  };

  const goToIndex = (i) => {
    setCurrIndex(i);
    startTimer();
  };

  return (
    <div className="rotContainer">
      <button className="nav-btn" onClick={prevCard}>
        &lt;
      </button>

      <div className="slider-window">
        <div
          className="slider"
          style={{ transform: `translateX(-${currIndex * 100}%)` }}
        >
          {cards.map((card, i) => (
            <div className="slide" key={i}>
              {card}
            </div>
          ))}
        </div>
        <div className="dots">
          {cards.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currIndex ? "active" : ""}`}
              onClick={() => goToIndex(i)}
            />
          ))}
        </div>
      </div>

      <button className="nav-btn" onClick={nextCard}>
        &gt;
      </button>
    </div>
  );
};
