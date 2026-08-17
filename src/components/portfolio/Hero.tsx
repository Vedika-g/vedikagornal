import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import portrait from "@/assets/vedika-portrait-new.png";

const socials = [
  {
    href: "https://www.linkedin.com/in/vedika-gornal-5b087041b",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/Vedika-g", icon: Github, label: "GitHub" },
  { href: "mailto:vedikasgornal@gmail.com", icon: Mail, label: "Email" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden px-6 pt-28 pb-16 lg:pt-24"
    >
      {/* Ambient background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb absolute left-[8%] top-[10%] h-[400px] w-[400px] rounded-full opacity-50" />
        <div className="absolute bottom-[8%] right-[6%] h-[500px] w-[500px] rounded-full bg-violet/15 blur-[150px]" />
        <div className="grid-backdrop absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Content side */}
        <div className="order-2 flex flex-col space-y-8 lg:order-1">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-glow" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Open to internships &amp; collaborations
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-7xl">
              Vedika <span className="text-gradient">Gornal</span>
            </h1>
            <p className="font-display text-xl font-semibold text-foreground/85 md:text-2xl">
              Computer Science Engineering Student
              <span className="mx-2 text-primary-glow/60">•</span>AI/ML
              <span className="mx-2 text-primary-glow/60">•</span>Software Development
            </p>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm a Computer Science Engineering student passionate about software development,
            Artificial Intelligence, Machine Learning, and data analytics. I enjoy turning ideas
            into practical solutions through technology while continuously improving my programming
            and problem-solving skills.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-xl bg-primary px-8 py-4 font-bold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
            >
              <span className="absolute inset-0 translate-y-full bg-foreground/15 transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative flex items-center">
                View My Projects
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </span>
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-border px-8 py-4 font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-accent"
            >
              Let's Connect
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="rounded-lg border border-border bg-card/50 p-3 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary-glow"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* Portrait side */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-center">
          <div className="group relative h-72 w-72 md:h-96 md:w-96">
            <div className="absolute -inset-4 animate-pulse rounded-full bg-[image:var(--gradient-accent)] opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />

            <div className="absolute inset-0 rounded-full border border-border p-2 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 rounded-full border border-foreground/5" />
            </div>

            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-border transition-colors duration-500 group-hover:border-primary/60">
              <img
                src={portrait}
                alt="Portrait of Vedika Gornal"
                width={1024}
                height={1024}
                className="h-full w-full object-cover translate-x-[10px]"
              />
            </div>

            <div className="absolute -bottom-2 -right-2 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card shadow-2xl">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[image:var(--gradient-accent)]">
                <Sparkles size={16} className="text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
