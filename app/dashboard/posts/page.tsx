"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const posts = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  author: ["Faith", "Brian", "Amina"][i % 3],
  text: ["Looking for DS study buddy", "Shipped my app!", "Intern tips thread"][i % 3],
  time: ["2h", "5h", "1d"][i % 3],
}))

export default function PostsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Posts</h1>
      <div className="space-y-4">
        {posts.map((p) => (
          <Card key={p.id}>
            <CardHeader><CardTitle className="text-base">{p.author}</CardTitle></CardHeader>
            <CardContent className="text-sm">
              <p>{p.text}</p>
              <p className="text-xs text-muted-foreground mt-1">{p.time} ago</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
