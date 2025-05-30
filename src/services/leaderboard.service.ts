import { LEADERBOARD_ENDPOINT } from "../config/config";

const fetchLeaderboard = async () => {
  try {
    const res = await fetch(LEADERBOARD_ENDPOINT);
    if (!res.ok) throw new Error("Error loading leaderboard data");
    return await res.json();
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    throw error;
  }
};

export const leaderboardService = {
  fetchLeaderboard,
};
