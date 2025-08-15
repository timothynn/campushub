"use client";

import { motion } from "framer-motion";
import { Bell, CheckCircle2, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Notification = {
  id: string;
  type: "success" | "warning" | "info";
  title: string;
  description: string;
  time: string;
  read: boolean;
};

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "success",
    title: "Job Application Approved",
    description: "Your application for 'Frontend Developer' has been accepted!",
    time: "2 hours ago",
    read: false,
  },
  {
    id: "2",
    type: "info",
    title: "New Event Near You",
    description: "Hackathon 2025 is happening next week. Register now!",
    time: "5 hours ago",
    read: true,
  },
  {
    id: "3",
    type: "warning",
    title: "Profile Incomplete",
    description: "Complete your profile to get better job recommendations.",
    time: "1 day ago",
    read: false,
  },
];

export default function NotificationsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Bell className="w-6 h-6 text-primary" />
          Notifications
        </h1>
        <Button variant="secondary" size="sm">
          Mark all as read
        </Button>
      </div>

      {/* Notification List */}
      <div className="space-y-4">
        {mockNotifications.map((notif) => (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              className={`${
                notif.read ? "bg-muted" : "bg-card"
              } shadow-sm hover:shadow-md transition-all cursor-pointer`}
            >
              <CardContent className="flex items-start gap-4 p-4">
                {/* Icon */}
                <div className="mt-1">
                  {notif.type === "success" && (
                    <CheckCircle2 className="text-green-500 w-6 h-6" />
                  )}
                  {notif.type === "warning" && (
                    <AlertTriangle className="text-yellow-500 w-6 h-6" />
                  )}
                  {notif.type === "info" && (
                    <Bell className="text-blue-500 w-6 h-6" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{notif.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {notif.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {notif.time}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
