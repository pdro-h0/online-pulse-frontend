import { useQuery } from "@tanstack/react-query"

type GetsubscriberInvitesClicksResponse = {
  count: number
}

export const useGetsubscriberInvitesClicks = (subscriberId: string) => {
  return useQuery({
    queryKey: ["get-subscriber-clicks", subscriberId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:8080/subscribers/${subscriberId}/ranking/clicks`)
      const result: GetsubscriberInvitesClicksResponse = await response.json()
      return result
    }
  })
}