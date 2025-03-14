"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const ColourfulText = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  return (
    <div className={cn("relative", className)}>
      <motion.span
        className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500"
        animate={{
          backgroundPosition: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.span>
    </div>
  )
}

export default ColourfulText 