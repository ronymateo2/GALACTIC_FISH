import { useMarketData } from "../hooks/useMarketData";
import { useLoadingEffect } from "../hooks/useLoadingEffect";
import fishingRod from "../assets/fishing-road.svg";
import hourglass from "../assets/sand-clock.svg";
import poison from "../assets/poison.svg";
import recovery from "../assets/recovery.svg";
import chest from "../assets/chest.svg";
// Define the MarketItem type according to your data structure
type MarketItem = {
  id: string;
  name: string;
  description: string;
  type: string;
  cost: string;
};

const icons: Record<string, string> = {
  fishing_rod: fishingRod,
  poison_leveling: poison,
  poison_delay: hourglass,
  poison_recovery: recovery,
  chest: chest,
};

export default function Market() {
  const { data, isError, error, isLoading } = useMarketData();
  useLoadingEffect(isLoading);

  if (isLoading || !data) {
    return <></>;
  }

  if (isError) {
    console.error("Query Error:", error);
    return <div>Error loading market data</div>;
  }

  return (
    <div className="w-full max-w-2xl rounded-[28px] bg-[rgba(34,48,74,0.55)] bg-gradient-to-b from-[rgba(34,48,74,0.55)] to-[rgba(26,35,50,0.55)] shadow-lg overflow-hidden mb-8 border border-[#3a4a6b] backdrop-blur-md">
      <div className="bg-[rgba(45,62,94,0.65)] px-10 py-5 rounded-t-[28px]">
        <h2 className="text-[#b6d3f7] font-bold text-xl text-center tracking-wide">
          MARKET
        </h2>
      </div>
      <div className="divide-y divide-[#2d3e5e]">
        {data?.items?.map((item: MarketItem) => (
          <div key={item.id} className="flex items-center gap-8 py-7 px-10">
            <div className="flex-shrink-0">
              <img
                src={icons[item.type] || chest}
                alt="icon"
                className="w-14 h-14 drop-shadow"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-[#f7fafc] text-lg leading-tight">
                  {item.name}
                </span>
                {item.name === "Poison of Leveling" && (
                  <span className="bg-[#ffb84d] text-[#2d3e5e] text-xs font-bold px-2 py-0.5 rounded-full ml-1">
                    PERMANENT
                  </span>
                )}
              </div>
              <p className="text-sm text-[#b6d3f7] mb-1 leading-snug">
                {item.description}
              </p>
              <div className="text-sm font-medium text-[#b6d3f7]">
                Cost:{" "}
                <span className="text-[#ffe066] font-bold">
                  {item.cost} gold
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
