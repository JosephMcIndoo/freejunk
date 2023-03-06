import axios from "axios";

const url = "http://localhost:3003/junk";

export async function getAllJunk() {
  return (await axios.get(url)).data;
}
export async function postJunk(junk) {
  return (await axios.post(junk)).data;
}

const junkServices = {
  getAllJunk,
  postJunk,
};

export default junkServices;
