import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/vedika-portrait.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="glow-orb pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full opacity-50" />
      <div className="glow-orb pointer-events-none absolute right-10 top-40 h-64 w-64 rounded-full opacity-30" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Open to internships & collaborations
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Vedika <span className="text-gradient">Gornal</span>
          </h1>

          <p className="mt-4 font-display text-base text-foreground/90 sm:text-lg">
            Computer Science Engineering Student · AI/ML · Software Development · Data Analytics
          </p>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            I'm a Computer Science Engineering student passionate about software development,
            Artificial Intelligence, Machine Learning, and data analytics. I enjoy turning ideas
            into practical solutions through technology while continuously improving my programming
            and problem-solving skills.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View My Projects
              <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-accent"
            >
              Let's Connect
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              {
                href: "https://www.linkedin.com/in/vedika-gornal-5b087041b",
                icon: Linkedin,
                label: "LinkedIn",
              },
              { href: "https://github.com/Vedika-g", icon: Github, label: "GitHub" },
              { href: "mailto:vedikasgornal@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-border bg-card/60 p-2.5 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="glow-orb absolute inset-6 rounded-full opacity-60" />
          <div className="relative rounded-full border border-primary/25 p-2">
            <img
              src={portrait}
              alt="Portrait of Vedika Gornal"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
