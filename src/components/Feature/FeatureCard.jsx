import React from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteFeature } from '../../api/FeatureApi';

function FeatureCard(props) {
  const {feature} = props;
  const plan_id = feature.plan_id;
  const navigate  = useNavigate();

  const handleEdit = () => {
    navigate(`/plans/${plan_id}/features/${feature.id}/edit`, {
      state: {
        data: feature
      }
    });
  }

  const handleDelete = async () => {
    deleteFeature(plan_id, feature.id).then(res => {
      navigate(`/plans`);
    }
    ).catch(err => {
      console.log(err);
    });
  }
  return (
    <div className="card mt-4">
    <h5 className="card-header text-center">{feature.name}</h5>
    <div className="card-body">
      <h5 className="card-title">Code: {feature.code}</h5>
      <p className="card-text">Unit Price: {feature.unit_price}</p>
      <p className="card-text">Max Unit Limit: {feature.max_unit_limit}</p>
      <button onClick={handleEdit} className='btn btn-primary me-3'>Edit</button>
      <button onClick={handleDelete} className='btn btn-danger'>Delete</button>
    </div>
  </div>
  )
}

export default FeatureCard
