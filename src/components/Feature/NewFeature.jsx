import {React, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createFeature } from '../../api/FeatureApi';
import Heading from '../Common/Heading';

function NewFeature() {
  const location = useLocation();
  const navigate = useNavigate();
  const [featureName, setFeatureName] = useState('');
  const [featureCode, setFeatureCode] = useState('');
  const [featurePrice, setFeaturePrice] = useState('');
  const [featureMaxUnitLimit, setFeatureMaxUnitLimit] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validate();
    if(Object.keys(errors).length > 0) {
      setFormErrors(errors);
    }
    else {
      const feature = await createFeature(location.state.id, featureName, featureCode, featurePrice, featureMaxUnitLimit);
      navigate(`/plans/${location.state.id}/features`, {
        state: {
          data: feature,
          plan_id: location.state.id
        }
      });

      setFeatureName('');
      setFeatureCode('');
      setFeaturePrice('');
      setFeatureMaxUnitLimit('');
    }
  }

  const validate = () => {
    const errors = {};
    if (!featureName) errors.featureName = "Feature name is required";
    if (!featureCode) errors.featureCode = "Feature code is required";
    if (!featurePrice) errors.featurePrice = "Feature price is required";
    if (!featureMaxUnitLimit) errors.featureMaxUnitLimit = "Feature max unit limit is required";
    return errors;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'featureName' && value.length >= 0) {
      formErrors.featureName = '';
      setFeatureName(value);
    } else if (name === 'featureCode' && value.length >= 0) {
      formErrors.featureCode = '';
      setFeatureCode(value);
    } else if (name === 'featurePrice' && value.length >= 0) {
      formErrors.featurePrice = '';
      setFeaturePrice(value);
    } else if (name === 'featureMaxUnitLimit' && value.length >= 0) {
      formErrors.featureMaxUnitLimit = '';
      setFeatureMaxUnitLimit(value);
    }
  }

  useEffect(() => {
    if(Object.keys(formErrors).length > 0) {
      console.log(formErrors);
    }
    }
  , [formErrors])

  return (
    <div className='container'>
      <Heading title='Add New Feature' />
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="featureName">Add Feature Name</label>
          <input type="text" onChange={handleChange} name="featureName"
                 value={featureName} className="form-control" id="featureName" aria-describedby="name" placeholder="Feature Name" />
          <p className="text-danger">{formErrors.featureName}</p>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="featureCode">Add Feature Code</label>
          <input type="text" onChange={handleChange} name="featureCode"
                value={featureCode} className="form-control" id="featureCode" aria-describedby="name" placeholder="Feature Code" />
          <p className="text-danger">{formErrors.featureCode}</p>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="unit_price">Add Unit Price</label>
          <input type="number" onChange={handleChange} name="featurePrice"
                value={featurePrice} className="form-control" id="unit_price" aria-describedby="name" placeholder="Unit Price" />
          <p className="text-danger">{formErrors.featurePrice}</p>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="max_unit_limit">Add Max Unit Limit</label>
          <input type="number" onChange={handleChange} name="featureMaxUnitLimit"
                value={featureMaxUnitLimit} className="form-control" id="max_unit_limit" aria-describedby="name" placeholder="Max Unit Limit" />
          <p className="text-danger">{formErrors.featureMaxUnitLimit}</p>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default NewFeature;
