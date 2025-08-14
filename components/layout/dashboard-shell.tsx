"use client"

import { SidebarProvider } from "./sidebar-context"
import Sidebar from "./sidebar"
import Navbar from "./navbar"
import { motion } from "framer-motion"

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background text-foreground">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <motion.main
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="p-6"
          >
            {children}
          </motion.main>
        </div>
      </div>
    </SidebarProvider>
  )
}
