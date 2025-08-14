"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const events = [
  { name: "AI in Education", date: "Aug 28", place: "UoN Towers" },
  { name: "DevOps Career Night", date: "Sep 4", place: "iHub Nairobi" },
]

export function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {events.map((e, i) => (
          <motion.div
            key={e.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-lg border p-3"
          >
            <div className="font-medium">{e.name}</div>
            <div className="text-sm text-muted-foreground">{e.date} · {e.place}</div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}
