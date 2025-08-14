"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navbar */}
      <header className="w-full border-none bg-background/50 backdrop-blur-lg fixed top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            {/* <Image
              src="/campus-hub-logo.png"
              alt="Campus HUB Logo"
              width={40}
              height={40}
            /> */}

            <Link href="/" className="flex items-center gap-2">

            <span className="font-bold text-xl">Campus HUB</span>
            </Link>
          </motion.div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* About Section */}
      <main className="flex-1 pt-28 container mx-auto px-6 py-6">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">About Campus HUB</h1>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground mb-6">
            Campus HUB is your ultimate platform for connecting students to
            opportunities — from internships and jobs to collaborative projects
            and networking events. We bring the university community together in
            one vibrant, interactive hub.
          </p>
        </motion.section>

        {/* Mission / Vision Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid gap-8 md:grid-cols-2 mt-12 py-6 px-6"
        >
          <div className="p-6 border rounded-xl shadow-lg bg-card">
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-muted-foreground">
              To empower students with access to resources, opportunities, and
              connections that can transform their academic and career paths.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-lg bg-card">
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-muted-foreground">
              To be the leading platform for student engagement, collaboration,
              and career growth across universities in Kenya and beyond.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t mt-12 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Campus HUB. All rights reserved.
      </footer>
    </div>
  )
}
