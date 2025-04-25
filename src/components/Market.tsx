import { useEffect } from "react";
import { useLoading } from "../hooks/useLoading";
import { useMarketData } from "../hooks/useMarketData";

// Define the MarketItem type according to your data structure
type MarketItem = {
  id: string;
  name: string;
  description: string;
  type: string;
  cost: string;
};

export default function Market() {
  const { data, isError, error, isLoading } = useMarketData();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    if (isLoading) startLoading();
    else stopLoading();
  }, [isLoading, startLoading, stopLoading]);

  if (isLoading || !data) {
    return <></>;
  }

  if (isError) {
    console.error("Query Error:", error);
    return <div>Error loading market data</div>;
  }

  return (
    <div className="w-full max-w-sm rounded-[30px] bg-gradient-to-b from-[#e6f0fb] to-[#dbe8f6] shadow-md overflow-hidden mb-8">
      <div className="bg-[#a4c7ec] px-6 py-3 rounded-t-[30px]">
        <h2 className="text-white font-bold text-lg text-center">MARKET</h2>
      </div>
      <div className="divide-y divide-blue-100">
        {data?.items?.map((item: MarketItem) => (
          <div key={item.id} className="flex items-center gap-3 py-4 px-6">
            {/* <div className={`item-icon ${item.type}`} /> */}
            <div>
              <div className="font-semibold text-blue-900">{item.name}</div>
              <p className="text-sm text-blue-800">{item.description}</p>
              <div className="text-sm font-medium text-blue-800">
                Cost: {item.cost} gold
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
