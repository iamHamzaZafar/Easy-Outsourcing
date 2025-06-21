"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  PhoneCall
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    { href: "/services/saas-bpo", label: "SaaS Business Process Outsourcing" },
    { href: "/services/admin-support", label: "Admin Support" },
    { href: "/services/customer-support", label: "Customer Support" },
    { href: "/services/email-chat-call", label: "Email, Chat & Call Support" },
    { href: "/services/ai-automation", label: "AI Automation" },
    { href: "/services/data-entry", label: "Data Entry" },
    { href: "/services/dispatch", label: "Dispatch" },
    { href: "/services/chat-bots", label: "Chatbots" },
  ];

  const socialLinks = [
    // { icon: Facebook, href: "#", label: "Facebook" },
    // { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: PhoneCall, href: "#", label: "Whatsapp" },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Easy Outsourcing Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </Link>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transform your business operations with professional outsourcing
                services that scale with your growth and deliver exceptional
                results.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-6">Get In Touch</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">
                    hello@easyoutsourcing.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">+1 (614) 362-6055</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <p className="text-gray-300">2794 Tennyson Blvd D Columbus OH 43232</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Easy Outsourcing. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
