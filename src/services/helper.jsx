import axios from "axios";

const API_BASE = "https://jsonplaceholder.typicode.com";

export async function fetchUsers() {
  const res = await axios.get(`${API_BASE}/users`);
  return res.data;
}

export async function fetchUserById(id) {
  const res = await axios.get(`${API_BASE}/users/${id}`);
  return res.data;
}
