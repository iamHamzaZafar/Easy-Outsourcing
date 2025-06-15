"use client";

import { useEffect, useState } from 'react';

export default function PerformanceBanner() {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { value: 300, suffix: '+', label: 'Satisfied Clients', color: 'from-blue-500 to-blue-600' },
    { value: 50, suffix: 'M+', label: 'Chats Handled', color: 'from-teal-500 to-teal-600' },
    { value: 8, suffix: 'M+', label: 'Inbound Calls Answered', color: 'from-orange-500 to-orange-600' },
    { value: 7.3, suffix: 'M+', label: 'Leads Generated', color: 'from-purple-500 to-purple-600' },
    { value: 700, suffix: 'K+', label: 'Hours Worked', color: 'from-green-500 to-green-600' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('performance-banner');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const AnimatedCounter = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span>
        {Math.floor(count)}{suffix}
      </span>
    );
  };

  return (
    <section id="performance-banner" className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-teal-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Proven{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
              Results
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Numbers that speak for themselves - delivering exceptional results for businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/20 rounded-full" />
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  isVisible={isVisible} 
                />
              </div>
              <p className="text-white/80 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}