"use client"

import Link from "next/link"
import { SmileIcon as Tooth, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import ColourfulText from "@/components/ui/colourful-text"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16">
        <motion.img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop"
          alt="Modern dental clinic interior"
          className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Perfect <ColourfulText text="Smile" /> <br />
            Starts Here
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience world-class dental care with our team of experts
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Book Appointment <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
          >
            Our <span className="text-blue-600">Dental Services</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 p-4 sm:p-6 rounded-xl"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Tooth className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">General Dentistry</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Comprehensive dental care including check-ups, cleanings, and fillings to maintain your oral health.
              </p>
              <Link href="/about" className="text-blue-600 font-medium flex items-center text-sm sm:text-base">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-blue-50 p-4 sm:p-6 rounded-xl"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Tooth className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Orthodontics</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Braces and aligners to straighten teeth and correct bite issues for a beautiful smile.
              </p>
              <Link href="/about" className="text-blue-600 font-medium flex items-center text-sm sm:text-base">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-blue-50 p-4 sm:p-6 rounded-xl"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Tooth className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Cosmetic Dentistry</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Enhance your smile with teeth whitening, veneers, and other cosmetic procedures.
              </p>
              <Link href="/about" className="text-blue-600 font-medium flex items-center text-sm sm:text-base">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-12 sm:py-16 bg-blue-800 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Schedule Your Visit?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Our team of experienced dentists is ready to provide you with the best dental care.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-800 hover:bg-blue-50 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium inline-block text-sm sm:text-base"
          >
            Book an Appointment
          </Link>
        </div>
      </motion.section>
    </main>
  )
}

