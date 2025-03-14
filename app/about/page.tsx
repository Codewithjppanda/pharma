"use client"

import Image from "next/image"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { motion } from "framer-motion"
import { Users, Award, Heart, Clock } from "lucide-react"

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Happy Dental</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Providing exceptional dental care with a focus on patient comfort and satisfaction since 2010.
          </p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image
                src="/images/pic1.jpg"
                alt="Our Dental Clinic"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Happy Dental, we are committed to providing exceptional dental care in a comfortable and welcoming environment. Our team of experienced professionals strives to make every visit a positive experience, ensuring that our patients receive the highest quality care while feeling at ease.
              </p>
              <p className="text-gray-600">
                We believe in building lasting relationships with our patients and their families, offering personalized care that meets their unique needs. Our state-of-the-art facility and advanced treatment options allow us to deliver comprehensive dental services with precision and care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          <BentoGrid className="px-4">
            <BentoGridItem
              title="Patient-Centered Care"
              description="We prioritize our patients' comfort and well-being, ensuring a personalized experience for everyone who walks through our doors."
              header={<div className="flex w-full h-60 rounded-xl overflow-hidden">
                <Image
                  src="/images/pic 2.jpg"
                  alt="Patient Care"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>}
            />
            <BentoGridItem
              title="Expert Team"
              description="Our experienced dental professionals are dedicated to providing the highest quality care using the latest techniques and technology."
              header={<div className="flex w-full h-60 rounded-xl overflow-hidden">
                <Image
                  src="/images/pic 3.jpg"
                  alt="Expert Team"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>}
            />
            <BentoGridItem
              title="Quality Service"
              description="We maintain the highest standards of dental care, using state-of-the-art equipment and following best practices in the industry."
              header={<div className="flex w-full h-60 rounded-xl overflow-hidden">
                <Image
                  src="/images/pic 4.jpg"
                  alt="Quality Service"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>}
            />
          </BentoGrid>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[300px] rounded-xl overflow-hidden"
            >
              <Image
                src="/images/pic1.jpg"
                alt="Our Modern Clinic"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative h-[300px] rounded-xl overflow-hidden"
            >
              <Image
                src="/images/pic 4.jpg"
                alt="State-of-the-art Equipment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-6 bg-white rounded-xl shadow-md"
            >
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-600">Our dental professionals have years of experience in providing quality care.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-md"
            >
              <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Quality Care</h3>
              <p className="text-gray-600">We use the latest technology and techniques to ensure the best results.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6 bg-white rounded-xl shadow-md"
            >
              <Heart className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Patient Comfort</h3>
              <p className="text-gray-600">Your comfort and satisfaction are our top priorities.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6 bg-white rounded-xl shadow-md"
            >
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Convenient Hours</h3>
              <p className="text-gray-600">We offer flexible scheduling to accommodate your busy lifestyle.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative h-[300px]">
                <Image
                  src="/images/pic 3.jpg"
                  alt="Our Dental Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Our Expert Team</h3>
                <p className="text-gray-600">
                  Our team of experienced dental professionals is dedicated to providing you with the highest quality care in a comfortable and friendly environment.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative h-[300px]">
                <Image
                  src="/images/pic 2.jpg"
                  alt="Patient Care"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Patient-Centered Approach</h3>
                <p className="text-gray-600">
                  We believe in building lasting relationships with our patients, providing personalized care that meets your unique dental needs and ensures your comfort.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

