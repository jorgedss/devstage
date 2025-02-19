import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { ArrowRight, Mail, Radio, User } from 'lucide-react'
import Image from 'next/image'
import logo from '../assets/logo.svg'

export default function Home() {
  return (
    <main className="mx-auto px-5 py-8 md:py-0 max-w-[1240px]">
      <div className="flex flex-col justify-center gap-16 min-h-dvh">
        <div className="flex flex-col items-center md:items-start gap-8">
          <Image src={logo} alt="devstage" width={108.5} height={30} />
          <h1 className="flex flex-col font-heading font-medium text-4xl md:text-7xl md:text-left text-center leading-none">
            <span className="text-blue">CodeCraft</span>
            Sumit 2025
          </h1>
        </div>

        <div className="flex md:flex-row flex-col items-stretch gap-5 col">
          <div className="flex-1 space-y-6 bg-gray-700 p-8 border border-gray-600 rounded-2xl">
            <div className="flex justify-between items-center">
              <h2 className="font-heading font-semibold text-gray-200 text-xl">
                Sobre o evento
              </h2>
              <span className="flex items-center gap-2 font-semibold text-purple text-xs">
                <Radio className="size-5" />
                AO VIVO
              </span>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Um evento feito por e para pessoas desenvolvedoras apaixonadas por
              criar soluções inovadoras e compartilhar conhecimento. Vamos
              mergulhar nas tendências mais recentes em desenvolvimento de
              software, arquitetura de sistemas e tecnologias emergentes, com
              palestras, workshops e hackathons.
              <br />
              <br />
              Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito{' '}
            </p>
          </div>

          <form className="space-y-6 bg-gray-700 p-8 border border-gray-600 rounded-2xl w-full md:max-w-[440px]">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Inscrição
            </h2>
            <div className="space-y-3">
              <InputRoot>
                <InputIcon>
                  <User />
                </InputIcon>
                <InputField type="text" placeholder="Nome completo" />
              </InputRoot>

              <InputRoot>
                <InputIcon>
                  <Mail />
                </InputIcon>
                <InputField type="email" placeholder="E-mail" />
              </InputRoot>

              <Button type="submit">
                Confirmar
                <ArrowRight />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
