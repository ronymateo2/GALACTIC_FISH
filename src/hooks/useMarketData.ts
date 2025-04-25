import { useQuery } from "@tanstack/react-query";
import { marketService } from "../services/market.service";
import { STORAGE_KEY_MARKET } from "../config/config";
import { get, set } from "../services/cache";

export const useMarketData = () => {
  return useQuery({
    queryKey: ["market"],
    queryFn: async () => {
      try {
        const data = await marketService.fetchMarket();
        set(STORAGE_KEY_MARKET, data); // guarda en IndexedDB
        return data;
      } catch (error) {
        const fallback = get(STORAGE_KEY_MARKET);
        if (fallback) {
          console.warn("Offline fallback from cache");
          return fallback;
        }
        throw error;
      }
    },
    placeholderData: () => {
      const cached = get(STORAGE_KEY_MARKET);
      if (cached) {
        console.log("Using placeholderData from cache");
        return cached;
      }
      return undefined;
    },
    refetchOnWindowFocus: true,
    retry: 1,
  });
};
