import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./Sections";

const pipeline = ["Object Detection", "Crowd Density", "Movement Analysis", "Early Warning"];

const projects = [
  {
    title: "AI-Based Stampede Early Warning System",
    tag: "AI / Computer Vision",
    desc: "An AI-powered system designed to detect crowd density, movement patterns, and potential panic situations to provide early warnings for possible stampede events.",
    tech: ["Python", "YOLO", "CSRNet", "Computer Vision", "Optical Flow", "Machine Learning"],
    features: [
      "Crowd density estimation",
      "Movement & flow analysis",
      "Panic-pattern detection",
      "Early warning signals",
    ],
    visual: "pipeline" as const,
  },
  {
    title: "Farmer Friendly App",
    tag: "Mobile Application",
    desc: "A multilingual mobile application designed to help farmers easily access important agricultural information.",
    tech: ["Flutter", "Dart", "JSON", "REST API", "OpenWeatherMap API"],
    features: [
      "Agricultural laws",
      "Government schemes & subsidies",
      "Weather forecasts",
      "Notifications",
      "Crop advisory",
      "Multilingual: English, Hindi, Kannada, Marathi",
    ],
    visual: "mobile" as const,
  },
  {
    title: "Customer Retention & Churn Analysis Dashboard",
    tag: "Data Analytics",
    desc: "A data analytics project focused on understanding customer churn patterns and identifying factors influencing customer retention.",
    tech: ["Power BI", "Excel", "DAX", "Data Visualization", "Data Analysis"],
    features: [
      "Data cleaning & analysis",
      "Churn pattern identification",
      "Interactive dashboard",
      "Business insights & recommendations",
    ],
    visual: "dashboard" as const,
  },
];

function Visual({ kind }: { kind: "pipeline" | "mobile" | "dashboard" }) {
  if (kind === "pipeline") {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {pipeline.map((p, i) => (
          <span key={p} className="flex items-center gap-2">
            <span className="rounded-lg border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs text-primary">
              {p}
            </span>
            {i < pipeline.length - 1 && <span className="text-muted-foreground">→</span>}
          </span>
        ))}
      </div>
    );
  }

  if (kind === "mobile") {
    return (
      <div className="flex gap-3">
        {["EN", "हि", "ಕ", "मर"].map((l) => (
          <div
            key={l}
            className="flex h-24 w-14 flex-col items-center justify-center gap-2 rounded-xl border border-border bg-secondary/50"
          >
            <span className="h-1.5 w-6 rounded-full bg-primary/60" />
            <span className="text-sm font-medium">{l}</span>
            <span className="h-1 w-8 rounded-full bg-border" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex h-24 items-end gap-2">
      {[45, 70, 35, 90, 60, 80, 50].map((h, i) => (
        <div
          key={i}
          style={{ height: `${h}%` }}
          className="w-6 rounded-t-md bg-gradient-to-t from-primary/20 to-primary/70"
        />
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="glow-orb pointer-events-none absolute -left-20 top-40 h-64 w-64 rounded-full opacity-25" />
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        subtitle="Selected work across computer vision, mobile development and analytics."
      />

      <div className="space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <article className="surface-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.25fr_0.75fr]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {p.tag}
                </span>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                <ul className="mt-5 grid gap-1.5 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/Vedika-g"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-accent"
                  >
                    <Github size={15} /> GitHub
                  </a>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Learn More
                    <ArrowUpRight size={15} className="transition-transform group-hover:rotate-45" />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center rounded-xl border border-border bg-background/40 p-5">
                <Visual kind={p.visual} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
