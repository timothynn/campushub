"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const events = [
  { id: 1, title: "AI Summit", when: "Aug 28", where: "UoN Towers" },
  { id: 2, title: "DevOps Night", when: "Sep 4", where: "iHub" },
  { id: 3, title: "Hackday", when: "Sep 12", where: "Online" },
]

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Events</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {events.map((e) => (
          <Card key={e.id}>
            <CardHeader><CardTitle>{e.title}</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {e.when} · {e.where}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
