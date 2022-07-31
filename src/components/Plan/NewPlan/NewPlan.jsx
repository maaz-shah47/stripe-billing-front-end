import { React, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Heading from "../../Common/Heading";
import { createPlan } from "../../../api/PlanApi";

const NewPlan = () => {
  const navigate = useNavigate();
  const [planName, setPlanName] = useState('');
  const [monthlyFee, setMonthlyFee] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    setIsSubmitting(true);
    event.preventDefault();
    const errors = validate();
    if(Object.keys(errors).length > 0) {
      setFormErrors(errors);
    }
    else {
      await createPlan(planName, monthlyFee).then((response) => {
        setIsSubmitting(false);
        navigate('/plans');
      });

      setPlanName('');
      setMonthlyFee(0);
    }
  }

  const validate = () => {
    const errors = {};
    if (!planName) errors.planName = "Plan name is required";
    if (!monthlyFee) errors.monthlyFee = "Monthly fee is required";
    return errors;
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'planName' && value.length >= 0) {
      formErrors.planName = '';
      setPlanName(value);
    } else if (name === 'monthlyFee' && value.length >= 0) {
      formErrors.monthlyFee = '';
      setMonthlyFee(value);
    }
  }

  useEffect(() => {
    if(Object.keys(formErrors).length > 0) {
      console.log(formErrors);
    }
    }
  , [formErrors])

  return (
    <div className="container">
      <Heading title="Add New Plan" />
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="planName">Add Plan Name</label>
          <input type="name" onChange={handleChange} name="planName"
                 value={planName} className="form-control" id="planName" aria-describedby="name" placeholder="Plan Name" />
          <p className="text-danger">{formErrors.planName}</p>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="monthly_fee">Add Monthly Fee</label>
          <input type="number" onChange={handleChange} name="monthlyFee"
                 value={monthlyFee} className="form-control" id="monthly_fee" placeholder="Monthly Fee" />
          <p className="text-danger">{formErrors.monthlyFee}</p>
        </div>
          <button disabled={isSubmitting} className={!isSubmitting ? `btn btn-primary` : `btn btn-primary disabled`}>Submit</button>
      </form>
    </div>
  )
}

export default NewPlan
