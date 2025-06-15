"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of SaaS Business Process Outsourcing: Trends to Watch in 2024",
      excerpt: "Discover how SaaS BPO is revolutionizing business operations with cloud-based solutions, AI integration, and scalable processes that drive efficiency and cost savings.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "SaaS BPO",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    },
    {
      id: 2,
      title: "Maximizing Efficiency with Professional Admin Support Services",
      excerpt: "Learn how outsourcing administrative tasks can free up your team's time, reduce operational costs, and improve overall business productivity.",
      author: "Michael Chen",
      date: "2024-01-10",
      readTime: "4 min read",
      category: "Admin Support",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    },
    {
      id: 3,
      title: "Revolutionizing Customer Support: The Power of Omnichannel Communication",
      excerpt: "Explore how integrating email, chat, and call support creates a seamless customer experience that drives satisfaction and loyalty.",
      author: "Emily Rodriguez",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "Customer Support",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
    },
    {
      id: 4,
      title: "AI Automation and Chatbots: Transforming Business Operations",
      excerpt: "Discover how AI-powered automation and intelligent chatbots are streamlining processes, reducing costs, and improving customer experiences.",
      author: "David Thompson",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "AI Automation",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
    },
    {
      id: 5,
      title: "Streamlining Truck Dispatching: Technology Meets Logistics Excellence",
      excerpt: "Learn how modern dispatching solutions are optimizing routes, reducing costs, and improving delivery times in the transportation industry.",
      author: "Robert Martinez",
      date: "2024-01-03",
      readTime: "8 min read",
      category: "Truck Dispatching",
      image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg"
    },
    {
      id: 6,
      title: "Data Entry Excellence: Accuracy, Speed, and Security in the Digital Age",
      excerpt: "Explore best practices for data entry services that ensure accuracy, maintain security, and deliver results that drive business success.",
      author: "Lisa Wang",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Data Entry",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
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
              Industry Insights &{' '}
              <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                Expert Knowledge
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay ahead with the latest trends, best practices, and insights in business process outsourcing
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                      <Calendar className="w-4 h-4 ml-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
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