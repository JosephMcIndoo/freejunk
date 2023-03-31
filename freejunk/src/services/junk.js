//This file describes the "services" offered to talka to the backend
//Axios allows for this communication.
import axios from "axios";

const url = "http://localhost:3003/junk";

export async function getAllJunk() {
  return (await axios.get(url)).data;
}
export async function postJunk(junk) {
  return (await axios.post(junk)).data;
}
export async function reserveJunk(id) {
  return (await axios.delete(url + "/" + id)).data;
}

const junkServices = {
  getAllJunk,
  postJunk,
  reserveJunk,
};

export default junkServices;
