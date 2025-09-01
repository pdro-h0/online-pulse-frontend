"use client"
import { useGetRanking } from "@/hooks/use-get-ranking"
import RankingItem from "./ranking-item"

const RankingList = () => {
  const { data, isLoading } = useGetRanking()

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-20 bg-gray-200 rounded-lg"></div>
          </div>
        ))}
      </div>
    )
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum participante encontrado</h3>
        <p className="text-gray-500">Aguarde os primeiros participantes se inscreverem.</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {data.map((participant, index) => {
        const rankingPosition = index + 1
        return (
          <RankingItem 
            key={participant.id} 
            rankingPosition={rankingPosition} 
            participant={participant} 
          />
        )
      })}
    </div>
  )
}

export default RankingList
