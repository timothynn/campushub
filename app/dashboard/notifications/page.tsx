"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function NotificationsPage() {
  const items = ["Interview invite tomorrow 10:00", "Event starts in 2 hours", "Profile 80% complete"]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Notifications</h1>
      <Card>
        <CardHeader><CardTitle>Recent</CardTitle></CardHeader>
        <CardContent className="space-y-2 text-sm">
          {items.map((n, i) => <div key={i} className="border-b pb-2 last:border-0">{n}</div>)}
        </CardContent>
      </Card>
    </div>
  )
}
