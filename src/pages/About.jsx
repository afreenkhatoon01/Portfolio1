import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-[var(--bg)]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase tracking-[6px] font-semibold mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
            Building Intelligent &
            <span className="text-cyan-400"> Scalable Solutions</span>
          </h2>

          <p className="text-lg leading-8 text-[var(--secondary)]">
            I'm <span className="font-semibold text-cyan-400">Afreen Khatoon</span>,
            a Computer Science student specializing in Artificial Intelligence
            & Machine Learning. I enjoy developing modern web applications and
            AI-powered solutions using React, Django, Python, and Machine
            Learning.
          </p>

          <p className="mt-5 text-lg leading-8 text-[var(--secondary)]">
            My interests include Full Stack Development, Generative AI, and
            solving real-world problems through technology. I have participated
            in multiple hackathons and was an <span className="text-cyan-400 font-semibold">SIH'24 Finalist</span>.
          </p>
        </motion.div>

        {/* Right Side */}
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
              desc: "Building intelligent solutions using Machine Learning and AI."
            },
            {
              title: "Frontend",
              desc: "Creating responsive interfaces with React & Tailwind CSS."
            },
            {
              title: "Backend",
              desc: "Developing secure APIs using Django and Python."
            },
            {
              title: "Problem Solving",
              desc: "Hackathons, DSA and real-world software development."
            },
          ].map((card, index) => (
            <div
              key={index}
              className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-6 hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                {card.title}
              </h3>

              <p className="text-[var(--secondary)] text-sm leading-6">
                {card.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;