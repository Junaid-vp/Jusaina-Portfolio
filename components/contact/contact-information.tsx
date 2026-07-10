import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { SpeechHeartIcon } from "@/components/shared/speech-heart-icon";
import { SoundWave } from "@/components/shared/sound-wave";

export function ContactInformation() {
  return (
    <div className="space-y-8">
      {/* Contact details */}
      <div className="space-y-5">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-blush/60 flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Location</p>
            <p className="text-sm text-muted">{siteConfig.location}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-blush/60 flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Phone</p>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-blush/60 flex items-center justify-center shrink-0">
            <Mail className="w-4 h-4 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Email</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-muted hover:text-primary transition-colors break-all"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative illustration */}
      <div className="hidden md:block pt-6">
        <div className="bg-cream/80 rounded-2xl p-8 border border-border/50 text-center">
          <SpeechHeartIcon className="w-16 h-16 text-primary/30 mx-auto mb-4" />
          <SoundWave className="w-24 h-8 mx-auto mb-3" />
          <p
            className="text-sm text-primary/50"
            style={{ fontFamily: "var(--font-handwritten)" }}
          >
            Every voice matters ♡
          </p>
        </div>
      </div>
    </div>
  );
}
