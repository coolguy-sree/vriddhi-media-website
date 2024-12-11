import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Driving digital transformation through innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-600">
              Founded with a vision to bridge the gap between businesses and digital innovation, 
              Vriddhi Media has been at the forefront of digital transformation since its inception.
            </p>
            <p className="text-gray-600">
              We combine creativity with technical expertise to deliver solutions that drive 
              business growth and create lasting impact.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="text-4xl font-bold text-indigo-600">100+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="text-4xl font-bold text-indigo-600">50+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}