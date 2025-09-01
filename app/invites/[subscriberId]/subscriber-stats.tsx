"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useGetsubscriberAccessCount } from "@/hooks/use-subscriber-access-count";
import { useGetsubscriberInvitesClicks } from "@/hooks/use-subscriber-invites-clicks";
import { useGetsubscriberRanking } from "@/hooks/use-subscriber-ranking";
import { Users, Star, TrendingUp, Target } from "lucide-react";
import { useParams } from "next/navigation";

const SubscriberStats = () => {
  const params = useParams<{ subscriberId: string }>();
  const { data: subscriberRank, isLoading: rankIsLoading } =
    useGetsubscriberRanking(params.subscriberId);
  const { data: subscriberAccess, isLoading: accessIsLoading } =
    useGetsubscriberAccessCount(params.subscriberId);
  const { data: subscriberClicks, isLoading: clicksIsLoading } =
    useGetsubscriberInvitesClicks(params.subscriberId);

  if (rankIsLoading || accessIsLoading || clicksIsLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((i) => (
          <Card
            key={i}
            className="bg-white/60 backdrop-blur-sm border-0 shadow-lg"
          >
            <CardContent className="p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const stats = [
    {
      title: "Inscrições via seu link",
      value: subscriberAccess?.count || 0,
      icon: Users,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-100",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
    },
    {
      title: "Cliques no seu link",
      value: subscriberClicks?.count || 0,
      icon: TrendingUp,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-100",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      title: "Sua posição no ranking",
      value: `#${subscriberRank?.position || "N/A"}`,
      icon: Target,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-100",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card
            key={index}
            className={`bg-gradient-to-br ${stat.bgGradient} border-2 ${stat.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-full bg-gradient-to-r ${stat.gradient} shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                {index === 0 && subscriberAccess?.count > 0 && (
                  <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    <Star className="w-3 h-3" />
                    Top
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p
                  className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default SubscriberStats;
