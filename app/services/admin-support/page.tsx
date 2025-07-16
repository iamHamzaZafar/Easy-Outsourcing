"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  User,
  Calendar,
  FileText,
  Mail,
  Phone,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import InquiryForm from "@/components/InquiryForm";

export default function AdminSupportPage() {


  const services = [
    {
      icon: Calendar,
      title: "Calendar Management",
      description: "Professional scheduling and appointment coordination",
    },
    {
      icon: Mail,
      title: "Email Management",
      description: "Inbox organization, filtering, and response management",
    },
    {
      icon: FileText,
      title: "Document Processing",
      description: "Document creation, editing, and organization services",
    },
    {
      icon: Phone,
      title: "Call Handling",
      description: "Professional phone answering and message taking",
    },
    {
      icon: User,
      title: "Virtual Assistant",
      description:
        "Dedicated virtual assistants for daily administrative tasks",
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Task prioritization and deadline management",
    },
  ];


  const benefits = [
    "Save 20+ hours per week on administrative tasks",
    "Professional handling of all communications",
    "Improved organization and efficiency",
    "Cost-effective alternative to full-time staff",
    "Flexible support based on your needs",
    "Experienced administrative professionals",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Professional{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                  Admin Support
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Free up your valuable time with our comprehensive administrative
                support services. From calendar management to document
                processing, we handle it all.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4"
                >
                  Get Started
                </Button>
              </div> */}
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Admin Support Services"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Administrative Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our admin support services cover all aspects of business
              administration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
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
                Focus on What Matters Most
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let our experienced administrative professionals handle the
                details while you focus on growing your business.
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
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
                alt="Administrative Excellence"
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
              Ready to Streamline Your Operations?
            </h2>
            <p className="text-xl text-gray-600">
              Contact us to discuss your administrative support needs
            </p>
          </div>

        <InquiryForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
