"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Analytics</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {["Applications", "Views", "Responses"].map((t, i) => (
          <Card key={i}>
            <CardHeader><CardTitle>{t}</CardTitle></CardHeader>
            <CardContent className="text-3xl font-bold">{[12, 340, 6][i]}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
