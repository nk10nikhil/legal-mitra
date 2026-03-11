import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <PageHero
        title="Contact"
        description="Connect with the LegalMitra team for institutional partnerships, pilot deployments, governance collaboration and developer ecosystem participation."
      />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border bg-card/80 p-5">
          <Mail className="mb-3 h-5 w-5 text-primary" />
          <p className="text-sm font-medium">Email</p>
          <p className="mt-1 text-sm text-muted-foreground">contact@legalmitra.in</p>
        </div>
        <div className="rounded-2xl border bg-card/80 p-5">
          <Phone className="mb-3 h-5 w-5 text-primary" />
          <p className="text-sm font-medium">Phone</p>
          <p className="mt-1 text-sm text-muted-foreground">+91-00000-00000</p>
        </div>
        <div className="rounded-2xl border bg-card/80 p-5">
          <MapPin className="mb-3 h-5 w-5 text-primary" />
          <p className="text-sm font-medium">HQ</p>
          <p className="mt-1 text-sm text-muted-foreground">New Delhi, India</p>
        </div>
      </div>
    </div>
  );
}
