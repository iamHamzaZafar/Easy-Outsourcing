"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Database, FileText, Shield, Clock, Target, BarChart3, CheckCircle, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function DataEntryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Accurate and efficient processing of large datasets',
      features: ['High-volume processing', 'Quality assurance', 'Data validation', 'Format conversion']
    },
    {
      icon: FileText,
      title: 'Document Digitization',
      description: 'Convert physical documents to digital formats',
      features: ['OCR technology', 'Document scanning', 'Data extraction', 'Digital archiving']
    },
    {
      icon: Target,
      title: 'Data Verification',
      description: 'Comprehensive data accuracy and validation services',
      features: ['Double verification', 'Error detection', 'Data cleansing', 'Quality reports']
    }
  ];

  const benefits = [
    '99.95% accuracy guarantee',
    'Fast turnaround times',
    'Secure data handling protocols',
    'Scalable processing capacity',
    'Cost-effective solutions',
    'Dedicated quality assurance team'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-emerald-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Accurate{' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                  Data Entry
                </span>{' '}
                Services
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Professional data entry services with 99.95% accuracy rates. 
                Fast, secure, and reliable data processing for businesses of all sizes.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4"
                >
                  Start Project
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4"
                >
                  View Samples
                </Button>
              </div> */}
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
                alt="Data Entry Services"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Data Entry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional data entry services tailored to your specific requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
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

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quality You Can Trust
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.95%</div>
              <div className="text-white/80">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24hrs</div>
              <div className="text-white/80">Average Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10M+</div>
              <div className="text-white/80">Records Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Data Security</div>
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
                Why Choose Our Data Entry Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our data entry services combine accuracy, speed, and security to deliver 
                exceptional results that help your business operate more efficiently.
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
                alt="Data Processing Excellence"
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
              Ready to Streamline Your Data?
            </h2>
            <p className="text-xl text-gray-600">
              Get a quote for your data entry project today
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    Your inquiry has been submitted. Our data entry specialist will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Data Entry Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="mt-1"
                      placeholder="Describe your data entry requirements, volume, format, and timeline..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3"
                  >
                    Submit Inquiry
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}