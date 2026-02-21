'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import Dahua from "../../../public/brands/dubai.png"
import { ChevronRight } from 'lucide-react';
const banner = {
  subtitle: 'Data Storage Solutions',
  title: 'SEAGATE',
  tagline: 'Empowering the World to Store and Protect Its Data.',
  buttons: [
    { text: 'Explore Drives', variant: 'solid' },
    { text: 'Contact Us', variant: 'outline' }
  ],
  image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1920&q=80', // Hard drive/storage themed image
};
const accordionItems = [
  { id: 1, label: 'Network Cameras' },
  { id: 2, label: 'HDCVI Cameras' },
  { id: 3, label: 'Network Recorders' },
];

export default function DahuaPage() {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Animation Variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const heroImageVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const heroContentVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <>
      {/* STYLES FOR ANIMATION */}
      <style jsx>{`
        .accordion-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s ease-out, opacity 0.3s ease-out;
          opacity: 0;
        }
        .accordion-body.open {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .accordion-content {
          overflow: hidden;
        }
        .accordion-arrow {
          transition: transform 0.3s ease;
        }
        .accordion-arrow.open {
          transform: rotate(90deg);
        }
        .accordion-icon {
          transition: transform 0.3s ease, opacity 0.2s ease;
          display: inline-block;
        }
        .accordion-header:hover {
          background-color: #eeeeee;
        } /* Banner Animations */
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="relative w-full h-screen overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              priority
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-800/10 to-slate-900/40" />
          </div>

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
            <div className="max-w-4xl mx-auto">
              {/* Subtitle */}
              <p className="text-white/90 text-sm md:text-base font-light tracking-wide mb-2 animate-fadeInUp">
                {banner.subtitle}
              </p>

              {/* Main Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wider mb-2 animate-fadeInUp animation-delay-200">
                {banner.title}
              </h1>

              {/* Tagline */}
              <p className="text-white text-base md:text-lg lg:text-xl font-normal mb-6 animate-fadeInUp animation-delay-400">
                {banner.tagline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 animate-fadeInUp animation-delay-600">
                {banner.buttons.map((button, btnIndex) => (
                  <button
                    key={btnIndex}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      button.variant === 'solid'
                        ? 'bg-white text-gray-900 hover:bg-gray-100'
                        : 'border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm'
                    }`}
                  >
                    {button.text}
                    <ChevronRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      <div
        style={{
          color: '#111',
          backgroundColor: '#fff',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 40px 60px 40px',
        }}
      >
        {/* HERO SECTION */}
        {/* Container for Staggered Animation */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '48px',
            padding: '40px 0 36px 0',
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          {/* Left: Logo + Big Image */}
          <motion.div variants={heroImageVariants} style={{ flex: '0 0 480px' }}>
            <div
              style={{
                width: '100%',
                height: '300px',
                background: '#f0f0f0',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
                fontSize: '13px',
                fontFamily: 'Arial, sans-serif',
                gap: '10px',
               
                overflow: 'hidden',
              }}
            >
              <Image
                src={Dahua}
                alt="Dahua camera"
                width={480}
                height={300}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                unoptimized
              />
            </div>
          </motion.div>

          {/* Right: Title + Paragraph */}
          <motion.div variants={heroContentVariants} style={{ flex: 1 }}>
            <h1
              style={{
                fontSize: '36px',
                fontWeight: 'bold',
                textAlign: 'center',
                lineHeight: '1.3',
                marginTop: 0,
                marginBottom: '20px',
                color: '#111',
              }}
            >
              Reliable <span className='text-green-400'>Seagate</span> Distributor in Dubai
            </h1>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.9',
                color: '#111',
                textAlign: 'justify',
                margin: 0,
              }}
            >
             
As a respected distributor in Dubai, we supply a variety of products from Seagate Technology PLC, a world-renowned data storage firm. Seagate creates a broad array of advanced storage solutions, including hard drives and solid-state drives for various applications. Our aim, in keeping with Seagate’s innovative spirit, is to meet the rising demand for digital storage in Dubai. We offer high-quality storage solutions that enable businesses and consumers to manage their data efficiently and securely.</p>
          </motion.div>
        </motion.div>

        {/* SECTION 2: THE IMPERATIVE */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ padding: '36px 0 30px 0' }}
        >
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 0,
              marginBottom: '18px',
              color: '#111',
            }}
          >
        High-Performance Hard <span className='text-green-400'>Drives</span> for Data Storage
          </h2>
          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.9',
              color: '#111',
              textAlign: 'justify',
              margin: 0,
            }}
          >
            Seagate’s hard drives offer robust and efficient storage solutions for diverse needs. They include internal drives for PCs and laptops, as well as external drives for mobile storage. Known for large storage capacities, rapid data transfer, and enhanced features like encryption and backup software, Seagate ensures reliable and superior performance for all your storage needs. Count on Seagate’s distinguished expertise in storage technology for your data storage demands.</p>
        </motion.div>
       
      </div>
    </>
  );
}