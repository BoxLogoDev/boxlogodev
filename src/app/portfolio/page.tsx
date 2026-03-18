import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "포트폴리오",
  description: "프로젝트 쇼케이스",
};

const projects = [
  {
    title: "SAP Assistant Desktop",
    year: "2025 —",
    description:
      "다중 LLM 통합 SAP 운영 자동화 데스크톱 앱. Electron + React + TypeScript.",
    tags: ["Electron", "React", "TypeScript", "LLM"],
    url: "https://sap-assistant.vercel.app",
  },
  {
    title: "박스로고 개발자 블로그",
    year: "2026 —",
    description:
      "Next.js 16 + Velite + MDX 기반 자체 개발 블로그. 다크/라이트 테마, SSG.",
    tags: ["Next.js", "Velite", "MDX", "Tailwind"],
    url: "https://boxlogodev.com",
  },
];

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-12">
        <h1 className="font-serif text-3xl font-semibold text-foreground">
          포트폴리오
        </h1>
        <p className="mt-2 text-sm text-foreground-muted">
          만든 것들
        </p>
      </div>

      <div className="divide-y divide-[var(--border)]">
        {projects.map((project) => (
          <div key={project.title} className="py-10 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-lg">
                <div className="mb-2 flex items-baseline gap-3">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className="text-xs text-foreground-muted">
                    {project.year}
                  </span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-foreground-secondary">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-foreground-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Button href={project.url} variant="secondary" size="md">
                방문 <ArrowRight size={12} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
