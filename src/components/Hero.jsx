import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-blue-500 drop-shadow-lg">
          Vamshi Krishna Chippa
        </h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Machine Learning Engineer
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
