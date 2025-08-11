import { useMutation, useQueryClient } from '@tanstack/react-query'

type SubscribeToEventRequest = {
  name: string
  email: string
  referrer?: string | null
}
type SubscribeToEventResponse = {
  subscriberId: string;
}

export const useSubscribeToEvent = () => {
  // const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: SubscribeToEventRequest) => {
      const response = await fetch("http://localhost:8080/subscriptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const result: SubscribeToEventResponse = await response.json()
      return result
    },
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ["subscribe-to-event"] })
    // }
  })
}