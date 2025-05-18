import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-blue-400 mb-10">Work Experience</h2>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-white">Junior Machine Learning Engineer</h3>
          <p className="text-blue-300">Amnet Digital</p>
          <p className="text-gray-400 mb-2">2023 - Present</p>
          <p className="text-gray-300">Building LLM chatbots, optimization engines, and data-centric AI apps.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
