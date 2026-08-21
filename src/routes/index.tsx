import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About, Skills, Services, Education } from "@/components/portfolio/Sections";
import { Projects } from "@/components/portfolio/Projects";
import { Contact, Footer } from "@/components/portfolio/Contact";
// 1. Add this import at the very top of index.tsx
import Head from "next/head"; 
import { Hero } from "@/components/Hero"; // (or wherever your components are)

export default function Home() {
  return (
    <>
      {/* 2. Add the Head block with your Google verification tag */}
      <Head>
        <title>Vedika Gornal | Portfolio</title>
        <meta name="google-site-verification" content="PASTE_YOUR_COPIED_STRING_HERE" />
      </Head>

      {/* Your existing components go below */}
      <main>
        <Hero />
        {/* other components... */}
      </main>
    </>
  );
}

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
