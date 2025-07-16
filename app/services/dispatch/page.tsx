"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {

  Truck,
  Wrench,
  Car,
  Tv,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import InquiryForm from "@/components/InquiryForm";

export default function TruckDispatchingPage() {

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

        <InquiryForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
