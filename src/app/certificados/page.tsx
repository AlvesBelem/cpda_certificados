import Link from "next/link";
import { ArrowRight, Download, Printer } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const certificadosDisponiveis = [
  {
    slug: "batismo",
    titulo: "Certificado de Batismo",
    descricao: "Modelo com campos para dados do batizando, data e assinaturas.",
  },
  {
    slug: "ebd",
    titulo: "Certificado EBD",
    descricao: "Modelo inspirado na Escola Biblica Dominical com trimestre, classe e assinaturas.",
  },
  {
    slug: "discipulado",
    titulo: "Certificado de Discipulado",
    descricao: "Modelo dourado para cursos e treinamentos de discipulado.",
  },
  {
    slug: "apresentacao-menina",
    titulo: "Apresentacao de Criancas (Menina)",
    descricao: "Certificado especial para apresentacao feminina, mantendo o layout original.",
  },
  {
    slug: "apresentacao-menino",
    titulo: "Apresentacao de Criancas (Menino)",
    descricao: "Variante masculina do certificado de apresentacao infantil.",
  },
  {
    slug: "casamento",
    titulo: "Certificado de Casamento",
    descricao: "Modelo floral inspirado no layout tradicional de casamento cristao.",
  },
];

export default function CertificadosPage() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12 md:px-10 lg:px-16">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">Certificados</p>
        <h1 className="text-2xl font-semibold text-foreground">Selecione o modelo</h1>
        <p className="text-sm text-muted-foreground">
          Escolha um certificado para preencher e imprimir. Os templates foram mantidos intactos para preservar o padrao visual.
        </p>
      </header>

      <Card className="border-none bg-accent/40 shadow-sm">
        <CardHeader>
          <CardTitle>Como usar</CardTitle>
          <CardDescription>Preencha, visualize em tempo real e gere o PDF.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">1. Abra o modelo</p>
            <p className="text-sm text-muted-foreground">Escolha o certificado e informe o nome da igreja e o logo (opcional).</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">2. Preencha os campos</p>
            <p className="text-sm text-muted-foreground">Os dados aparecem na previa imediatamente, sem login ou cadastro.</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">3. Imprima ou baixe</p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Printer className="h-4 w-4 text-primary" />
              <Download className="h-4 w-4 text-primary" />
              Use o botao de impressao ou exporte o PDF para compartilhar.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certificadosDisponiveis.map((certificado) => (
          <Link key={certificado.slug} href={`/certificados/${certificado.slug}`} className="block">
            <Card className="h-full border-border/60 bg-card/80 transition hover:border-primary">
              <CardHeader>
                <CardTitle>{certificado.titulo}</CardTitle>
                <CardDescription>{certificado.descricao}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Clique para abrir e personalizar.</span>
                <ArrowRight className="h-4 w-4 text-primary" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
