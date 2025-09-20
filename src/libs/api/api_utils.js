// auth_utils.js
const API_BASE = "https://mmd-backend-r9la.onrender.com/api";

// --- Local Storage Helpers ---

function setAuthData(token, email, expiresInSeconds = 3600) {
  const expiryTime = new Date().getTime() + expiresInSeconds * 1000;
  const authData = { token, email, expiry: expiryTime };
  localStorage.setItem("authData", JSON.stringify(authData));
}

function getAuthData() {
  const authData = localStorage.getItem("authData");
  if (!authData) return null;
  const parsed = JSON.parse(authData);
  if (parsed.expiry && new Date().getTime() > parsed.expiry) {
    logout();
    return null;
  }
  return parsed;
}

function logout() {
  localStorage.removeItem("authData");
}

function getToken() {
  const auth = getAuthData();
  return auth ? auth.token : null;
}

function getEmail() {
  const auth = getAuthData();
  return auth ? auth.email : null;
}

// Check if logged in (JWT exists & not expired)
function isLoggedIn() {
  return getAuthData() !== null;
}

export async function ping() {
  const res = await fetch(`https://mmd-backend-r9la.onrender.com/ping`);
  return res.json();
}

// --- Auth API Calls ---

async function register(email, password) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

async function login(email, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (res.ok && data.access_token) setAuthData(data.access_token, email);
  return data;
}

// Store JWT with email and expiry (default: 1 hour)
export const storeToken = (token, email, expiresInMinutes = 60) => {
  const expiry = new Date().getTime() + expiresInMinutes * 60 * 1000; // ms
  const data = {
    token,
    email,
    expiry,
  };
  localStorage.setItem("authData", JSON.stringify(data));
};

async function generateVision(email, name, password, answers = [], vibe = "calm") {
  const res = await fetch(`${API_BASE}/auth/generate-vision`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name, password, answers, vibe }),
  });
  const data = await res.json();
  if (res.ok && data.access_token) setAuthData(data.access_token, email);
  return data;
}


// --- User API Calls ---

async function reGenerateVision(answers = [], vibe = "calm") {
  const token = getToken();
  const email = getEmail();
  if (email) {
    const res = await fetch(`${API_BASE}/user/regenerate-vision`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify({ email, answers, vibe }),
    });
    const data = await res.json();
    return data;
  } else {
    return none
  }
}

async function getUserProfile(email) {
  const token = getToken();
  const res = await fetch(`${API_BASE}/user/user-profile?email=${email}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}

async function getVisionBoard(email) {
  const token = getToken();
  const res = await fetch(`${API_BASE}/user/vision-board/${email}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

async function getChatHistory(email) {
  const token = getToken();
  const res = await fetch(`${API_BASE}/user/chat_history/${email}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

async function chat(email, message) {
  const token = getToken();
  const res = await fetch(`${API_BASE}/user/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email, message }),
  });
  return res.json();
}

// --- Exports ---
export {
  register,
  login,
  generateVision,
  getVisionBoard,
  chat,
  logout,
  getToken,
  getEmail,
  getAuthData,
  isLoggedIn,
  getChatHistory,
  reGenerateVision,
  getUserProfile
};
