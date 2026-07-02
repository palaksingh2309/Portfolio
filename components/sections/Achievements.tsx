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
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-rose/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="Milestones"
          title="Achievements &"
          accent="Recognition"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title} delay={(index % 4) * 0.06}>
              <div className="glass-card glass-card-hover h-full p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blush text-deep">
                  <Icon name={achievement.icon} size={19} />
                </div>
                <h3 className="mb-1.5 text-[0.97rem] font-bold text-charcoal">
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
