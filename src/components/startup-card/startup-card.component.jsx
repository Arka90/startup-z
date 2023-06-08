import "./startup-card.styles.scss";

function StartupCard({ index, content, heading }) {
  return (
    <div className="card-st">
      <div className="index">{index}</div>
      <div className="content">
        <p className="card-st-heading">{heading}</p>
        <p className="card-st-para">{content}</p>
      </div>
    </div>
  );
}

export default StartupCard;
