import axios from "axios";

// now we can use this api instance to make requests to our backend server without worrying about the base URL and withCredentials option by writing api.get("/api/auth/get-me") instead of axios.get("http://localhost:3000/api/auth/get-me", {withCredentials: true})
const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export async function register({ username, email, password }) {
  try {
    const response = await api.post("/api/auth/register", {
      username,
      email,
      password,
    });

    return response.data;
  } catch (err) {
    console.log("Error", err);
  }
}

export async function login({ email, password }) {
  try {
    const response = await api.post("/api/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    console.log("Error", err);
  }
}

export async function logout() {
  try {
    const response = await api.get("/api/auth/logout");
    return response.data;
  } catch (err) {
    console.log("Error", err);
  }
}

export async function getMe() {
  try {
    const response = await api.get("/api/auth/get-me");
    return response.data;
  } catch (err) {
    console.log("Error", err);
  }
}
