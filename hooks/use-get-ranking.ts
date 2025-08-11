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
      const response = await fetch("http://localhost:8080/ranking")
      const result: GetRankingResponse = await response.json()
      return result
    }
  })
}