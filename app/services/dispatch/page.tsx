"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Route,
  MapPin,
  BarChart3,
  CheckCircle,
  Send,
  Truck,
  Wrench,
  Car,
  Tv,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { dropdown } from "@/app/constants/dropdown";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function TruckDispatchingPage() {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-orange-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Reliable Dispatch Services for All Industries
              </h1>
              <p className="text-xl text-white/90">
                From trucking and HVAC to limos and home services — we keep your operations fast, professional, and organized.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg"
                alt="Dispatch Services"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We Dispatch for Every Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized solutions for trucking, HVAC, black limo, and home service businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Trucking */}
            <Card className="hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Truck className="w-6 h-6 text-orange-600 mr-2" />
                  <h3 className="font-semibold text-lg">Truck Dispatch</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Dry Vans, Reefers, Flatbeds, Step Decks</li>
                  <li>Box Trucks, Hotshots, Power-Only, Car Haulers</li>
                  <li>Load booking, credit checks, ELD compliance</li>
                  <li>24/7 tracking and updates</li>
                </ul>
              </CardContent>
            </Card>

            {/* HVAC */}
            <Card className="hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Wrench className="w-6 h-6 text-orange-600 mr-2" />
                  <h3 className="font-semibold text-lg">HVAC Dispatch</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Job scheduling and routing</li>
                  <li>Emergency call handling</li>
                  <li>CRM and platform sync</li>
                  <li>ServiceTitan, Jobber, Housecall Pro</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limo */}
            <Card className="hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Car className="w-6 h-6 text-orange-600 mr-2" />
                  <h3 className="font-semibold text-lg">Black Limo Dispatch</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Booking + flight monitoring</li>
                  <li>Real-time ETAs + customer comms</li>
                  <li>LimoAnywhere support</li>
                  <li>Day & night coverage</li>
                </ul>
              </CardContent>
            </Card>

            {/* Home Services */}
            <Card className="hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Tv className="w-6 h-6 text-orange-600 mr-2" />
                  <h3 className="font-semibold text-lg">Home Services</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Appointment booking & tracking</li>
                  <li>Area & slot management</li>
                  <li>Access coordination</li>
                  <li>Client feedback collection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools and Software */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">We Work With The Best Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-leading software to keep your business running smooth and smart.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
            <ul className="space-y-2">
              <li><strong>TMS:</strong> DAT TMS, Ascend, Truckstop TMS</li>
              <li><strong>Dispatch:</strong> Onfleet, Samsara, DispatchTrack</li>
              <li><strong>Load Boards:</strong> DAT, Uber Freight, Amazon Relay</li>
            </ul>
            <ul className="space-y-2">
              <li><strong>CRM:</strong> HubSpot, Salesforce, Zoho</li>
              <li><strong>Scheduling:</strong> Google Calendar, ZenMaid, Asana</li>
              <li><strong>Admin:</strong> Microsoft Excel, Google Sheets</li>
            </ul>
            <ul className="space-y-2">
              <li><strong>Communication:</strong> RingCentral, WhatsApp, Google Voice</li>
              <li><strong>Booking Platforms:</strong> LimoAnywhere, Housecall Pro</li>
              <li><strong>Other:</strong> 123Loadboard, Convoy, JB Hunt</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Let’s Work Together
            </h2>
            <p className="text-xl text-gray-600">
              Reach out today and let’s get your operations running better than ever.
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your inquiry has been submitted. Our dispatch specialist will contact you shortly.
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
                    <Label htmlFor="service">Service Interested In *</Label>
                    <Select onValueChange={handleSelectChange} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {dropdown.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Automation Requirements *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="mt-1"
                      placeholder="Describe your AI automation and chatbot needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3"
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
