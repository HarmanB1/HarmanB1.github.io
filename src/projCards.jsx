import { Link } from "react-router-dom";
import "./ProjCards.css";

export const Card = ({ title, descrip, image, status, link, darkMode, id }) => {
  return (
    <div
      className={`card ${darkMode ? "dark" : ""}`}
      tabIndex={0}
      role="button"
      aria-pressed="false"
    >
      <div
        className="cardImg"
        aria-label={`Image for ${title}`}
        onClick={() => window.open(link, "_blank")}
      >
        {image ? <img src={image} alt={title} /> : null}
        <span
          className={`status-tag ${status.toLowerCase().replace(" ", "-")}`}
        >
          {status}
        </span>
      </div>
      <div className="cardBody">
        <h3>{title}</h3>
        <p>{descrip}</p>
        <Link
          to={`/projects/${id}`}
          className="details-btn"
          onClick={(e) => e.stopPropagation()}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
