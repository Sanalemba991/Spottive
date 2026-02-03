'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';

export default function DJIBannerComplete() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const banners = [
    {
      id: 'agras-t100',
      name: 'DJI Air 3S',
      otherProducts: ['DJI Mavic 4 Pro', 'Osmo Action 6'],
      subtitle: 'Smart Agricultural Equipment',
      title: 'DJI AGRAS T100',
      tagline: 'Big Drone, Big Jobs.',
      buttons: [
        { text: 'DJI AGRAS T100', variant: 'outline' },
        { text: 'DJI AGRAS T70P', variant: 'outline' }
      ],
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1920&q=80',
    },
    {
      id: 'mavic-4-pro',
      name: 'DJI Mavic 4 Pro',
      otherProducts: ['DJI Air 3S', 'Osmo Action 6'],
      subtitle: 'Professional Aerial Photography',
      title: 'DJI MAVIC 4 PRO',
      tagline: 'Excellence in Every Frame.',
      buttons: [
        { text: 'Buy Now', variant: 'solid' },
        { text: 'Learn More', variant: 'outline' }
      ],
      image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=1920&q=80',
    },
    {
      id: 'osmo-action-6',
      name: 'Osmo Action 6',
      otherProducts: ['DJI Mavic 4 Pro', 'DJI Air 3S'],
      subtitle: 'Next-Level Action Camera',
      title: 'OSMO ACTION 6',
      tagline: 'Capture the Impossible.',
      buttons: [
        { text: 'Explore Features', variant: 'solid' },
        { text: 'Compare Models', variant: 'outline' }
      ],
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1920&q=80',
    },
    {
      id: 'mini-4-pro',
      name: 'DJI Mini 4 Pro',
      otherProducts: ['DJI Mavic 4 Pro', 'DJI Air 3S'],
      subtitle: 'Compact Innovation',
      title: 'DJI MINI 4 PRO',
      tagline: 'Small Size, Big Impact.',
      buttons: [
        { text: 'Shop Now', variant: 'solid' },
        { text: 'View Specs', variant: 'outline' }
      ],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleProductClick = (productName: string) => {
    const productIndex = banners.findIndex(b => b.name === productName);
    if (productIndex !== -1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(productIndex);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 group">
      {/* Banner Slides */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={banner.image}
              alt={banner.title}
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
      ))}

      {/* Left Navigation Arrow - Only visible on hover */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/60 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
      </button>

      {/* Right Navigation Arrow - Only visible on hover */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/60 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-30"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
      </button>

      {/* Navigation Menu - Fixed Position at Bottom */}
      <div className="absolute left-4 md:left-6 bottom-4 md:bottom-6 z-30">
        <div className="flex flex-col gap-0.5">
          {banners.map((banner, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`group flex items-center gap-2 transition-all duration-300 ${
                index === currentSlide ? 'opacity-100' : 'opacity-60 hover:opacity-80'
              }`}
              aria-label={`Go to ${banner.name}`}
            >
              {/* Vertical Line Indicator */}
              <div className="flex flex-col items-center">
                <div
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-0.5 h-10 bg-white'
                      : 'w-0.5 h-6 bg-white/40 group-hover:h-8 group-hover:bg-white/60'
                  }`}
                />
              </div>

              {/* Product Name */}
              <span
                className={`text-white text-xs md:text-sm font-light tracking-wide transition-all duration-300 ${
                  index === currentSlide
                    ? 'opacity-100 font-medium'
                    : 'opacity-70 group-hover:opacity-90'
                }`}
              >
                {banner.name}
              </span>
            </button>
          ))}
        </div>
      </div> 
      {/* Inline Styles for Animations */}
      <style jsx>{`
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
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
      `}</style>
    </div>
  );
}