"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Briefcase, BarChart, AlertTriangle } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AdminDashboardPage() {
  const { theme } = useTheme();

  // Animated stats
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalJobs: 0,
    activeJobs: 0,
    reports: 0,
  });

  useEffect(() => {
    const targetStats = { totalUsers: 1240, totalJobs: 320, activeJobs: 287, reports: 14 };
    const duration = 1000; // 1s
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setStats({
        totalUsers: Math.floor(progress * targetStats.totalUsers),
        totalJobs: Math.floor(progress * targetStats.totalJobs),
        activeJobs: Math.floor(progress * targetStats.activeJobs),
        reports: Math.floor(progress * targetStats.reports),
      });
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <motion.div
      className="space-y-6 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Top Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard icon={<Users />} label="Total Users" value={stats.totalUsers} />
        <StatCard icon={<Briefcase />} label="Total Jobs" value={stats.totalJobs} />
        <StatCard icon={<BarChart />} label="Active Jobs" value={stats.activeJobs} />
        <StatCard icon={<AlertTriangle />} label="Reports" value={stats.reports} />
      </div>

      {/* Management Tabs */}
      <Tabs defaultValue="users" className="w-full">
        <TabsList>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="jobs">Job Management</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="grid gap-4 md:grid-cols-3"
          >
            {[...Array(6)].map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>User {i + 1}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between">
                  <span>Student</span>
                  <Button size="sm">Manage</Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="jobs">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="grid gap-4 md:grid-cols-2"
          >
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>Job {i + 1}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between">
                  <span>Open</span>
                  <Button size="sm">Edit</Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="analytics">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-4"
          >
            <Card>
              <CardHeader>
                <CardTitle>Site Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  📊 Chart Placeholder
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card>
        <CardContent className="flex flex-col items-center p-6">
          <div className="text-primary">{icon}</div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-muted-foreground">{label}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
