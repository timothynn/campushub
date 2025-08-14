"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold">Your Profile</h1>
      <Card>
        <CardHeader><CardTitle>Edit Profile</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <Input placeholder="Name" defaultValue="Tim" />
          <Input placeholder="University" defaultValue="UoN" />
          <Input placeholder="Course" defaultValue="Data Science" />
          <Button className="mt-2">Save</Button>
        </CardContent>
      </Card>
    </div>
  )
}
