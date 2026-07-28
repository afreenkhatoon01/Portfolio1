import {
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[var(--bg)] border-t border-[var(--border)] transition-all duration-300">

      {/* Top Gradient */}

      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600"></div>

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* ================= LEFT ================= */}

          <div>

            <h2 className="text-3xl font-black bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Afreen Khatoon
            </h2>

            <p className="mt-6 leading-8 text-[var(--secondary)]">

              AI & Machine Learning Developer passionate about building
              intelligent web applications, scalable software solutions,
              and AI-powered digital experiences.

            </p>

            <div className="mt-8">

              <span className="font-semibold text-cyan-500">

                Internship:

              </span>

              <span className="text-[var(--secondary)]">

                {" "}
                Python Developer Intern at Velnovax Technologies

              </span>

            </div>

          </div>

          {/* ================= CENTER ================= */}

          <div>

            <h3 className="text-2xl font-bold text-[var(--text)] mb-8">

              Quick Links

            </h3>

            <ul className="space-y-5">

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
                    className="
                    inline-block
                    text-[var(--secondary)]
                    hover:text-blue-600
                    hover:translate-x-2
                    transition-all
                    duration-300
                    "
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* ================= RIGHT ================= */}

          <div>

            <h3 className="text-2xl font-bold text-[var(--text)] mb-8">

              Connect With Me

            </h3>

            {/* Social Icons */}

            <div className="flex gap-5 mb-8">

              <a
                href="https://github.com/afreenkhatoon01"
                target="_blank"
                rel="noreferrer"
                className="
                w-14
                h-14
                rounded-full
                border
                border-slate-300
                dark:border-slate-700
                flex
                items-center
                justify-center
                text-[var(--text)]
                hover:bg-blue-600
                hover:text-white
                hover:border-blue-600
                hover:scale-110
                transition-all
                duration-300
                "
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/afreen-khatoon-22bb6a299/"
                target="_blank"
                rel="noreferrer"
                className="
                w-14
                h-14
                rounded-full
                border
                border-slate-300
                dark:border-slate-700
                flex
                items-center
                justify-center
                text-[var(--text)]
                hover:bg-blue-600
                hover:text-white
                hover:border-blue-600
                hover:scale-110
                transition-all
                duration-300
                "
              >
                <FaLinkedin size={22} />
              </a>

            </div>

            {/* Contact Info */}

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <Mail
                  size={18}
                  className="text-cyan-500"
                />

                <a
                  href="mailto:afreenkhatoon11122004@gmail.com"
                  className="text-[var(--secondary)] hover:text-blue-600 transition"
                >
                  afreenkhatoon11122004@gmail.com
                </a>

              </div>

              <div className="flex items-center gap-3">

                <MapPin
                  size={18}
                  className="text-cyan-500"
                />

                <span className="text-[var(--secondary)]">
                  Gorakhpur, Uttar Pradesh, India
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-[var(--border)] mt-14 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-5">

            <p className="text-[var(--secondary)] text-center">

              © {new Date().getFullYear()}{" "}

              <span className="font-semibold text-blue-600">

                Afreen Khatoon

              </span>

              . All rights reserved.

            </p>

            <button
              onClick={scrollToTop}
              className="
              group
              flex
              items-center
              gap-2
              text-blue-600
              font-medium
              hover:text-cyan-500
              transition-all
              duration-300
              "
            >

              <ArrowUp
                size={18}
                className="group-hover:-translate-y-1 transition-transform"
              />

              Back to Top

            </button>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;