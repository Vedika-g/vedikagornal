import {
  BarChart3, BrainCircuit, Code2, Database, GraduationCap, Layers, Sparkles, Wrench,
} from "lucide-react";
import portrait from "@/assets/vedika-portrait.jpg";
import { Reveal } from "@/hooks/use-reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-sm text-muted-foreground sm:text-base">{subtitle}</p>}
    </Reveal>
  );
}

const stats = [
  { value: "9.08", label: "CGPA" },
  { value: "2027", label: "Graduation" },
  { value: "3+", label: "Featured Projects" },
  { value: "CSE", label: "Student" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="About"
        title="Turning ideas into practical technology"
        subtitle="A final-year Computer Science Engineering student focused on building useful things with code and data."
      />

      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <Reveal>
          <div className="surface-card overflow-hidden p-3">
            <img
              src={portrait}
              alt="Vedika Gornal working as a computer science student"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/5] w-full rounded-lg object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              I'm currently in my final year of Computer Science and Engineering, where most of my
              time goes into programming, data structures and algorithms, and building projects that
              solve real problems.
            </p>
            <p>
              My interests sit at the intersection of Artificial Intelligence, Machine Learning and
              Computer Vision on one side, and software and data analytics on the other. I like
              taking an idea from a rough concept to something that actually runs — a model, a
              mobile app, or a dashboard someone can use.
            </p>
            <p>
              Right now I'm deepening my problem-solving skills, exploring AI-driven applications and
              modern software technologies, and preparing myself for opportunities in the technology
              industry.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="surface-card p-4 text-center">
                <div className="font-display text-2xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const skillGroups = [
  { icon: Code2, title: "Programming", items: ["Java", "Python"] },
  {
    icon: Layers,
    title: "Data Structures & Algorithms",
    items: ["Problem Solving", "Searching", "Sorting", "Basic Algorithmic Techniques"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    items: ["Machine Learning Fundamentals", "Computer Vision", "AI-Based Applications"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    items: ["Power BI", "Excel", "Data Visualization", "Data Analysis", "DAX"],
  },
  { icon: Sparkles, title: "Web & App Development", items: ["Flutter", "Dart"] },
  {
    icon: Database,
    title: "Core Computer Science",
    items: ["DBMS", "Object-Oriented Programming", "Computer Networks", "Operating Systems"],
  },
  { icon: Wrench, title: "Tools & Technologies", items: ["Git", "GitHub", "VS Code"] },
  {
    icon: GraduationCap,
    title: "Soft Skills",
    items: ["Problem Solving", "Communication", "Teamwork", "Adaptability"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="Skills"
        title="What I work with"
        subtitle="Technologies and fundamentals I use across software development, AI/ML and analytics."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 4) * 70}>
            <div className="surface-card h-full p-5">
              <g.icon size={20} className="text-primary" />
              <h3 className="mt-4 text-sm font-semibold">{g.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    icon: BarChart3,
    title: "Data Analytics & Visualization",
    desc: "Analyze datasets and transform information into meaningful dashboards and visualizations using Power BI and Excel.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning Solutions",
    desc: "Develop AI-based applications using machine learning and computer vision techniques.",
  },
  {
    icon: Code2,
    title: "Software Development",
    desc: "Build practical software solutions using Java and Python, with emphasis on efficient programming and problem-solving.",
  },
  {
    icon: Sparkles,
    title: "Data-Driven Solutions",
    desc: "Transform raw data into meaningful insights that can support better decision-making.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="Services"
        title="How I can help"
        subtitle="Solution areas where I can contribute as a student developer and analyst."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 2) * 80}>
            <div className="surface-card h-full p-6">
              <div className="inline-flex rounded-xl border border-primary/25 bg-primary/10 p-2.5 text-primary">
                <s.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const journey = [
  "CSE Education",
  "Programming & DSA",
  "AI / ML",
  "Data Analytics",
  "Project Development",
];

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <Reveal>
        <div className="surface-card relative p-6 sm:p-8">
          <div className="flex flex-wrap items-start gap-4">
            <div className="rounded-xl border border-primary/25 bg-primary/10 p-3 text-primary">
              <GraduationCap size={22} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold">
                Bachelor of Engineering — Computer Science and Engineering
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                KLE College of Engineering and Technology, Chikodi, Belagavi · Affiliated with
                Visvesvaraya Technological University (VTU)
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {["Final Year", "Expected Graduation: 2027", "CGPA: 9.08"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-16">
        <SectionHeading
          eyebrow="Learning & Building"
          title="Where I am right now"
          subtitle="Currently building projects and developing technical expertise in software development, AI/ML, and data analytics."
        />
        <Reveal>
          <ol className="relative grid gap-4 sm:grid-cols-5">
            {journey.map((step, i) => (
              <li key={step} className="surface-card p-4">
                <span className="font-display text-xs text-primary">0{i + 1}</span>
                <p className="mt-2 text-sm font-medium">{step}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
