import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-900">
      <motion.div
        className="mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-blue-400 mb-6">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Machine Learning Engineer with 2+ years building LLM-powered applications, deploying across cloud and on-prem, and turning data into decisions. I love architecting intelligent systems that automate workflows, boost insights, and delight users.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
