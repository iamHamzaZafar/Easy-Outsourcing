"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  MessageSquare,
  Phone,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import InquiryForm from "@/components/InquiryForm";

export default function EmailChatCallPage() {
  const channels = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Professional email management with quick response times",
      features: [
        "24/7 email monitoring",
        "Template responses",
        "Priority handling",
        "Follow-up tracking",
      ],
    },
    {
      icon: MessageSquare,
      title: "Live Chat Support",
      description: "Real-time chat support for instant customer assistance",
      features: [
        "Instant responses",
        "Multi-chat handling",
        "Chat transcripts",
        "Proactive engagement",
      ],
    },
    {
      icon: Phone,
      title: "Call Support",
      description: "Professional phone support with trained representatives",
      features: [
        "Inbound/outbound calls",
        "Call recording",
        "Escalation protocols",
        "Multi-language support",
      ],
    },
  ];

  const benefits = [
    "Unified communication across all channels",
    "Faster response times and resolution",
    "Improved customer satisfaction scores",
    "Seamless handoffs between channels",
    "Comprehensive reporting and analytics",
    "Cost-effective omnichannel solution",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Omnichannel{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                  Communication
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Seamlessly connect with your customers across email, chat, and
                phone. Our integrated approach ensures consistent, high-quality
                support on every channel.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Omnichannel Communication"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Communication Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support across all communication channels
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {channel.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{channel.description}</p>
                  <ul className="space-y-2">
                    {channel.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results Across All Channels
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50M+</div>
              <div className="text-white/80">Messages Handled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">8M+</div>
              <div className="text-white/80">Calls Answered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-white/80">Customer Satisfaction</div>
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
                Why Choose Omnichannel Support?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Provide consistent, high-quality customer experiences across all
                communication channels with our integrated support solution.
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
                alt="Communication Excellence"
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
              Ready to Unify Your Communications?
            </h2>
            <p className="text-xl text-gray-600">
              Get started with our omnichannel communication solution
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
