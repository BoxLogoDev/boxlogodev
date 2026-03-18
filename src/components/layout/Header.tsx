"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, siteConfig } from "@/lib/constants";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-[var(--border)]">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        {/* 로고 */}
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name}
        </Link>

        {/* 데스크톱 네비게이션 */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13px] tracking-wide transition-colors",
                pathname === item.href || pathname.startsWith(item.href + "/")
                  ? "text-foreground"
                  : "text-foreground-muted hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* 모바일 */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground-muted transition-colors hover:text-foreground"
            aria-label="메뉴"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* 모바일 드롭다운 */}
      {mobileOpen && (
        <div className="border-t border-[var(--border)] md:hidden">
          <div className="mx-auto max-w-5xl px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block py-2.5 text-sm transition-colors",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-foreground"
                    : "text-foreground-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
