"use client"

import { Header } from "@/components/Header"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="flex-1 flex flex-col items-center justify-center text-center px-4 py-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-primary">Campus HUB</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">
          The ultimate social and professional network for Kenyan university students — find jobs, internships, and connect with peers.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex space-x-4 px-6 py-6"
        >
          <Link href="/login">
            <Button variant="outline" size="lg" className="rounded-full px-6">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="lg" className="rounded-full px-6">
              Sign Up
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
          {[
            { title: "Find Jobs", desc: "Discover internships, attachments, and graduate jobs from top companies." },
            { title: "Connect", desc: "Engage with students and alumni across Kenyan universities." },
            { title: "Events", desc: "Attend career fairs, workshops, and networking events." },
            { title: "Messaging", desc: "Chat with peers, mentors, and recruiters directly." },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-xl bg-background shadow-sm"
            >
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">About Campus HUB</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We’re redefining how Kenyan university students connect, learn, and grow. Whether you're hunting for your first job or just looking to network, Campus HUB is your go-to platform.
          </p>
          <Link href="/about">
            <Button size="lg" className="rounded-full">Learn More</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Campus HUB. All rights reserved.
      </footer>
    </main>
  )
}
