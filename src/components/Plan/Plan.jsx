import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import Heading from '../Common/Heading';
import CardImage from '../../assets/images/image.jpeg';
import  { getAllFeatures } from '../../api/FeatureApi';

function Plan() {
  const location = useLocation();
  const plan = location.state;
  const navigate = useNavigate();

  const handleFeatureShow = async () => {
    const features = await getAllFeatures(plan.id);
    navigate(`/plans/${plan.id}/features`, {
      state: {
        data: features,
        plan_id: plan.id
      }
    })
  }

  const handleAddFeature = () => {
    navigate(`/plans/${plan.id}/features/new`, {
      state: plan
    });
  }

  const handleEditPlan = () => {
    navigate(`/plans/${plan.id}/edit`, {
      state: {
        data: plan
      }
    });
  }

  return (
    <div className='container'>
      <Heading title={"Plan ID " + plan.id} />
      <div className="card " style={{width: '30%'}}>
        <img className="card-img-top" src={CardImage} alt="asd" />
        <div className="card-body">
          <h5 className="card-title">Name: {plan.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Monthly Fee: {plan.monthly_fee}</h6>
          <button className='btn btn-sm btn-primary me-2' onClick={handleEditPlan}>Edit Plan</button>
          <button className='btn btn-sm me-2 btn-secondary' onClick={handleFeatureShow}>Show Features</button>
          <button className='btn btn-sm btn-info' onClick={handleAddFeature}>Add Feature</button>
        </div>
      </div>
    </div>
  )
}

export default Plan;
