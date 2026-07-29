import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      py-24
      bg-[var(--bg)]
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-2
        gap-12
        items-center
        relative
        "
      >

        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
          rounded-3xl
          p-2
          "
        >

          <p className="text-cyan-400 uppercase tracking-[6px] font-semibold mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
            Building Intelligent &
            <span className="text-cyan-400">
              {" "}
              Scalable Solutions
            </span>
          </h2>

          <p className="text-lg leading-8 text-[var(--secondary)]">
            I'm{" "}
            <span className="font-semibold text-cyan-400">
              Afreen Khatoon
            </span>
            , a Computer Science student specializing in Artificial
            Intelligence & Machine Learning. I enjoy developing modern
            web applications and AI-powered solutions using React,
            Django, Python, and Machine Learning.
          </p>

          <p className="mt-5 text-lg leading-8 text-[var(--secondary)]">
            My interests include Full Stack Development,
            Generative AI, and solving real-world problems through
            technology. I have participated in multiple hackathons
            and was an{" "}
            <span className="text-cyan-400 font-semibold">
              SIH'24 Finalist
            </span>.
          </p>

        </motion.div>

        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-5"
        >
        {[
  {
    title: "AI & ML",
    desc: "Building intelligent solutions using Machine Learning and AI.",
  },
  {
    title: "Frontend",
    desc: "Creating responsive interfaces with React & Tailwind CSS.",
  },
  {
    title: "Backend",
    desc: "Developing secure APIs using Django and Python.",
  },
  {
    title: "Problem Solving",
    desc: "Hackathons, DSA and real-world software development.",
  },
].map((card, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: index * 0.12,
    }}
    whileHover={{
      y: -8,
      scale: 1.04,
    }}
    className="glass-card p-6 hover:scale-105"
  >
    <h3
      className="
      mb-3
      text-xl
      font-bold
      text-cyan-500
      dark:text-cyan-400
      transition-colors
      duration-300
      "
    >
      {card.title}
    </h3>

    <p
      className="
      text-sm
      leading-6
      text-[var(--secondary)]
      "
    >
      {card.desc}
    </p>
  </motion.div>
))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;