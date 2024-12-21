"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useTranslations } from "./i18n-provider";

export default function Hero() {
  const t = useTranslations();

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 gap-8 md:grid-cols-[1fr,1fr] items-center"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <div className="relative w-[280px] h-[280px] mx-auto md:w-[400px] md:h-[400px]">
            <Image
              src="https://avatars.githubusercontent.com/u/59221034?s=400&u=467d7330f5108f682fb7aae7c846f4722dc76050&v=4"
              alt="Profile Image"
              fill
              priority
              className="shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-10 order-1 md:order-2">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-7xl">
              {t.hero.title}{" "}
              <span className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>
            <h2 className="text-xl text-gray-500 dark:text-gray-400 sm:text-2xl">
              {t.hero.description}
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="https://github.com/Nicat-dcw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white transition-colors bg-gray-900 rounded-lg hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              <FaGithub className="w-5 h-5" />
              {t.hero.github}
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors rounded-lg bg-gray-400 hover:bg-gray-200 dark:bg-black dark:hover:bg-[#212121]"
            >
              {t.hero.work}
              <HiOutlineArrowNarrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">{t.hero.techStack}</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-[#212121]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
