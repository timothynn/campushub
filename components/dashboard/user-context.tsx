"use client"

import { createContext, useContext } from "react"

type User = { id: string; firstName: string; university: string; course: string }
const UserCtx = createContext<{ user: User }>({
  user: { id: "u_1", firstName: "Tim", university: "UoN", course: "Data Science" },
})

export function UserProvider({ children }: { children: React.ReactNode }) {
  // TODO: replace with Supabase/NextAuth user
  const user = { id: "u_1", firstName: "Tim", university: "UoN", course: "Data Science" }
  return <UserCtx.Provider value={{ user }}>{children}</UserCtx.Provider>
}

export const useUser = () => useContext(UserCtx)
