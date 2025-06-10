import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Rotation.css";

export const Rotation = ({ cards, darkMode }) => {
  const [currIndex, setCurrIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [condensedView, setCondensedView] = useState(false);
  const timerRef = useRef(null);
  const transitionRef = useRef(null);
  const navigate = useNavigate();

  const totalSlides = cards.length + 2;

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  useEffect(() => {
    if (!condensedView) {
      startTimer();
    }
    return () => {
      clearInterval(timerRef.current);
      clearTimeout(transitionRef.current);
    };
  }, [condensedView]);

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
    if (isAnimating || condensedView) return;
    setCurrIndex((prev) => prev + 1);
    startTimer();
  };

  const handlePrev = () => {
    if (isAnimating || condensedView) return;
    setCurrIndex((prev) => prev - 1);
    startTimer();
  };

  const goToIndex = (index) => {
    if (isAnimating || condensedView) return;
    setIsTransitioning(true);
    setCurrIndex(index + 1);
    startTimer();
  };

  const toggleCondensedView = () => {
    setCondensedView(!condensedView);
  };

  const handleViewDetails = (card, index) => {
    const id = card.props.id ?? index;
    navigate(`/projects/${id}`);
  };

  return (
    <div className={`rotContainer ${darkMode ? "dark" : ""}`}>
      <div className="view-controls" style={{ marginBottom: "1rem" }}>
        <button
          className={`view-toggle ${condensedView ? "active" : ""}`}
          onClick={toggleCondensedView}
        >
          {condensedView ? "Card View" : "List View"}
        </button>
      </div>

      {condensedView ? (
        <div className="condensed-view">
          <ul className="project-list">
            {cards.map((card, index) => (
              <li key={index} className="project-item">
                <div className="project-header">
                  <h3>{card.props.title}</h3>
                  <span
                    className={`status ${card.props.status?.toLowerCase()}`}
                  >
                    {card.props.status}
                  </span>
                </div>
                <p>{card.props.descrip}</p>
                <button
                  className="details-btn"
                  onClick={() => handleViewDetails(card, index)}
                >
                  View Details
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
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
              {/* Clone last slide at beginning */}
              <div className="slide">
                {React.cloneElement(cards[cards.length - 1], {
                  showDetailsButton: true,
                  onViewDetails: () =>
                    handleViewDetails(
                      cards[cards.length - 1],
                      cards.length - 1
                    ),
                })}
              </div>

              {/* Real slides */}
              {cards.map((card, i) => (
                <div className="slide" key={i}>
                  {React.cloneElement(card, {
                    showDetailsButton: true,
                    onViewDetails: () => handleViewDetails(card, i),
                  })}
                </div>
              ))}

              {/* Clone first slide at end */}
              <div className="slide">
                {React.cloneElement(cards[0], {
                  showDetailsButton: true,
                  onViewDetails: () => handleViewDetails(cards[0], 0),
                })}
              </div>
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
        </>
      )}
    </div>
  );
};
