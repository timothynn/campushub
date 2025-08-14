"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const feed = [
  "You applied for Data Eng Intern at Twiga",
  "New message from HR (Sendy): “Let’s schedule a chat.”",
  "Event reminder: DevOps Career Night — 7 days left",
]

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {feed.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="text-sm p-3 rounded-md border hover:bg-accent"
          >
            {item}
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}
