import { useQuery } from "@tanstack/react-query"

type GetsubscriberAccessCountResponse = {
  count: number
}

export const useGetsubscriberAccessCount = (subscriberId: string) => {
  return useQuery({
    queryKey: ["get-subscriber-access", subscriberId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:8080/subscribers/${subscriberId}/ranking/count`)
      const result: GetsubscriberAccessCountResponse = await response.json()
      return result
    }
  })
}