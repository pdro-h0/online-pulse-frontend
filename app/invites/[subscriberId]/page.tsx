import RankingList from "./ranking-list"
import SubscriberStats from "./subscriber-stats"

const RankingStatsPage = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ranking de Participantes</h2>
          <p className="text-lg text-gray-600">Veja quem está liderando a competição</p>
        </div>

        {/* User Stats */}
        <SubscriberStats />

        {/* Top 5 Ranking */}
        <RankingList />
      </div>
    </section>
  )
}
export default RankingStatsPage