import type { Metadata } from "next";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "제품",
  description: "SAP Assistant Desktop — SAP 운영 자동화 도구",
};

const features = [
  { title: "다중 LLM 통합", description: "GPT-4, Claude, Gemini를 하나의 인터페이스에서 활용" },
  { title: "로컬 우선 보안", description: "모든 데이터가 사용자 PC에서 처리. 외부 유출 없음" },
  { title: "CBO 분석", description: "SAP 커스텀 비즈니스 오브젝트 자동 분석" },
  { title: "ABAP 코드 생성", description: "컨텍스트 기반 ABAP 코드 자동 생성 및 리뷰" },
  { title: "워크플로우 자동화", description: "반복 SAP 작업을 자동화하여 생산성 향상" },
  { title: "데스크톱 앱", description: "Electron + React 기반 네이티브 경험" },
];

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-16 max-w-2xl">
        <p className="mb-3 text-xs tracking-widest text-foreground-muted uppercase">
          Product
        </p>
        <h1 className="mb-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
          SAP Assistant Desktop
        </h1>
        <p className="mb-8 text-base leading-relaxed text-foreground-secondary">
          다중 LLM 통합 · CBO 분석 · 로컬 우선 아키텍처로 SAP 운영 자동화를
          안전하게 수행하세요.
        </p>
        <Button href="https://sap-assistant.vercel.app" size="lg">
          공식 사이트 <ArrowRight size={14} />
        </Button>
      </div>

      <div className="mb-16 h-px bg-[var(--border)]" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description }) => (
          <GlassCard key={title}>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-foreground-muted">
              {description}
            </p>
          </GlassCard>
        ))}
      </div>

      <div className="mt-20 border-t border-[var(--border)] pt-12 text-center">
        <p className="text-sm text-foreground-muted">
          더 많은 제품이 준비 중이에요.
        </p>
      </div>
    </div>
  );
}
