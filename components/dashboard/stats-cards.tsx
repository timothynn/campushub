"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Users } from "lucide-react";

const stats = [
  { title: "Applied Jobs", value: 12, icon: Briefcase },
  { title: "Upcoming Events", value: 3, icon: Calendar },
  { title: "New Connections", value: 7, icon: Users },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          className="p-6 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 shadow-lg flex items-center space-x-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <stat.icon className="w-10 h-10" />
          <div>
            <p className="text-lg font-semibold">{stat.value}</p>
            <p className="text-sm opacity-80">{stat.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
