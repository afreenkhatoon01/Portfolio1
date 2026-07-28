import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLaptopCode,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const HeroSection = () => {
  const stats = [
    { icon: "🏆", title: "SIH'24", subtitle: "Finalist" },
    { icon: "🤖", title: "AI/ML", subtitle: "Developer" },
    { icon: "🚀", title: "Hackathons", subtitle: "Participant" },
    { icon: "💼", title: "Internships", subtitle: "Experience" },
  ];

  return (
    <section
      id="home"
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[var(--bg)]
      transition-colors
      duration-300
      flex
      items-center
    "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
          absolute
          -top-24
          -left-24
          w-72
          h-72
          md:w-[500px]
          md:h-[500px]
          rounded-full
          bg-violet-500/20
          blur-[130px]
        "
        />

        <div
          className="
          absolute
          bottom-0
          right-0
          w-72
          h-72
          md:w-[450px]
          md:h-[450px]
          rounded-full
          bg-cyan-400/20
          blur-[130px]
        "
        />
      </div>

      <div
        className="
        relative
        z-10
        mx-auto
        max-w-7xl
        px-6
        sm:px-8
        lg:px-12
        py-16
        sm:py-20
        lg:py-28
      "
      >
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-14
          lg:gap-20
          items-center
        "
        >
          {/* ================= IMAGE SECTION ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                absolute
                -inset-6
                rounded-[42px]
                bg-gradient-to-r
                from-blue-600
                via-cyan-400
                to-violet-500
                blur-3xl
                opacity-40
              "
              />

              {/* Gradient Border */}

              <div
                className="
                absolute
                inset-0
                rounded-[40px]
                p-[3px]
                bg-gradient-to-r
                from-blue-500
                via-cyan-400
                to-violet-500
              "
              >
                <div
                  className="
                  h-full
                  w-full
                  rounded-[37px]
                  bg-[var(--bg)]
                "
                />
              </div>

              {/* Image */}

              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="
                relative
                z-10
                w-[240px]
                h-[300px]
                sm:w-[300px]
                sm:h-[380px]
                md:w-[340px]
                md:h-[420px]
                lg:w-[390px]
                lg:h-[470px]
                rounded-[40px]
                overflow-hidden
                p-2
              "
              >
                <img
                  src="/profile.png.jpeg"
                  alt="Afreen Khatoon"
                  className="
                  w-full
                  h-full
                  object-cover
                  rounded-[34px]
                  border
                  border-[var(--border)]
                "
                />
              </motion.div>

              {/* Floating Badge */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                absolute
                -bottom-4
                left-1/2
                -translate-x-1/2
                z-20
                whitespace-nowrap
                px-5
                py-2.5
                rounded-full
                bg-[var(--card)]
                backdrop-blur-xl
                border
                border-[var(--border)]
                shadow-lg
              "
              >
                <span className="text-cyan-400 font-semibold text-sm">
                  AI & ML Developer 🚀
                </span>
              </motion.div>

              {/* Online Indicator */}

              <div
                className="
                absolute
                top-5
                right-5
                z-20
                w-4
                h-4
                rounded-full
                bg-green-400
                animate-pulse
                shadow-[0_0_20px_#22c55e]
              "
              />
            </div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}

                    <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}

            <div
              className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-[var(--card)]
              border
              border-[var(--border)]
              backdrop-blur-xl
              mb-6
            "
            >
              <span
                className="
                w-2.5
                h-2.5
                rounded-full
                bg-green-400
                animate-pulse
              "
              />

              <span
                className="
                text-xs
                sm:text-sm
                font-medium
                text-violet-400
              "
              >
                TECH ENTHUSIAST
              </span>
            </div>

            {/* Small Heading */}

            <p
              className="
              uppercase
              tracking-[5px]
              text-violet-500
              font-semibold
              text-xs
              sm:text-sm
              mb-4
            "
            >
              AI • WEB • INNOVATION
            </p>

            {/* Main Heading */}

            <h1
              className="
              text-4xl
              sm:text-4xl
              lg:text-3xl
              xl:text-3xl
              font-black
              leading-tight
            "
            >
              <span className="text-[var(--text)]">
                Afreen Khatoon
              </span>

              <br />

              <span
                className="
                bg-gradient-to-r
                from-violet-500
                via-cyan-400
                to-pink-500
                bg-clip-text
                text-transparent
              "
              >
                Software Developer
              </span>
            </h1>

            {/* Skills */}

            <h2
              className="
              mt-6
              text-base
              sm:text-lg
              lg:text-xl
              font-semibold
              text-[var(--text)]
            "
            >
              React • Django • Python • Machine Learning
            </h2>

            {/* Description */}

            <p
              className="
              mt-6
              max-w-xl
              mx-auto
              lg:mx-0
              text-sm
              sm:text-base
              lg:text-lg
              leading-7
              sm:leading-8
              text-[var(--secondary)]
            "
            >
              Passionate about creating impactful digital products using
              Artificial Intelligence and modern web technologies. I enjoy
              transforming ideas into scalable, user-focused applications
              with clean UI and efficient backend solutions.
            </p>

            {/* ================= Stats ================= */}

            <div
              className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-4
              mt-10
            "
            >
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.05,
                  }}
                  className="
                  rounded-2xl
                  bg-[var(--card)]
                  backdrop-blur-xl
                  border
                  border-[var(--border)]
                  p-4
                  shadow-lg
                  transition-all
                  duration-300
                  hover:border-cyan-400
                  hover:shadow-cyan-500/20
                "
                >
                  <div className="text-3xl mb-2">
                    {item.icon}
                  </div>

                  <h3
                    className="
                    font-bold
                    text-lg
                    text-[var(--text)]
                  "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    text-xs
                    text-[var(--secondary)]
                  "
                  >
                    {item.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ================= Buttons ================= */}

            <div
              className="
              flex
              flex-wrap
              justify-center
              lg:justify-start
              gap-4
              mt-10
            "
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="
                px-7
                py-3
                rounded-full
                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-violet-600
                text-white
                font-semibold
                flex
                items-center
                gap-2
                shadow-xl
              "
              >
                Explore Projects

                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/open?id=1WRydM03gX38UnBH_YjgmimuR-gfr2ZN8&usp=drive_fs"
                target="_blank"
                rel="noopener noreferrer"
                className="
                px-7
                py-3
                rounded-full
                bg-[var(--card)]
                border
                border-[var(--border)]
                text-[var(--text)]
                hover:bg-violet-600
                hover:text-white
                transition-all
                duration-300
                flex
                items-center
                gap-2
              "
              >
                <Download size={18} />

                Resume
              </motion.a>
            </div>

            {/* ================= Social Icons ================= */}

            <div
              className="
              flex
              justify-center
              lg:justify-start
              gap-6
              mt-10
              text-2xl
            "
            >
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/afreenkhatoon01",
                  hover: "hover:text-white",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/afreen-khatoon-22bb6a299/",
                  hover: "hover:text-cyan-400",
                },
                {
                  icon: <SiLeetcode />,
                  link: "https://leetcode.com/u/afreen_khatoon/",
                  hover: "hover:text-yellow-400",
                },
                {
                  icon: <FaEnvelope />,
                  link: "mailto:afreenkhatoon11122004@gmail.com",
                  hover: "hover:text-pink-400",
                },
                {
                  icon: <FaLaptopCode />,
                  link: "#projects",
                  hover: "hover:text-violet-400",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target={
                    item.link.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.25,
                    rotate: 8,
                  }}
                  className={`
                    text-[var(--secondary)]
                    transition-all
                    duration-300
                    ${item.hover}
                  `}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
            {/* ================= Scroll Indicator ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.4, 1, 0.4],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-8
        left-1/2
        hidden
        -translate-x-1/2
        md:flex
        flex-col
        items-center
        z-20
      "
      >
        <span
          className="
          text-xs
          uppercase
          tracking-[4px]
          text-[var(--secondary)]
        "
        >
          Scroll
        </span>

        <div
          className="
          mt-2
          h-10
          w-[2px]
          overflow-hidden
          rounded-full
          bg-[var(--border)]
        "
        >
          <motion.div
            animate={{
              y: [-20, 40],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            h-5
            w-full
            rounded-full
            bg-gradient-to-b
            from-cyan-400
            via-violet-500
            to-transparent
          "
          />
        </div>
      </motion.div>

      {/* ================= Bottom Fade ================= */}

      <div
        className="
        pointer-events-none
        absolute
        bottom-0
        left-0
        right-0
        h-28
        bg-gradient-to-b
        from-transparent
        to-[var(--bg)]
      "
      />
    </section>
  );
};

export default HeroSection;

