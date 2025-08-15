import SplitView from "@/components/SplitView";

const jobs = [
  {
    id: "j1",
    title: "Frontend Developer",
    orgLabel: "Company",
    orgName: "TechCorp",
    location: "Nairobi",
    category: "Graduate",
    date: "2025-08-10",
    secondaryText: "KES 150,000 — 220,000",
    description: "Build delightful UI components...",
    listTitle: "Requirements",
    listItems: ["React / Next.js", "TypeScript", "Tailwind CSS", "Unit testing"],
    status: true,
  },
  {
    id: "j2",
    title: "Data Analyst Intern",
    orgLabel: "Company",
    orgName: "DataWorks",
    location: "Mombasa",
    category: "Internship",
    date: "2025-08-12",
    secondaryText: "KES 60,000 — 90,000",
    description:
      "Explore datasets and create dashboards that turn raw data into clear actions for stakeholders.",
    listTitle: "Requirements",
    listItems: ["SQL / Python", "Pandas", "Basic visualization"],
    status: false,
  },
  {
    id: "j3",
    title: "Backend Engineer",
    orgLabel: "Company",
    orgName: "Cloudify",
    location: "Remote",
    category: "Entry Level",
    date: "2025-08-13",
    secondaryText: "KES 180,000 — 260,000",
    description:
      "Design reliable APIs and services, optimize queries, and improve system observability.",
    listTitle: "Requirements",
    listItems: ["Node / Go", "Postgres", "Caching & queues"],
    status: false,
  },
  {
    id: "j4",
    title: "IT Attachment",
    orgLabel: "Company",
    orgName: "KCB Bank",
    location: "Nakuru",
    category: "Attachment",
    date: "2025-08-09",
    secondaryText: "Stipend",
    description:
      "Rotate through infra, helpdesk and security to learn production operations at scale.",
    listTitle: "Requirements",
    listItems: ["Curiosity", "Basic networking"],
    status: false,
  },
  // more jobs...
];

export default function JobsPage() {
  return (
    <SplitView
      title="Jobs"
      searchPlaceholder="Search jobs by title or company"
      statusLabels={{ active: "Applied", inactive: "Level" }}
      actionLabels={{ primary: "Apply", saved: "Saved job" }}
      filter1Name="Level"
      filter1Options={["All", "Graduate", "Internship", "Entry Level", "Attachment"]}
      filter2Name="Location"
      filter2Options={["All", "Nairobi", "Mombasa", "Remote"]}
      items={jobs}
    />
  );
}
