import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="ruled-bg relative overflow-hidden px-6 py-28 lg:px-8 border-t border-charcoal/10"
    >
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="Milestones"
          title="Achievements &"
          accent="Recognition"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title} delay={(index % 4) * 0.06}>
              <div className="glass-card h-full p-6 border border-charcoal/15 bg-white transition-all duration-300 hover:scale-[1.03]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-crimson/10 text-crimson shadow-sm">
                  <Icon name={achievement.icon} size={19} className="text-crimson" />
                </div>
                <h3 className="mb-2 text-[0.98rem] font-bold text-charcoal leading-snug">
                  {achievement.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink font-medium">
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
