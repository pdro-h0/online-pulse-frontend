import { Card, CardContent } from "@/components/ui/card";
import { Award, Medal, Trophy, Crown, Star } from "lucide-react";

interface RankingItemProps {
  rankingPosition: number;
  participant: {
    id: string;
    name: string;
    score: number;
  };
}

const RankingItem = ({ rankingPosition, participant }: RankingItemProps) => {
  const getRankIcon = (position: number) => {
    switch (position) {
      case 1:
        return (
          <div className="relative">
            <Crown className="h-8 w-8 text-yellow-500 drop-shadow-lg" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">1</span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="relative">
            <Trophy className="h-8 w-8 text-gray-400 drop-shadow-lg" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">2</span>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="relative">
            <Medal className="h-8 w-8 text-amber-600 drop-shadow-lg" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-600 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">3</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 rounded-full text-sm font-bold text-gray-600 shadow-sm">
            {position}
          </div>
        );
    }
  };

  const getRankStyles = (position: number) => {
    switch (position) {
      case 1:
        return "bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 border-2 border-yellow-200 shadow-lg";
      case 2:
        return "bg-gradient-to-r from-gray-50 via-slate-50 to-zinc-50 border-2 border-gray-200 shadow-md";
      case 3:
        return "bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-200 shadow-md";
      default:
        return "bg-white border border-gray-200 hover:border-gray-300";
    }
  };

  return (
    <Card
      className={`transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${getRankStyles(
        rankingPosition
      )}`}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {getRankIcon(rankingPosition)}
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900 mb-1">
                {participant.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">
                  {participant.score} convites
                </span>
                {rankingPosition <= 3 && (
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs text-yellow-600 font-medium">
                      Top {rankingPosition}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="text-right">
            <div
              className={`text-2xl font-bold ${
                rankingPosition === 1
                  ? "text-yellow-600"
                  : rankingPosition === 2
                  ? "text-gray-500"
                  : rankingPosition === 3
                  ? "text-amber-600"
                  : "text-gray-700"
              }`}
            >
              #{rankingPosition}
            </div>
            {rankingPosition <= 3 && (
              <div className="text-xs text-gray-500 mt-1">
                {rankingPosition === 1
                  ? "Campeão"
                  : rankingPosition === 2
                  ? "Vice"
                  : "Terceiro"}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RankingItem;
