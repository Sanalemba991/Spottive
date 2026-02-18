'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Variants } from 'framer-motion';
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function NatureText() {
  return (
    <motion.div 
      className="w-full bg-white py-16 px-6 md:px-12 lg:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Right Content - Image with Organic Oval Shape */}
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2
          }}
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Organic Oval/Blob Shape Image Container */}
            <motion.div 
              className="w-full h-full overflow-hidden shadow-2xl relative"
              style={{
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                backgroundColor: '#f0f0f0'
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.7,
                ease: "easeOut",
                delay: 0.3
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=700&auto=format&fit=crop"
                alt="Spottive Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Left Content */}
        <motion.div 
          className="flex-1"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6"
            variants={itemVariants}
          >
            About <span className="text-cyan-700">Spottive</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xs md:text-sm text-black drop-shadow-lg leading-relaxed mb-3 max-w-lg"
          >
            Spottive is your trusted authorized distributor of premium CCTV surveillance solutions in the UAE. We specialize in providing high-quality security cameras and systems from leading brands such as Dahua, Hikvision, Uniview, Imou, and Univision.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-xs md:text-sm text-black drop-shadow-lg leading-relaxed mb-2 max-w-lg"
          >
            Our comprehensive range includes advanced IP cameras, NVRs, DVRs, and smart home security solutions designed to protect your property and ensure peace of mind.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-xs md:text-sm text-black drop-shadow-lg leading-relaxed mb-2 max-w-lg"
          >
            With years of experience in the industry, we offer expert consultation, installation services, and ongoing support to meet all your surveillance needs.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-xs md:text-sm text-black drop-shadow-lg leading-relaxed max-w-lg"
          >
            Choose Spottive for reliable, cutting-edge CCTV technology that delivers superior performance and value.
          </motion.p>
        </motion.div>
        
      </div>
    </motion.div>
  );
}