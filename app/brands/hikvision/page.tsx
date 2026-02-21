'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import HikvisionImg from "../../../public/brands/dubai.png"; // Ensure this image exists in your public folder
import { ChevronRight } from 'lucide-react';

const banner = {
  subtitle: 'Video Surveillance & AI',
  title: 'HIKVISION',
  tagline: 'Leading the Way in Security Innovation and Smart Solutions.',
  buttons: [
    { text: 'Explore Products', variant: 'solid' },
    { text: 'Contact Us', variant: 'outline' }
  ],
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80', // Security camera themed image
};

const accordionItems = [
  { id: 1, label: 'IP Cameras' },
  { id: 2, label: 'Turbo HD Cameras' },
  { id: 3, label: 'Network Video Recorders (NVR)' },
];

export default function HikvisionPage() {
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
        }
           /* Banner Animations */
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

      {/* HERO BANNER SECTION */}
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

      {/* CONTENT SECTION */}
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
                src={HikvisionImg}
                alt="Hikvision camera"
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
              <span className='text-red-500'>HIK<span className='text-gray-600'>VISION</span></span> Partner for
              <br />
              Advanced Security Solutions
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
              Hikvision is a world-renowned leader in video surveillance products and solutions. 
              Dedicated to innovation, they provide a comprehensive range of security cameras 
              and systems that leverage AI and deep learning. As a trusted Hikvision partner, 
              we deliver robust security infrastructure designed to protect homes, businesses, 
              and critical assets with unmatched clarity and reliability.
            </p>
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
            Why Choose  <span className='text-red-500'>HIK<span className='text-gray-600'>VISION</span></span> Surveillance Systems?
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
            In an era of evolving security challenges, Hikvision stands at the forefront with 
            cutting-edge technologies like AcuSense and ColorVu. Their systems go beyond standard 
            monitoring, offering intelligent features such as target classification, active 
            deterrence, and superior low-light performance. These innovations ensure that your 
            property is not just watched, but actively protected, providing peace of mind and 
            smarter security management for any environment.
          </p>
        </motion.div>

        {/* ACCORDION */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ border: '1px solid #ddd', borderRadius: '6px', overflow: 'hidden', marginBottom: '0' }}
        >
          {accordionItems.map((item, index) => (
            <div
              key={item.id}
              style={{
                background: '#f5f5f5',
                borderTop: index !== 0 ? '1px solid #e0e0e0' : 'none',
              }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="accordion-header"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '18px 28px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#111',
                  textAlign: 'left',
                  transition: 'background-color 0.2s ease',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span
                    className={`accordion-icon ${openItems[item.id] ? 'open' : ''}`}
                    style={{
                      fontSize: '22px',
                      fontWeight: '300',
                      lineHeight: 1,
                      color: '#333',
                      width: '18px',
                      display: 'inline-block',
                      textAlign: 'center',
                    }}
                  >
                    {openItems[item.id] ? '−' : '+'}
                  </span>
                  {item.label}
                </span>
                <span
                  className={`accordion-arrow ${openItems[item.id] ? 'open' : ''}`}
                  style={{ fontSize: '20px', color: '#888', fontFamily: 'Arial, sans-serif' }}
                >
                  ›
                </span>
              </button>

              {/* ANIMATED WRAPPER */}
              <div className={`accordion-body ${openItems[item.id] ? 'open' : ''}`}>
                <div className="accordion-content">
                  <div
                    style={{
                      padding: '0 28px 20px 60px',
                      fontSize: '14.5px',
                      lineHeight: '1.75',
                      color: '#333',
                    }}
                  >
                    Discover the full range of Hikvision {item.label} — featuring state-of-the-art 
                    imaging, smart analytics, and durable designs built for 24/7 protection.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

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
            Elevating Your Security Standards
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
            Hikvision&apos;s reputation for quality and innovation is globally recognized. At 
            Spottive Technologies, we leverage this expertise to design custom surveillance 
            solutions that fit your exact requirements. Our team stays ahead of the curve with 
            the latest Hikvision advancements, ensuring you receive professional installation, 
            expert advice, and reliable ongoing support.
          </p>

          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.9',
              color: '#111',
              textAlign: 'justify',
              margin: 0,
            }}
          >
            In conclusion, securing your assets with the right technology is essential in today&apos;s 
            world. By choosing <strong className='text-cyan-700'>Spottive Technologies</strong> as your Hikvision partner, 
            you are investing in a future defined by safety, intelligence, and superior protection.
          </p>
        </motion.div>
      </div>
    </>
  );
}