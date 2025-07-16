"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import InquiryForm from '@/components/InquiryForm';

export default function ContactPage() {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@easyoutsourcing.org',
      description: 'Send us an email'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (614) 362-6055',
      description: '24/7 support available'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '4200 Regent St Suite 200, Columbus, OH 43219',
      description: 'Our HQ'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: '24/7 Available',
      description: 'We never sleep'
    }
  ];

  const services = [
    'SaaS',
    'Admin Support',
    'Customer Support',
    'Email, Chat & Call Support',
    'AI Automation',
    'Data Entry',
    'Dispatch',
    'Chatbots',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In{' '}
              <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to transform your business operations? Let&lsquo;s discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and we&lsquo;ll get back to you within 24 hours. 
                Our team is ready to discuss your specific needs and provide a customized solution.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Why Choose Easy Outsourcing?
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      24/7 professional support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Customized solutions for your industry
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Proven track record with 300+ clients
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Free consultation and trial period
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          <InquiryForm />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">
                    {info.details}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}