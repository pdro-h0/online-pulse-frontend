import { Card, CardContent } from "@/components/ui/card"
import { Award, Medal, Trophy } from "lucide-react"

interface RankingItemProps {
  rankingPosition: number
  participant: {
    id: string;
    name: string;
    score: number;
  }
}

const RankingItem = ({ rankingPosition, participant }: RankingItemProps) => {
  const getRankIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />
      default:
        return (
          <div className="h-6 w-6 flex items-center justify-center bg-gray-100 rounded-full text-sm font-semibold text-gray-600">
            {position}
          </div>
        )
    }
  }

  return (
    <Card
      key={participant.id}
      className={`transition-all duration-200 hover:shadow-lg ${rankingPosition <= 3
        ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200"
        : "bg-white border border-gray-200"
        }`}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {getRankIcon(rankingPosition)}
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{participant.name}</h3>
              <p className="text-gray-600">{participant.score} convites</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">#{rankingPosition}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default RankingItem