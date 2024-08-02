import { BACKEND_URL } from "@/config/api";
import axios from "axios";

export default axios.create({
  baseURL: BACKEND_URL,
  headers: { "Content-Type": "application/json" },
});
