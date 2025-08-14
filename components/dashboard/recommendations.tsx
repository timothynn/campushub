"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const recs = [
  { role: "Data Engineering Intern", company: "Twiga", location: "Nairobi", match: 92 },
  { role: "Ops Analyst (Logistics)", company: "Sendy", location: "Remote KE", match: 88 },
  { role: "FinTech Analyst", company: "M-Pesa", location: "Nairobi", match: 85 },
]

export function Recommendations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended for you</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {recs.map((j, i) => (
          <motion.div
            key={j.role}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent"
          >
            <div>
              <div className="font-medium">{j.role}</div>
              <div className="text-sm text-muted-foreground">{j.company} · {j.location}</div>
            </div>
            <div className="text-sm font-semibold">{j.match}% match</div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}
