import Button from "../UI/Button";
const ToursCard = (props) => {
    
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={`card__picture ${props.data.img_1}`}></div>
        <div className="card__heading">
          <p className={`card__heading--1 ${props.data.h_1_color}`}>The sea</p>
          <p className={`card__heading--2 ${props.data.h_2_color}`}>Explorer</p>
        </div>
        <div className="card__details">
          <ul>
            <li>{props.data.time}</li>
            <li>{props.data.people}</li>
            <li>{props.data.guide}</li>
            <li>{props.data.benefit}</li>
            <li>{props.data.diff_level}</li>
          </ul>
        </div>
      </div>
      <div className={`card__side card__side--back ${props.data.back_1}` }>
        <p>only</p>
        <h2>${props.data.price}</h2>
        <Button cssClass="btn btn--white card__button">book now! </Button>
      </div>
    </div>
  );
};

export default ToursCard;
