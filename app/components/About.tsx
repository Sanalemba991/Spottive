'use client';

import React from 'react';
import { Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Variants } from 'framer-motion';
const About = () => {
    // Observer for the main banner
    const [refBanner, inViewBanner] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Observer for Vision and Mission section
    const [refVisionMission, inViewVisionMission] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // separate observers for Vision and Mission blocks
    const [refVision, inViewVision] = useInView({
        triggerOnce: true,
        threshold: 0.12,
    });

    const [refMission, inViewMission] = useInView({
        triggerOnce: true,
        threshold: 0.12,
    });

    // Observer for Specialized section
    const [refSpecialized, inViewSpecialized] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const bannerBackground = 'https://images.unsplash.com/photo-1718421280278-4402ea0c00eb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    const bannerContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const bannerTitleVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    };

    const bannerFadeInUpVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.2 },
        },
    };

    const bannerSlideInRightVariants: Variants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, delay: 0.4 },
        },
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    const iconAnimation: Variants = {
        hover: {
            scale: 1.15,
            rotate: [0, 5, -5, 0],
            transition: { duration: 0.5 }
        }
    };

    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="w-full">
            {/* Slide 1: Who We Are */}
            <div ref={refBanner} className="relative mb-8 w-full h-96 md:h-screen overflow-hidden">
                {/* Background Image with Fixed Positioning */}
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
                    {/* Dark overlay for better text visibility */}
                </motion.div>

                {/* Content Container */}
                <motion.div
                    className="relative z-10 h-full flex flex-col"
                    variants={bannerContainerVariants}
                    initial="hidden"
                    animate={inViewBanner ? "visible" : "hidden"}
                >
                    {/* Main Title - Centered with responsive sizing */}
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
                                Who We
                            </motion.span>
                            <motion.span
                                className="ml-4 md:ml-8 inline-block"
                                initial={{ opacity: 0, x: -20 }}
                                animate={inViewBanner ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 1, delay: 1.2 }}
                            >
                                Are
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
                                Spottive Technologies is a trusted leader in selling CCTV cameras in UAE Dubai, delivering durable, high-quality surveillance solutions built for the region's climate, backed by reliable support, maintenance, and warranty.
                            </motion.p>
                            <motion.div
                                className="h-0.5 bg-white/30"
                                initial={{ width: 0 }}
                                animate={inViewBanner ? { width: "8rem" } : { width: 0 }}
                                transition={{ duration: 0.8, delay: 2 }}
                            />
                        </motion.div>
                    </div>

                    {/* Bottom Section - Hidden on mobile, shown on desktop */}
                    <div className="pb-12 px-6 md:px-12 hidden md:flex flex-col items-start md:items-end md:flex-row md:justify-between gap-4 md:gap-0">
                        <motion.div
                            className="flex gap-2"
                            variants={bannerFadeInUpVariants}
                        ></motion.div>

                        <motion.div
                            className="flex flex-col items-start md:items-end gap-2 w-full md:w-auto"
                            variants={bannerSlideInRightVariants}
                        >
                            <motion.p
                                className="text-white/70 text-sm max-w-md text-left md:text-right"
                                initial={{ opacity: 0 }}
                                animate={inViewBanner ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 1, delay: 1.5 }}
                            >
                                Spottive Technologies is a trusted leader in selling CCTV cameras in UAE Dubai, delivering durable, high-quality surveillance solutions built for the region's climate, backed by reliable support, maintenance, and warranty.
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

            {/* Vision and Mission Section */}
            <motion.section 
                ref={refVisionMission}
                className="relative w-full overflow-hidden py-10 px-10"
                variants={sectionVariants}
                initial="hidden"
                animate={inViewVisionMission ? "visible" : "hidden"}
            >
                <div className="relative flex min-h-[300px] items-center">
                    {/* Diagonal Split Background */}
                    <div className="absolute inset-0 flex">
                        <div className="w-1/2 bg-white"></div>
                        <div className="w-1/2 bg-gray-900"></div>
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1617897711385-df9c86b7dfe3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                                clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 40% 100%)',
                                filter: 'blur(5px)',
                            }}
                        ></div>
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2 md:gap-16 lg:px-8">

                        {/* Vision Section */}
                        <motion.div
                            ref={refVision}
                            className={`space-y-4 text-black pr-12 enter-from-left`}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inViewVision ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="space-y-2 text-center">
                                <h2 className="text-5xl font-bold tracking-tight">
                                    VISION
                                </h2>
                                <p className="text-sm font-medium uppercase tracking-wider text-gray-600">
                                    Spottive Technologies
                                </p>
                            </div>
                            <p className="max-w-lg text-center text-base leading-relaxed text-gray-700 md:text-lg">
                                To be the vital technology provider in the region. By ensuring well-being of employees to adapt necessity to grow and advance along with customers.
                            </p>
                        </motion.div>

                        {/* Mission Section */}
                        <motion.div
                            ref={refMission}
                            className={`space-y-4 text-white pl-12 enter-from-right`}
                            initial={{ opacity: 0, x: 50 }}
                            animate={inViewMission ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="space-y-2 text-center">
                                <h2 className="text-5xl font-bold tracking-tight">
                                    MISSION
                                </h2>
                                <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
                                    Spottive Technologies
                                </p>
                            </div>
                            <p className="max-w-lg text-center text-base leading-relaxed text-gray-200 md:text-lg">
                                To provide integrated technology solutions for ever-changing technology world. We become integral part of our customer to meet the evolving needs of the technology market through bespoke service, insight and top class execution.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Slide 2: We Specialized In */}
            <motion.section 
                ref={refSpecialized}
                className="min-h-screen mt-4 px-10 mb-15"
                variants={sectionVariants}
                initial="hidden"
                animate={inViewSpecialized ? "visible" : "hidden"}
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
                    {/* Left Section - Title */}
                    <motion.div
                        className="bg-gray-600 flex items-center justify-center px-8 py-16 lg:py-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inViewSpecialized ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="text-center">
                            <p className="text-sm md:text-base font-semibold mb-4 text-white">
                                SPOTTIVE TECHNOLOGIES
                            </p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                WE SPECIALIZED IN
                            </h2>
                        </div>
                    </motion.div>

                    {/* Right Section - 4 Cards in 2x2 Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inViewSpecialized ? "visible" : "hidden"}
                        className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2"
                    >
                        {/* Card 1: Distributor of Multiple Brands */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-white p-8 md:p-12 flex flex-col items-center justify-center text-center border border-gray-200 hover:shadow-xl transition-all duration-500"
             
                        >
                            <motion.div
                                className="mb-6"
                                variants={iconAnimation}
                        
                            >
                                <Lightbulb className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1.5} />
                            </motion.div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                                Distributor of Multiple Brands
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed text-black">
                                As an authorized distributor, we offer a wide range of products from
                                globally recognized brands, ensuring you receive high-quality, reliable
                                equipment that meets your specific needs.
                            </p>
                        </motion.div>

                        {/* Card 2: Advanced AV Services */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-gray-900 p-8 md:p-12 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-500"
                        
                        >
                            <motion.div
                                className="mb-6"
                                variants={iconAnimation}
                       
                            >
                                <Lightbulb className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
                            </motion.div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                                Advanced AV Services
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed text-white">
                                Our Audio-Visual (AV) services are designed to enhance communication and
                                collaboration. We provide state-of-the-art equipment and seamless
                                integration for optimal performance.
                            </p>
                        </motion.div>

                        {/* Card 3: Digital Signage Expertise */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-gray-900 p-8 md:p-12 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-500"
                  
                        >
                            <motion.div
                                className="mb-6"
                                variants={iconAnimation}
                                whileHover="hover"
                            >
                                <Lightbulb className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
                            </motion.div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                                Digital Signage Expertise
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed text-white">
                                We specialize in digital signage, offering a versatile platform for
                                displaying text, video, and multimedia content in public venues. Our
                                offerings are customizable, catering to various settings and marketing needs.
                            </p>
                        </motion.div>

                        {/* Card 4: Leading Wholesaler in CCTV */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-white p-8 md:p-12 flex flex-col items-center justify-center text-center border border-gray-200 hover:shadow-xl transition-all duration-500"
                   
                        >
                            <motion.div
                                className="mb-6"
                                variants={iconAnimation}
                                whileHover="hover"
                            >
                                <Lightbulb className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1.5} />
                            </motion.div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                                Leading Wholesaler in CCTV
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed text-gray-700">
                                As the leading wholesaler in CCTV in the UAE, we provide a comprehensive
                                range of surveillance systems. Our CCTV offerings ensure high-quality
                                video surveillance for enhanced security and peace of mind.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default About;