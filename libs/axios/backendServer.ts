import axios from "axios";

const backendServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_Backend_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json", // Added Accept header for better API compatibility
  },
  timeout: 10000, // 10 seconds
});

// GET function
export const getApi = async (url: string, params?: any, headers?: any) => {
  try {
    const response = await backendServer.get(url, {
      params,
      headers: { ...headers, Accept: "application/json" },
    }); // Ensure Accept header is included
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postApi = async (url: string, data: any, headers?: any) => {
  try {
    const response = await backendServer.post(url, data, {
      headers: { ...headers, Accept: "application/json" },
    }); // Ensure Accept header is included
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default backendServer;
