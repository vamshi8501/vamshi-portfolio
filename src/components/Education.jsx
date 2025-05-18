import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-blue-400 mb-8">Education</h2>
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl text-white font-semibold">Bachelor of Technology (ECE)</h3>
          <p className="text-gray-300 mt-1">Aurora’s Scientific Technological and Research Academy (JNTUH)</p>
          <p className="text-gray-400 mt-1">2018 - 2022</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
