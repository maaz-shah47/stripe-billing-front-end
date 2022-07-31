const axios = require('axios');

export async function getAllPlans() {
    const API_URL = "http://localhost:3000/api/v1/plans";
    return axios.get(API_URL).then((response) => response.data)
}

export async function getPlan(id) {
  const API_URL = 'http://localhost:3000/api/v1/plans/' + id;
  return axios.get(API_URL).then((response) => response.data)
}

export async function createPlan(name, monthly_fee) {
  const API_URL = 'http://localhost:3000/api/v1/plans';
  return axios.post(API_URL, {plan: {name, monthly_fee}}).then((response) => response.data).catch((error) => console.log(error));
}

export async function editPlan(id, name, monthly_fee) {
  const API_URL = 'http://localhost:3000/api/v1/plans/' + id;
  return axios.put(API_URL, {plan: {name, monthly_fee}}).then((response) => response.data).catch((error) => console.log(error));
}
