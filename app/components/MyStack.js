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
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiBootstrap,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiFigma,
  SiAdobe,
} from "react-icons/si";

export default function MyStack() {
  return (
    <section className="relative min-h-screen text-white py-16 px-6 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-start mb-12">
          <h3 className="text-5xl md:text-6xl font-bold uppercase leading-none">
            Frontend
          </h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-2">
              <FaJsSquare className="text-yellow-400 text-3xl" />
              <span>JavaScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiTypescript className="text-blue-500 text-2xl" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaReact className="text-cyan-400 text-2xl" />
              <span>React</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiNextdotjs className="text-white text-2xl" />
              <span>Next.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiRedux className="text-purple-500 text-2xl" />
              <span>Redux</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiTailwindcss className="text-sky-400 text-2xl" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400 text-2xl font-bold">GSAP</span>
              <span>GSAP</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiFramer className="text-pink-500 text-2xl" />
              <span>Framer Motion</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaSass className="text-pink-300 text-2xl" />
              <span>SASS</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiBootstrap className="text-purple-700 text-2xl" />
              <span>Bootstrap</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-start mb-12">
          <h3 className="text-5xl md:text-6xl font-bold uppercase leading-none">
            Backend
          </h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-2">
              <FaNodeJs className="text-green-400 text-2xl" />
              <span>Node.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiNestjs className="text-red-600 text-2xl" />
              <span>Nest.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiExpress className="text-gray-300 text-2xl" />
              <span>Express.js</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-start mb-12">
          <h3 className="text-5xl md:text-6xl font-bold uppercase leading-none">
            Database
          </h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-2">
              <SiMysql className="text-blue-600 text-2xl" />
              <span>MySQL</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiPostgresql className="text-blue-300 text-2xl" />
              <span>PostgreSQL</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiMongodb className="text-green-400 text-2xl" />
              <span>MongoDB</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiPrisma className="text-blue-500 text-2xl" />
              <span>Prisma</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-start">
          <h3 className="text-5xl md:text-6xl font-bold uppercase leading-none">
            Tools
          </h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-2">
              <FaGitAlt className="text-orange-500 text-2xl" />
              <span>Git</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaDocker className="text-blue-400 text-2xl" />
              <span>Docker</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaAws className="text-yellow-500 text-2xl" />
              <span>AWS</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiFigma className="text-purple-400 text-2xl" />
              <span>Figma</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiAdobe className="text-red-500 text-2xl" />
              <span>Adobe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
