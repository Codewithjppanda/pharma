"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import emailjs from "emailjs-com"

export default function ServicesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-800 text-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Dental Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive dental care for patients of all ages with a focus on comfort and quality.
          </p>
        </div>
      </motion.section>

      {/* Main Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <BentoGrid className="px-4">
            {/* General Dentistry */}
            <BentoGridItem
              title="General Dentistry"
              description="Comprehensive dental care including check-ups, cleanings, and preventive treatments to maintain your oral health."
              header={<div className="flex w-full h-60 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                  alt="General Dentistry"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>}
            />

            {/* Cosmetic Dentistry */}
            <BentoGridItem
              title="Cosmetic Dentistry"
              description="Enhance your smile with our range of cosmetic procedures including teeth whitening, veneers, and smile makeovers."
              header={<div className="flex w-full h-60 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
                  alt="Cosmetic Dentistry"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>}
            />

            {/* Orthodontics */}
            <BentoGridItem
              title="Orthodontics"
              description="Straighten your teeth and correct bite issues with our advanced orthodontic treatments and clear aligners."
              header={<div className="flex w-full h-60 rounded-xl overflow-hidden">
                <Image
                  src="/images/orthodontics.jpg"
                  alt="Orthodontics Treatment"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>}
            />

            {/* Restorative Dentistry */}
            <BentoGridItem
              title="Restorative Dentistry"
              description="Repair damaged teeth and restore your oral function with crowns, bridges, implants, and dentures."
              header={<div className="flex w-full h-60 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
                  alt="Restorative Dentistry"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>}
            />

            {/* Pediatric Dentistry */}
            <BentoGridItem
              title="Pediatric Dentistry"
              description="Specialized dental care for children in a comfortable and friendly environment."
              header={<div className="flex w-full h-60 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop"
                  alt="Pediatric Dentistry"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>}
            />

            {/* Emergency Dental Care */}
            <BentoGridItem
              title="Emergency Dental Care"
              description="Prompt treatment for dental emergencies to relieve pain and prevent further damage."
              header={<div className="flex w-full h-60 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                  alt="Emergency Dental Care"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>}
            />
          </BentoGrid>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Comprehensive Dental Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "General Dentistry",
                services: [
                  "Comprehensive dental exams",
                  "Professional teeth cleaning",
                  "Dental fillings",
                  "Root canal therapy"
                ]
              },
              {
                title: "Cosmetic Dentistry",
                services: [
                  "Teeth whitening",
                  "Dental veneers",
                  "Dental bonding",
                  "Smile makeovers"
                ]
              },
              {
                title: "Orthodontics",
                services: [
                  "Traditional braces",
                  "Clear aligners",
                  "Retainers",
                  "Early intervention"
                ]
              },
              {
                title: "Restorative Dentistry",
                services: [
                  "Dental crowns",
                  "Dental bridges",
                  "Dental implants",
                  "Dentures"
                ]
              },
              {
                title: "Pediatric Dentistry",
                services: [
                  "Child-friendly dental exams",
                  "Preventive treatments",
                  "Dental sealants",
                  "Fluoride treatments"
                ]
              },
              {
                title: "Emergency Dental Care",
                services: [
                  "Toothache relief",
                  "Broken tooth repair",
                  "Lost filling or crown",
                  "Dental trauma"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-2 mb-6">
                  {service.services.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle2 className="text-green-500 mr-2 h-5 w-5 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Book Appointment <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-blue-50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Schedule Your Visit?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to book an appointment with our experienced dental team.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium inline-block"
          >
            Book an Appointment
          </Link>
        </div>
      </motion.section>
    </main>
  )
} 