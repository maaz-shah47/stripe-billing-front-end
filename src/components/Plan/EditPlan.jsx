import { React, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Heading from '../Common/Heading';
import { editPlan } from '../../api/PlanApi';

function EditPlan() {
  const location = useLocation();
  const navigate = useNavigate();
  const [planName, setPlanName] = useState('');
  const [monthlyFee, setMonthlyFee] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {id, name, monthly_fee} = location.state.data;
  useEffect(() => {
    setPlanName(name);
    setMonthlyFee(monthly_fee);
  }, [name, monthly_fee]);

  const handleSubmit = async (event) => {
    setIsSubmitting(true);

    event.preventDefault();
    const response = await editPlan(id, planName, monthlyFee)
    setIsSubmitting(false);
    navigate(`/plans/${id}`, {
      state: response
    });
  }

  return (
    <div className='container'>
      <Heading title="Edit Plan" />
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="planName">Edit Plan Name</label>
          <input type="name" onChange={event => setPlanName(event.target.value)}
                 value={planName} className="form-control" id="planName" aria-describedby="name" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="monthly_fee">Edit Monthly Fee</label>
          <input type="number" onChange={event => setMonthlyFee(event.target.value)}
                 value={monthlyFee} className="form-control" id="monthly_fee" />
        </div>
        <button disabled={isSubmitting} className={!isSubmitting ? `btn btn-primary` : `btn btn-primary disabled`}>Submit</button>
      </form>
    </div>
  )
}

export default EditPlan
