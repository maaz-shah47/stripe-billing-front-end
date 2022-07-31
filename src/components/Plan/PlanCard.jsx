import CardImage from '../../assets/images/image.jpeg';
import { useNavigate } from 'react-router-dom';
import { getPlan } from "../../api/PlanApi";

const Card = (props) => {
  const navigate = useNavigate();

  const handShowPlan = async () => {
    const plan = await getPlan(props.data.id);
    navigate(`/plans/${props.data.id}`, {
      state: plan
    });
  }

  return(
    <div className="card" style={{width: '24rem'}}>
      <img className="card-img-top" src={CardImage} alt="asd" />
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.data.monthly_fee}</h6>
        <button className="btn btn-primary" onClick={handShowPlan}>Show</button>
      </div>
    </div>
  )
}

export default Card;
