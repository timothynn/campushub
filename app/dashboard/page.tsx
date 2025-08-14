"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const jobs = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: ["Data Engineering Intern", "Ops Analyst", "Junior Backend Dev", "FinOps Associate"][i % 4],
  company: ["Twiga", "Sendy", "Safaricom", "Moringa"][i % 4],
  location: ["Nairobi", "Remote", "Nakuru", "Mombasa"][i % 4],
}))

const events = [
  { id: 1, title: "AI in Education", date: "Aug 28", place: "UoN Towers" },
  { id: 2, title: "DevOps Career Night", date: "Sep 4", place: "iHub" },
  { id: 3, title: "Hackday", date: "Sep 12", place: "Online" },
]

const posts = [
  { id: 1, author: "Faith", text: "Anyone going to DevFest? DM!", time: "1h" },
  { id: 2, author: "Brian", text: "Just shipped my portfolio 🚀", time: "3h" },
  { id: 3, author: "Amina", text: "Looking for study group: DS & Algos", time: "1d" },
]

const activity = [
  "Applied: Data Eng Intern @ Twiga",
  "Messaged recruiter @ Sendy",
  "RSVP’d DevOps Career Night",
  "Updated profile summary",
]

export default function DashboardHome() {
  return (
    <div className="grid gap-6">
      {/* Jobs horizontal row */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2"
      >
        {jobs.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.03 * i }}
            className="min-w-[260px]"
          >
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{job.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <div>{job.company}</div>
                <div>{job.location}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Below: left (events+posts) & right (activity+profile) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader><CardTitle>Events</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {events.map((e) => (
                <div key={e.id} className="rounded-lg border p-3 hover:bg-accent transition">
                  <div className="font-medium">{e.title}</div>
                  <div className="text-xs text-muted-foreground">{e.date} · {e.place}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Posts</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {posts.map((p) => (
                <div key={p.id} className="rounded-lg border p-3">
                  <div className="text-sm"><span className="font-medium">{p.author}</span>: {p.text}</div>
                  <div className="text-xs text-muted-foreground">{p.time} ago</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <Card>
            <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {activity.map((a, i) => (
                <div key={i} className="text-sm border-b pb-2 last:border-0">{a}</div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>User Profile</CardTitle></CardHeader>
            <CardContent className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-muted" />
              <div className="font-medium">Tim</div>
              <div className="text-sm text-muted-foreground">Data Science · UoN</div>
              <button className="text-sm rounded-md border px-3 py-1 hover:bg-accent">Edit Profile</button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
