"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useSubscribeToEvent } from "@/hooks/use-subscribe-to-event";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Check,
  Copy,
  ArrowRight,
  Sparkles,
  Trophy,
  Share2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const subscribeToEventSchema = z.object({
  name: z.string().min(3, { message: "Inclua no mínimo 3 caracteres" }),
  email: z.string().email({ message: "E-mail válido obrigatório" }),
  referrer: z.string().nullish(),
});
type SubscribeToEventSchema = z.infer<typeof subscribeToEventSchema>;

const SubscriptionFormStep = ({ referrer }: { referrer: string | null }) => {
  const [step, setStep] = useState<"hero" | "form" | "success">("hero");
  const [name, setName] = useState("");
  const [idRoute, setIdRoute] = useState("");
  const [linkCopied, setLinkCopied] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const router = useRouter();
  const { mutateAsync: subscribeToEvent } = useSubscribeToEvent();

  const handleNextStep = () => {
    setStep("form");
  };

  const handleGoToRanking = () => {
    router.push(`/invites/${idRoute}`);
  };

  const handleCopyLink = async (inviteLink: string) => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar link:", err);
    }
  };

  const subscribeToEventForm = useForm<SubscribeToEventSchema>({
    resolver: zodResolver(subscribeToEventSchema),
    defaultValues: {
      name: "",
      email: "",
      referrer: null,
    },
  });

  const handleSubscribeToEvent = async ({
    email,
    name,
  }: SubscribeToEventSchema) => {
    if (acceptTerms) {
      setName(name);
      setStep("success");
      subscribeToEventForm.reset();
      const { subscriberId } = await subscribeToEvent({
        email,
        name,
        referrer,
      });
      setIdRoute(subscriberId);
    }
  };

  const inviteLink = `${process.env.API_URL}/invites/${idRoute}`;

  return (
    <>
      {step === "hero" && (
        <div className="max-w-md mx-auto mb-16">
          <Button
            type="button"
            onClick={handleNextStep}
            className="group relative h-16 px-10 text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Quero participar
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>

          <div className="text-center mt-6">
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm font-medium border-green-200 text-green-700 bg-green-50/50"
            >
              ✨ 100% Gratuito
            </Badge>
          </div>
        </div>
      )}

      {step === "form" && (
        <Card className="max-w-md mx-auto mb-16 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Complete seu cadastro
              </h2>
              <p className="text-gray-600">
                É rápido e fácil! Em poucos passos você estará participando.
              </p>
            </div>

            <form
              onSubmit={subscribeToEventForm.handleSubmit(
                handleSubscribeToEvent
              )}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Nome completo
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome completo"
                  {...subscribeToEventForm.register("name")}
                  className="h-14 text-lg px-4 border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all duration-200 focus:ring-4 focus:ring-blue-100"
                />
                {subscribeToEventForm.formState.errors.name && (
                  <p className="text-red-500 text-sm">
                    {subscribeToEventForm.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...subscribeToEventForm.register("email")}
                  className="h-14 text-lg px-4 border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all duration-200 focus:ring-4 focus:ring-blue-100"
                />
                {subscribeToEventForm.formState.errors.email && (
                  <p className="text-red-500 text-sm">
                    {subscribeToEventForm.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(!!checked)}
                  className="mt-1 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-600 leading-relaxed"
                >
                  Aceito os{" "}
                  <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                    termos de uso
                  </span>{" "}
                  e{" "}
                  <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                    política de privacidade
                  </span>{" "}
                  do evento
                </label>
              </div>

              <Button
                type="submit"
                disabled={!acceptTerms}
                className={`w-full h-14 text-lg font-semibold rounded-xl transition-all duration-300 transform ${acceptTerms
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                <Trophy className="w-5 h-5 mr-2" />
                Cadastrar e gerar link
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {step === "success" && (
        <Card className="max-w-lg mx-auto mb-16 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Check className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Parabéns, {name}! 🎉
              </h2>
              {idRoute ? (
                <p className="text-gray-600 mb-6 text-lg">
                  Aqui está seu link exclusivo para compartilhar:
                </p>
              ) : (
                <p className="text-gray-600 mb-6 text-lg">
                  Aguarde. Seu link está sendo gerado...
                </p>
              )}
            </div>

            {idRoute && (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Share2 className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">
                    Seu link de convite:
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-blue-200 mb-4">
                  <p className="text-sm text-gray-600 break-all font-mono">
                    {inviteLink}
                  </p>
                </div>
                <Button
                  onClick={() => handleCopyLink(inviteLink)}
                  variant="outline"
                  className="w-full bg-white hover:bg-blue-50 border-blue-200 hover:border-blue-300 transition-all duration-200"
                >
                  {linkCopied ? (
                    <>
                      <Check className="size-4 mr-2 text-green-600" />
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

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white mb-6">
              <h3 className="text-lg font-semibold mb-2">
                🚀 Próximos passos:
              </h3>
              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="size-2 bg-white rounded-full"></span>
                  Compartilhe seu link com amigos
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 bg-white rounded-full"></span>
                  Acompanhe seu ranking
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 bg-white rounded-full"></span>
                  Ganhe prêmios exclusivos
                </li>
              </ul>
            </div>

            <Button
              type="button"
              onClick={handleGoToRanking}
              className="w-full h-16 text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Trophy className="w-6 h-6 mr-3" />
              Acompanhar ranking
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default SubscriptionFormStep;
