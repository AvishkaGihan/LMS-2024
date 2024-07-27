import "./Card.css";
import { CiVideoOn } from "react-icons/ci";
import { FaStopwatch } from "react-icons/fa";

const Card = () => {
  return (
    <div className="card">
      <img src="/image.jpg" className="card-image" />
      <div className="card-content">
        <p className="card-description">Sales and Operations </p>
        <div className="title">
          <h2 className="card-title">Foundation Course for Sales </h2>
          <h2 className="card-title">Strategies and Marketing Tricks</h2>
        </div>
        <div className="card-info">
          <p className="card-item">
            <CiVideoOn className="card-icon" /> 24 Videos{" "}
          </p>
          <p className="card-item">
            <FaStopwatch className="card-icon" />1 hr 30 min{" "}
          </p>
        </div>
      </div>
    </div>
  );
};


export default Card;
