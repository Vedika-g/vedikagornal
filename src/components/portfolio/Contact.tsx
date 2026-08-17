import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./Sections";

const EMAIL = "vedikasgornal@gmail.com";

export function Contact() {
  const field =
    "w-full rounded-lg border border-input bg-background/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        subtitle="Open to internships, project collaborations and conversations about AI, software and data."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="surface-card h-full space-y-5 p-6 sm:p-8">
            {[
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: Phone, label: "Phone", value: "9449107274", href: "tel:9449107274" },
              { icon: MapPin, label: "Location", value: "Belagavi, Karnataka, India" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="rounded-lg border border-primary/25 bg-primary/10 p-2 text-primary">
                  <Icon size={16} />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                  {href ? (
                    <a href={href} className="text-sm transition-colors hover:text-primary">
                      {value}
                    </a>
                  ) : (
                    <div className="text-sm">{value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/vedika-gornal-5b087041b"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:bg-accent"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href="https://github.com/Vedika-g"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:bg-accent"
              >
                <Github size={15} /> GitHub
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <form onSubmit={onSubmit} className="surface-card space-y-4 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs text-muted-foreground">
                  Name
                </label>
                <input id="name" name="name" required placeholder="Your name" className={field} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={field}
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs text-muted-foreground">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                placeholder="What's this about?"
                className={field}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me a little about it…"
                className={field}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
            {sent && (
              <p className="text-center text-xs text-muted-foreground">
                Your email app should open with the message ready to send.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <div className="font-display text-base font-bold">Vedika Gornal</div>
          <p className="mt-1 text-xs text-muted-foreground">
            Computer Science Engineering Student | AI/ML | Software Development | Data Analytics
          </p>
        </div>
        <div className="flex items-center gap-3">
          {[
            {
              href: "https://www.linkedin.com/in/vedika-gornal-5b087041b",
              icon: Linkedin,
              label: "LinkedIn",
            },
            { href: "https://github.com/Vedika-g", icon: Github, label: "GitHub" },
            { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vedika Gornal. All rights reserved.
      </p>
    </footer>
  );
}
