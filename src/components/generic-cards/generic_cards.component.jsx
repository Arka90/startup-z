import "./generic_cards.styles.scss";
function GenericCard({ text }) {
  return (
    <button className="generic-card">
      <p className="generic-card--text">{text}</p>
    </button>
  );
}

export default GenericCard;
