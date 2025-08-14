"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ModeToggle } from "@/components/mode-toggle"
// import { Link } from 'next/link';

export function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      {/* Animated Logo */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center space-x-2"
      >
        {/* <Image
          src="/campus-hub-logo.png" // Place your generated logo file here in public/
          alt="Campus HUB Logo"
          width={40}
          height={40}
          className="rounded-md"
        /> */}
        <span className="text-xl font-bold">Campus HUB</span>
{/* 
        <Link href="/" className="text-xl font-bold text-primary hover:underline"> 
            Campus HUB
         </Link> */}
      </motion.div>

      {/* Theme Toggle */}
      <ModeToggle />
    </header>
  )
}
