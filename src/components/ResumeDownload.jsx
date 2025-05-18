import React from 'react';
import { motion } from 'framer-motion';

const ResumeDownload = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-black text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-blue-400 mb-6">Download Resume</h2>
        <a
          href="/resume/vamshichippa_resume.pdf"
          download
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Download PDF
        </a>
      </motion.div>
    </section>
  );
};

export default ResumeDownload;
