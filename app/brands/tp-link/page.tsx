'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import Dahua from "../../../public/brands/dubai.png"
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
        }
      `}</style>

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

              Your Trusted TP-Link Distributor in Dubai
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
              At Spottive Technologies, we understand the evolving networking landscape and the importance of reliable solutions in today’s digital age. As a trusted TP link distributor in Dubai, we’re proud to offer the quality and reliability of TP-Link, a global leader in networking devices and accessories.
            </p>
          </motion.div>
        </motion.div>

        {/* SECTION 2: THE IMPERATIVE */}


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
                    Explore our premium range of {item.label} — engineered for superior surveillance,
                    reliability, and round-the-clock protection for homes and businesses.
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
            Experience the Unique Benefits of Choosing TP-Link Solutions
          </h2>
          <h1 className='font-bold mb-5-'>
            Pioneering Innovations
          </h1>

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
            TP-Link has embarked on an extensive journey that extends far beyond just wireless technology. Their innovative forays into smart homes, smartphones, and smart accessories highlight their unwavering commitment to technological advancement and a vision for the future.
          </p>
          <h1 className='font-bold mb-5-'>
            Meeting Diverse Networking Requirements
          </h1>
          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.9',
              color: '#111',
              textAlign: 'justify',
              marginBottom: '20px',
              margin: 0,
            }}
          >

            TP-Link stands out with features like the Omada Cloud-Based Controller and robust routers, notably models like the ER7206. They offer tailored solutions for a plethora of networking needs, whether it’s achieving seamless office connectivity with the EAP245 ceiling mount access point or optimizing signal coverage with the EAP110-Outdoor wireless access point. What’s evident in their offerings is the expansive and high-quality range that caters to various requirements.
          </p>
          <h1 className='font-bold mb-5-'>
            Unwavering Commitment to User Experience
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
            At the heart of TP-Link’s ethos is its dedication to the user. They prioritize ensuring that their devices come with user-friendly interfaces and are easy to set up. Their commitment shines through in their relentless drive to optimize user experience across the board.
          </p>
        </motion.div>
      </div>
    </>
  );
}