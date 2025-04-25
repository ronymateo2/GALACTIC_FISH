import { useEffect } from "react";
import { useLeaderBoardData } from "../hooks/useLeaderBoardData";
import { useLoading } from "../hooks/useLoading";

// Define the Player type if not imported from elsewhere
type Player = {
  username: string;
  rank: number;
  level: number;
  xp: number;
  gold: number;
};

export default function LeaderBoard() {
  const { data, isLoading, isError, error } = useLeaderBoardData();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    if (isLoading) startLoading();
    else stopLoading();
  }, [isLoading, startLoading, stopLoading]);

  if (isLoading) {
    return <></>;
  }

  if (isError) {
    console.error("Query Error:", error);
    return <div>Error loading market data</div>;
  }

  return (
    <div className="w-full max-w-sm rounded-[30px] bg-gradient-to-b from-[#e6f0fb] to-[#dbe8f6] shadow-md overflow-hidden mb-8">
      <div className="bg-[#a4c7ec] px-6 py-3 rounded-t-[30px]">
        <h2 className="text-white font-bold text-lg text-center">
          LEADERBOARD
        </h2>
      </div>
      <table className="w-full text-sm text-blue-900">
        <thead>
          <tr className="text-left border-b border-blue-200 font-bold">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Level</th>
            <th className="px-4 py-2">XP</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.players.map((player: Player) => (
            <tr key={player.username} className="border-b border-blue-100">
              <td className="px-4 py-2">{player.rank}</td>
              <td className="px-4 py-2">{player.username}</td>
              <td className="px-4 py-2">{player.level}</td>
              <td className="px-4 py-2">{player.xp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
