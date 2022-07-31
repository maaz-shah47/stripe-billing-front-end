import React from "react";
import { useEffect, useState } from 'react';
import PlanCard from "./PlanCard";
import Heading from "../Common/Heading";
import LoadingSpinner from "../Common/LoadingSpinner/LoadingSpinner";
import { getAllPlans } from "../../api/PlanApi";

const PlansContainer = (props) => {
  if(props.plans.length > 0){
    return(
      <div className="container">
        <Heading title="Available Plans"/>
        <div className="d-flex flex-wrap">
          {props.plans.map (plan => (
            <div key={plan.id} className="mt-4 me-5">
              <PlanCard data={plan}/>
            </div>
          ))}
        </div>
      </div>
    )
    }
    else {
      return(
        <Heading title='No Plans Found' />
      );
    }
}

const Plans = () => {
  const [plans, setPlans] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getAllPlans().then((items) => {
      if(mounted){
        setPlans(items)
        setIsLoading(false);
      }
    });
    return () => (mounted = false);
    }, []);
    return(
      !isLoading ? <PlansContainer plans={plans} /> : <LoadingSpinner />
    )
}

export default Plans;
