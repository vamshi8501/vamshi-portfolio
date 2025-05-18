import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-900 text-center">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-blue-400 mb-8">Contact</h2>
        <div className="flex flex-col items-center gap-6 text-gray-300">
          <a href="mailto:chvamshikrishna8501@gmail.com" className="flex items-center gap-3 hover:text-blue-400">
            <Mail className="w-5 h-5" /> chvamshikrishna8501@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/vamshi-krishna-0ba147170/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-400">
            <Linkedin className="w-5 h-5" /> vamshi-krishna
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
