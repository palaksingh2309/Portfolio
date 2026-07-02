import Reveal from "./Reveal";

type SectionHeadingProps = {
  label: string;
  title: string;
  accent: string;
  dark?: boolean;
};

export default function SectionHeading({
  label,
  title,
  accent,
  dark = false,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <p
        className={`font-mono text-xs tracking-[0.18em] uppercase mb-2 ${
          dark ? "text-rose" : "text-pink"
        }`}
      >
        {label}
      </p>
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight ${
          dark ? "text-white" : "text-charcoal"
        }`}
      >
        {title} <span className={dark ? "text-rose" : "text-pink"}>{accent}</span>
      </h2>
    </Reveal>
  );
}
