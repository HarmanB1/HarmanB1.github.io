import React, { useState, useEffect, useRef } from "react";
import "./Rotation.css";

export const Rotation = ({ cards , darkMode }) => {
    const [currIndex, setCurrIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false); // New state to track animation
    const timerRef = useRef(null);
    const transitionRef = useRef(null);

    const totalSlides = cards.length + 2;

    const startTimer = () => {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    };

    useEffect(() => {
      startTimer();
      return () => {
        clearInterval(timerRef.current);
        clearTimeout(transitionRef.current);
      };
    }, []);

    useEffect(() => {
      if (currIndex === cards.length + 1) {
        setIsAnimating(true);
        transitionRef.current = setTimeout(() => {
          setIsTransitioning(false);
          setCurrIndex(1);
          requestAnimationFrame(() => {
            setIsTransitioning(true);
            setIsAnimating(false);
          });
        }, 500);
      } else if (currIndex === 0) {
        setIsAnimating(true);
        transitionRef.current = setTimeout(() => {
          setIsTransitioning(false);
          setCurrIndex(cards.length);
          requestAnimationFrame(() => {
            setIsTransitioning(true);
            setIsAnimating(false);
          });
        }, 500);
      }
    }, [currIndex, cards.length]);

    const handleNext = () => {
      if (isAnimating) return;
      setCurrIndex((prev) => prev + 1);
      startTimer();
    };

    const handlePrev = () => {
      if (isAnimating) return;
      setCurrIndex((prev) => prev - 1);
      startTimer();
    };

    const goToIndex = (index) => {
      if (isAnimating) return;
      setIsTransitioning(true);
      setCurrIndex(index + 1);
      startTimer();
    };

  return (
    <div className="rotContainer">
      <button className="nav-btn" onClick={handlePrev}>
        &lt;
      </button>

      <div className="slider-window">
        <div
          className={`slider ${isTransitioning ? "slide-active" : ""}`}
          style={{
            transform: `translateX(-${currIndex * 100}%)`,
          }}
        >
          {/* Clone of last at beginning */}
          <div className="slide">{cards[cards.length - 1]}</div>

          {/* Real slides */}
          {cards.map((card, i) => (
            <div className="slide" key={i}>
              {card}
            </div>
          ))}

          {/* Clone of first at end */}
          <div className="slide">{cards[0]}</div>
        </div>

        <div className="dots">
          {cards.map((_, i) => (
            <span
              key={i}
              className={`dot ${currIndex === i + 1 ? "active" : ""}`}
              onClick={() => goToIndex(i)}
            />
          ))}
        </div>
      </div>

      <button className="nav-btn" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};
