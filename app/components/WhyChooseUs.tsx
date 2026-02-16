'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
export default function CommitmentToExcellence() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

 const commitments = [
  {
    title: "Industry-Leading Security Expertise",
    description:
      "With years of hands-on experience in surveillance and security solutions, we design systems that protect homes and businesses with absolute reliability.",
    image:
      "https://images.unsplash.com/photo-1732247429548-ede5fbfee3f0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Professional security system installation"
  },
  {
    title: "Advanced Technology & Smart Solutions",
    description:
      "We use the latest CCTV and security technologies to deliver crystal-clear monitoring, smart integrations, and future-ready protection.",
    image:
      "https://images.unsplash.com/photo-1626451630621-59a91897b93b?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Modern CCTV camera technology"
  },
  {
    title: "Customized Solutions for Every Space",
    description:
      "Every site is unique. We carefully analyze your requirements and provide tailored security solutions that perfectly fit your environment and budget.",
    image:
      "https://images.unsplash.com/photo-1716789340025-4eb6813bc8cb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Customized security planning"
  },
  {
    title: "Trusted Support & Long-Term Reliability",
    description:
      "From installation to after-sales service, our team ensures seamless support, quick response times, and long-lasting system performance.",
    image:
      "https://images.unsplash.com/photo-1525939815185-7b25b346d3db?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Customer support and maintenance service"
  }
];

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
         <motion.h2 
            className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6"

          >
            Why Choose <span className="text-blue-400">Us</span>?
          </motion.h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A Commitment to Excellence and Customer Satisfaction
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-1">
          {/* Left Column */}
          <div className={`relative group overflow-hidden  shadow-xl hover:shadow-2xl transition-all duration-700 h-[568px] transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
               style={{ transitionDelay: '200ms' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
            <Image
              src={commitments[0].image}
              alt={commitments[0].alt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <div className="relative h-full flex flex-col justify-end p-6 lg:p-8 text-white z-20">
              <h3 className="text-xl lg:text-2xl font-bold transform transition-all duration-700 group-hover:-translate-y-4">
                {commitments[0].title}
              </h3>
              <p className="text-sm lg:text-base text-gray-200 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-700 opacity-0 group-hover:opacity-100">
                {commitments[0].description}
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-4 lg:gap-1">
            {commitments.slice(1, 3).map((commitment, index) => (
              <div 
                key={index} 
                className={`relative group overflow-hidden  shadow-xl hover:shadow-2xl transition-all duration-700 h-[282px] transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                <Image
                  src={commitment.image}
                  alt={commitment.alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <div className="relative h-full flex flex-col justify-end p-6 lg:p-8 text-white z-20">
                  <h3 className="text-xl lg:text-2xl font-bold transform transition-all duration-700 group-hover:-translate-y-4">
                    {commitment.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-200 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-700 opacity-0 group-hover:opacity-100">
                    {commitment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
            <div className={`relative group overflow-hidden  shadow-xl hover:shadow-2xl transition-all duration-700 h-[568px] transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
               style={{ transitionDelay: '800ms' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
            <Image
              src={commitments[3].image}
              alt={commitments[3].alt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <div className="relative h-full flex flex-col justify-end p-6 lg:p-8 text-white z-20">
              <h3 className="text-xl lg:text-2xl font-bold transform transition-all duration-700 group-hover:-translate-y-4">
                {commitments[3].title}
              </h3>
              <p className="text-sm lg:text-base text-gray-200 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-700 opacity-0 group-hover:opacity-100">
                {commitments[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}