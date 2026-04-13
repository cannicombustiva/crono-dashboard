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
  hasError?: boolean;
}

export interface KpiItem {
  label: string;
  current: number | string;
  total: number | string;
  icon: string;
  progressColor: string;
}

export const signals: Signal[] = [
  {
    id: 1,
    contact: "Robert Smith",
    description: "changed role from SDR to Senior SDR at WeRoad",
    highlight: "",
    tag: "Role change",
    tagColor: "text-purple-500",
    subTag: "In sequence",
    subTagColor: "text-gray-400",
    date: "Apr 2, 2025",
    unread: true,
  },
  {
    id: 2,
    contact: "Robert Smith",
    description: "changed role from SDR to Senior SDR at WeRoad",
    highlight: "",
    tag: "Company change",
    tagColor: "text-blue-500",
    subTag: "In sequence",
    subTagColor: "text-gray-400",
    date: "Apr 2, 2025",
    unread: true,
  },
  {
    id: 3,
    contact: "Robert Smith",
    description: "changed role from SDR to Senior SDR at WeRoad",
    highlight: "",
    tag: "Role change",
    tagColor: "text-purple-500",
    date: "Apr 2, 2025",
    unread: true,
  },
  {
    id: 4,
    contact: "Amazon",
    description: "viewed",
    highlight: "2 pages",
    tag: "Website view",
    tagColor: "text-orange-400",
    date: "Apr 2, 2025",
    unread: true,
  },
  {
    id: 5,
    contact: "Amazon",
    description: "viewed",
    highlight: "2 pages",
    tag: "Website view",
    tagColor: "text-orange-400",
    date: "Apr 2, 2025",
    unread: true,
  },
];

export const taskStats: TaskStat[] = [
  { label: "Overdue", value: 3, color: "text-red-500", },
  { label: "Pending Manual", value: 10, color: "text-yellow-500" },
  { label: "Pending Auto", value: 20, color: "text-blue-500", hasError: true },
  { label: "Completed", value: 8, color: "text-green-500" },
];

export const kpis: KpiItem[] = [
  { label: "Contacts engaged", current: 0, total: 500, icon: "contact", progressColor: "#00C896" },
  { label: "Companies engaged", current: 0, total: 500, icon: "company", progressColor: "#3B82F6" },
  { label: "Activities", current: 1000, total: 2000, icon: "task", progressColor: "#00C896" },
  { label: "Meetings", current: 20, total: 30, icon: "meeting", progressColor: "#F59E0B" },
  { label: "Deals", current: 100, total: 200, icon: "task", progressColor: "#00C896" },
  { label: "Pipeline", current: "€50K", total: "100K", icon: "pipeline", progressColor: "#00C896" },
];

export const onboardingSteps = [
  { label: "Integrations Setup", time: "5 min" },
  { label: "Add new Contact", time: "5 min" },
  { label: "Create your first sequence", time: "10 min" },
  { label: "Add contacts to sequence", time: "5 min" },
  { label: "Run your first task", time: "10 min" },
];
