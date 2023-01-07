import "../App.css"
import Rating from "./Rating";

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="drivercard">
        <div>
      <img className="drivers" src={img} alt={name} />
      </div>
      <div>
      <h3>{name}</h3>
      <Rating>{rating}</Rating>
      <p>{`${car.model} - ${car.licensePlate}`}</p>
      </div>
    </div>
  );
};

export default DriverCard;
