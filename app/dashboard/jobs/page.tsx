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

// ---------- Mock Data ----------
type Level = "Internship" | "Attachment" | "Graduate" | "Entry Level";
type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  level: Level;
  posted: string; // ISO date
  salary?: string;
  description: string;
  requirements: string[];
  applied?: boolean;
};

const MOCK_JOBS: Job[] = [
  {
    id: "j1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Nairobi",
    level: "Graduate",
    posted: "2025-08-10",
    salary: "KES 150,000 — 220,000",
    description:
      "Build delightful UI components with React/Next.js and Tailwind. Ship accessible, performant features that users love.",
    requirements: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Unit testing",
    ],
    applied: true,
  },
  {
    id: "j2",
    title: "Data Analyst Intern",
    company: "DataWorks",
    location: "Mombasa",
    level: "Internship",
    posted: "2025-08-12",
    salary: "KES 60,000 — 90,000",
    description:
      "Explore datasets and create dashboards that turn raw data into clear actions for stakeholders.",
    requirements: ["SQL / Python", "Pandas", "Basic visualization"],
  },
  {
    id: "j3",
    title: "Backend Engineer",
    company: "Cloudify",
    location: "Remote",
    level: "Entry Level",
    posted: "2025-08-13",
    salary: "KES 180,000 — 260,000",
    description:
      "Design reliable APIs and services, optimize queries, and improve system observability.",
    requirements: ["Node / Go", "Postgres", "Caching & queues"],
  },
  {
    id: "j4",
    title: "IT Attachment",
    company: "KCB Bank",
    location: "Nakuru",
    level: "Attachment",
    posted: "2025-08-09",
    salary: "Stipend",
    description:
      "Rotate through infra, helpdesk and security to learn production operations at scale.",
    requirements: ["Curiosity", "Basic networking"],
  },
];

// ---------- Helpers ----------
const unique = (vals: string[]) => Array.from(new Set(vals)).sort();
const fmtDate = (iso: string) => new Date(iso).toLocaleDateString();

// ---------- Job list item (clickable div, NOT a button) ----------
function JobListItem({
  job,
  active,
  onSelect,
}: {
  job: Job;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => (e.key === "Enter" ? onSelect() : null)}
      className={[
        "rounded-xl border p-4 cursor-pointer transition",
        "hover:shadow-md",
        active
          ? "border-primary ring-2 ring-primary/20 bg-accent/50"
          : "border-border bg-card",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm text-muted-foreground">{job.company}</div>
          <div className="font-semibold">{job.title}</div>
        </div>
        <Badge variant={job.applied ? "secondary" : "outline"}>
          {job.applied ? "Applied" : job.level}
        </Badge>
      </div>

      <div className="mt-2 text-sm text-muted-foreground">
        {job.location} • Posted {fmtDate(job.posted)}
      </div>

      {job.salary && (
        <div className="mt-2 text-xs text-muted-foreground">{job.salary}</div>
      )}
    </div>
  );
}

// ---------- Job details panel ----------
function JobDetails({
  job,
  onApply,
  onSave,
}: {
  job: Job;
  onApply: () => void;
  onSave: () => void;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={job.id}
        initial={{ x: 12, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -12, opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="space-y-4"
      >
        <Card className="shadow-sm">
          <CardHeader className="p-4 pb-2">
            <div className="flex items-center justify-between gap-4">
              <div>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {job.company}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {job.location} • Posted {fmtDate(job.posted)}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={job.applied ? "ghost" : "default"}
                  onClick={onApply}
                  disabled={job.applied}
                >
                  {job.applied ? "Applied" : "Apply"}
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
                {job.description}
              </p>
            </div>

            <div>
              <div className="font-semibold mb-2">Requirements</div>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {job.requirements.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}

// ---------- Main Page ----------
export default function JobsSplitViewPage() {
  const [q, setQ] = React.useState("");
  const [level, setLevel] = React.useState<string>("All");
  const [location, setLocation] = React.useState<string>("All");
  const [selected, setSelected] = React.useState<Job | null>(MOCK_JOBS[0]);

  const levels = ["All", ...unique(MOCK_JOBS.map((j) => j.level))];
  const locations = ["All", ...unique(MOCK_JOBS.map((j) => j.location))];

  const filtered = React.useMemo(() => {
    return MOCK_JOBS.filter((j) => {
      const matchesText =
        j.title.toLowerCase().includes(q.toLowerCase()) ||
        j.company.toLowerCase().includes(q.toLowerCase());
      const matchesLevel = level === "All" || j.level === (level as Level);
      const matchesLocation = location === "All" || j.location === location;
      return matchesText && matchesLevel && matchesLocation;
    });
  }, [q, level, location]);

  // keep selected in sync when filters change
  React.useEffect(() => {
    if (!selected || !filtered.find((job) => job.id === selected.id)) {
      setSelected(filtered[0] ?? null);
    }
  }, [filtered]); // eslint-disable-line react-hooks/exhaustive-deps

  // mock actions
  const onApply = () => {
    if (!selected) return;
    // update local mock (non-persistent)
    selected.applied = true;
    // trigger re-render
    setSelected({ ...selected });
    // show console hint
    console.log("Applied to", selected.id);
  };
  const onSave = () => {
    if (!selected) return;
    console.log("Saved", selected.id);
  };

  return (
    <div className="">
        <div className="px-6">

        </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 lg:p-6">
      {/* LEFT: filters + list */}
      <div className="lg:col-span-5 xl:col-span-4">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center w-100 border-b">
          <Input
            placeholder="Search jobs by title or company"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="sm:w-[260px]"
          />

          <div className="flex gap-2 mt-2 sm:mt-0">
            <Select value={level} onValueChange={(v) => setLevel(v)}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map((lv) => (
                  <SelectItem key={lv} value={lv}>
                    {lv}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={location} onValueChange={(v) => setLocation(v)}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>
                    {loc}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-14rem)] lg:h-[calc(100vh-12rem)] rounded-md border">
          <div className="p-3 space-y-3">
            {filtered.map((job) => (
              <JobListItem
                key={job.id}
                job={job}
                active={selected?.id === job.id}
                onSelect={() => setSelected(job)}
              />
            ))}

            {filtered.length === 0 && (
              <div className="text-sm text-muted-foreground p-6 text-center">
                No jobs match your filters.
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* RIGHT: details (desktop) */}
      <div className="hidden lg:block lg:col-span-7 xl:col-span-8 mt-9">
        <div className="lg:sticky lg:top-16 mt-5">
          {selected ? (
            <JobDetails job={selected} onApply={onApply} onSave={onSave} />
          ) : (
            <Card>
              <CardContent className="p-6 text-muted-foreground">
                Select a job to see details
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* MOBILE: sheet */}
      <div className="lg:hidden">
        {selected && (
          <Sheet>
            <SheetTrigger asChild>
              <Button className="w-full">Open selected job</Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[85vh] overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Job details</SheetTitle>
              </SheetHeader>
              <div className="mt-4">
                <JobDetails job={selected} onApply={onApply} onSave={onSave} />
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </div>
    </div>
  );
}
