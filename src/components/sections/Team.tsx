import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { teamMembers } from '../../data/team';

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            The talented people behind our success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Linkedin size={32} className="text-white" />
                  </a>
                )}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="mt-2 text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}