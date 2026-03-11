import Link from "next/link";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "AI", href: "/ai-system" },
      { label: "Architecture", href: "/architecture" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "/documentation" },
      { label: "Developers", href: "/developers" },
      { label: "Research", href: "/governance" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_repeat(3,minmax(0,1fr))] lg:px-8">
        <div>
          <h3 className="font-[var(--font-heading)] text-lg font-semibold">LegalMitra</h3>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            AI-assisted, human-supervised, blockchain-secured digital justice infrastructure.
          </p>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h4 className="text-sm font-semibold">{group.title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
