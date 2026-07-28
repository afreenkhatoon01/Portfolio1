import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <Mail size={28} />,
    title: 'Email',
    value: 'afreenkhatoon11122004@gmail.com',
    link: 'mailto:afreenkhatoon11122004@gmail.com',
  },
  {
    icon: <Phone size={28} />,
    title: 'Phone',
    value: 'Available on Request',
    link: null,
  },
  {
    icon: <MapPin size={28} />,
    title: 'Location',
    value: 'Gorakhpur, Uttar Pradesh, India',
    link: null,
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
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
          CONTACT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 text-center text-4xl font-black text-[var(--text)] lg:text-6xl"
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-3xl text-center leading-8 text-[var(--secondary)]"
        >
          I’m always open to internships, freelance opportunities,
          collaborations and exciting software development projects.
          Feel free to connect with me.
        </motion.p>

        {/* Grid */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h3 className="mb-10 text-3xl font-bold text-[var(--text)]">
              Get In Touch
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
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
                    flex
                    items-center
                    gap-5
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
                  <div className="
                    flex h-16 w-16 items-center justify-center
                    rounded-2xl
                    bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500
                    text-white
                    shadow-lg
                  ">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[var(--text)]">
                      {item.title}
                    </h4>

                    {item.link ? (
                      <a
                        href={item.link}
                        className="mt-1 block text-[var(--secondary)] transition hover:text-cyan-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[var(--secondary)]">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <h4 className="mb-6 text-2xl font-bold text-[var(--text)]">
                Connect With Me
              </h4>

              <div className="flex gap-5">

                <motion.a
                  whileHover={{ y: -8, scale: 1.08 }}
                  href="https://github.com/afreenkhatoon01"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group flex h-14 w-14 items-center justify-center
                    rounded-2xl border border-white/10 bg-white/5
                    text-cyan-300 backdrop-blur-2xl
                    transition-all duration-300
                    hover:border-cyan-400/40 hover:bg-cyan-500 hover:text-white
                    hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
                  "
                >
                  <FaGithub
                    size={24}
                    className="transition-transform duration-300 group-hover:rotate-12"
                  />
                </motion.a>

                <motion.a
                  whileHover={{ y: -8, scale: 1.08 }}
                  href="https://www.linkedin.com/in/afreen-khatoon-22bb6a299/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group flex h-14 w-14 items-center justify-center
                    rounded-2xl border border-white/10 bg-white/5
                    text-cyan-300 backdrop-blur-2xl
                    transition-all duration-300
                    hover:border-cyan-400/40 hover:bg-cyan-500 hover:text-white
                    hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
                  "
                >
                  <FaLinkedin
                    size={24}
                    className="transition-transform duration-300 group-hover:rotate-12"
                  />
                </motion.a>

              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              rounded-3xl border border-white/10 bg-white/5
              p-8 backdrop-blur-2xl
              transition-all duration-500
              hover:border-cyan-400/40
              hover:shadow-[0_0_35px_rgba(34,211,238,.18)]
            "
          >

            <h3 className="text-3xl font-bold text-[var(--text)]">
              Send Me a Message
            </h3>

            <p className="mt-3 mb-8 text-[var(--secondary)]">
              Fill out the form below and I’ll get back to you as soon as possible.
            </p>

            <form className="space-y-6">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--text)]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="
                    w-full rounded-2xl border border-white/10 bg-white/5
                    px-5 py-4 text-[var(--text)]
                    placeholder:text-[var(--secondary)]
                    outline-none transition-all duration-300
                    focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--text)]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full rounded-2xl border border-white/10 bg-white/5
                    px-5 py-4 text-[var(--text)]
                    placeholder:text-[var(--secondary)]
                    outline-none transition-all duration-300
                    focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20
                  "
                />
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--text)]">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="
                    w-full rounded-2xl border border-white/10 bg-white/5
                    px-5 py-4 text-[var(--text)]
                    placeholder:text-[var(--secondary)]
                    outline-none transition-all duration-300
                    focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--text)]">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="
                    w-full resize-none rounded-2xl border border-white/10 bg-white/5
                    px-5 py-4 text-[var(--text)]
                    placeholder:text-[var(--secondary)]
                    outline-none transition-all duration-300
                    focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20
                  "
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="
                  group relative flex w-full items-center justify-center gap-3
                  overflow-hidden rounded-2xl
                  bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500
                  px-8 py-4 text-lg font-semibold text-white shadow-xl
                  transition-all duration-500
                  hover:shadow-[0_0_35px_rgba(34,211,238,.35)]
                "
              >
                <span className="
                  absolute inset-0 -translate-x-full
                  bg-gradient-to-r from-transparent via-white/20 to-transparent
                  transition-transform duration-700 group-hover:translate-x-full
                " />

                <Send
                  size={20}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />

                <span className="relative z-10">
                  Let’s Connect
                </span>
              </motion.button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;