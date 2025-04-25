import { useQuery } from "@tanstack/react-query";
import { marketService } from "../services/market.service";

export const useMarketData = () => {
  return useQuery({
    queryKey: ["market"],
    queryFn: marketService.fetchMarket,
  });
};
