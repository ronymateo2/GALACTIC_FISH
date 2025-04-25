import { useQuery } from "@tanstack/react-query";
import { leaderboardService } from "../services/leaderboard.service";
import { RELOAD_INTERVAL } from "../config/config";

export const useLeaderBoardData = () => {
  return useQuery({
    queryKey: ["leaderboard"],
    queryFn: leaderboardService.fetchLeaderboard,
    refetchInterval: RELOAD_INTERVAL, // every 5 minutes
  });
};
