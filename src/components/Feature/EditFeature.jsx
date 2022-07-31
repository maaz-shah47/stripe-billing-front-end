import { React, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Heading from '../Common/Heading'
import { editFeature } from '../../api/FeatureApi';

function EditFeature(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [featureName, setFeatureName] = useState('');
  const [featureCode, setFeatureCode] = useState('');
  const [featurePrice, setFeaturePrice] = useState('');
  const [featureMaxUnitLimit, setFeatureMaxUnitLimit] = useState('');

  const {name, code, unit_price, max_unit_limit, plan_id} = location.state.data;

  useEffect(() => {
    setFeatureName(name);
    setFeatureCode(code);
    setFeaturePrice(unit_price);
    setFeatureMaxUnitLimit(max_unit_limit);
  }, [name, code, unit_price, max_unit_limit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = editFeature(plan_id, location.state.data.id, featureName, featureCode, featurePrice, featureMaxUnitLimit)
    navigate(`/plans/${plan_id}/features`, {
      state: {
        data: response.data,
        plan_id: plan_id
      }
    });
  }
  return (
    <div className='container'>
      <Heading title="Edit Feature" />
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Edit Name</label>
          <input type="name" onChange={event => setFeatureName(event.target.value)}
                 value={featureName} className="form-control" id="name" aria-describedby="name" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="code">Edit Code</label>
          <input type="text" onChange={event => setFeatureCode(event.target.value)}
                 value={featureCode} className="form-control" id="code" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="unit_price">Edit Unit Price</label>
          <input type="number" onChange={event => setFeaturePrice(event.target.value)}
                 value={featurePrice} className="form-control" id="unit_price" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="max_unit_limit">Edit Max Unit Limit</label>
          <input type="number" onChange={event => setFeatureMaxUnitLimit(event.target.value)}
                value={featureMaxUnitLimit} className="form-control" id="max_unit_limit" />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
  </div>
  )
}

export default EditFeature
