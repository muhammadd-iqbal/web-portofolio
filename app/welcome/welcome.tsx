import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ExternalLink,
  Download,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { projects, technologies } from "~/data/data";

export function Welcome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              IQBAL
            </h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {["Home", "About", "Experience", "Projects", "Education"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <ul className="md:hidden mt-4 space-y-2 pb-4">
              {["Home", "About", "Experience", "Projects"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600 font-semibold text-2xl">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Muhammad Iqbal
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Full Stack Developer
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Passionate in building modern and innovative web applications. I
              love turning ideas into beneficial digital solutions.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="/cv_muhammad_iqbal.pdf"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center content-between cursor-pointer"
                download={true}
              >
                <div className="mr-2">
                  <Download />
                </div>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                I'm a Full Stack Developer with a passion for creating beautiful
                and functional web experiences. With expertise in both frontend
                and backend technologies, I bring ideas to life through clean
                code and intuitive design.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                My journey in web development started with a curiosity about how
                things work on the internet, and it has evolved into a career
                focused on building scalable and user-friendly applications.
              </p>
            </div>

            <div className="border-2 border-solid p-5 rounded-sm">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-6 max-w-7xl mx-auto">
            <Card className="hover:shadow-lg transition-all border-l-4 border-l-blue-500 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-2xl mb-1">
                      Fullstack Developer
                    </CardTitle>
                    <CardDescription className="text-base font-semibold text-blue-600">
                      PT Piramida Teknologi Informasi
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    Sep 2023 - Now
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-xl">
                  I am responsible for managing end-to-end application
                  development using Symfony, Next.js, and Go, ranging from
                  direct client coordination to analyze business requirements,
                  to the development and deployment phases using PostgreSQL,
                  Firebase, Docker, and Git, ensuring the final solutions align
                  with client specifications.
                </p>
                <ul className="space-y-2 list-disc pl-5 mt-2">
                  <li className="text-gray-700 leading-relaxed text-lg">
                    Develop responsive web interfaces using React, Nextjs and
                    modern JavaScript
                  </li>
                  <li className="text-gray-700 leading-relaxed text-lg">
                    Collab with UI/UX Designer to make responsive website
                    interfaces
                  </li>
                  <li className="text-gray-700 leading-relaxed text-lg">
                    Implement backend functionality using Go, Symfony,
                    Postgresql and Redis.
                  </li>
                  <li className="text-gray-700 leading-relaxed text-lg">
                    Implement authentication using Firebase, JWT
                  </li>
                  <li className="text-gray-700 leading-relaxed text-lg">
                    Integrate RESTful APIs and ensured smooth client–server data
                    flow
                  </li>
                  <li className="text-gray-700 leading-relaxed text-lg">
                    Implement deployment process across dev and prod
                    environments utilizing Docker containerization.
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all border-l-4 border-l-blue-500 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-2xl mb-1">
                      Mobile App Developer Intern
                    </CardTitle>
                    <CardDescription className="text-base font-semibold text-blue-600">
                      PT Andromedia
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    Aug 2022 - Dec 2022
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-xl">
                  Collaborated with the full-time engineering team to develop
                  client-requested features and internal product applications,
                  while also maintaining mobile stability through bug fixes
                  using React Native.
                </p>
                <ul className="space-y-2 list-disc pl-5 mt-2">
                  <li className="text-gray-700 leading-relaxed text-lg">
                    Collaborated closely with UI/UX designers to translate
                    design mockups into pixel-perfect and responsive mobile
                    interfaces.
                  </li>
                  <li className="text-gray-700 leading-relaxed text-lg">
                    Developed comprehensive unit tests for every new feature to
                    ensure code reliability and maintain high software quality.
                  </li>
                  <li className="text-gray-700 leading-relaxed text-lg">
                    Integrated RESTful APIs/GraphQL with backend services to
                    ensure seamless data flow and application functionality.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-blue-500 overflow-hidden hover:shadow-lg transition-all duration-300 group rounded-2xl"
              >
                {/* Content */}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl text-gray-900 font-bold">
                        {project.title}
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs"
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <a
                      className="cursor-pointer"
                      href={project.link}
                      target="_blank"
                    >
                      <ExternalLink
                        className="text-gray-400 group-hover:text-blue-600 transition-colors"
                        size={20}
                      />
                    </a>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Dropdown Toggle */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors mt-4"
                  >
                    <span className="font-semibold">
                      {expandedCard === index ? "Hide Details" : "View Details"}
                    </span>
                    {expandedCard === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>

                  {/* Expanded Details */}
                  {expandedCard === index && (
                    <div className="space-y-4 pt-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-300">
                      {/* Project Overview */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          Project Overview
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {project.details.overview}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          My Responsibilities
                        </h4>
                        <ul className="space-y-2 ml-5 list-disc">
                          {project.details.responsibilities.map((item, i) => (
                            <li
                              key={i}
                              className="text-gray-600 text-sm leading-relaxed"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-6 max-w-7xl mx-auto">
            <Card className="hover:shadow-lg transition-all border-l-4 border-l-blue-500 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-2xl mb-1">
                      Bachelor of Informatics Engineering
                    </CardTitle>
                    <CardDescription className="text-base font-semibold text-blue-600">
                      Electronic Engineering Polytechnic Institute of Surabaya
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end">
                    <Badge variant="outline" className="text-sm">
                      Sep 2019 - Sep 2023
                    </Badge>
                    <p className="text-base font-semibold text-blue-600 mt-1 pr-2">
                      GPA : 3.57
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Interested in working together? Feel free to reach out!
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <a
                href="mailto:miqbal.mi1411@gmail.com"
                className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all hover:-translate-y-1"
              >
                <Mail size={24} />
                <span>miqbal.mi1411@gmail.com</span>
              </a>
              <a
                href="https://github.com/muhammadd-iqbal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all hover:-translate-y-1"
              >
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammadd-iqbal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all hover:-translate-y-1"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="pt-8 border-t border-gray-800 mt-8">
              <p className="text-gray-500">
                © 2026 Iqbal. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
