'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Handshake } from 'lucide-react';
import { useInView as useInViewIntersection } from 'react-intersection-observer';

// Counter component for animated stats
function CountUpValue({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Extract numeric value from string (e.g., "10+" -> 10)
  const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const suffix = value.replace(/\d/g, ''); // Get the suffix (e.g., "+")

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const duration = 2000; // 2 seconds
      const progress = Math.min(elapsed / duration, 1);

      setDisplayValue(Math.floor(progress * numericValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="text-xl sm:text-2xl font-bold text-black">
      {displayValue}
      {suffix}
    </span>
  );
}
const slides = [
  {
    id: 1,
    subtitle: 'HIKVISION',
    title: 'HIKVISION',
    description:
      'World-leading provider of innovative video surveillance products and solutions. Trusted globally for advanced security technology, AI-powered cameras, and comprehensive surveillance systems.',
    link: '/brands/hikvision',
    bgImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80',
  },
  {
    id: 2,
    subtitle: 'UBIQUITI',
    title: 'UBIQUITI',
    description:
      'Enterprise-grade networking solutions designed for scalability and performance. From wireless access points to complete network management systems — built for modern businesses.',
    link: '/brands/ubiquiti',
    bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80',
  },
  {
    id: 3,
    subtitle: 'DAHUA',
    title: 'DAHUA',
    description:
      'A world-leading video-centric smart IoT solution provider. Dahua delivers end-to-end security solutions, services, and integrated systems for a safer society and smarter living.',
    link: '/brands/dahua',
    bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&q=80',
  },
  {
    id: 4,
    subtitle: 'SEAGATE',
    title: 'SEAGATE',
    description:
      'Global leader in data storage solutions, providing hard drives and SSDs trusted for reliability and performance. From surveillance-grade drives to enterprise storage — built for every need.',
    link: '/brands/seagate',
    bgImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&q=80',
  },
  {
    id: 5,
    subtitle: 'UNV',
    title: 'UNV',
    description:
      'Leading provider of advanced surveillance technology, offering high-definition cameras and comprehensive security solutions for residential and commercial applications.',
    link: '/brands/unv',
    bgImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&q=80',
  },
  {
    id: 6,
    subtitle: 'EUFY',
    title: 'EUFY',
    description:
      'Smart home security brand specializing in wireless cameras, video doorbells, and home automation devices for enhanced safety and convenience.',
    link: '/brands/eufy',
    bgImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80',
  },
  {
    id: 7,
    subtitle: 'EZVIZ',
    title: 'EZVIZ',
    description:
      'Innovative smart security solutions including AI-powered cameras, alarms, and home monitoring systems designed for modern living.',
    link: '/brands/ezviz',
    bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80',
  },
  {
    id: 8,
    subtitle: 'IMOU',
    title: 'IMOU',
    description:
      'Global leader in smart home and business security, providing cutting-edge cameras, NVRs, and cloud-based surveillance platforms.',
    link: '/brands/imou',
    bgImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&q=80',
  },
  {
    id: 9,
    subtitle: 'ZKTECO',
    title: 'ZKTECO',
    description:
      'World-renowned manufacturer of biometric access control systems, time attendance solutions, and security technology.',
    link: '/brands/zkteco',
    bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&q=80',
  },
  {
    id: 10,
    subtitle: 'YEALINK',
    title: 'YEALINK',
    description:
      'Professional communication solutions provider, offering IP phones, video conferencing systems, and unified communications for businesses.',
    link: '/brands/yealink',
    bgImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80',
  },
  {
    id: 11,
    subtitle: 'D-LINK',
    title: 'D-LINK',
    description:
      'Leading networking equipment manufacturer, delivering routers, switches, and wireless solutions for home and enterprise networks.',
    link: '/brands/d-link',
    bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80',
  },
  {
    id: 12,
    subtitle: 'TP-LINK',
    title: 'TP-LINK',
    description:
      'Global provider of networking products, including routers, access points, and smart home devices for reliable connectivity.',
    link: '/brands/tp-link',
    bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&q=80',
  },
  {
    id: 13,
    subtitle: 'GRANDSTREAM',
    title: 'GRANDSTREAM',
    description:
      'Innovative VoIP and video surveillance solutions, offering IP phones, gateways, and security cameras for comprehensive communication and protection.',
    link: '/brands/grandstream',
    bgImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&q=80',
  },
  {
    id: 14,
    subtitle: 'WD',
    title: 'WD',
    description:
      'Western Digital, a pioneer in data storage, providing high-performance hard drives, SSDs, and storage solutions for consumers and enterprises.',
    link: '/brands/wd',
    bgImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80',
  },
];

const galleryImages = [

  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
];

const stats = [
  {
    color: 'bg-cyan-500',
    value: '10+',
    label: 'Years Experience',
  },
  {
    color: 'bg-cyan-500',
    value: '64+',
    label: 'Completed Project',
  },
  {
    color: 'bg-rose-500',
    value: '151+',
    label: 'Happy Client',
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
    },
  },
};

const bottomSectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.6 + custom * 0.15,
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const VISIBLE_CARDS = 4;

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  // Calculate cardStart to keep active slide centered
  const getCardStart = useCallback((slideIndex: number) => {
    const centerPosition = 1; // Keep active card in 2nd position for better centering
    let start = slideIndex - centerPosition;

    // Adjust if too close to the beginning
    if (start < 0) {
      start = 0;
    }

    // Adjust if too close to the end
    if (start + VISIBLE_CARDS > slides.length) {
      start = Math.max(0, slides.length - VISIBLE_CARDS);
    }

    return start;
  }, []);

  const cardStart = getCardStart(currentSlide);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const [direction, setDirection] = useState(0);

  const visibleSlides = slides.slice(cardStart, cardStart + VISIBLE_CARDS);

  const slide = slides[currentSlide];

  const handleNext = useCallback(() => {
    setDirection(1);
    nextSlide();
  }, [nextSlide, setDirection]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    prevSlide();
  }, [prevSlide, setDirection]);

  const handleGoToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    goToSlide(index);
  }, [currentSlide, goToSlide, setDirection]);

  const nextGalleryImage = useCallback(() => {
    setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevGalleryImage = useCallback(() => {
    setCurrentGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [handleNext]);

  const bgVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const textVariants = {
    enter: () => ({ opacity: 0, y: 50 }),
    center: { opacity: 1, y: 0 },
    exit: () => ({ opacity: 0, y: -30 }),
  };

  const [refBanner, inViewBanner] = useInViewIntersection({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bannerBackground = 'https://images.unsplash.com/photo-1718421280278-4402ea0c00eb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const router = useRouter();

  const bannerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const bannerTitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const bannerSlideInRightVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

  return (
    <section className="bg-white overflow-hidden">
      {/* Banner Section */}
      <div ref={refBanner} className="relative mb-8 w-full h-96 md:h-screen overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={inViewBanner ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('${bannerBackground}')`,
              filter: "brightness(0.9)",
            }}
          />
        </motion.div>

        {/* Content Container */}
        <motion.div
          className="relative z-10 h-full flex flex-col"
          variants={bannerContainerVariants}
          initial="hidden"
          animate={inViewBanner ? "visible" : "hidden"}
        >
          {/* Main Title - Centered */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <motion.h1
              className="text-white text-5xl md:text-9xl font-light tracking-tight text-center px-6 md:px-0 leading-tight md:leading-normal"
              variants={bannerTitleVariants}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={inViewBanner ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Our
              </motion.span>
              <motion.span
                className="ml-4 md:ml-8 inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={inViewBanner ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Brands
              </motion.span>
            </motion.h1>

            {/* Mobile-only description */}
            <motion.div
              className="md:hidden mt-8 px-6 flex flex-col items-center gap-3 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={inViewBanner ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.p className="text-white/70 text-sm text-center leading-relaxed max-w-xs">
                Authorized distributors of world-leading technology brands, delivering premium products and solutions trusted globally for innovation and reliability.
              </motion.p>
              <motion.div
                className="h-0.5 bg-white/30"
                initial={{ width: 0 }}
                animate={inViewBanner ? { width: "8rem" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
              />
            </motion.div>
          </div>

          {/* Bottom Section - Desktop only */}
          <div className="pb-12 px-6 md:px-12 hidden md:flex flex-col items-end gap-4">
            <motion.div
              className="flex flex-col items-end gap-2"
              variants={bannerSlideInRightVariants}
            >
              <motion.p
                className="text-white/70 text-sm max-w-md text-right"
                initial={{ opacity: 0 }}
                animate={inViewBanner ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                Authorized distributors of world-leading technology brands, delivering premium products and solutions trusted globally for innovation and reliability.
              </motion.p>

              <motion.div
                className="h-0.5 w-32 bg-white/30"
                initial={{ width: 0 }}
                animate={inViewBanner ? { width: "8rem" } : { width: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={bottomSectionVariants}
        initial="hidden"
        animate="visible"
        className=" text-gray-900 relative group"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Introduction */}
            <div className="space-y-6">
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-3"
                >
                  Our
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                >
                  SPOTTIVE TECHNOLOGIES
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-sm text-gray-400 leading-relaxed max-w-md"
                >
                  We collaborate with leading brands to deliver high-quality, innovative
                  solutions tailored to modern business needs. Our commitment to excellence,
                  reliability, and performance ensures every brand we represent stands for
                  trust, durability, and long-term value.
                </motion.p>

              </div>

              {/* Stats with colored circle indicators */}
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    custom={index}
                    variants={statVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center gap-4"
                  >
                    {/* Colored circle indicator */}
                    <div className={`w-5 h-5 ${stat.color} rounded-full shrink-0`} />
                    <div className="flex items-baseline gap-3">
                      <CountUpValue value={stat.value} />
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - Single Image */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
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
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=700&auto=format&fit=crop"
                  alt="Spottive Team"
                  fill
                  sizes="(max-width: 768px) 320px, 384px"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Authorised Distributor Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <p className="text-xs text-cyan-600 uppercase tracking-[0.3em] font-semibold mb-3">
              Our Commitment
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Authorised Distributor
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-cyan-500 mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proud authorized distributor of world-leading technology brands, delivering premium products and expert support to businesses across the region.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Left Column - Image */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
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
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=700&auto=format&fit=crop"
                  alt="Spottive Team"
                  fill
                  sizes="(max-width: 768px) 320px, 384px"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Right Column - Text Content */}
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
                  <span className="text-cyan-400">Technology Solutions</span> in Dubai
                </motion.h3>
                <motion.div
                  className="w-12 h-1 bg-cyan-400 rounded-full"
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
          </motion.div>
        </div>
      </section>

      {/* Middle Section - About Spottive with Organic Shape Image */}


      <div className="relative h-[85vh] min-h-125 max-h-200 w-full overflow-hidden bg-black group">
        {/* Background Image with Transition */}
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            variants={bgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={slide.bgImage}
              alt={slide.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/30" />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Absolute Positioned */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full  flex items-center justify-center text-white  transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-40 w-12 h-12  flex items-center justify-center text-white  transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content Layer */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center pt-20 lg:pt-24">
            <div className="w-full grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 items-center">
              {/* Left Side - Text Content */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`content-${slide.id}`}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-white space-y-6"
                >
                  <p className="text-sm sm:text-base text-gray-300 uppercase tracking-[0.3em] font-medium">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg">
                    {slide.description}
                  </p>
                  <div className="pt-3">
                    <Link
                      href={slide.link}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm px-6 py-2.5 rounded-full border border-white/20 transition-all duration-300 hover:[&>svg]:translate-x-1"
                    >
                      <span>Discover More</span>
                      <ChevronRight className="w-3 h-3 transition-transform duration-200" />
                    </Link>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Right Side - Card Thumbnails (4 visible at a time, smooth scroll) */}
              <div className="hidden md:flex justify-end">
                <div className="relative overflow-hidden" style={{ width: `${VISIBLE_CARDS * 160 + (VISIBLE_CARDS - 1) * 14}px` }}>
                  <motion.div
                    className="flex gap-3.5"
                    animate={{ x: -cardStart * (160 + 14) }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    {slides.map((s, index) => (
                      <motion.div
                        key={s.id}
                        onClick={() => handleGoToSlide(index)}
                        animate={{
                          scale: index === currentSlide ? 1.05 : 1,
                          opacity: index === currentSlide ? 1 : 0.5,
                        }}
                        whileHover={{ opacity: 1, scale: 1.03 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className={`group relative overflow-hidden cursor-pointer shrink-0 w-[160px] rounded-lg ${index === currentSlide
                          ? 'shadow-2xl shadow-cyan-500/30 ring-2 ring-cyan-500'
                          : 'shadow-xl shadow-black/30 hover:shadow-2xl'
                          }`}
                      >
                        <div className="aspect-[3/4] relative">
                          <Image
                            src={s.cardImage}
                            alt={s.subtitle}
                            fill
                            sizes="160px"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className={`absolute inset-0 transition-all duration-400 ${index === currentSlide
                            ? 'bg-gradient-to-t from-black/70 via-black/10 to-transparent'
                            : 'bg-gradient-to-t from-black/80 via-black/30 to-black/10'
                            }`} />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <p className={`text-xs sm:text-sm font-semibold leading-tight transition-colors duration-300 ${index === currentSlide ? 'text-cyan-400' : 'text-white'
                            }`}>
                            {s.subtitle}
                          </p>
                        </div>
                        {/* Active indicator bar */}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-500"
                          initial={false}
                          animate={{ scaleX: index === currentSlide ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="mt-20 bg-gray-100 rounded-2xl py-16 px-8 md:px-12 text-center mx-4 sm:mx-6 lg:mx-8 mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {/* Handshake Icon */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Handshake className="w-12 h-12 md:w-16 md:h-16 text-gray-700" />
        </motion.div>

        <motion.h3
          className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tell me about your next<br />project
        </motion.h3>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.button
            variants={itemVariants}
            className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all "
            onClick={() => router.push('/contact')}
          >
            Get started
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}