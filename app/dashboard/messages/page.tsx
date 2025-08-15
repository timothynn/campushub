"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Mock conversation list
const conversations = [
  {
    id: "1",
    name: "John Doe",
    avatar: "/avatars/john.png",
    lastMessage: "Hey, are you still available for the internship?",
    time: "2h ago",
    unread: true,
  },
  {
    id: "2",
    name: "Sarah Kim",
    avatar: "/avatars/sarah.png",
    lastMessage: "Thanks for sending the documents!",
    time: "1d ago",
    unread: false,
  },
  {
    id: "3",
    name: "Campus HUB Admin",
    avatar: "/avatars/admin.png",
    lastMessage: "Your job posting has been approved ✅",
    time: "3d ago",
    unread: false,
  },
];

// Mock messages for selected conversation
const messagesMock = [
  { id: "m1", sender: "John Doe", text: "Hey, are you still available for the internship?", time: "10:05 AM", me: false },
  { id: "m2", sender: "Me", text: "Yes, I am! Can we schedule a call?", time: "10:07 AM", me: true },
  { id: "m3", sender: "John Doe", text: "Sure! How about tomorrow at 3 PM?", time: "10:10 AM", me: false },
];

export default function MessagesPage() {
  const [selectedId, setSelectedId] = useState(conversations[0].id);
  const selectedConversation = conversations.find(c => c.id === selectedId);

  return (
    <div className="grid grid-cols-12 h-[calc(100vh-4rem)] bg-background border rounded-lg overflow-hidden">
      {/* Conversations List */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="col-span-4 border-r p-4 space-y-4 overflow-y-auto"
      >
        <h2 className="text-xl font-bold">Messages</h2>
        {conversations.map(conv => (
          <div
            key={conv.id}
            onClick={() => setSelectedId(conv.id)}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors border-b",
              conv.id === selectedId ? "bg-muted" : "hover:bg-muted/60 "
            )}
          >
            <Avatar>
              <AvatarImage src={conv.avatar} alt={conv.name} />
              <AvatarFallback>{conv.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{conv.name}</p>
              <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
            </div>
            <div className="text-xs text-muted-foreground">{conv.time}</div>
            {conv.unread && <span className="w-2 h-2 bg-primary rounded-full"></span>}
          </div>
        ))}
      </motion.div>

      {/* Chat Window */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="col-span-8 flex flex-col "
      >
        {/* Chat Header */}
        <div className="flex items-center gap-3 p-4 border-b ">
          <Avatar>
            <AvatarImage src={selectedConversation?.avatar} alt={selectedConversation?.name} />
            <AvatarFallback>{selectedConversation?.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{selectedConversation?.name}</p>
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messagesMock.map(msg => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "max-w-xs p-3 rounded-lg",
                msg.me
                  ? "ml-auto bg-primary text-primary-foreground"
                  : "bg-muted text-foreground"
              )}
            >
              <p>{msg.text}</p>
              <p className="text-xs opacity-70 mt-1">{msg.time}</p>
            </motion.div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t flex gap-2">
          <Input placeholder="Type a message..." className="flex-1" />
          <Button>Send</Button>
        </div>
      </motion.div>
    </div>
  );
}
