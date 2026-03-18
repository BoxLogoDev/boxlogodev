import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function ProductHighlight() {
  return (
    <section className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-lg">
            <p className="mb-3 text-xs tracking-widest text-foreground-muted uppercase">
              Product
            </p>
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              SAP Assistant Desktop
            </h2>
            <p className="text-sm leading-relaxed text-foreground-secondary">
              다중 LLM 통합, CBO 분석, 로컬 우선 아키텍처.
              SAP 운영 자동화를 안전하게 수행하세요.
            </p>
          </div>
          <Button href="/products" variant="secondary" size="lg">
            자세히 보기 <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </section>
  );
}
