
import './ProjCards.css'

export const Card = ({title, descrip, image, status, link}) =>{
    const isFinished = status.toLowerCase() === "finished";

    return (
      <div className="card" tabIndex={0} role="button" aria-pressed="false">
        <div
          className="card-img-container"
          onClick={() => window.open(link, "_blank")}
        >
          {image && <img src={image} alt={title} className="card-img" />}
          <span
            className={`status-badge ${isFinished ? "finished" : "progress"}`}
          >
            {isFinished ? "✓ Finished" : "🛠 In Progress"}
          </span>
        </div>

        <div className="card-body">
          <h3>{title}</h3>
          <div className="card-description">
            {descrip.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    );

}