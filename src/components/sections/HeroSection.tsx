"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-5xl px-6">
      <div className="py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-6 text-xs tracking-widest text-foreground-muted uppercase">
            Developer Blog
          </p>
          <h1 className="mb-8 font-serif text-5xl font-semibold leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl">
            박스로고 입은
            <br />
            개발자
          </h1>
          <p className="mb-10 max-w-md text-base leading-relaxed text-foreground-secondary">
            SAP ABAP 개발과 AI, 그리고 커피와 여행.
            <br />
            코드와 일상의 기록을 나눕니다.
          </p>
          <div className="flex gap-3">
            <Button href="/blog" size="lg">
              블로그 읽기 <ArrowRight size={14} />
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              소개
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
