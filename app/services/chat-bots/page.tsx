"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bot, Brain, Workflow,CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import InquiryForm from '@/components/InquiryForm';

export default function ChatbotSolutionsPage() {


  const solutions = [
    {
      icon: Bot,
      title: 'Conversational Chatbots',
      description: 'AI-powered chatbots that simulate natural, human-like conversations across platforms.',
      features: [
        'Context-aware conversations',
        '24/7 availability',
        'Multilingual support',
        'Smooth agent handoff'
      ]
    },
    {
      icon: Workflow,
      title: 'Customer Journey Automation',
      description: 'Automate lead qualification, onboarding, and customer service workflows via chat.',
      features: [
        'Lead capture through chat',
        'Automated follow-ups',
        'CRM & API integrations',
        'Personalized onboarding'
      ]
    },
    {
      icon: Brain,
      title: 'AI Learning & Analytics',
      description: 'Continuously improve chatbot performance with machine learning and customer insights.',
      features: [
        'Intent recognition',
        'User behavior analysis',
        'AI training feedback loops',
        'Performance reporting'
      ]
    }
  ];

  const benefits = [
    'Handle 10x more customer queries with automation',
    'Reduce support costs by over 60%',
    'Instant replies with 24/7 AI availability',
    'Boost customer satisfaction with faster resolution',
    'Scale effortlessly without hiring more agents',
    'Personalize interactions using smart AI memory'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Smart AI{' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                  Chatbot Solutions
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Engage your users with AI chat assistants that deliver fast, consistent, and human-like responses — all day, every day.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4"
                >
                  Try Live Chat Demo
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4"
                >
                  How It Works
                </Button>
              </div> */}
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                alt="AI Chatbot Demo"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Chatbot Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From onboarding to support — let AI assistants handle your customer conversations with ease.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Chatbot Performance Metrics
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1.2M+</div>
              <div className="text-white/80">Conversations Handled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">65%</div>
              <div className="text-white/80">Support Cost Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Instant Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">97%</div>
              <div className="text-white/80">Intent Detection Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Chatbots for Business?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                AI chatbots allow you to deliver consistent and scalable customer support, reduce overhead, and improve satisfaction — all through automated conversations.
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
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Conversational AI"
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
              Talk to an AI Chatbot Expert
            </h2>
            <p className="text-xl text-gray-600">
              Let us help you craft a custom chatbot strategy tailored to your business.
            </p>
          </div>

         <InquiryForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
