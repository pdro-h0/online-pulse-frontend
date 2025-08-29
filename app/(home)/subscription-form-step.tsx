"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { useSubscribeToEvent } from "@/hooks/use-subscribe-to-event"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, Copy } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import z from "zod"

const subscribeToEventSchema = z.object({
  name: z.string().min(3, { message: "Inclua no mínimo 3 caracteres" }),
  email: z.string().email({ message: "E-mail válido obrigatório" }),
  referrer: z.string().nullish()
})
type SubscribeToEventSchema = z.infer<typeof subscribeToEventSchema>

const SubscriptionFormStep = () => {
  const [step, setStep] = useState<"hero" | "form" | "success">("hero")
  const [name, setName] = useState("")
  const [idRoute, setIdRoute] = useState("")
  const [linkCopied, setLinkCopied] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const { mutateAsync: subscribeToEvent, } = useSubscribeToEvent()

  const handleNextStep = () => {
    setStep("form")
  }

  console.log(idRoute)

  const handleGoToRanking = () => {
    router.push(`/invites/${idRoute}`)
  }

  const handleCopyLink = async (inviteLink: string) => {
    try {
      await navigator.clipboard.writeText(inviteLink)
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    } catch (err) {
      console.error("Erro ao copiar link:", err)
    }
  }

  const subscribeToEventForm = useForm<SubscribeToEventSchema>({
    resolver: zodResolver(subscribeToEventSchema),
    defaultValues: {
      name: "",
      email: "",
      referrer: null
    }
  })

  const handleSubscribeToEvent = async ({ email, name }: SubscribeToEventSchema) => {
    if (acceptTerms) {
      const referrer = searchParams.get("referrer")
      setName(name)
      setStep("success")
      console.log({ email, name, referrer })
      subscribeToEventForm.reset()
      const { subscriberId } = await subscribeToEvent({ email, name, referrer })
      console.log(1, { subscriberId })
      setIdRoute(subscriberId)
      console.log(2, { subscriberId })
    }
  }

  const inviteLink = `http://localhost:8080/invites/${idRoute}`
  return (
    <>
      {step === "hero" && (
        <div className="max-w-md mx-auto mb-16">
          <Button
            type="button"
            onClick={handleNextStep}
            className="h-14 px-8 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Quero participar
          </Button>
        </div>
      )}

      {step === "form" && (
        <Card className="max-w-md mx-auto mb-16 shadow-xl border-0">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Complete seu cadastro</h2>
            <form onSubmit={subscribeToEventForm.handleSubmit(handleSubscribeToEvent)} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Nome completo"
                  {...subscribeToEventForm.register("name")}
                  className="h-12 text-lg px-4 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                />
                {subscribeToEventForm.formState.errors.name && <p className="text-red-500 mt-px">{subscribeToEventForm.formState.errors.name.message}</p>}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  {...subscribeToEventForm.register("email")}
                  className="h-12 text-lg px-4 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                />
                {subscribeToEventForm.formState.errors.email && <p className="text-red-500 mt-px">{subscribeToEventForm.formState.errors.email.message}</p>}
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(!!checked)}
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                  Aceito os termos de uso e política de privacidade do evento
                </label>
              </div>
              <Button
                type="submit"
                className={`${!acceptTerms && "cursor-not-allowed"} w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg`}
                disabled={!acceptTerms}
              >
                Cadastrar e gerar link
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {step === "success" && (
        <Card className="max-w-lg mx-auto mb-16 shadow-xl border-0">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Obrigado, {name}!</h2>
              {idRoute
                ? (<p className="text-gray-600 mb-6">Aqui está seu link para compartilhar:</p>)
                : <p className="text-gray-600 mb-6">Aguarde. Seu link esta sendo gerado...</p>}
            </div>

            {idRoute && (
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600 break-all mb-3">
                  {inviteLink}
                </p>
                <Button onClick={() => handleCopyLink(inviteLink)} variant="outline" className="w-full bg-transparent">
                  {linkCopied ? (
                    <>
                      <Check className="size-4 mr-2" />
                      Link copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="size-4 mr-2" />
                      Copiar link
                    </>
                  )}
                </Button>
              </div>
            )}

            <p className="text-lg font-medium text-blue-600">Compartilhe e acompanhe seu desempenho no ranking.</p>
            <Button
              type="button"
              onClick={handleGoToRanking}
              className="mt-4 h-14 px-8 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Acompanhar ranking
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  )
}
export default SubscriptionFormStep