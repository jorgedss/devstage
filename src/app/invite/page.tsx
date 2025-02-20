import Image from 'next/image'

import logo from '../../assets/logo.svg'
import InviteLinkInput from './invite-link-input'
import Ranking from './ranking'
import Statiscs from './statics'

export default function InvitePage() {
  const inviteLink = 'http://localhost:3000/invite/3728546'
  return (
    <div className="flex md:flex-row flex-col justify-between items-center gap-16 min-h-dvh">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />
        <div className="space-y-2">
          <h1 className="font-heading font-semibold text-gray-100 text-4xl leading-none">
            Inscrição confirmada
          </h1>
          <p className="text-gray-300">
            Para Entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
              Indique e ganhe
            </h2>
            <p className="text-gray-200">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />

          <Statiscs />
        </div>
      </div>
      <Ranking />
    </div>
  )
}
