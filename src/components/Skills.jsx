import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact />, level: 92 },
      { name: "JavaScript", icon: <FaJs />, level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
      { name: "HTML", icon: <FaHtml5 />, level: 98 },
      { name: "CSS", icon: <FaCss3Alt />, level: 96 },
    ],
  },

  {
    title: "Backend",
    items: [
      { name: "Python", icon: <FaPython />, level: 90 },
      { name: "Django", icon: <SiDjango />, level: 88 },
      { name: "Node.js", icon: <FaNodeJs />, level: 80 },
      { name: "Express", icon: <SiExpress />, level: 78 },
    ],
  },

  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: <SiMongodb />, level: 86 },
      { name: "MySQL", icon: <SiMysql />, level: 84 },
    ],
  },

  {
    title: "AI / ML",
    items: [
      { name: "Machine Learning", icon: "🤖", level: 88 },
      { name: "NumPy", icon: <SiNumpy />, level: 84 },
      { name: "Pandas", icon: <SiPandas />, level: 86 },
      { name: "Scikit Learn", icon: <SiScikitlearn />, level: 82 },
    ],
  },

  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt />, level: 90 },
      { name: "GitHub", icon: <FaGithub />, level: 92 },
      { name: "Postman", icon: <SiPostman />, level: 82 },
      { name: "VS Code", icon: <FaCode />, level: 96 },
    ],
  },
];

const Skills = () => {
      return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[var(--bg)] py-28"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-semibold uppercase tracking-[8px] text-cyan-400"
        >
          MY SKILLS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 text-center text-4xl font-black text-[var(--text)] lg:text-6xl"
        >
          Technologies I Work With
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-center leading-8 text-[var(--secondary)]"
        >
          Passionate about building modern web applications,
          AI-powered solutions and scalable software using
          cutting-edge technologies.
        </motion.p>

        {/* Skill Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skills.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-7
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:shadow-[0_0_35px_rgba(34,211,238,.18)]
              "
            >

              <h3 className="mb-8 text-2xl font-bold text-cyan-300">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (

                  <div key={skillIndex}>

                    {/* Skill Header */}

                    <div className="mb-2 flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div className="text-2xl text-cyan-400">
                          {skill.icon}
                        </div>

                        <span className="font-medium text-[var(--text)]">
                          {skill.name}
                        </span>

                      </div>

                      <span className="text-sm font-semibold text-cyan-300">
                        {skill.level}%
                      </span>

                    </div>

                    {/* Progress Bar */}

                    <div className="h-2 overflow-hidden rounded-full bg-white/10">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
                      />

                    </div>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>
                {/* Bottom Tech Badges */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 flex flex-wrap justify-center gap-4"
        >
          {[
            "React",
            "Django",
            "Python",
            "Machine Learning",
            "MongoDB",
            "Node.js",
            "Git",
            "GitHub",
            "Tailwind CSS",
          ].map((tech) => (
            <motion.div
              key={tech}
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              className="
                rounded-full
                border
                border-cyan-500/20
                bg-white/5
                px-6
                py-3
                text-sm
                font-medium
                text-cyan-300
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400
                hover:shadow-[0_0_20px_rgba(34,211,238,.3)]
              "
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;