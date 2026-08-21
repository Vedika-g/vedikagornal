import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About, Skills, Services, Education } from "@/components/portfolio/Sections";
import { Projects } from "@/components/portfolio/Projects";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Vedika Gornal — CSE Student | AI/ML & Data Analytics";
const description =
  "Portfolio of Vedika Gornal, a final-year Computer Science Engineering student building projects across AI/ML, computer vision, software development and data analytics.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      // 1. ADDED GOOGLE VERIFICATION CODE CLEANLY HERE FOR TANSTACK ROUTER
      { name: "google-site-verification", content: "YOUR_COPIED_STRING_FROM_GOOGLE" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
