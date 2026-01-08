"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/constants/motion";
import { Github, ExternalLink, Code2, CodeXml } from "lucide-react";
import Button from "./ui/button";

interface ProjectsSectionProps {
  isFullList?: boolean;
}

export default function ProjectsSection({
  isFullList = false,
}: ProjectsSectionProps) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const endpoint = isFullList ? "/api/github?all=true" : "/api/github";
        const res = await fetch(endpoint);

        if (!res.ok) throw new Error(`GitHub API error: ${res.status}.`);

        setProjects(await res.json());
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [isFullList]);

  if (loading)
    return (
      <div className="min-h-[600px] flex items-center justify-center text-blue-400 font-mono">
        Fetching your work...
      </div>
    );

  if (error)
    return (
      <div className="text-center py-20 text-red-400 font-mono text-xs px-4">
        Error: {error}
      </div>
    );

  return (
    <section
      id="projects"
      className={`relative bg-[#111827] px-4 sm:px-6 lg:px-8 overflow-hidden ${
        isFullList ? "pt-32 pb-24" : "pt-10 pb-24"
      }`}
    >
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 1)}
          className="text-center mb-16"
        >
          <h2 className="text-blue-400 text-sm md:text-base font-mono tracking-widest uppercase mb-2">
            {isFullList ? "Full Archive" : "Portfolio"}
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            {isFullList ? "All My" : "Featured"}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Projects
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((repo: any, index: number) => (
            <motion.div
              key={repo.id}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              className="group h-full"
            >
              <div className="relative h-full bg-gray-900/40 border border-gray-800 rounded-2xl p-7 backdrop-blur-md flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 shadow-xl">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                      <Code2 size={24} />
                    </div>
                    <div className="flex gap-4 text-gray-400">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-white transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors uppercase">
                    {repo.name.replace(/-/g, " ")}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                    {repo.description ||
                      "Personal project built with modern technologies."}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {repo.languages?.map((lang: string) => (
                      <span
                        key={lang}
                        className="text-[10px] font-mono font-bold uppercase tracking-tighter px-2 py-1 bg-blue-500/10 text-blue-300 border border-blue-400/20 rounded-md"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    className="flex items-center text-sm font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    View Source <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!isFullList && (
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1)}
            className="mt-16 text-center"
          >
            <Button href="/projects" icon={CodeXml}>
              View All Projects
            </Button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
