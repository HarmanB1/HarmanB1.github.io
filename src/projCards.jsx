
import './ProjCards.css'

export const Card = ({ title, descrip, image, status, link,  darkMode }) => {
  return (
    <div
      className="card"
      onClick={() => window.open(link, "_blank")}
      tabIndex={0}
      role="button"
      aria-pressed="false"
    >
      <div className="cardImg" aria-label={`Image for ${title}`}>
        {image ? <img src={image} alt={title} /> : null}
        <span className={`status-tag ${status.toLowerCase()}`}>{status}</span>
      </div>
      <div className="cardBody">
        <h3>{title}</h3>
        <p>{descrip}</p>
      </div>
    </div>
  );
};
  