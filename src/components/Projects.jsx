import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Visualization Chatbot',
    description: 'Chatbot that generates SQL and visualizes data from relational databases using LLMs.',
    image: process.env.PUBLIC_URL + '/images/visualization_chatbot.png',
  },
  {
    title: 'Document Chatbot with RAG',
    description: 'Built a chatbot that interacts with PDFs and images using Retrieval-Augmented Generation.',
    image: process.env.PUBLIC_URL + '/images/document_chatbot.png',
  },
  {
    title: 'Sales & Inventory Optimization',
    description: 'Developed optimization models for sales/inventory planning using PuLP and deployed on Azure.',
    image: process.env.PUBLIC_URL + '/images/optimization.png',
  },
  {
    title: 'Asset IQ',
    description: 'Application that extracts and tags content from PDFs, images, and audio for asset management.',
    image: process.env.PUBLIC_URL + '/images/asset_iq.png',
  },
  {
    title: 'Financial Data Extractor',
    description: 'Tool to extract key data from financial documents into structured formats.',
    image: process.env.PUBLIC_URL + '/images/financial_extractor.png',
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-20 bg-black">
      <motion.h2
        className="text-3xl font-semibold text-blue-400 mb-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-5 shadow-md transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
            <p className="text-gray-300 text-sm">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
