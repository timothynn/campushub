"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BookmarkIcon } from "@radix-ui/react-icons";

type SplitViewItem = {
  id: string;
  title: string;
  orgLabel: string;       // e.g. company / organizer
  orgName: string;        // value for above label
  location: string;
  category: string;       // e.g. level / type
  date: string;           // ISO date
  secondaryText?: string; // e.g. salary / fee
  description: string;
  listTitle: string;      // e.g. Requirements / Agenda
  listItems: string[];
  status?: boolean;       // applied / registered
};

type SplitViewProps = {
  title: string; // "Jobs" / "Events"
  searchPlaceholder: string;
  statusLabels: { active: string; inactive: string };
  actionLabels: { primary: string; saved: string };
  filter1Name: string;
  filter1Options: string[];
  filter2Name: string;
  filter2Options: string[];
  items: SplitViewItem[];
};

export default function SplitView({
  title,
  searchPlaceholder,
  statusLabels,
  actionLabels,
  filter1Name,
  filter1Options,
  filter2Name,
  filter2Options,
  items,
}: SplitViewProps) {
  const [q, setQ] = React.useState("");
  const [filter1, setFilter1] = React.useState<string>("All");
  const [filter2, setFilter2] = React.useState<string>("All");
  const [selected, setSelected] = React.useState<SplitViewItem | null>(
    items[0] || null
  );

  const filtered = React.useMemo(() => {
    return items.filter((it) => {
      const matchesText =
        it.title.toLowerCase().includes(q.toLowerCase()) ||
        it.orgName.toLowerCase().includes(q.toLowerCase());
      const matchesF1 = filter1 === "All" || it.category === filter1;
      const matchesF2 = filter2 === "All" || it.location === filter2;
      return matchesText && matchesF1 && matchesF2;
    });
  }, [q, filter1, filter2, items]);

  React.useEffect(() => {
    if (!selected || !filtered.find((it) => it.id === selected.id)) {
      setSelected(filtered[0] ?? null);
    }
  }, [filtered]);

  const onPrimary = () => {
    if (!selected) return;
    selected.status = true;
    setSelected({ ...selected });
    console.log(`${actionLabels.primary} →`, selected.id);
  };

  const onSave = () => {
    if (!selected) return;
    console.log(`${actionLabels.saved} →`, selected.id);
  };

  return (
    <div>
      {/* Top Filters */}
      <div className="w-full px-4 lg:px-6 mb-4">
        <div className="w-full rounded-md border p-4 bg-card">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <Input
              placeholder={searchPlaceholder}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full sm:max-w-[640px]"
            />

            <div className="flex gap-2 w-full sm:w-auto">
              <Select value={filter1} onValueChange={setFilter1}>
                <SelectTrigger className="w-full sm:w-[160px]">
                  <SelectValue placeholder={filter1Name} />
                </SelectTrigger>
                <SelectContent>
                  {filter1Options.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filter2} onValueChange={setFilter2}>
                <SelectTrigger className="w-full sm:w-[160px]">
                  <SelectValue placeholder={filter2Name} />
                </SelectTrigger>
                <SelectContent>
                  {filter2Options.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 lg:p-6">
        {/* LEFT: list */}
        <div className="lg:col-span-5 xl:col-span-4">
          <h2 className="text-lg font-semibold mb-2">{title} Listings</h2>
          <ScrollArea className="h-[calc(100vh-14rem)] lg:h-[calc(100vh-12rem)] rounded-md border">
            <div className="p-3 space-y-3">
              {filtered.map((it) => (
                <div
                  key={it.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelected(it)}
                  className={[
                    "rounded-xl border p-4 cursor-pointer transition",
                    "hover:shadow-md",
                    selected?.id === it.id
                      ? "border-primary ring-2 ring-primary/20 bg-accent/50"
                      : "border-border bg-card",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {it.orgName}
                      </div>
                      <div className="font-semibold">{it.title}</div>
                    </div>
                    <Badge
                      variant={it.status ? "secondary" : "outline"}
                    >
                      {it.status
                        ? statusLabels.active
                        : it.category}
                    </Badge>
                  </div>

                  <div className="mt-2 text-sm text-muted-foreground">
                    {it.location} •{" "}
                    {new Date(it.date).toLocaleDateString()}
                  </div>

                  {it.secondaryText && (
                    <div className="mt-2 text-xs text-muted-foreground">
                      {it.secondaryText}
                    </div>
                  )}
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="text-sm text-muted-foreground p-6 text-center">
                  No {title.toLowerCase()} match your filters.
                </div>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* RIGHT: details (desktop) */}
        <div className="hidden lg:block lg:col-span-7 xl:col-span-8 mt-5">
          {selected && (
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ x: 12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -12, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Card className="shadow-sm">
                  <CardHeader className="p-4 pb-2">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{selected.title}</CardTitle>
                        <div className="text-sm text-muted-foreground">
                          {selected.orgName}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {selected.location} •{" "}
                          {new Date(selected.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant={selected.status ? "ghost" : "default"}
                          onClick={onPrimary}
                          disabled={selected.status}
                        >
                          {selected.status
                            ? statusLabels.active
                            : actionLabels.primary}
                        </Button>

                        <Button variant="outline" onClick={onSave}>
                          <BookmarkIcon className="mr-2 h-4 w-4" /> Save
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-4 pt-2">
                    <div className="mb-4">
                      <div className="font-semibold mb-2">About</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {selected.description}
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">
                        {selected.listTitle}
                      </div>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        {selected.listItems.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* MOBILE: sheet */}
        <div className="lg:hidden">
          {selected && (
            <Sheet>
              <SheetTrigger asChild>
                <Button className="w-full">Open selected {title}</Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[85vh] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>{title} details</SheetTitle>
                </SheetHeader>
                <div className="mt-4">
                  <Card>
                    <CardContent className="p-4">
                      <h2 className="text-xl">{selected.title}</h2>
                      <p className="text-sm text-muted-foreground">{selected.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </div>
  );
}
