import type React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Trophy, Users, Star, Zap } from "lucide-react"
import SubscriptionFormStep from "./subscription-form-step"

export default function EventLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-48 h-48 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-2xl" />
      </div>

      <section className="relative px-4 py-12 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-8">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-blue-200 text-blue-700 bg-blue-50/50 backdrop-blur-sm">
              🎉 Evento Exclusivo
            </Badge>
            <ArrowRight className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-600 font-medium">Inscreva-se agora</span>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Online
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                Pulse
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ganhe prêmios exclusivos ao indicar amigos para este evento imperdível. 
              <span className="font-semibold text-gray-800"> Compartilhe, convide e conquiste!</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Convide Amigos</h3>
              <p className="text-gray-600 text-sm text-center">Compartilhe seu link único e convide amigos para participar</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Suba no Ranking</h3>
              <p className="text-gray-600 text-sm text-center">Acompanhe sua posição em tempo real no ranking de convites</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Ganhe Prêmios</h3>
              <p className="text-gray-600 text-sm text-center">Os primeiros colocados ganham prêmios exclusivos</p>
            </div>
          </div>

          <SubscriptionFormStep />
        </div>
      </section>

      <section className="px-4 py-16 bg-white/40 backdrop-blur-sm relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-blue-600" />
              <Badge variant="outline" className="px-3 py-1 text-xs font-medium">
                FAQ
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Tire suas dúvidas sobre o evento e como funciona o sistema de convites</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl overflow-hidden">
            <Accordion type="single" collapsible className="divide-y divide-gray-100">
              <AccordionItem value="item-1" className="border-0">
                <AccordionTrigger className="px-8 py-6 text-left font-semibold text-gray-900 hover:no-underline hover:bg-gray-50/50 transition-colors">
                  Como funciona o sistema de convites?
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-600">
                  Após se cadastrar, você recebe um link único para compartilhar. Cada pessoa que se inscrever através do
                  seu link conta como um convite para o seu ranking. O sistema é atualizado em tempo real!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-0">
                <AccordionTrigger className="px-8 py-6 text-left font-semibold text-gray-900 hover:no-underline hover:bg-gray-50/50 transition-colors">
                  Quais são os prêmios disponíveis?
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-600">
                  Os primeiros colocados no ranking ganham prêmios exclusivos, incluindo produtos premium, vouchers 
                  de desconto e experiências especiais relacionadas ao evento. Quanto mais convites, melhores as chances!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-0">
                <AccordionTrigger className="px-8 py-6 text-left font-semibold text-gray-900 hover:no-underline hover:bg-gray-50/50 transition-colors">
                  Quando acontece o evento?
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-600">
                  O evento acontecerá em breve. Todos os participantes cadastrados receberão informações detalhadas sobre
                  data, local e programação por email. Fique atento à sua caixa de entrada!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-0">
                <AccordionTrigger className="px-8 py-6 text-left font-semibold text-gray-900 hover:no-underline hover:bg-gray-50/50 transition-colors">
                  Posso compartilhar meu link em redes sociais?
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-600">
                  Sim! Você pode compartilhar seu link único em qualquer plataforma: WhatsApp, Instagram, Facebook,
                  LinkedIn ou qualquer outro meio de comunicação. Quanto mais compartilhar, mais chances de subir no ranking!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
