"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Bot,
  Brain,
  Workflow,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import InquiryForm from "@/components/InquiryForm";


export default function AIAutomationPage() {

  const solutions = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent chatbots that handle customer inquiries 24/7",
      features: [
        "Natural language processing",
        "Multi-language support",
        "Learning capabilities",
        "Seamless handoffs",
      ],
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Automate repetitive tasks and streamline workflows",
      features: [
        "Workflow optimization",
        "Task automation",
        "Integration APIs",
        "Custom solutions",
      ],
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced ML algorithms for predictive analytics",
      features: [
        "Predictive modeling",
        "Data analysis",
        "Pattern recognition",
        "Continuous learning",
      ],
    },
  ];

  const benefits = [
    "Reduce operational costs by up to 70%",
    "Handle 10x more customer inquiries",
    "24/7 automated customer support",
    "Improve response accuracy and consistency",
    "Free up human agents for complex tasks",
    "Scale operations without increasing headcount",
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
                AI Automation &{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                  Chatbots
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transform your business with intelligent automation and
                AI-powered chatbots. Streamline operations, reduce costs, and
                provide exceptional customer experiences.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4"
                >
                  Try AI Demo
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4"
                >
                  Learn More
                </Button>
              </div> */}
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                alt="AI Automation Solutions"
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
              Intelligent Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of AI to automate processes and enhance customer
              interactions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-white/80">Automated Interactions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">70%</div>
              <div className="text-white/80">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Accuracy Rate</div>
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
                Transform Your Business with AI
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI automation solutions help businesses scale efficiently
                while maintaining high-quality customer experiences and reducing
                operational overhead.
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
                alt="AI Technology"
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-600">
              Discover how AI automation can transform your operations
            </p>
          </div>

         <InquiryForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
