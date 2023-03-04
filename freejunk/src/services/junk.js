import axios from "axios";

const url = "http://localhost:3001/junk";

export async function getAllJunk() {
  return (await axios.get(url)).data;
}
