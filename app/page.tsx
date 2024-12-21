import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { LoadingFallback } from "./components/LoadingFallback";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 min-h-screen dark:bg-transparent transition-colors">
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Projects />
      </Suspense>
    </div>
  );
}
