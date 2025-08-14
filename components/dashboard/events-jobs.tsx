"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  { id: 1, title: "Tech Career Fair", date: "Aug 20", location: "Nairobi" },
  { id: 2, title: "Hackathon 2025", date: "Aug 25", location: "Online" },
];

const jobs = [
  { id: 1, title: "Backend Developer", company: "Meta", location: "Remote" },
  { id: 2, title: "UI/UX Designer", company: "Microsoft", location: "Kenya" },
];

export default function EventsJobs() {
  const [tab, setTab] = useState("events");

  const data = tab === "events" ? events : jobs;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl p-4 shadow-lg h-full"
    >
      <div className="flex space-x-4 mb-4">
        {["events", "jobs"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-3 py-1 rounded-lg ${
              tab === t ? "bg-primary text-primary-foreground" : "bg-muted"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-3"
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition"
            >
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs">
                {"date" in item ? item.date : item.company}
              </p>
              <span className="text-xs text-muted-foreground">{item.location}</span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
