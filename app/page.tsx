"use client";

import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
});
const About = dynamic(() => import("@/components/About"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: false,
});
const Education = dynamic(() => import("@/components/Education"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
