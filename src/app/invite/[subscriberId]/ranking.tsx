import { getRanking } from '@/http/api'
import Image from 'next/image'
import cooper from '../../../assets/medal-cooper.svg'
import gold from '../../../assets/medal-gold.svg'
import silver from '../../../assets/medal-silver.svg'

export default async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="space-y-5 w-full max-w-[440px]">
      <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1
          return (
            <div
              key={item.id}
              className="relative flex flex-col justify-center gap-3 bg-gray-700 p-6 border border-gray-600 rounded-xl"
            >
              <span className="text-gray-300 text-sm leading-none">
                <span className="font-semibold">{rankingPosition}º</span> |{' '}
                {item.name}
              </span>

              <span className="font-heading font-semibold text-gray-200 text-2xl leading-none">
                {item.score}
              </span>
              {rankingPosition === 1 && (
                <Image src={gold} alt="" className="top-0 right-8 absolute" />
              )}
              {rankingPosition === 2 && (
                <Image src={silver} alt="" className="top-0 right-8 absolute" />
              )}
              {rankingPosition === 3 && (
                <Image src={cooper} alt="" className="top-0 right-8 absolute" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
