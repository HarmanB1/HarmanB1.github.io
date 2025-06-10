import React, { useState, useEffect, useRef } from "react";
import "./Rotation.css";

export const Rotation = ({ cards }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goToIndex((currIndex + 1) % cards.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [currIndex, cards.length]);

  const prevCard = () => {
    goToIndex(currIndex === 0 ? cards.length - 1 : currIndex - 1);
  };

  const nextCard = () => {
    goToIndex((currIndex + 1) % cards.length);
  };

  const goToIndex = (i) => {
    // Disable transition only when jumping from last to first
    if (currIndex === cards.length - 1 && i === 0) {
      setIsTransitioning(false); // turn off transition
      setCurrIndex(i);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true); // turn it back on
        });
      });
    } else {
      setCurrIndex(i);
    }
    startTimer();
  };

  return (
    <div className="rotContainer">
      <button className="nav-btn" onClick={prevCard}>
        &lt;
      </button>

      <div className="slider-window">
        <div
          className={`slider ${isTransitioning ? "slide-active" : ""}`}
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
