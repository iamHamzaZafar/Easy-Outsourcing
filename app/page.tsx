"use client";

import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import HowWeHelp from '@/components/HowWeHelp';
import HowItWorks from '@/components/HowItWorks';
import PerformanceBanner from '@/components/PerformanceBanner';
import Testimonials from '@/components/Testimonials';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <HowWeHelp />
      <HowItWorks />
      <PerformanceBanner />
      <Testimonials />
      <FAQs />
      <Footer />
    </div>
  );
}