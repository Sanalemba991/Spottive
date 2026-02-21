'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import UbiquitiImg from "../../../public/brands/dubai.png"; // Ensure this image exists in your public folder
import { ChevronRight } from 'lucide-react';

const banner = {
  subtitle: 'Enterprise Network Solutions',
  title: 'UBIQUITI',
  tagline: 'Redefining Network Performance with Innovative Technology.',
  buttons: [
    { text: 'Explore Products', variant: 'solid' },
    { text: 'Contact Us', variant: 'outline' }
  ],
  image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80', // Server room/networking themed image
};

const accordionItems = [
  { id: 1, label: 'UniFi Access Points' },
  { id: 2, label: 'Edge Routing & Switching' },
  { id: 3, label: 'UniFi Protect Cameras' },
];

export default function UbiquitiPage() {
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
                src={UbiquitiImg}
                alt="Ubiquiti Network Device"
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
              Ubiquiti Solutions for
              <br />
              Seamless Connectivity
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
              Ubiquiti is a global leader in designing and manufacturing high-performance networking 
              technology. Known for the UniFi and EdgeMAX product lines, they provide enterprise-grade 
              hardware at disruptive price points. As a trusted Ubiquiti partner, we empower businesses 
              and service providers with scalable network infrastructure, delivering high throughput, 
              intuitive management, and unmatched reliability for modern connectivity demands.
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
            The Need for High-Performance Network Infrastructure
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
            In an increasingly connected world, network stability and speed are non-negotiable. 
            Ubiquiti addresses these needs with a unified approach to networking, offering solutions 
            that span wireless links, switching, routing, and security. Their proprietary software 
            controllers allow for seamless management of thousands of devices, making complex network 
            setups simple and efficient. Whether bridging remote locations with airMAX or deploying 
            campus-wide Wi-Fi with UniFi, their technology ensures you stay connected without compromise.
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
                    Discover our range of {item.label} — designed for high-capacity performance, 
                    ease of management, and seamless integration into your existing network ecosystem.
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
            Elevating Your Network Infrastructure
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
            Ubiquiti&apos;s impact on the networking landscape is defined by their commitment to 
            simplifying complex technologies. At Spottive Technologies, we leverage the power of 
            the UniFi ecosystem to design custom networks that are robust, scalable, and easy to 
            control. From initial site surveys to final deployment, our team ensures that your 
            infrastructure is built for the future.
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
            In conclusion, the backbone of any modern business is a reliable network. By partnering 
            with <strong>Spottive Technologies</strong> for your Ubiquiti needs, you are choosing 
            expertise, reliability, and a connectivity solution that drives your business forward.
          </p>
        </motion.div>
      </div>
    </>
  );
}