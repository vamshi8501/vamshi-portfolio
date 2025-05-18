import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Python', 'SQL', 'LangChain', 'OpenAI', 'Flask', 'Django',
  'AWS', 'Azure', 'Docker', 'CI/CD', 'FastAPI', 'MLFlow',
  'Triton Server', 'PostgreSQL', 'MSSQL', 'RAG Framework',
  'Scikit-learn', 'Pandas', 'Numpy'
];

const Skills = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-blue-400 mb-8">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
