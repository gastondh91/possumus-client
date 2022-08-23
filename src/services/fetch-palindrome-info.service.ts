import axios from "axios";
import { NODE_BACKEND_URL } from "../utils";

const fetchPalindromeInfo = (input: string) =>
  axios.get(`${NODE_BACKEND_URL}?palindrome=${input}`);

export default fetchPalindromeInfo;
