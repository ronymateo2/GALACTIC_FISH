import { useLeaderBoardData } from "../hooks/useLeaderBoardData";
import { useLoadingEffect } from "../hooks/useLoadingEffect";

const medalColors = [
  "bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-white", // Gold
  "bg-gradient-to-br from-[#C0C0C0] to-[#A9A9A9] text-white", // Silver
  "bg-gradient-to-br from-[#CD7F32] to-[#A0522D] text-white", // Bronze
];

type Player = {
  username: string;
  rank: number;
  level: number;
  xp: number;
  gold: number;
};

export default function LeaderBoard() {
  const { data, isLoading, isError, error } = useLeaderBoardData();
  useLoadingEffect(isLoading);

  if (isLoading || !data) {
    return <></>;
  }

  if (isError) {
    console.error("Query Error:", error);
    return <div>Error loading leaderboard data</div>;
  }

  return (
    <div className="w-full max-w-2xl rounded-[28px] bg-[rgba(34,48,74,0.55)] bg-gradient-to-b from-[rgba(34,48,74,0.55)] to-[rgba(26,35,50,0.55)] shadow-lg overflow-hidden mb-8 border border-[#3a4a6b] backdrop-blur-md">
      <div className="bg-[rgba(45,62,94,0.65)] px-10 py-5 rounded-t-[28px]">
        <h2 className="text-[#b6d3f7] font-bold text-xl text-center tracking-wide">
          LEADERBOARD
        </h2>
      </div>
      {/* Card layout for small to large screens */}
      <div className="block xl:hidden px-4 py-6 space-y-6">
        {data.players.map((player: Player) => (
          <div
            key={player.username}
            className="rounded-2xl bg-[rgba(34,48,74,0.85)] px-6 py-5 flex flex-col shadow-md relative"
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-2xl font-extrabold text-white">
                {player.username}
              </span>
              <span className="text-xl font-bold text-[#ffe066]">
                #{player.rank}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[#b6d3f7] font-semibold text-lg">
                  Level:
                </span>
                <span className="text-white font-bold text-lg">
                  {player.level.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#b6d3f7] font-semibold text-lg">XP</span>
                <span className="text-white font-bold text-lg">
                  {player.xp.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#b6d3f7] font-semibold text-lg">
                  Gold
                </span>
                <span className="text-[#ffe066] font-bold text-lg">
                  {player.gold.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Table layout for extra large screens and up */}
      <div className="hidden xl:block px-6 py-4">
        <table className="w-full text-base text-[#e6eaf3]">
          <thead>
            <tr className="text-left font-semibold text-[#b6d3f7] text-sm">
              <th className="px-4 py-3 w-10">#</th>
              <th className="px-4 py-3">Username</th>
              <th className="px-4 py-3 text-right">Level</th>
              <th className="px-4 py-3 text-right">XP</th>
              <th className="px-4 py-3 text-right">Gold</th>
            </tr>
          </thead>
          <tbody>
            {data.players.map((player: Player, idx: number) => (
              <tr
                key={player.username}
                className="border-b border-[#2d3e5e] last:border-0 bg-[rgba(34,48,74,0.35)] hover:bg-[rgba(34,48,74,0.55)] transition"
              >
                <td className="px-4 py-3">
                  {idx < 3 ? (
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm shadow-md ${medalColors[idx]}`}
                    >
                      {idx + 1}
                    </span>
                  ) : (
                    <span className="text-[#b6d3f7] font-semibold">
                      {player.rank}
                    </span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`font-semibold ${
                      idx < 3 ? "text-white" : "text-[#e6eaf3]"
                    }`}
                  >
                    {player.username}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="font-bold text-[#e6eaf3]">
                    {player.level.toLocaleString()}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="font-bold text-[#e6eaf3]">
                    {player.xp.toLocaleString()}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="font-bold text-[#ffe066]">
                    {player.gold.toLocaleString()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
