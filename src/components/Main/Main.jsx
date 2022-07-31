import { React } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from '../Header/Header';
import Plan from '../Plan/Plan';
import NewPlan from "../Plan/NewPlan/NewPlan";
import Plans from "../Plan/Plans";
import Features from "../Feature/Features";
import NewFeature from "../Feature/NewFeature";
import EditFeature from "../Feature/EditFeature";
import EditPlan from "../Plan/EditPlan";
import Footer from "../Footer/Footer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const Main = () => {

  return(
    <Router>
        <Header />
        <Routes>
          <Route exact path="plans" element={<Plans />} />
          <Route exact path="new_plan" element={<NewPlan />} />
          <Route exact path="plans/:id" element={<Plan />} />
          <Route exact path="plans/:plan_id/edit" element={<EditPlan />} />
          <Route exact path="plans/:plan_id/features" element={<Features />} />
          <Route exact path="plans/:plan_id/features/new" element={<NewFeature />} />
          <Route exact path="plans/:plan_id/features/:feature_id/edit" element={<EditFeature />} />
          <Route path="/" element={<Plans />} />
          <Route path="*" element={ <NotFoundPage /> } />
        </Routes>
        <Footer />
    </Router>
  )
}
export default Main;
