import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

// Modules
const getNumber = () => {
  return axios.get(baseUrl);
};

const createNumber = (data) => {
  return axios.post(baseUrl, data);
};

const updateNumber = (url, data) => {
  return axios.patch(url, data);
};

const deleteNumber = (url) => {
  return axios.delete(url);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getNumber,
  createNumber,
  updateNumber,
  deleteNumber,
};
