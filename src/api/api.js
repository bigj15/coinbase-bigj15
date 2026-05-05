const API_BASE_URL = import.meta.env.VITE_API_URL || "https://crypto-api-bigj15.onrender.com/api";

export async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

export async function registerUser(name, email, password) {
  return apiRequest("/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
}

export async function loginUser(email, password) {
  const data = await apiRequest("/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  localStorage.setItem("token", data.token);
  return data;
}

export async function getProfile() {
  return apiRequest("/profile");
}

export async function getAllCrypto() {
  return apiRequest("/crypto");
}

export async function getTopGainers() {
  return apiRequest("/crypto/gainers");
}

export async function getNewListings() {
  return apiRequest("/crypto/new");
}

export function logout() {
  localStorage.removeItem("token");
}

export function isAuthenticated() {
  return !!localStorage.getItem("token");
}
