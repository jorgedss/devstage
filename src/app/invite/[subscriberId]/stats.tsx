import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from '@/http/api'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

interface StatsProps {
  subscriberId: string
}

export default async function Stats({ subscriberId }: StatsProps) {
  const { count: accessCount } = await getSubscriberInviteClicks(subscriberId)
  const { count: inviteCount } = await getSubscriberInviteCount(subscriberId)
  const { position: rankingPosition } =
    await getSubscriberRankingPosition(subscriberId)

  return (
    <div className="gap-3 grid md:grid-cols-3">
      <div className="relative flex flex-col justify-center items-center gap-1 bg-gray-700 px-4 py-7 border border-gray-600 rounded-xl">
        <span className="font-heading font-semibold text-gray-200 text-2xl leading-none">
          {accessCount}
        </span>
        <span className="text-gray-300 text-sm text-center leading-none">
          Acessos ao link
        </span>

        <MousePointerClick className="top-3 left-3 absolute size-5 text-purple" />
      </div>

      <div className="relative flex flex-col justify-center items-center gap-1 bg-gray-700 px-4 py-7 border border-gray-600 rounded-xl">
        <span className="font-heading font-semibold text-gray-200 text-2xl leading-none">
          {inviteCount}
        </span>
        <span className="text-gray-300 text-sm text-center leading-none">
          Inscrições feitas
        </span>

        <BadgeCheck className="top-3 left-3 absolute size-5 text-purple" />
      </div>

      <div className="relative flex flex-col justify-center items-center gap-1 bg-gray-700 px-4 py-7 border border-gray-600 rounded-xl">
        <span className="font-heading font-semibold text-gray-200 text-2xl leading-none">
          {rankingPosition ? `${rankingPosition}º` : '-'}
        </span>
        <span className="text-gray-300 text-sm text-center leading-none">
          Posição no ranking
        </span>

        <Medal className="top-3 left-3 absolute size-5 text-purple" />
      </div>
    </div>
  )
}
