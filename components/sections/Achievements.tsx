import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-gradient-to-b from-white via-light to-light px-6 py-28 lg:px-8"
    >
      {/* Decorative blurs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-rose/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blush/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="Milestones"
          title="Achievements &"
          accent="Recognition"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title} delay={(index % 4) * 0.06}>
              <div className="glass-card glow-hover border border-white/80 h-full p-6 transition-all duration-300 hover:scale-[1.03] hover:border-pink/20 hover:bg-white/80">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blush text-deep shadow-sm">
                  <Icon name={achievement.icon} size={19} className="text-deep" />
                </div>
                <h3 className="mb-2 text-[0.98rem] font-bold text-charcoal leading-snug">
                  {achievement.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {achievement.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
