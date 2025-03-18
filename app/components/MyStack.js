import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaSass,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiAdobe,
} from "react-icons/si";


const techStack = {
  Frontend: [
    { name: "JavaScript", icon: FaJsSquare, iconClass: "text-yellow-400 text-3xl" },
    { name: "TypeScript", icon: SiTypescript, iconClass: "text-blue-500 text-2xl" },
    { name: "React", icon: FaReact, iconClass: "text-cyan-400 text-2xl" },
    { name: "Next.js", icon: SiNextdotjs, iconClass: "text-white text-2xl" },
    { name: "Tailwind CSS", icon: SiTailwindcss, iconClass: "text-sky-400 text-2xl" },
    { name: "GSAP", icon: null, iconClass: "text-green-400 text-2xl font-bold", label: "GSAP" },
    { name: "Framer Motion", icon: SiFramer, iconClass: "text-pink-500 text-2xl" },
    { name: "Bootstrap", icon: SiBootstrap, iconClass: "text-purple-700 text-2xl" },
  ],
  Backend: [
    { name: "Node.js", icon: FaNodeJs, iconClass: "text-green-400 text-2xl" },
    { name: "Django", icon: null, iconClass: "text-green-500 text-2xl font-bold", label: "Django" },
  ],
  Database: [
    { name: "MySQL", icon: SiMysql, iconClass: "text-blue-600 text-2xl" },
    { name: "PostgreSQL", icon: SiPostgresql, iconClass: "text-blue-300 text-2xl" },
    { name: "MongoDB", icon: SiMongodb, iconClass: "text-green-400 text-2xl" },
  ],
  Tools: [
    { name: "Git", icon: FaGitAlt, iconClass: "text-orange-500 text-2xl" },
    { name: "Docker", icon: FaDocker, iconClass: "text-blue-400 text-2xl" },
    { name: "AWS", icon: FaAws, iconClass: "text-yellow-500 text-2xl" },
    { name: "Figma", icon: SiFigma, iconClass: "text-purple-400 text-2xl" },
    { name: "Adobe", icon: SiAdobe, iconClass: "text-red-500 text-2xl" },
  ],
};

export default function MyStack() {
  return (
    <section className="relative min-h-screen text-white py-16 px-6 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        {Object.entries(techStack).map(([category, items]) => (
          <div
            key={category}
            className="grid grid-cols-1  gap-8 items-start mb-12"
          >
            <h3 className="text-4xl md:text-6xl font-bold uppercase leading-none">
              {category}
            </h3>
            <div className="flex flex-wrap items-center gap-6">
              {items.map(({ name, icon: Icon, iconClass, label }, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  {Icon ? (
                    <Icon aria-label={name} className={iconClass} />
                  ) : (
                    <span aria-label={name} className={iconClass}>
                      {label}
                    </span>
                  )}
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
