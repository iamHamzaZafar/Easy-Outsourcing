"use client";

import { useState, useEffect } from "react";
import { Menu, X, Settings, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { href: "/services/saas-bpo", label: "SaaS Business Process Outsourcing" },
    { href: "/services/admin-support", label: "Admin Support" },
    { href: "/services/customer-support", label: "Customer Support" },
    { href: "/services/email-chat-call", label: "Email, Chat & Call Support" },
    { href: "/services/ai-automation", label: "AI Automation & Chatbots" },
    { href: "/services/data-entry", label: "Data Entry" },
    { href: "/services/truck-dispatching", label: "Truck Dispatching" },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("/#")) {
      if (pathname !== "/") {
        window.location.href = href;
        return;
      }
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Easy Outsourcing Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    isScrolled
                      ? "text-gray-700"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    isScrolled
                      ? "text-gray-700"
                      : "text-white/90 hover:text-white"
                  } ${pathname === link.href ? "text-blue-600" : ""}`}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`font-medium transition-colors hover:text-blue-600 flex items-center ${
                  isScrolled
                    ? "text-gray-700"
                    : "text-white/90 hover:text-white"
                } ${pathname.startsWith("/services") ? "text-blue-600" : ""}`}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
            <div className="px-4 py-2 space-y-2">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors ${
                      pathname === link.href ? "text-blue-600 bg-blue-50" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Mobile Services */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="px-3 py-2 text-sm font-semibold text-gray-500">
                  Services
                </div>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-6 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
