'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '@/data/portfolio';

function formatDate(dateStr: string): string {
  if (dateStr === 'Present') return 'Present';
  const [year, month] = dateStr.split('-');
  return `${month}/${year}`;
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 md:mb-10 text-center">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.startDate}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-6 w-4 h-4 bg-primary-light dark:bg-primary-dark rounded-full border-4 border-white dark:border-gray-900"
                    style={{
                      [index % 2 === 0 ? 'right' : 'left']: '-2.25rem'
                    }}
                  />

                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col items-start">
                      <span className="text-xs sm:text-sm font-semibold text-primary-light dark:text-primary-dark mb-2">
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-400 mb-4">
                        {exp.company}
                      </h4>
                    </div>

                    <ul className="space-y-2 mb-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 text-left">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-light dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 text-left">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
