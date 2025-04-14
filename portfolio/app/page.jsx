"use client"

import { useScroll } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import CvDownload from "@/components/cv-download"

export default function Home() {
  const { scrollYProgress } = useScroll()

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero scrollYProgress={scrollYProgress} />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <CvDownload />
    </main>
  );
}
