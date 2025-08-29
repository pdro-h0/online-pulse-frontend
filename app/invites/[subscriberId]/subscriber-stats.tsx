"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useGetsubscriberAccessCount } from "@/hooks/use-subscriber-access-count"
import { useGetsubscriberInvitesClicks } from "@/hooks/use-subscriber-invites-clicks"
import { useGetsubscriberRanking } from "@/hooks/use-subscriber-ranking"
import { Users, Star } from "lucide-react"
import { useParams } from "next/navigation"

const SubscriberStats = () => {
  const params = useParams<{ subscriberId: string }>()
  const { data: subscriberRank, isLoading: rankIsLoading } = useGetsubscriberRanking(params.subscriberId)
  const { data: subscriberAccess, isLoading: accessIsLoading } = useGetsubscriberAccessCount(params.subscriberId)
  const { data: subscriberClicks, isLoading: clicksIsLoading } = useGetsubscriberInvitesClicks(params.subscriberId)

  return (
    rankIsLoading || accessIsLoading || clicksIsLoading
      ? (<p>Carregando...</p>)
      : (
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-center space-x-4">
              <Users className="size-8 text-blue-600" />
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">Quantas pessoas se insceveram usando seu link: {subscriberAccess?.count}</p>
                <p className="text-2xl font-bold text-gray-900">Quantas pessoas clicaram no seu link: {subscriberClicks?.count}</p>
                <p className="text-gray-600">Você esta na {subscriberRank?.position}° posição</p>
              </div>
              <Star className="size-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      )
  )
}
export default SubscriberStats