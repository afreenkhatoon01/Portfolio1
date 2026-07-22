import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      path: "#home",
      id: "home",
    },
    {
      name: "About",
      path: "#about",
      id: "about",
    },
    {
      name: "Skills",
      path: "#skills",
      id: "skills",
    },
    {
      name: "Projects",
      path: "#projects",
      id: "projects",
    },
    {
      name: "Contact",
      path: "#contact",
      id: "contact",
    },
    
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border-white/20 shadow-2xl"
            : "bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl border-white/10"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-8">

          {/* Logo */}
          <a href="#home">
            <div className="flex items-center gap-3">

              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 font-bold text-white shadow-lg shadow-blue-500/40"
              >
                AK
              </motion.div>

              <div>
                <h1 className="text-lg font-bold text-slate-800 dark:text-white">
                  Afreen Khatoon
                </h1>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  AI • ML Developer
                </p>
              </div>

            </div>
          </a>
                    {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 rounded-full border border-white/20 bg-white/10 dark:bg-slate-800/20 backdrop-blur-xl px-2 py-2">

            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.path}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(item.id)}
                className={`relative overflow-hidden rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  active === item.id
                    ? "text-white"
                    : "text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-cyan-400"
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {item.name}
                </span>
              </motion.a>
            ))}

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

          

            {/* Dark Mode */}
            <motion.button
              whileHover={{ rotate: 180, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full border border-white/20 bg-white/20 dark:bg-slate-800/30 p-2 backdrop-blur-xl shadow-lg"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700 dark:text-white" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-full p-1"
            >
              {isOpen ? (
                <X className="h-7 w-7 text-slate-800 dark:text-white" />
              ) : (
                <Menu className="h-7 w-7 text-slate-800 dark:text-white" />
              )}
            </motion.button>

          </div>
        </div>
                {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="md:hidden px-4 pb-4"
            >
              <div className="rounded-2xl border border-white/20 bg-white/20 dark:bg-slate-900/40 backdrop-blur-2xl p-4 shadow-xl">

                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.path}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setActive(item.id);
                      setIsOpen(false);
                    }}
                    className={`mb-2 block rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                      active === item.id
                        ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white"
                        : "text-slate-700 dark:text-slate-300 hover:bg-blue-500/10"
                    }`}
                  >
                    {item.name}
                  </motion.a>
                ))}

               

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Glow */}
        <div className="pointer-events-none absolute left-1/2 top-full h-24 w-80 -translate-x-1/2 -translate-y-8 rounded-full bg-blue-500/20 blur-3xl" />

      </motion.nav>
    </>
  );
};

export default Navbar;