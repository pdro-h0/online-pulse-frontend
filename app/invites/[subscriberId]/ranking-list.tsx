"use client"
import { useGetRanking } from "@/hooks/use-get-ranking"
import RankingItem from "./ranking-item"

const RankingList = () => {
  const { data, isLoading } = useGetRanking()

  return (
    <div className="space-y-4">
      {isLoading && <p className="text-muted-foreground text-sm">Carregando...</p>}
      {data?.map((participant, index) => {
        const rankingPosition = index + 1
        console.log({ data, rankingPosition })
        return (
          <RankingItem rankingPosition={rankingPosition} participant={participant} />
        )
      })}
    </div>
  )
}
export default RankingList