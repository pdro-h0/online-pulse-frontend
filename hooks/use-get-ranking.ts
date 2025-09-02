import { useQuery } from "@tanstack/react-query"

type GetRankingResponse = Array<{
  id: string
  name: string
  score: number
}>

export const useGetRanking = () => {
  return useQuery({
    queryKey: ["get-ranking"],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ranking`)
      const result: GetRankingResponse = await response.json()
      return result
    }
  })
}