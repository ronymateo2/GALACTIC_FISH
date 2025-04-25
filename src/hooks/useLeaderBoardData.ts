import { useQuery } from "@tanstack/react-query";
import { leaderboardService } from "../services/leaderboard.service";
import { RELOAD_INTERVAL, STORAGE_KEY_LEADER_BOARD } from "../config/config";
import { get, set } from "../services/cache";

export const useLeaderBoardData = () => {
  return useQuery({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      try {
        const data = await leaderboardService.fetchLeaderboard();
        set(STORAGE_KEY_LEADER_BOARD, data);
        return data;
      } catch (error) {
        const fallback = get(STORAGE_KEY_LEADER_BOARD);
        if (fallback) {
          console.warn("Offline fallback from cache");
          return fallback;
        }
        throw error;
      }
    },
    placeholderData: () => {
      const cached = get(STORAGE_KEY_LEADER_BOARD);
      if (cached) {
        console.log("");
        return cached;
      }
      return undefined;
    },
    refetchInterval: RELOAD_INTERVAL, // every 5 minutes
    refetchOnWindowFocus: true,
    retry: 1,
  });
};
