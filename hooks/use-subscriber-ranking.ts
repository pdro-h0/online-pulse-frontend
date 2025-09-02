import { useQuery } from "@tanstack/react-query"

type GetsubscriberRankingResponse = {
  position: number
}

export const useGetsubscriberRanking = (subscriberId: string) => {
  return useQuery({
    queryKey: ["get-subscriber-ranking", subscriberId],
    queryFn: async () => {
      const response = await fetch(`${process.env.API_URL}/subscribers/${subscriberId}/ranking/position`)
      const result: GetsubscriberRankingResponse = await response.json()
      return result
    }
  })
}