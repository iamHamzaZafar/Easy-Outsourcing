"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Clock, Heart, CheckCircle, Star, Globe, Shield, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AboutPage() {
  const stats = [
    { icon: Users, value: '300+', label: 'Satisfied Clients' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Award, value: '99.5%', label: 'Client Satisfaction' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'State-of-the-art IT infrastructure with enterprise-grade security'
    },
    {
      icon: Star,
      title: 'Quality First',
      description: 'We prefer quality over quantity while maintaining competitive pricing'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals trained specifically for your business needs'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide across diverse industry verticals'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                Easy Outsourcing
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your ultimate solution for all outsourcing needs, delivering exceptional service standards 
              that make us the first choice of our clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="who-we-are" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12 h-auto">
              <TabsTrigger 
                value="who-we-are" 
                className="text-sm md:text-base py-4 px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Who We Are
              </TabsTrigger>
              <TabsTrigger 
                value="online-agents" 
                className="text-sm md:text-base py-4 px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                24/7 Online Sales Agents
              </TabsTrigger>
              <TabsTrigger 
                value="customer-relationships" 
                className="text-sm md:text-base py-4 px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Create Quality Customer Relationships
              </TabsTrigger>
            </TabsList>

            <TabsContent value="who-we-are" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Who We Are
                  </h2>
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      Easy Outsourcing is a results-driven BPO company offering tailored outsourcing solutions for global clients. Our services include inbound and outbound customer support, live chat, email handling, virtual assistant services, and back-office operations.
                    </p>
                    <p className="text-lg">
                      We also specialize in truck dispatch, freight coordination, medical billing, claims processing, data entry, telemarketing, and lead generation. With a focus on quality, efficiency, and customer satisfaction, Easy Outsourcing helps businesses scale faster with reliable and cost-effective support.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                    alt="Our Team"
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg" />
                </div>
              </div>

              {/* Features Grid */}
              <div className="mt-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="online-agents" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                    alt="Online Sales Agents"
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent rounded-lg" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    24/7 Online Sales Agents
                  </h2>
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg font-semibold text-blue-600">
                      Would you open a store and have no sales people? The answer is no.
                    </p>
                    <p className="text-lg">
                      So, why would you have a website with no online sales people? Our online sales agents 
                      are trained for your service and qualify every visitor to your site as a potential lead. 
                      Best of all this is live & in real-time.
                    </p>
                    <p className="text-lg">
                      You will qualify more leads by using our live online chat agents guaranteed. Easy Outsourcing 
                      is an ultimate solution for all of your outsourcing needs. We provide customer service as well 
                      as sales support, serving many clients around the globe.
                    </p>
                    <p className="text-lg">
                      In a nutshell, Easy Outsourcing is an ultimate BPO which will increase your revenue and 
                      rate of customer satisfaction.
                    </p>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Live & real-time engagement</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Trained for your specific service</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Qualify every visitor as potential lead</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Increase revenue and customer satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="customer-relationships" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Create Quality Customer Relationships
                  </h2>
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      Providing human interaction in a conventionally impersonal medium gives a distinct edge. 
                      With Easy Outsourcing, our agents are able to see what each potential client is viewing 
                      along with their path through your site, all in real-time.
                    </p>
                    <p className="text-lg">
                      Online customer service agents can greet clients and offer support as they would if they 
                      were in a physical store, allowing the client to have a unique and customized shopping 
                      experience while visiting your site.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <p className="text-lg font-semibold text-blue-800">
                        It's a proven fact that clients are 3 times as likely to make a purchase, and will 
                        purchase 40% more if they have chatted with a live sales representative.
                      </p>
                    </div>
                    <p className="text-lg">
                      It is our belief that every satisfied customer adds fairness to your brand and revenues 
                      accumulate only by creating as many such satisfied customers. We offer customer driven 
                      protected web interface with always on operator support adding value to your web enterprises 
                      across diverse industry verticals.
                    </p>
                    <p className="text-lg">
                      Our professional chat agents provide you services across all time zones over our secure 
                      web interface which can be retrieved anytime anywhere. What you get is faster and real 
                      time resolution of customer queries: motivating them to probe deeper into your offering.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                    alt="Customer Relationships"
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-lg" />
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Key Benefits of Our Approach
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">3x</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Higher Purchase Rate
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Clients are 3 times more likely to make a purchase after chatting with our agents
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">40%</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Increased Purchase Value
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Customers purchase 40% more when they interact with live representatives
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Real-Time Support
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Instant resolution of customer queries across all time zones
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of satisfied clients who have revolutionized their operations with Easy Outsourcing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4"
            >
              Get Started Today
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}