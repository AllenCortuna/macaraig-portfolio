"use client";
import { About } from "@/components/About";
import { BoxRevealDemo } from "@/components/BoxRevealDemo";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

export default function Home() {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex flex-col gap-4 p-4 md:p-8">
      {/* Floating Navbar */}
      <nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
        bg-white/70 backdrop-blur-md rounded-full shadow"
      >
        <div className="flex space-x-4 px-6 py-3">
          {[
            { label: "Home", id: "home" },
            { label: "Skills", id: "skills" },
            { label: "About", id: "about" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-[#5046e6] hover:font-bold transition-colors 
                text-gray-500 font-ligth px-3 py-1 
                rounded-full hover:bg-[#C6EDA6]"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <div
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 md:pt-auto"
      >
        <BoxRevealDemo />
      </div>

      <div
        id="skills"
        className="min-h-screen flex items-center justify-center pt-20 md:pt-auto"
      >
        <Skills />
      </div>

      <div
        id="about"
        className="min-h-screen flex items-center justify-center pt-20 md:pt-auto"
      >
        <About />
      </div>

      <div
        id="contact"
        className="min-h-screen flex items-center w-fullw justify-center pt-20 md:pt-auto"
      >
        <Contact />
      </div>
    </div>
  );
}
