import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Download, Printer, ShieldCheck, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const templates = [
  { title: "Batismo", description: "Layout classico com destaque para nome, data, local e assinaturas.", href: "/certificados/batismo" },
  { title: "EBD", description: "Modelo da Escola Biblica Dominical com trimestre, classe e professor.", href: "/certificados/ebd" },
  { title: "Discipulado", description: "Certificado dourado para cursos, com periodo e assinatura pastoral.", href: "/certificados/discipulado" },
  { title: "Apresentacao Infantil", description: "Versao para menina e para menino, com campos completos da familia.", href: "/certificados/apresentacao-menina" },
  { title: "Casamento", description: "Arte floral para registrar uniao, local e celebrantes.", href: "/certificados/casamento" },
];

const steps = [
  {
    title: "Escolha o modelo",
    description: "Selecione o certificado que voce precisa. Todos os layouts estao prontos e padronizados.",
    icon: <Wand2 className="h-5 w-5 text-primary" />,
  },
  {
    title: "Preencha os campos",
    description: "Insira os dados da igreja e do evento. Veja a previa em tempo real, sem criar conta.",
    icon: <Printer className="h-5 w-5 text-primary" />,
  },
  {
    title: "Imprima ou gere PDF",
    description: "Use o botao de impressao ou exporte o PDF para compartilhar com a congregacao.",
    icon: <Download className="h-5 w-5 text-primary" />,
  },
];

const highlights = [
  { title: "Templates aprovados", description: "Arte revisada e pronta para uso. Nao alteramos o padrao dos certificados.", icon: <ShieldCheck className="h-5 w-5 text-primary" /> },
  { title: "Sem login ou pagamento", description: "Acesso livre aos modelos. Basta abrir, preencher e imprimir.", icon: <CheckCircle2 className="h-5 w-5 text-primary" /> },
  { title: "Rapido e responsivo", description: "Funciona bem no celular e no desktop. Preenchimento fluido em poucos minutos.", icon: <Clock className="h-5 w-5 text-primary" /> },
];

export default function LandingPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 md:px-10 lg:px-16">
        <Hero />
        <TemplateGrid />
        <HowItWorks />
        <Highlights />
        <FinalCta />
      </section>
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Gerador de certificados
        </p>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Certificados prontos para batismo, casamento e ministerio em poucos cliques.
        </h1>
        <p className="text-balance text-lg text-muted-foreground">
          Todos os modelos ja estao desenhados. Basta escolher, preencher e imprimir. Sem conta, sem integracao de pagamento.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 px-8 text-base">
            <Link href="/certificados">
              Escolher certificado
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base">
            <Link href="#modelos">Ver modelos disponiveis</Link>
          </Button>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Printer className="h-4 w-4 text-primary" /> Impressao direta ou PDF
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" /> Sem login
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" /> Modelos revisados
          </span>
        </div>
      </div>

      <Card className="border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle>O que voce encontra aqui</CardTitle>
          <CardDescription className="text-base">
            Certificados aprovados por igrejas locais, com foco em clareza e em impressao.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <div className="flex items-center justify-between rounded-xl border border-primary/15 bg-background/60 px-4 py-3">
            <span>Modelos prontos</span>
            <span className="text-xl font-semibold text-foreground">6</span>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-primary/15 bg-background/60 px-4 py-3">
            <span>PDF em um clique</span>
            <span className="text-xl font-semibold text-foreground">Sim</span>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-primary/15 bg-background/60 px-4 py-3">
            <span>Uso gratuito</span>
            <span className="text-xl font-semibold text-foreground">100%</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TemplateGrid() {
  return (
    <section id="modelos" className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Modelos prontos</p>
        <h2 className="text-3xl font-bold tracking-tight">Escolha o certificado e personalize os campos.</h2>
        <p className="text-muted-foreground">
          Os layouts foram mantidos intactos para preservar o padrao. Basta informar os dados e imprimir.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.title} className="border-border/60 bg-card/80 transition hover:border-primary">
            <CardHeader>
              <CardTitle>{template.title}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <Button asChild variant="ghost" className="px-0 text-primary hover:text-primary">
                <Link href={template.href}>
                  Abrir modelo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <span className="text-xs text-muted-foreground">Pronto para imprimir</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="grid gap-6 rounded-3xl border border-border/80 bg-card px-6 py-10 md:grid-cols-[1fr,1.1fr]">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Como funciona</p>
        <h2 className="text-3xl font-bold tracking-tight">Um fluxo simples para gerar certificados sem complicacao.</h2>
        <p className="text-muted-foreground">
          Nao ha login, dashboard ou pagamentos. Apenas escolha o modelo, preencha e exporte.
        </p>
        <Button asChild className="mt-2 w-fit">
          <Link href="/certificados">
            Ir para os certificados
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <Card key={step.title} className="border-border/60 bg-background/70">
            <CardHeader className="flex flex-row items-center gap-3 space-y-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {index + 1}
              </div>
              <div className="flex items-center gap-2 text-primary">
                {step.icon}
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle className="text-lg">{step.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Diferenciais</p>
        <h2 className="text-3xl font-bold tracking-tight">Pensado para igrejas que precisam de agilidade.</h2>
        <p className="text-muted-foreground">
          Mantivemos apenas o essencial: os certificados e o que voce precisa para preenche-los rapidamente.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((highlight) => (
          <Card key={highlight.title} className="border-border/60">
            <CardHeader className="flex flex-row items-center gap-3 space-y-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                {highlight.icon}
              </div>
              <CardTitle className="text-lg">{highlight.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="rounded-3xl border border-dashed border-border/70 bg-primary/5 px-6 py-10 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Pronto para usar
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight">
        Acesse os certificados e gere o documento agora mesmo.
      </h2>
      <p className="mt-2 text-muted-foreground">
        Nenhum outro modulo, nenhum cadastro. Somente os modelos revisados e prontos para impressao.
      </p>
      <Button asChild size="lg" className="mt-6">
        <Link href="/certificados">
          Abrir os certificados
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-foreground">AdiGreja Certificados</p>
          <p>Site publico focado apenas na emissao de certificados.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/certificados" className="hover:text-foreground">
            Certificados
          </Link>
          <Link href="/certificados/batismo" className="hover:text-foreground">
            Batismo
          </Link>
          <Link href="/certificados/casamento" className="hover:text-foreground">
            Casamento
          </Link>
        </div>
        <p className="text-xs">{new Date().getFullYear()} Adigreja. Modelos mantidos conforme o padrao original.</p>
      </div>
    </footer>
  );
}
