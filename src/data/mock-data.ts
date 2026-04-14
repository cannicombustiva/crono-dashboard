export interface Signal {
  id: number;
  contact: string;
  description: string;
  highlight: string;
  tag: string;
  tagColor: string;
  subTag?: string;
  subTagColor?: string;
  date: string;
  unread: boolean;
}

export interface TaskStat {
  label: string;
  value: number;
  color: string;
  bgColor: string;
  hasError?: boolean;
}

export const signals: Signal[] = [
  {
    id: 1,
    contact: "Robert Smith",
    description: "changed role from SDR to Senior SDR at WeRoad",
    highlight: "",
    tag: "Role change",
    tagColor: "text-purple-600",
    subTag: "in sequence",
    subTagColor: "text-[#00C896]",
    date: "Apr 2, 2025",
    unread: true,
  },
  {
    id: 2,
    contact: "Robert Smith",
    description: "changed role from SDR to Senior SDR at WeRoad",
    highlight: "",
    tag: "Company change",
    tagColor: "text-sky-600",
    subTag: "in sequence",
    subTagColor: "text-[#00C896]",
    date: "Apr 2, 2025",
    unread: true,
  },
  {
    id: 3,
    contact: "Robert Smith",
    description: "changed role from SDR to Senior SDR at WeRoad",
    highlight: "",
    tag: "Role change",
    tagColor: "text-purple-600",
    date: "Apr 2, 2025",
    unread: true,
  },
  {
    id: 4,
    contact: "Amazon",
    description: "viewed",
    highlight: "2 pages",
    tag: "Website view",
    tagColor: "text-pink-600",
    date: "Apr 2, 2025",
    unread: true,
  },
  {
    id: 5,
    contact: "Amazon",
    description: "viewed",
    highlight: "2 pages",
    tag: "Website view",
    tagColor: "text-pink-600",
    date: "Apr 2, 2025",
    unread: true,
  },
  {
    id: 6,
    contact: "Robert Smith",
    description: "changed role from SDR to Senior SDR at WeRoad",
    highlight: "",
    tag: "Role change",
    tagColor: "text-purple-600",
    date: "Apr 1, 2025",
    unread: true,
  },
  {
    id: 7,
    contact: "Robert Smith",
    description: "changed role from SDR to Senior SDR at WeRoad",
    highlight: "",
    tag: "Company change",
    tagColor: "text-sky-600",
    subTag: "in sequence",
    subTagColor: "text-[#00C896]",
    date: "Apr 1, 2025",
    unread: true,
  },
  {
    id: 8,
    contact: "Amazon",
    description: "viewed",
    highlight: "2 pages",
    tag: "Website view",
    tagColor: "text-pink-600",
    date: "Apr 1, 2025",
    unread: true,
  },
  {
    id: 9,
    contact: "Robert Smith",
    description: "changed role from SDR to Senior SDR at WeRoad",
    highlight: "",
    tag: "Role change",
    tagColor: "text-purple-600",
    subTag: "in sequence",
    subTagColor: "text-[#00C896]",
    date: "Mar 31, 2025",
    unread: true,
  },
  {
    id: 10,
    contact: "Amazon",
    description: "viewed",
    highlight: "2 pages",
    tag: "Website view",
    tagColor: "text-pink-600",
    date: "Mar 31, 2025",
    unread: true,
  },
  {
    id: 11,
    contact: "Robert Smith",
    description: "changed role from SDR to Senior SDR at WeRoad",
    highlight: "",
    tag: "Company change",
    tagColor: "text-sky-600",
    date: "Mar 31, 2025",
    unread: true,
  },
  {
    id: 12,
    contact: "Robert Smith",
    description: "changed role from SDR to Senior SDR at WeRoad",
    highlight: "",
    tag: "Role change",
    tagColor: "text-purple-600",
    date: "Mar 30, 2025",
    unread: true,
  },
];

export const taskStats: TaskStat[] = [
  { label: "Overdue", value: 3, color: "text-red-600", bgColor: "bg-red-50" },
  { label: "Pending Manual", value: 10, color: "text-yellow-700", bgColor: "bg-yellow-100" },
  { label: "Pending Auto", value: 20, color: "text-sky-600", bgColor: "bg-sky-50", hasError: true },
  { label: "Completed", value: 8, color: "text-green-600", bgColor: "bg-green-50" },
];
