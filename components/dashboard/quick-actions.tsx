"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const actions = [
  { label: "Find Jobs", variant: "default" as const },
  { label: "Join Events", variant: "secondary" as const },
  { label: "Update Profile", variant: "outline" as const },
]

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="rounded-xl border p-4 space-y-3"
    >
      <div className="font-semibold">Quick actions</div>
      <div className="grid gap-3">
        {actions.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <Button variant={a.variant} className="w-full rounded-lg">
              {a.label}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
