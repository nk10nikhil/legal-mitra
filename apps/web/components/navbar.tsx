"use client";

import Link from "next/link";
import { Github, Menu, Scale, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/store/ui-store";

const navItems = [
  { href: "/platform", label: "Platform" },
  { href: "/architecture", label: "Architecture" },
  { href: "/ai-system", label: "AI System" },
  { href: "/security", label: "Security" },
  { href: "/developers", label: "Developers" },
  { href: "/documentation", label: "Docs" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const { mobileNavOpen, toggleMobileNav, closeMobileNav } = useUIStore();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 font-[var(--font-heading)] text-lg font-semibold">
          <Scale className="h-5 w-5 text-primary" />
          LegalMitra
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm text-muted-foreground transition hover:text-foreground",
                pathname === item.href && "text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm">
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              <span className="ml-2">GitHub</span>
            </Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={toggleMobileNav} aria-label="Toggle navigation">
          {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileNavOpen ? (
        <div className="border-t bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMobileNav} className="text-sm font-medium">
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <ThemeToggle />
              <Button asChild variant="outline" size="sm">
                <Link href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
