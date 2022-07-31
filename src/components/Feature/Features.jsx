import { React, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Heading from '../Common/Heading';
import FeatureCard from './FeatureCard';
import { getAllFeatures } from '../../api/FeatureApi';
import LoadingSpinner from '../Common/LoadingSpinner/LoadingSpinner';

const FeaturesContainer = (props) => {
  if(props.features.length > 0){
    return(
      <div className='container'>
        <Heading title={"Features"} />
        {props.features.map(feature => (
          <FeatureCard key={feature.id} feature={feature} />
          ))
        }
      </div>
      )
  }
    else {
      return(<Heading title="No Features Found..." />);
    }
  }
  function Features() {
    const location = useLocation();
    const plan_id = location.state.plan_id;
    const [features, setFeatures] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      let mounted = true;
      getAllFeatures(plan_id).then((data) => {
        if(mounted){
          setFeatures(data)
          setIsLoading(false);
        }
      }
    )
    return () => (mounted = false);
    }, []);
  return (
    isLoading ? <LoadingSpinner/> : <FeaturesContainer features={features} />
  )
}

export default Features;
