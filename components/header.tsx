"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import PageTransition from "./page-transition"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const router = useRouter()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.from(logoRef.current, {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out",
      })
    })

    return () => ctx.revert()
  }, [])

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsTransitioning(true)
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      setTimeout(() => {
        router.push(href)
      }, 2500) // Wait for transition to complete
    }
  }

  return (
    <>
      {isTransitioning && <PageTransition />}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              ref={logoRef}
              onClick={handleNavigation}
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Happy Dental
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" onClick={handleNavigation} className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" onClick={handleNavigation} className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/services" onClick={handleNavigation} className="text-gray-600 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/contact" onClick={handleNavigation} className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden"
              >
                <nav className="py-4 space-y-4">
                  <Link
                    href="/"
                    onClick={handleNavigation}
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    onClick={handleNavigation}
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/services"
                    onClick={handleNavigation}
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    href="/contact"
                    onClick={handleNavigation}
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </Link>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  )
}

