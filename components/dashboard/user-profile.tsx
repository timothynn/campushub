"use client";
import { motion } from "framer-motion";

export default function UserProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl p-4 shadow-lg text-center h-full"
    >
      <motion.img
        src="https://i.pravatar.cc/150?img=3"
        alt="User Avatar"
        className="w-24 h-24 rounded-full mx-auto mb-3"
        whileHover={{ scale: 1.05 }}
      />
      <h2 className="text-lg font-semibold">John Doe</h2>
      <p className="text-sm text-muted-foreground mb-4">Computer Science, Year 4</p>

      <div className="grid grid-cols-3 gap-2 text-sm">
        <div>
          <p className="font-bold">25</p>
          <span className="text-muted-foreground">Jobs</span>
        </div>
        <div>
          <p className="font-bold">12</p>
          <span className="text-muted-foreground">Events</span>
        </div>
        <div>
          <p className="font-bold">8</p>
          <span className="text-muted-foreground">Groups</span>
        </div>
      </div>
    </motion.div>
  );
}
