import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioItems } from '../../data/portfolio';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Development', 'Branding', 'Marketing'];

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Showcasing our best projects and success stories
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${
                filter === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              } transition-colors duration-200`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2">{item.description}</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-white/20 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}