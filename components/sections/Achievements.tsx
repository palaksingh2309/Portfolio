import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-light px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Milestones"
          title="Achievements &"
          accent="Recognition"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title} delay={(index % 4) * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-pink-sm">
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
