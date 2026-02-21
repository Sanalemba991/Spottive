'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import Dahua from "../../../public/brands/dubai.png"
import { ChevronRight } from 'lucide-react';
const banner = {
  subtitle: 'Unified Communications',
  title: 'YEALINK',
  tagline: 'Delivering Crystal-Clear Voice and Video Collaboration Solutions.',
  buttons: [
    { text: 'View Products', variant: 'solid' },
    { text: 'Contact Us', variant: 'outline' }
  ],
  image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80', // VoIP phone/office meeting themed image
};
const accordionItems = [
  { id: 1, label: 'Network Cameras' },
  { id: 2, label: 'HDCVI Cameras' },
  { id: 3, label: 'Network Recorders' },
];

export default function YealinkPage() {
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
        .accordion-icon {
          transition: transform 0.3s ease, opacity 0.2s ease;
          display: inline-block;
        }
        .accordion-header:hover {
          background-color: #eeeeee;
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
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${button.variant === 'solid'
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
             
Your Trusted Distributor of Yealink Communication Solutions in Dubai, UAE
           
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
              As a trusted distributor of Yealink communication solutions in Dubai, UAE, we offer a comprehensive range of high-quality products from this leading brand. Yealink is a globally recognized provider of innovative communication devices and solutions, specializing in IP phones, video conferencing systems, and collaboration tools. With our extensive selection of Yealink products, you can enhance communication, streamline collaboration, and elevate productivity in your business.</p>
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
          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.9',
              color: '#111',
              textAlign: 'justify',
              margin: 0,
            }}
          >
           Yealink’s device management platform simplifies the deployment, configuration, and management of Yealink devices. With centralized control and monitoring capabilities, Yealink’s device management platform streamlines device provisioning, firmware updates, and troubleshooting processes. Ensure seamless device management, reduce maintenance efforts, and enhance the overall management of Yealink communication solutions.</p>
        </motion.div>

        {/* ACCORDION */}
        

        {/* SECTION 3: ELEVATING YOUR SURVEILLANCE */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ paddingTop: '44px' }}
        >
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 0,
              marginBottom: '24px',
              color: '#111',
            }}
          >
Collaboration and Conferencing Solutions for Enhanced Communication
          </h2>

          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.9',
              color: '#111',
              textAlign: 'justify',
              marginBottom: '20px',
              marginTop: 0,
            }}
          >
           Yealink’s collaboration and conferencing solutions transform how teams connect and collaborate. From video conferencing systems and conference phones to collaboration platforms and accessories, Yealink’s collaboration products offer immersive audio and video experiences, enabling face-to-face interactions and seamless content sharing. Experience enhanced productivity and streamlined communication with Yealink’s advanced collaboration solutions.
          </p>
        </motion.div>
      </div>
    </>
  );
}