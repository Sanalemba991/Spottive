"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const bannerBackground = 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

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

  const bannerFadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 },
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
  // Observer for the main banner
  const [refBanner, inViewBanner] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <div ref={refBanner} className="relative  w-full h-96 md:h-screen overflow-hidden">
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
                Contact Us                            </motion.span>

            </motion.h1>

            {/* Mobile-only description */}
            <motion.div
              className="md:hidden mt-8 px-6 flex flex-col items-center gap-3 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={inViewBanner ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.p className="text-white/70 text-sm text-center leading-relaxed max-w-xs">
                Reach out to Spottive Technologies for advanced surveillance solutions. Our team is ready to discuss your security needs and provide expert recommendations tailored to your business.
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
                Reach out to Spottive Technologies for advanced surveillance solutions. Our team is ready to discuss your security needs and provide expert recommendations tailored to your business.
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
      <div className="bg-gray-50 flex items-center justify-center p-4">

        <div className="w-full max-w-6xl bg-white rounded-lg shadow-sm p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Navigation Link */}

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Let's Secure Your Future Together
                </h1>
              </div>

              {/* Description Text */}
              <div>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're looking for CCTV cameras, access control systems, or complete surveillance solutions, our experts are here to help. We provide customized security systems that protect what matters most to you.
                </p>
              </div>

              {/* Contact Information Grid */}
              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                {/* Call Center */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Call Center</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>+971 4 XXX XXXX</p>
                    <p>+971 50 XXX XXXX</p>
                  </div>
                </div>

                {/* Our Location */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Our Location</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Dubai, United Arab Emirates</p>
                    <p>Head Office</p>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Email</h3>
                  <div className="text-sm text-gray-600">
                    <p>info@spottive.com</p>
                  </div>
                </div>

                {/* Social Network */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Social network</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8 lg:p-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-sm text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                  />
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition resize-none"
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800">Message sent successfully! We'll contact you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-800">Failed to send message. Please try again.</p>
                  </div>
                )}

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 disabled:bg-gray-600 disabled:cursor-not-allowed transition font-medium w-full justify-center"
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <svg className="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v20m10-10H2" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl h-96 bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.8321269508186!2d55.27084!3d25.20482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6c4d5a5a5a5d%3A0x5a5a5a5a5a5a5a5a!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;