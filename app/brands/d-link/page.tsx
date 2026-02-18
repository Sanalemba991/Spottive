'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import DLink from "../../../public/brands/Dlink.png"
const accordionItems = [
  { id: 1, label: 'Network Cameras' },
  { id: 2, label: 'HDCVI Cameras' },
  { id: 3, label: 'Network Recordetyrs' },
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
        }
      `}</style>

      <div className="text-[#111] bg-white max-w-[1240px] mx-auto px-10 pb-[60px]">
        {/* HERO SECTION */}
        {/* Container for Staggered Animation */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-center gap-12 pt-[40px] pb-[36px]"
        >
          {/* Left: Logo + Big Image */}
          <motion.div variants={heroImageVariants} className="flex-none w-[480px]">
            <div className="relative w-full h-[300px] bg-[#f0f0f0] rounded-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Image
                  src={DLink}
                  alt="D-Link camera"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Title + Paragraph */}
          <motion.div variants={heroContentVariants} className="flex-1">
            <h1 className="text-4xl font-bold text-center leading-[1.3] mt-0 mb-5 text-[#111] border-b border-[#e0e0e0]">
              <span className="text-cyan-700">D-Link</span> Distributor in Dubai
            </h1>
            <p className="text-[15px] leading-[1.9] text-[#111] text-justify m-0">
              We take pride in being a trusted distributor of D-Link products in Dubai, UAE, bringing you innovative networking and connectivity solutions from a renowned brand. D-Link is a global leader in providing cutting-edge technology for homes and businesses, offering a wide range of reliable and high-performance products. With our comprehensive selection of D-Link products, you can create a seamless network infrastructure that supports your communication needs and enhances your connectivity experience.
            </p>
          </motion.div>
        </motion.div>

        {/* SECTION 2: THE IMPERATIVE */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-[36px]"
        >
          <p className="text-[15px] leading-[1.9] text-[#111] text-justify m-0">
            D-Link’s surveillance solutions provide comprehensive security and peace of mind for your home or business. From high-definition IP cameras and network video recorders to video management software, D-Link’s surveillance products enable effective monitoring and recording of your premises. With advanced features like motion detection, remote access, and cloud storage options, you can keep a watchful eye on your property from anywhere, at any time.
          </p>
        </motion.div>

        {/* ACCORDION */}
        

        {/* SECTION 3: ELEVATING YOUR SURVEILLANCE */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="pt-[44px]"
        >
          <h2
            className="text-2xl font-bold text-center mt-0 mb-6 text-[#111]"
          >
            Empowering Connectivity with <span className="text-cyan-700">D-Link</span> Networking Solutions
          </h2>

          <p
            className="text-[15px] leading-[1.9] text-[#111] text-justify mb-5 mt-0"
          >
            D-Link’s networking solutions enable you to build a robust and reliable network infrastructure tailored to your specific requirements. From advanced routers and switches to wireless access points and network adapters, D-Link’s networking products provide seamless connectivity, ensuring efficient data transfer and smooth communication. As your trusted supplier, we offer a comprehensive range of D-Link networking solutions, enabling you to create a secure and high-performance network environment.
          </p>
        </motion.div>
      </div>
    </>
  );
}