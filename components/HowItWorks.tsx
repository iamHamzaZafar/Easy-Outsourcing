"use client";

import { 
  User, 
  ArrowRight, 
  FileText, 
  Settings, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Gift,
  Bot,
  Database,
  Truck,
  Headphones
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HowItWorks() {
  const services = [
    {
      icon: Settings,
      title: 'SaaS BPO',
      description: 'Comprehensive Software-as-a-Service business process outsourcing solutions tailored to your needs.',
      badge: 'Cloud-Based',
    },
    {
      icon: User,
      title: 'Admin Support',
      description: 'Professional administrative support to handle your daily operations and free up your valuable time.',
      badge: 'Efficient',
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      description: 'Dedicated customer service representatives providing exceptional support across all channels.',
      badge: '24/7 Available',
    },
    {
      icon: MessageSquare,
      title: 'Email, Chat & Call Support',
      description: 'Omnichannel communication support ensuring seamless customer interactions across all platforms.',
      badge: 'Multi-Channel',
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Intelligent automation solutions and AI-powered chatbots to streamline your business processes.',
      badge: 'AI-Powered',
    },
    {
      icon: Database,
      title: 'Data Entry',
      description: 'Accurate and efficient data entry services with 99.95% accuracy rates and quick turnaround times.',
      badge: 'High Accuracy',
    },
    {
      icon: Truck,
      title: 'Dispatch',
      description: 'Professional dispatching services optimizing routes, reducing costs, and improving delivery times.',
      badge: 'Logistics',
    },
    {
      icon: Bot,
      title: 'ChatBots',
      description: 'Custom AI-powered chatbots to enhance customer engagement and streamline your business operations.',
      badge: 'Risk-Free',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive outsourcing solutions designed to streamline your operations and accelerate business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg flex items-center justify-center group-hover:from-blue-500 group-hover:to-teal-500 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}