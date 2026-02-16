"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const testimonials = [
  {
    id: 1,
    name: 'Ruth Rersley',
    role: 'CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    text: "Meeting Amanda has definitely been a game changer for me. Her perspective on things is so clear and she's so knowledgable that she taught me and showed me a totally new way to view myself and my own capabilities, and now I'm reaching goals within weeks that I thought would take me years."
  },
  {
    id: 2,
    name: 'Michael Stevens',
    role: 'Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    text: "Working with Amanda transformed my business approach completely. Her insights and guidance helped me unlock potential I didn't even know I had. The results have been absolutely phenomenal and exceeded all my expectations."
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    text: "I can't recommend Amanda enough! Her strategic thinking and genuine care for her clients sets her apart. She helped me navigate complex challenges with ease and confidence. Truly a game-changing experience."
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
         <motion.h2 
            className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6"

          >
           What Our<span className="text-blue-400"> Clients</span> Say?
          </motion.h2>
          <p className="text-gray-600 text-lg">Words of praise by my valuable clients.</p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100  p-8 md:p-12 relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
                {/* Quote Icon */}
                <div className="absolute -top-2 -right-2 bg-blue-400 rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                  <svg 
                    className="w-5 h-5 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                {testimonials[currentIndex].text}
              </p>
              
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                  <span className="text-gray-500 font-normal text-sm ml-2">
                    {testimonials[currentIndex].role}
                  </span>
                </p>
              </div>
            </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}