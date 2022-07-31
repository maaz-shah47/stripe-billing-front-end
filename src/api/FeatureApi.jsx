import axios from "axios";

export async function getAllFeatures(id) {
  const API_URL = `http://localhost:3000/api/v1/plans/${id}/features`;
  return axios.get(API_URL).then((response) => response.data);
}
export async function createFeature(id, name, code, unit_price, max_unit_limit) {
  const API_URL = `http://localhost:3000/api/v1/plans/${id}/features`;
  return axios.post(API_URL, {feature: {name, code, unit_price, max_unit_limit}}).then((response) => response.data);
}

export async function editFeature(plan_id, feature_id, name, code, unit_price, max_unit_limit) {
  const API_URL = `http://localhost:3000/api/v1/plans/${plan_id}/features/${feature_id}`;
  axios.put(API_URL, {feature: {name, code, unit_price, max_unit_limit}}).then((response) => response);
}

export async function deleteFeature(plan_id, feature_id) {
  const API_URL = `http://localhost:3000/api/v1/plans/${plan_id}/features/${feature_id}`;
  return axios.delete(API_URL).then((response) => response);
}
