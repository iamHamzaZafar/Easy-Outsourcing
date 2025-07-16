"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Headphones, MessageCircle, Star, Clock, Users, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import InquiryForm from '@/components/InquiryForm';

export default function CustomerSupportPage() {



  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock customer support across all time zones'
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Support via phone, email, chat, and social media'
    },
    {
      icon: Users,
      title: 'Trained Professionals',
      description: 'Experienced support agents trained in your industry'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Continuous monitoring and quality improvement'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Secure handling of customer information and data'
    },
    {
      icon: Headphones,
      title: 'Personalized Service',
      description: 'Customized support solutions for your business needs'
    }
  ];

  const benefits = [
    'Improve customer satisfaction by 40%+',
    'Reduce response time to under 2 minutes',
    '24/7 professional customer support',
    'Multilingual support capabilities',
    'Detailed reporting and analytics',
    'Cost-effective support solution'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-green-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Exceptional{' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                  Customer Support
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Deliver outstanding customer experiences with our professional support team. 
                Available 24/7 to ensure your customers always receive the help they need.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Customer Support Excellence"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Customer Support Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to provide exceptional customer service experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Customer Experience
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our customer support services help you build stronger relationships with your customers 
                while reducing operational costs and improving satisfaction rates.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Customer Support Team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Elevate Your Customer Support
            </h2>
            <p className="text-xl text-gray-600">
              Let&rsquo;s discuss how we can improve your customer support experience
            </p>
          </div>

       <InquiryForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}