import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000";

export const postToSolve = async (data) => {
  let result = await axios.post(BASE_URL + "/elementarymath", data);
  return result;
};
