"use client";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { ContactForm } from "@/components/contact-form";
import { CreativeHero } from "@/components/creative-hero";
import { FloatingNav } from "@/components/floating-nav";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(false);
  const [skillPage, setSkillPage] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Python", level: 50 },
    { name: "PostgreSQL", level: 70 },
    { name: "Linux", level: 85 },
    { name: "Docker", level: 60 },
    { name: "Git", level: 85 },
  ];

  const itemsPerPage = isMobile ? 3 : 4;
  const totalPages = Math.ceil(skills.length / itemsPerPage);
  const currentSkills = skills.slice(
    skillPage * itemsPerPage,
    (skillPage + 1) * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-white overflow-hidden">
      {!isMobile && <MouseFollower />}
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-block mx-auto lg:mx-0">
                <div className="relative px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                  <span className="relative z-10">
                    Software Engineer & Creative Developer
                  </span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 animate-pulse"></span>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block">Hi, I&apos;m</span>
                <span className="text-green-400 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
                  Gustavo da Hora
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-[600px] mx-auto lg:mx-0">
                I craft exceptional digital experiences with code, creativity,
                and a passion for innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Button
                  asChild
                  className="relative overflow-hidden group bg-gradient-to-r from-green-500 to-emerald-500 border-0 rounded-[10px] w-full sm:w-auto"
                >
                  <Link href="#projects">
                    <span className="relative z-10 flex items-center justify-center">
                      View Projects{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-zinc-700 text-emerald-500 hover:text-emerald-700 hover:border-zinc-500 bg-transparent rounded-[10px] w-full sm:w-auto"
                >
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
              <div className="flex gap-4 pt-4 justify-center lg:justify-start">
                <Link
                  href="https://github.com/GustaDaHora"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all hover:scale-110"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/gustavo-dahora/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:gustadahora68@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all hover:scale-110"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center mt-8 lg:mt-0">
              <CreativeHero />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container max-w-4xl mx-auto relative z-10">
          <SectionHeading
            title="About Me"
            subtitle="My background and journey"
          />

          <div className="mt-12 sm:mt-16">
            <GlassmorphicCard>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  I&apos;m a passionate software engineer with experience building
                  web applications and digital products. I specialize in
                  frontend development with React and Next.js, but I&apos;m also
                  comfortable working with backend technologies.
                </p>
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  My journey in tech started with a strong foundation in
                  software development. I&apos;ve worked with various companies to
                  create intuitive, performant, and accessible digital
                  experiences.
                </p>
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, and
                  staying up-to-date with the latest industry trends.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 pt-8 border-t border-zinc-800">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium text-sm sm:text-base">
                      Gustavo Garcia da Hora
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium text-sm sm:text-base break-all">
                      gustadahora68@gmail.com
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium text-sm sm:text-base">
                      Brazil
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500 text-sm sm:text-base">
                      Open to opportunities
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center sm:text-left">
                  <a
                    href="/GustavoResume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 text-white rounded-[10px] transition-all hover:scale-105">
                      Download Resume
                    </Button>
                  </a>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Skills Section with Carousel */}
      <section
        id="skills"
        className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container max-w-5xl mx-auto relative z-10">
          <SectionHeading
            title="My Skills"
            subtitle="Technologies I work with"
          />

          <div className="relative mt-12 sm:mt-16">
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 transition-transform duration-500">
                {currentSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="transform transition-all duration-300 hover:scale-105"
                  >
                    <SkillBadge name={skill.name} level={skill.level} />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  setSkillPage((prev) => (prev - 1 + totalPages) % totalPages)
                }
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800"
                disabled={skillPage === 0}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSkillPage(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === skillPage
                        ? "bg-green-500 w-8"
                        : "bg-zinc-600 hover:bg-zinc-500"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSkillPage((prev) => (prev + 1) % totalPages)}
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800"
                disabled={skillPage === totalPages - 1}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container max-w-6xl mx-auto relative z-10">
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of my recent work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <ProjectCard
              title="Website Synergy"
              description="A landing page for a solar energy company"
              tags={["Next.js", "TypeScript", "Tailwind CSS"]}
              image="/synergy.png?height=400&width=600"
              demoUrl="https://synergywebsite.vercel.app/"
              repoUrl="https://github.com/GustaDaHora/simulador"
            />
            <ProjectCard
              title="Star Up Website"
              description="A modern website for a physiotherapy clinic"
              tags={["Next.js", "TypeScript", "Tailwind CSS"]}
              image="/starup.png?height=400&width=600"
              demoUrl="https://starup.vercel.app/"
              repoUrl="https://github.com/GustaDaHora"
            />
            <ProjectCard
              title="X parody"
              description="A parody website inspired by X (formerly Twitter)"
              tags={[
                "Supabase",
                "Prisma",
                "Postgres",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
              ]}
              image="/xitter.png?height=400&width=600"
              demoUrl="https://xiter.vercel.app"
              repoUrl="https://github.com/GustaDaHora"
            />
            <ProjectCard
              title="Portfolio Website"
              description="This portfolio website built with Next.js and Tailwind CSS."
              tags={["Next.js", "Tailwind CSS", "TypeScript"]}
              image="/portifolio.png?height=400&width=600"
              demoUrl="https://gustavo-dahora.vercel.app"
              repoUrl="https://github.com/GustaDaHora/gutavo-portfolio"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container max-w-5xl mx-auto relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let&apos;s work together" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-12 sm:mt-16">
            <GlassmorphicCard>
              <h3 className="text-xl sm:text-2xl font-bold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium text-sm sm:text-base break-all">
                      gustadahora68@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium text-sm sm:text-base break-all">
                      linkedin.com/in/gustavo-dahora
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Github className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium text-sm sm:text-base">
                      github.com/GustaDaHora
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-base sm:text-lg font-medium mb-4">
                  Current Status
                </h4>
                <div className="flex items-start sm:items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse mt-1 sm:mt-0"></div>
                  <span className="text-sm sm:text-base">
                    Available for freelance work and full-time opportunities
                  </span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-center sm:text-left">
              <Link href="/" className="font-bold text-lg sm:text-xl">
                <span className="text-green-400">Gustavo</span>
                <span className="text-white"> da Hora</span>
              </Link>
              <p className="text-xs sm:text-sm text-zinc-500 mt-2">
                © {new Date().getFullYear()} Gustavo Garcia da Hora. All rights
                reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://github.com/GustaDaHora"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/gustavo-dahora/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:gustadahora68@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
