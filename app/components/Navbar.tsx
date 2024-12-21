"use client";

import { useState } from "react";
import Link from "next/link";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import SettingsModal from "./SettingsModal";
import { useTranslations } from "./i18n-provider";

export default function Navbar() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const t = useTranslations();

  return (
    <>
      <div className="h-16 md:h-20" />
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-filter-blur backdrop-blur-md ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4 transition-colors">
            {/* Left side - Profile */}
            <div className="flex items-center gap-3">
              <div>
                <h1 className="font-medium dark:text-white">Nicat-dcw</h1>
                <div className="flex items-center gap-2">
                  <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium">
                    beta
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">v2.0</span>
                </div>
              </div>
            </div>

            {/* Center - Navigation */}
            <div className="flex gap-6 font-bold">
              <Link
                href="#projects"
                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                {t.navbar.projects}
              </Link>
              <Link
                href="/blog"
                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                {t.navbar.blog}
              </Link>
              <Link
                href="/social"
                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                {t.navbar.social}
              </Link>
            </div>

            {/* Right side - Github + Settings */}
            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/kardespro"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 rounded hover:bg-gray-100 dark:hover:bg-[#212121] text-gray-800 dark:text-gray-200 transition-colors"
              >
                {t.navbar.github}
              </Link>
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
                aria-label={t.navbar.settings}
              >
                <Cog6ToothIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <SettingsModal 
        isOpen={isSettingsOpen} 
        closeModal={() => setIsSettingsOpen(false)} 
      />
    </>
  );
}