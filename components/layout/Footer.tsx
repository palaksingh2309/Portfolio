import { Heart } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#120d10] px-6 py-7 text-center text-sm text-white/40">
      <p className="inline-flex flex-wrap items-center justify-center gap-1.5">
        Designed &amp; crafted with
        <Heart size={14} className="fill-rose text-rose" aria-label="love" />
        by <span className="font-medium text-rose">{siteConfig.name}</span>
        <span aria-hidden>·</span> {new Date().getFullYear()}
      </p>
    </footer>
  );
}
