"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQs() {
  const faqs = [
    {
      question: 'How quickly can we get started with Easy Outsourcing?',
      answer: 'We can have your outsourcing solution up and running within 24-48 hours. Our quick setup process includes platform integration, team training on your specific requirements, and initial configuration of your workflows.',
    },
    {
      question: 'What is included in the free trial?',
      answer: 'Our free trial includes full access to your chosen service for 14 days, including dedicated support, performance reporting, and consultation. No credit card required, and you can cancel anytime.',
    },
    {
      question: 'Which platforms and systems do you support?',
      answer: 'We support all major business platforms including CRM systems, help desk software, e-commerce platforms, SaaS applications, and custom implementations. We can also integrate with your existing tools and provide our own solutions if needed.',
    },
    {
      question: 'How do you customize services for our industry?',
      answer: 'We start with a comprehensive onboarding process where we learn about your business, industry-specific requirements, compliance needs, and operational procedures. Our team is then trained specifically on your processes and brand standards.',
    },
    {
      question: 'What kind of reporting do you provide?',
      answer: 'We provide detailed weekly reports including performance metrics, quality scores, productivity analysis, cost savings, and actionable insights. Custom reporting dashboards are also available for enterprise clients.',
    },
    {
      question: 'Is our business data secure?',
      answer: 'Absolutely. We maintain SOC 2 compliance, use encrypted data transmission, and follow strict data privacy protocols. All our team members sign NDAs and undergo background checks. We\'re also GDPR and HIPAA compliant when required.',
    },
    {
      question: 'Can we be involved in selecting our dedicated team?',
      answer: 'Yes! For clients who want dedicated resources, we involve you in the selection process. You can review candidate profiles, participate in interviews, and have final approval on team members who will work on your account.',
    },
    {
      question: 'What are your pricing options?',
      answer: 'We offer flexible pricing based on service type, volume, hours of coverage, and level of customization needed. Plans start at $997/month for basic services and scale based on your specific requirements. Contact us for a custom quote.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our outsourcing services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}