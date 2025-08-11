import type React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SubscriptionFormStep from "./subscription-form-step"

export default function EventLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="px-4 py-12 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Participe do evento. <span className="text-blue-600">Convide.</span>{" "}
              <span className="text-purple-600">Suba no ranking.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ganhe prêmios ao indicar amigos para este evento imperdível.
            </p>
          </div>

          <SubscriptionFormStep />
        </div>
      </section>

      {/* Ranking Section */}


      {/* FAQ Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-gray-600">Tire suas dúvidas sobre o evento</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                Como funciona o sistema de convites?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Após se cadastrar, você recebe um link único para compartilhar. Cada pessoa que se inscrever através do
                seu link conta como um convite para o seu ranking.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                Quais são os prêmios disponíveis?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Os primeiros colocados no ranking ganham prêmios exclusivos, incluindo produtos, vouchers e experiências
                especiais relacionadas ao evento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                Quando acontece o evento?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                O evento acontecerá em breve. Todos os participantes cadastrados receberão informações detalhadas sobre
                data, local e programação por email.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                Posso compartilhar meu link em redes sociais?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Sim! Você pode compartilhar seu link único em qualquer plataforma: WhatsApp, Instagram, Facebook,
                LinkedIn ou qualquer outro meio de comunicação.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                Como acompanho minha posição no ranking?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                O ranking é atualizado em tempo real. Você pode voltar a esta página a qualquer momento para verificar
                sua posição e o número de convites realizados.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
