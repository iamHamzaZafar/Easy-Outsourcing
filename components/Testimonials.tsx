"use client";

import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Solutions',
      role: 'CEO',
      content: 'Easy Outsourcing transformed our operations completely. Their SaaS BPO solution increased our efficiency by 60% within the first month. The team is professional, responsive, and truly understands our business needs.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    },
    {
      name: 'Michael Chen',
      company: 'Global Logistics Pro',
      role: 'Operations Director',
      content: 'The truck dispatching service has been a game-changer for our fleet management. We\'ve reduced empty miles by 25% and improved delivery times significantly. Outstanding service quality.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
    },
    {
      name: 'Emily Rodriguez',
      company: 'Healthcare Connect',
      role: 'Customer Success Manager',
      content: 'Their AI automation and chatbot solutions have revolutionized our customer support. We now handle 3x more inquiries with the same team size while maintaining high satisfaction scores.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    },
    {
      name: 'David Thompson',
      company: 'DataFlow Systems',
      role: 'VP of Operations',
      content: 'The data entry services are incredibly accurate and fast. 99.95% accuracy rate with quick turnaround times has allowed us to focus on strategic initiatives rather than manual data processing.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    },
    {
      name: 'Jennifer Martinez',
      company: 'E-commerce Plus',
      role: 'Founder',
      content: 'Their customer support team handles our email, chat, and phone inquiries seamlessly. Customer satisfaction has increased by 40% since we started working with Easy Outsourcing.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    },
    {
      name: 'Robert Kim',
      company: 'StartupFlow',
      role: 'CTO',
      content: 'The admin support services have been invaluable for our growing startup. They handle everything from scheduling to document management, allowing our team to focus on product development.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    },
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses that have transformed their operations with our services
          </p>
        </div>

        {/* Continuous flowing testimonials */}
        <div className="relative">
          <div className="flex animate-scroll-left">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-96 mx-4">
                <Card className="h-full shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center mb-6">
                      <Quote className="w-8 h-8 text-blue-500 opacity-50" />
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6 italic text-center">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div className="text-center">
                        <h4 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-600 font-medium text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-96 mx-4">
                <Card className="h-full shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center mb-6">
                      <Quote className="w-8 h-8 text-blue-500 opacity-50" />
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6 italic text-center">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div className="text-center">
                        <h4 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-600 font-medium text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}