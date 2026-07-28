import { ExternalLink } from "lucide-react";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "AI Resource Allocation System",
    image: "/new-evo-allocate.png",
    description:
      "Developed an AI-powered resource allocation platform that intelligently assigns resources using Machine Learning based on skills, availability, experience, and project requirements.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Python",
      "Scikit-learn",
      "Gemini API",
    ],
    github: "#",
    live: "#",
    upcoming:true,
  },
  {
    title: "Freelancing Platform",
    image: "/freelancing.jpg",
    description:
      "Developed a full-stack freelancing platform where clients can hire developers, freelancers can manage projects, communicate securely, and collaborate efficiently.",
    technologies: [
      "Django",
      "Python",
      "SQLite",
      "Tailwind CSS",
      "JavaScript",
    ],
    github: "https://github.com/afreenkhatoon01/Freelancing-Platform",
    live: "#",
  },
  {
    title: "E-Commerce Website",
    image: "/e commerce website.jpg",
    description:
      "Designed and developed a responsive e-commerce website with product catalog, shopping cart, intuitive UI, and seamless user experience.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/afreenkhatoon01/Task-4",
    live: "#",
  },
  {
    title: "Student Score Prediction",
    image: "/student score prediction.png",
    description:
      "Built a Machine Learning model that predicts students' academic performance using regression algorithms and data analysis.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
    ],
    github: "#",
    live: "#",
    upcoming: true,
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[var(--bg)] py-24"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
            absolute
            -top-40
            left-1/2
            -translate-x-1/2
            h-[400px]
            w-[600px]
            rounded-full
            bg-cyan-500/20
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-600/20
            blur-[120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-500/20
              bg-white/5
              px-5
              py-2
              text-sm
              font-semibold
              tracking-[0.2em]
              text-cyan-300
              backdrop-blur-md
            "
          >
            🚀 MY PROJECTS
          </span>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              leading-tight
              text-[var(--text)]
              lg:text-6xl
            "
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-[var(--secondary)]
            "
          >
            A collection of Artificial Intelligence, Machine Learning and
            Full-Stack Development projects focused on solving real-world
            problems with scalable architecture and modern UI.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                relative
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:shadow-[0_0_35px_rgba(34,211,238,.18)]
              "
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Bottom Shadow Overlay inside Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/90 via-transparent to-transparent" />

                {/* Badge Number */}
                <div className="absolute left-5 top-5">
                  <span
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-[var(--bg)]/80
                      px-4
                      py-2
                      text-sm
                      font-bold
                      text-cyan-300
                      shadow-sm
                      backdrop-blur-md
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Upcoming Badges */}
                {project.upcoming && (
                  <>
                    <div className="absolute right-5 top-5 z-20">
                      <span className="rounded-full bg-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                        Upcoming
                      </span>
                    </div>
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                      <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-lg font-semibold text-white backdrop-blur-md shadow-lg">
                        🚀 Coming Soon
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Content Area */}
              <div className="flex flex-1 flex-col p-8">
                {/* Title */}
                <h3
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-[var(--text)]
                    transition-colors
                    duration-300
                    group-hover:text-cyan-300
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 flex-1 leading-7 text-[var(--secondary)]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-cyan-500/20
                        bg-white/5
                        px-3.5
                        py-1.5
                        text-xs
                        font-medium
                        text-cyan-300
                        transition-all
                        duration-300
                        hover:border-cyan-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                  {project.upcoming ? (
                    <button
                      disabled
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        bg-white/5
                        px-6
                        py-3
                        font-semibold
                        text-[var(--secondary)]
                        cursor-not-allowed
                        border
                        border-white/10
                      "
                    >
                      🚀 Coming Soon
                    </button>
                  ) : (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        group/live
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-600
                        px-6
                        py-3
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:shadow-[0_10px_20px_rgba(6,182,212,0.25)]
                      "
                    >
                      Live Demo
                      <ExternalLink
                        size={16}
                        className="transition-transform duration-300 group-hover/live:translate-x-0.5"
                      />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group/github
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-6
                      py-3
                      font-semibold
                      text-[var(--text)]
                      transition-all
                      duration-300
                      hover:border-cyan-400
                      hover:text-cyan-300
                    "
                  >
                    GitHub
                    <FaGithub
                      size={16}
                      className="transition-transform duration-300 group-hover/github:rotate-12"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Explore Footer */}
        <div className="mt-20 flex justify-center">
          <a
            href="https://github.com/afreenkhatoon01"
            target="_blank"
            rel="noreferrer"
            className="
              group
              relative
              inline-flex
              items-center
              gap-3
              overflow-hidden
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              via-blue-600
              to-indigo-600
              px-10
              py-4
              text-lg
              font-semibold
              text-white
              transition-all
              duration-500
              hover:scale-105
              hover:shadow-[0_20px_40px_rgba(6,182,212,0.25)]
            "
          >
            <span
              className="
                absolute
                inset-0
                -z-10
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                via-blue-600
                to-indigo-600
                opacity-0
                blur-xl
                transition-opacity
                duration-500
                group-hover:opacity-60
              "
            />
            <FaGithub className="text-2xl" />
            <span>Explore My GitHub</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;