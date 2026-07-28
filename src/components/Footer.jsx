import {
  ArrowUp,
  Heart,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[var(--bg)] border-t border-gray-200 dark:border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Afreen Khatoon
            </h2>

            <p className="mt-4 text-[var(--secondary)] leading-7">
              Full Stack Developer passionate about building scalable web
              applications, AI-powered solutions, and exceptional digital
              experiences.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-[var(--text)] mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Contact",
              ].map((item) => (

                <li key={item}>

                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[var(--secondary)] hover:text-blue-600 hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Social Links */}

          <div>

            <h3 className="text-xl font-semibold text-[var(--text)] mb-5">
              Connect
            </h3>

            <div className="flex gap-4 mb-6">

              <a
                href="https://github.com/afreenkhatoon01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/afreen-khatoon-22bb6a299/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition duration-300"
              >
                <FaLinkedin size={20} />
              </a>

            

              

            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
            >
              <ArrowUp size={18} />
              Back to Top
            </button>

          </div>

        </div>

        {/* Bottom Footer */}

        <div className="border-t border-gray-200 dark:border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[var(--secondary)] text-center">

            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-blue-600">
              Afreen Khatoon
            </span>
            . All Rights Reserved.

          </p>

          <p className="flex items-center gap-2 text-[var(--secondary)]">

            Made with

            <Heart
              size={18}
              className="fill-red-500 text-red-500 animate-pulse"
            />

            using React & Tailwind CSS

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;