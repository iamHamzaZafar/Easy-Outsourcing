"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Settings, Cloud, BarChart3, Shield, Zap, Users, CheckCircle, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { dropdown } from "@/app/constants/dropdown";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import InquiryForm from '@/components/InquiryForm';


export default function SaasBPOPage() {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud-Based Solutions',
      description: 'Scalable cloud infrastructure that grows with your business needs'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Real-time dashboards and detailed reporting for data-driven decisions'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with end-to-end encryption and data protection'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamlined workflows that reduce manual tasks and increase efficiency'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Expert professionals trained specifically for your business requirements'
    },
    {
      icon: Settings,
      title: 'Custom Integration',
      description: 'Seamless integration with your existing systems and platforms'
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 60%',
    'Scale operations without hiring overhead',
    'Access to latest SaaS technologies',
    '24/7 monitoring and support',
    'Improved process efficiency',
    'Focus on core business activities'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                SaaS Business Process{' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                  Outsourcing
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transform your business operations with comprehensive Software-as-a-Service solutions. 
                Streamline processes, reduce costs, and scale efficiently with our expert BPO services.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4"
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4"
                >
                  Schedule Demo
                </Button>
              </div> */}
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="SaaS BPO Solutions"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive SaaS BPO Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our SaaS BPO solutions provide everything you need to optimize your business processes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
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
                Why Choose Our SaaS BPO Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive SaaS BPO solutions deliver measurable results that transform your business operations.
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
                alt="Business Process Optimization"
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600">
              Get in touch with our SaaS BPO experts for a customized solution
            </p>
          </div>

      <InquiryForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}