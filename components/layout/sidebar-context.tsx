"use client"

import React from "react"

type SidebarState = {
  collapsed: boolean
  toggle: () => void
}

const SidebarCtx = React.createContext<SidebarState | null>(null)

export function useSidebar() {
  const ctx = React.useContext(SidebarCtx)
  if (!ctx) throw new Error("useSidebar must be used within <SidebarProvider>")
  return ctx
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false)
  const toggle = () => setCollapsed((c) => !c)
  return (
    <SidebarCtx.Provider value={{ collapsed, toggle }}>
      {children}
    </SidebarCtx.Provider>
  )
}
