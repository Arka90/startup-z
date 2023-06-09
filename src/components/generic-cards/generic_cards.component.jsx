import "./generic_cards.styles.scss";
import { useNavigate } from "react-router-dom";
function GenericCard({ text }) {
  const navigate = useNavigate();

  function gotoSearch() {
    navigate("/search");
  }

  return (
    <button onClick={gotoSearch} className="generic-card">
      <p className="generic-card--text">{text}</p>
    </button>
  );
}

export default GenericCard;
