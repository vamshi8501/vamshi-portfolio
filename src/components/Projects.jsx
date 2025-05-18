import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Visualization Chatbot',
    description: 'Chatbot that generates SQL and visualizes data from relational databases using LLMs.',
    image: '/images/visualization_chatbot.png',
  },
  {
    title: 'Document Chatbot with RAG',
    description: 'Built a chatbot that interacts with PDFs and images using Retrieval-Augmented Generation.',
    image: '/images/document_chatbot.png',
  },
  {
    title: 'Sales & Inventory Optimization',
    description: 'Developed optimization models for sales/inventory planning using PuLP and deployed on Azure.',
    image: '/images/optimization.png',
  },
  {
    title: 'Asset IQ',
    description: 'Application that extracts and tags content from PDFs, images, and audio for asset management.',
    image: '/images/asset_iq.png',
  },
  {
    title: 'Financial Data Extractor',
    description: 'Tool to extract key data from financial documents into structured formats.',
    image: '/images/financial_extractor.png',
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-black">
      <motion.h2
        className="text-3xl font-semibold text-blue-400 mb-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-2xl p-5 shadow-xl hover:shadow-blue-500/50 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
