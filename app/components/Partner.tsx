'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type PartnerProps = {
  imageUrl?: string;
  alt?: string;
};

export default function Partner({
  imageUrl = '/partner.png',
  alt = 'Our Brand Partners'
}: PartnerProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="py-12 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-semibold text-gray-900 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-blue-400">Partners</span>
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <div className="mb-6">
              <motion.h3 
                className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4"
                variants={itemVariants}
              >
                Leading Provider of Diverse
                <br />
                <span className="text-blue-400">Technology Solutions</span> in Dubai
              </motion.h3>
              <motion.div 
                className="w-12 h-1 bg-blue-400 rounded-full"
                variants={itemVariants}
              ></motion.div>
            </div>

            <motion.p 
              className="text-gray-600 text-base leading-relaxed mb-4"
              variants={itemVariants}
            >
              Spottive Technologies, a leading distributor in Dubai, offers diverse products for various industry needs. Our portfolio includes communication, networking, data storage, smart home, and security solutions.
            </motion.p>

            <motion.p 
              className="text-gray-600 text-base leading-relaxed"
              variants={itemVariants}
            >
              We partner with global brands to provide state-of-the-art products ensuring reliability and technological excellence. At Spottive, we foster mutual growth with clients and suppliers, making us your gateway to industry-leading tech solutions.
            </motion.p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm group">
              <div className="absolute inset-0 bg-blue-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={imageUrl}
                  alt={alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}