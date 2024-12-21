"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import { XMarkIcon, SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { i18n } from "@/i18n-config";
import { useLanguage } from "./language-provider";
import { useTranslations } from "./i18n-provider";

interface SettingsModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function SettingsModal({ isOpen, closeModal }: SettingsModalProps) {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { setLocale } = useLanguage();
  const t = useTranslations();

  const themes = [
    { id: "light", name: t.common.theme.light, icon: SunIcon },
    { id: "dark", name: t.common.theme.dark, icon: MoonIcon },
    { id: "system", name: t.common.theme.system, icon: ComputerDesktopIcon },
  ];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <Dialog.Title className="text-lg font-medium">
                    {t.settings.title}
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>

                {/* Theme Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                    {t.settings.theme}
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {themes.map(({ id, name, icon: Icon }) => (
                      <button
                        key={id}
                        onClick={() => setTheme(id)}
                        className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-colors
                          ${theme === id 
                            ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20" 
                            : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                          }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-sm">{name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Language Selection */}
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                    {t.settings.language}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {i18n.locales.map((locale) => (
                      <button
                        key={locale}
                        onClick={() => {
                          setLocale(locale);
                          closeModal();
                        }}
                        className="flex items-center justify-center gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <span className="text-sm capitalize">{locale === 'en' ? 'English' : 'Español'}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 