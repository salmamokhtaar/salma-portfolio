'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Eye, ExternalLink, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "BRS",
      description: "Modern web app for business registration. Top 3 at SomNOG 7 for innovation and impact.",
      image: "/brs.png",
      repoLink: "https://github.com/salmamokhtaar/BRSFrontend",
      liveLink: "https://businessregistration.vercel.app/",
      category: "Fullstack",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "She&Shine",
      description: "E-commerce platform for women's and kids' fashion. Built with the MERN stack.",
      image: "/image.png",
      repoLink: "https://github.com/salmamokhtaar/She-Shine-Frontend",
      liveLink: "https://shenshine.vercel.app/",
      category: "Fullstack",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    },
    {
      title: "Caawiye Caafimaad",
      description: "Mobile app in Somali for women's health info. Top 5 at GirlsInICT 2025.",
      image: "/caawiye.jpeg",
      repoLink: "https://github.com/salmamokhtaar/Exactly",
      liveLink: "https://github.com/salmamokhtaar/Exactly",
      category: "App",
      tech: ["Flutter", "Dart"],
      featured: true,
    },
    {
      title: "Sara Flowers",
      description: "HTML, CSS, JS project for first-phase defense at Irise Academy.",
      image: "/sara.png",
      repoLink: "https://github.com/salmamokhtaar/FrontEndProject",
      liveLink: "https://salmamokhtaar.github.io/FrontEndProject/",
      category: "Fullstack",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Job Portal",
      description: "Full-stack app built for final defense using React.js, Node.js, Express, MongoDB.",
      image: "/job.png",
      repoLink: "https://github.com/salmamokhtaar/ClientSide",
      liveLink: "https://client-side-lake.vercel.app/",
      category: "Fullstack",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    },
    {
      title: "Somali Quotes",
      description: "App to explore Somali proverbs with next/prev button navigation.",
      image: "soma.png",
      repoLink: "https://github.com/salmamokhtaar/SomaliQuotes",
      liveLink: "https://somaliquotesmaahmaahyo.vercel.app/",
      category: "Fullstack",
      tech: ["React", "Tailwind"],
    },
    {
      title: "Tasbih Project",
      description: "React-based digital counter app with increment/decrement features.",
      image: "tasbix.png",
      repoLink: "https://github.com/salmamokhtaar/TasbihprojectReact",
      liveLink: "https://tasbihproject-react.vercel.app/",
      category: "Fullstack",
      tech: ["React", "Tailwind CSS"],
    },
    {
      title: "Landing",
      description: "Static HTML/CSS landing page to showcase branding.",
      image: "/agr.png",
      repoLink: "https://github.com/salmamokhtaar/Agrivast-Design",
      liveLink: "https://salmamokhtaar.github.io/Agrivast-Design/",
      category: "Fullstack",
      tech: ["HTML", "CSS"],
    },
    {
      title: "Harizon",
      description: "Client project for translation business. Delivered voluntarily with complete UX flow.",
      image: "/hari.png",
      repoLink: "https://github.com/salmamokhtaar/Harizons",
      liveLink: "https://harizon.vercel.app/",
      category: "Fullstack",
      tech: ["React", "Node.js"],
    },
    {
      title: "Broccoli",
      description: "E-commerce app for organic food brand with cart and filters.",
      image: "/broccolli.png",
      repoLink: "https://github.com/salmamokhtaar/Broccoli",
      liveLink: "https://broccoliorganic.vercel.app/",
      category: "Fullstack",
      tech: ["React", "Tailwind CSS", "Vite"],
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects.slice(0, showAll ? projects.length : 3)
      : projects
          .filter((project) => project.category === filter)
          .slice(0, showAll ? projects.length : 4);

  return (
    <section id="projects" className="py-20 px-4 gradient-bg" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-portfolio-purple dark:text-portfolio-purple-light mb-10">
          Recent Works
        </h2>

        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {["All", "Fullstack", "App"].map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`rounded-full ${
                filter === category
                  ? "bg-gradient-to-r from-portfolio-purple to-portfolio-teal border-none"
                  : "border-portfolio-purple-light text-portfolio-purple hover:bg-portfolio-purple-lighter/50 dark:text-portfolio-purple-light dark:border-portfolio-purple-light/30"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`glassmorphism overflow-hidden group transition-all duration-500 hover:shadow-xl ${
                inView ? "animate-fadeIn" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${0.1 * (index % 3 + 1)}s`,
                borderImage: project.featured
                  ? "linear-gradient(45deg, rgb(155, 135, 245), rgb(56, 178, 172), rgb(249, 115, 22)) 1"
                  : "",
                borderImageSlice: project.featured ? "1" : "",
              }}
            >
              {/* Project Image with Hover Overlay */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors transform hover:scale-110"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <Code className="h-5 w-5" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full text-portfolio-teal hover:bg-portfolio-teal hover:text-white transition-colors transform hover:scale-110"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <Eye className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-0 left-0 w-full px-3 py-1.5 bg-gradient-to-r from-portfolio-purple/80 to-portfolio-teal/80 text-white flex items-center justify-center gap-1.5">
                    <Star className="h-3 w-3 fill-white" />
                    <span className="text-xs font-medium">Featured Project</span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-portfolio-purple to-portfolio-teal bg-clip-text text-transparent">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech?.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs font-medium bg-portfolio-purple-lighter border-none text-portfolio-purple dark:bg-portfolio-purple/30 dark:text-portfolio-purple-light"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-portfolio-purple hover:text-portfolio-purple-dark dark:text-portfolio-purple-light dark:hover:text-white transition-colors flex items-center"
                  >
                    <Code className="h-3.5 w-3.5 mr-1" />
                    Source
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-portfolio-teal hover:text-portfolio-teal-dark dark:text-portfolio-teal-light dark:hover:text-white transition-colors flex items-center"
                  >
                    Demo
                    <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="rounded-full border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white dark:border-portfolio-purple-light dark:text-portfolio-purple-light dark:hover:bg-portfolio-purple-light dark:hover:text-gray-900 group"
          >
            {showAll ? "Show Less" : "Show More Projects"}
            {!showAll && (
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
