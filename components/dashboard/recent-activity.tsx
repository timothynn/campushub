"use client";
import { motion } from "framer-motion";

const mockActivity = [
  { id: 1, text: "You applied to Frontend Developer at Google", time: "2h ago" },
  { id: 2, text: "Your post got 5 new likes", time: "5h ago" },
  { id: 3, text: "You joined the Tech Innovators group", time: "1d ago" },
  { id: 4, text: "New event: AI Summit 2025", time: "3d ago" },
];

export default function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl p-4 shadow-lg h-full"
    >
      <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
      <div className="space-y-3 overflow-y-auto max-h-[500px] pr-2">
        {mockActivity.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            className="p-3 rounded-lg bg-muted"
          >
            <p className="text-sm">{item.text}</p>
            <span className="text-xs text-muted-foreground">{item.time}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
