'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 md:mb-12 text-center">
            About Me
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
            <p>
              As a Senior Software Engineer with over 8 years of experience, I specialize in building scalable, 
              high-performance web applications using modern frontend technologies. My expertise lies in React, 
              TypeScript, and modern JavaScript frameworks, with a strong focus on code quality, architecture, 
              and team leadership.
            </p>

            <p>
              Throughout my career, I've successfully led UI development initiatives, mentored junior developers, 
              and improved engineering processes across multiple organizations. I'm passionate about optimizing 
              application performance, implementing best practices, and creating exceptional user experiences.
            </p>

            <p>
              Currently based in Dubai, I bring a unique blend of technical excellence and leadership experience, 
              having worked with global companies like EPAM Systems and led teams in building complex enterprise 
              applications. I'm also an entrepreneur, co-founding Armenian National Music to preserve and digitalize 
              Armenian cultural heritage.
            </p>

            <p>
              Beyond coding, I'm committed to knowledge sharing—having tutored web programming courses and served 
              as a certified interviewer. I thrive in collaborative environments where I can contribute to both 
              technical innovation and team growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
