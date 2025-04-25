import { MARKET_ENDPOINT } from "../config/config";

const fetchMarket = async () => {
  try {
    const res = await fetch(MARKET_ENDPOINT);
    if (!res.ok) throw new Error("Error loading market data");
    return await res.json();
  } catch (error) {
    console.error("Error loading market data:", error);
    throw error;
  }
};

export const marketService = {
  fetchMarket,
};
