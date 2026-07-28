import { ArrowRight, Download, BrainCircuit } from "lucide-react";
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
    {
      icon: "🏆",
      title: "SIH'24",
      subtitle: "Finalist",
    },
    {
      icon: "🤖",
      title: "AI/ML",
      subtitle: "Developer",
    },
    {
      icon: "🚀",
      title: "Hackathons",
      subtitle: "Participant",
    },
    {
      icon: "💼",
      title: "Internships",
      subtitle: "Experience",
    },
  ];

  return (
    <section
      id="home"
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[var(--bg)]
      transition-all
      duration-300
      flex
      items-center
      "
    >

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute top-40 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute bottom-0 left-1/3 h-[280px] w-[280px] rounded-full bg-violet-500/20 blur-[120px]" />

      </div>

      {/* Main Grid */}

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <motion.div
  initial={{ opacity: 0, x: -80 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -12, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { duration: 0.8 },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="relative flex justify-center items-center"
>

  {/* Glow */}

  <div
    className="
    absolute
    -inset-8
    rounded-[45px]
    bg-gradient-to-r
    from-blue-600/30
    via-cyan-500/30
    to-violet-500/30
    blur-3xl
    animate-pulse
    "
  />

  {/* Gradient Border */}

  <div
    className="
    absolute
    rounded-[42px]
    p-[2px]
    bg-gradient-to-r
    from-blue-600
    via-cyan-400
    to-violet-500
    shadow-[0_0_40px_rgba(59,130,246,.35)]
    "
  >

    <div
      className="
      rounded-[40px]
      bg-white
      dark:bg-slate-900
      p-2
      "
    >

      <img
        src="/profile.png.jpeg"
        alt="Afreen Khatoon"
        className="
        h-[430px]
        w-[360px]
        object-cover
        rounded-[34px]
        transition-all
        duration-500
        hover:scale-[1.03]
        "
      />

    </div>

  </div>

  {/* Online Indicator */}

  <div
    className="
    absolute
    top-5
    right-5
    h-5
    w-5
    rounded-full
    bg-green-400
    ring-4
    ring-white
    dark:ring-[#050816]
    animate-pulse
    "
  />

</motion.div>

{/* RIGHT SIDE */}

<motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex flex-col justify-center"
>

 {/* ================= Badge ================= */}

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="
  inline-flex
  w-fit
  items-center
  gap-3
  rounded-full
  border
  border-cyan-500/20
  bg-white
dark:bg-slate-900
  px-5
  py-2
  backdrop-blur-xl
  shadow-lg
  "
>

  <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>

  <span className="flex items-center gap-2 text-sm font-medium text-cyan-700 dark:text-cyan-300">
    <BrainCircuit size={16} />
    Building AI-Powered Solutions
  </span>

</motion.div>

{/* ================= Small Heading ================= */}

<p className="mt-8 uppercase tracking-[8px] font-semibold text-blue-600 dark:text-cyan-400">
  AI • WEB • INNOVATION
</p>

{/* ================= Main Heading ================= */}

<h1 className="mt-5 text-5xl lg:text-4xl font-black leading-tight">

  <span className="text-[var(--text)]">
    Afreen Khatoon
  </span>

  <br />

  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
    • Software Developer • AI & ML
  </span>

</h1>

{/* ================= Tech Stack ================= */}

<div className="mt-8 text-xl lg:text-2xl font-semibold text-[var(--text)]">

  React • Django • Python • Machine Learning

</div>

{/* ================= Description ================= */}

<p className="mt-8 max-w-2xl text-lg leading-9 text-[var(--secondary)]">

  Passionate about creating impactful digital products through
  Artificial Intelligence and modern web technologies.

  I enjoy transforming innovative ideas into scalable,
  user-centric applications.

</p>
{/* ================= Stats ================= */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">

  {stats.map((item, index) => (

    <motion.div
      key={index}
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
      className={`"
     rounded-2xl
     border
      border-slate-200
     dark:border-slate-700
     bg-slate
      dark:bg-slate-900
      backdrop-blur-xl
      p-5
      text-center
      shadow-lg
      hover:border-cyan-400
      hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
      transition-all
      duration-300"
      `}
    >

      <div className="text-3xl mb-3">
        {item.icon}
      </div>

      <h2 className="text-lg font-bold text-[var(--text)]">
        {item.title}
      </h2>

      <p className="mt-1 text-sm text-[var(--secondary)]">
        {item.subtitle}
      </p>

    </motion.div>

  ))}

</div>

{/* ================= Buttons ================= */}

<div className="flex flex-wrap gap-5 mt-12">

  {/* Explore Projects */}

  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="#projects"
    className="
    group
    flex
    items-center
    gap-3
    rounded-full
    bg-gradient-to-r
    from-blue-600
    via-cyan-500
    to-indigo-600
    px-8
    py-4
    text-white
    font-semibold
    shadow-[0_0_35px_rgba(59,130,246,.35)]
    transition-all
    duration-300
    hover:shadow-[0_0_40px_rgba(59,130,246,.45)]
    "
  >

    🚀 Explore Projects

    <ArrowRight
      size={20}
      className="group-hover:translate-x-1 transition-transform duration-300"
    />

  </motion.a>

  {/* Resume */}

  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="https://drive.google.com/file/d/1UqFDpVdJKpcPbx9Na-1CGM8vCSy9ozPR/view?usp=drive_linkf" 
    target="_blank"
    rel="noreferrer"
    className="
    flex
    items-center
    gap-3
    rounded-full
    border
    border-slate-300
dark:border-slate-700
bg-slate
dark:bg-slate-900
    px-8
    py-4
    font-semibold
    text-[var(--text)]
    backdrop-blur-xl
    transition-all
    duration-300
    hover:border-cyan-400
    hover:text-cyan-500
    shadow-lg
    "
  >

    <Download size={20} />

    Download Resume

  </motion.a>

</div>
{/* ================= Social Icons ================= */}

<div className="flex gap-6 mt-12 text-2xl">

  {/* GitHub */}

  <motion.a
    whileHover={{ scale: 1.2, rotate: 8 }}
    href="https://github.com/afreenkhatoon01"
    target="_blank"
    rel="noreferrer"
    className="text-slate-700 dark:text-slate-200 hover:text-cyan-500 transition-all duration-300"
  >
    <FaGithub />
  </motion.a>

  {/* LinkedIn */}

  <motion.a
    whileHover={{ scale: 1.2, rotate: 8 }}
    href="https://www.linkedin.com/in/afreen-khatoon-22bb6a299/?skipRedirect=true"
    target="_blank"
    rel="noreferrer"
    className="text-slate-700 dark:text-white hover:text-blue-500 transition-all duration-300"
  >
    <FaLinkedin />
  </motion.a>

  {/* LeetCode */}

  <motion.a
    whileHover={{ scale: 1.2, rotate: 8 }}
    href="https://leetcode.com/u/afreen_khatoon/"
    target="_blank"
    rel="noreferrer"
    className="text-slate-700 dark:text-white hover:text-yellow-500 transition-all duration-300"
  >
    <SiLeetcode />
  </motion.a>

  {/* Email */}

  <motion.a
    whileHover={{ scale: 1.2, rotate: 8 }}
    href="mailto:afreenkhatoon11122004@gmail.com"
    className="text-slate-700 dark:text-white hover:text-pink-500 transition-all duration-300"
  >
    <FaEnvelope />
  </motion.a>

  {/* Projects */}

  <motion.a
    whileHover={{ scale: 1.2, rotate: 8 }}
    href="#projects"
    className="text-slate-700 dark:text-white hover:text-violet-500 transition-all duration-300"
  >
    <FaLaptopCode />
  </motion.a>

</div>

</motion.div>

</div>

{/* ================= Scroll Indicator ================= */}

<motion.div
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    y: [0, 12, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 2,
  }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
>

  <span className="text-xs uppercase tracking-[5px] text-[var(--secondary)]">
    Scroll
  </span>

  <div className="mt-3 h-10 w-[2px] bg-gradient-to-b from-cyan-500 to-transparent"></div>

</motion.div>

</section>
  );
};

export default HeroSection;


 