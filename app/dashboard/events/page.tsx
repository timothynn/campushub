import SplitView from "@/components/SplitView";

const events = [
  {
    id: "e1",
    title: "React Developers Meetup",
    orgLabel: "Organizer",
    orgName: "JS Kenya",
    location: "Nairobi",
    category: "Meetup",
    date: "2025-09-02",
    secondaryText: "Free",
    description: "Join React enthusiasts...",
    listTitle: "Agenda",
    listItems: ["Opening remarks", "Lightning talks", "Networking session"],
    status: true,
  },
  {
    id: "e2",
    title: "Data Science Workshop",
    orgLabel: "Organizer",
    orgName: "DataWorks",
    location: "Mombasa",
    category: "Workshop",
    date: "2025-09-05",
    secondaryText: "KES 2,000",
    description:
      "Hands-on training in Python, Pandas, and Machine Learning basics.",
    listTitle: "Agenda",
    listItems: ["Intro to Python", "Data cleaning", "ML fundamentals"],
    status: true,
  },
  {
    id: "e3",
    title: "African Tech Conference",
    orgLabel: "Organizer",
    orgName: "Tech Africa",
    location: "Kigali",
    category: "Conference",
    date: "2025-09-10",
    secondaryText: "KES 15,000",
    description:
      "A multi-day conference bringing together Africa’s top tech leaders.",
    listTitle: "Agenda",
    listItems: ["Keynote speeches", "Panel discussions", "Product demos"],
    status: true,
  },
  {
    id: "e4",
    title: "AI Hackathon",
    orgLabel: "Organizer",
    orgName: "OpenAI Africa",
    location: "Remote",
    category: "Hackathon",
    date: "2025-09-15",
    secondaryText: "Free",
    description:
      "Collaborate with teams to build AI-powered apps over 48 hours.",
    listTitle: "Agenda",
    listItems: ["Team formation", "Hacking sessions", "Demo & awards"],
    status: true,
  }
  // more events...
];

export default function EventsPage() {
  return (
    <SplitView
      title="Events"
      searchPlaceholder="Search events by title or organizer"
      statusLabels={{ active: "Registered", inactive: "Type" }}
      actionLabels={{ primary: "Register", saved: "Saved event" }}
      filter1Name="Type"
      filter1Options={["All", "Meetup", "Workshop", "Conference", "Hackathon"]}
      filter2Name="Location"
      filter2Options={["All", "Nairobi", "Mombasa", "Remote"]}
      items={events} 
    />
  );
}
