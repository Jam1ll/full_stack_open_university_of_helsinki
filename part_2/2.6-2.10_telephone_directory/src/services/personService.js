import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

//
// endpoints
//

const getAllPersons = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data); //return all persons
};

const createPerson = (person) => {
  const request = axios.post(baseUrl, person);
  return request.then((response) => response.data); //return created person
};

const updatePerson = (id, person) => {
  const request = axios.put(`${baseUrl}/${id}`, person);
  return request.then((response) => response.data); //return updated person
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data); //return deleted person
};

export default {
  getAllPersons,
  createPerson,
  updatePerson,
  deletePerson,
};
