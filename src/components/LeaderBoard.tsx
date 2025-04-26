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
    <div className="w-full max-w-xl xl:max-w-2xl 2xl:max-w-3xl rounded-[20px] bg-[rgba(34,48,74,0.25)] bg-gradient-to-b from-[rgba(34,48,74,0.25)] to-[rgba(26,35,50,0.25)] shadow-lg overflow-hidden mb-4 border border-[#3a4a6b] backdrop-blur-md">
      <div className="bg-[rgba(45,62,94,0.18)] px-6 xl:px-10 py-3 xl:py-5 rounded-t-[20px]">
        <h2 className="text-[#b6d3f7] font-bold text-lg xl:text-2xl text-center tracking-wide">
          LEADERBOARD
        </h2>
      </div>
      {/* Card layout for small to large screens */}
      <div className="block lg:hidden px-2 py-3 space-y-3">
        {data.players.map((player: Player) => (
          <div
            key={player.username}
            className="rounded-xl bg-[rgba(34,48,74,0.25)] px-4 py-4 flex shadow-md relative"
          >
            {/* Rank/Medal */}
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 mr-4">
              {player.rank <= 3 ? (
                <span
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full font-bold text-3xl shadow-md ${
                    medalColors[player.rank - 1]
                  }`}
                >
                  {player.rank}
                </span>
              ) : (
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#22304a] text-[#b6d3f7] font-bold text-3xl">
                  {player.rank}
                </span>
              )}
            </div>
            {/* Username and stats */}
            <div className="flex flex-col justify-center flex-1">
              <span className="text-xl font-extrabold text-white mb-1">
                {player.username}
              </span>
              <div className="flex flex-row flex-wrap gap-x-6 gap-y-1">
                <span className="text-[#7da2ce] font-bold text-lg">
                  XP:{" "}
                  <span className="text-white font-bold">
                    {player.xp.toLocaleString()}
                  </span>
                </span>
                <span className="text-[#7da2ce] font-bold text-lg">
                  Gold:{" "}
                  <span className="text-[#ffe066] font-bold">
                    {player.gold.toLocaleString()}
                  </span>
                </span>
                <span className="text-[#7da2ce] font-bold text-lg">
                  Lv.{" "}
                  <span className="text-white font-bold">{player.level}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Table layout for large screens and up */}
      <div className="hidden lg:block px-3 py-2">
        <table className="w-full text-sm text-[#e6eaf3]">
          <thead>
            <tr className="text-left font-semibold text-[#b6d3f7] text-xs">
              <th className="px-2 py-2 w-8 text-center">#</th>
              <th className="px-2 py-2">Username</th>
              <th className="px-2 py-2 text-right">Level</th>
              <th className="px-2 py-2 text-right">XP</th>
              <th className="px-2 py-2 text-right">Gold</th>
            </tr>
          </thead>
          <tbody>
            {data.players.map((player: Player) => (
              <tr
                key={player.username}
                className="border-b border-[#2d3e5e] last:border-0 bg-[rgba(34,48,74,0.35)] hover:bg-[rgba(34,48,74,0.55)] transition"
              >
                <td className="px-2 py-2 text-center">
                  {player.rank <= 3 ? (
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded-full font-bold text-xs shadow-md ${
                        medalColors[player.rank - 1]
                      }`}
                    >
                      {player.rank}
                    </span>
                  ) : (
                    <span className="text-[#b6d3f7] font-semibold">
                      {player.rank}
                    </span>
                  )}
                </td>
                <td className="px-2 py-2">
                  <span
                    className={`font-semibold ${
                      player.rank <= 3 ? "text-white" : "text-[#e6eaf3]"
                    }`}
                  >
                    {player.username}
                  </span>
                </td>
                <td className="px-2 py-2 text-right">
                  <span className="font-bold text-[#e6eaf3]">
                    {player.level.toLocaleString()}
                  </span>
                </td>
                <td className="px-2 py-2 text-right">
                  <span className="font-bold text-[#e6eaf3]">
                    {player.xp.toLocaleString()}
                  </span>
                </td>
                <td className="px-2 py-2 text-right">
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
