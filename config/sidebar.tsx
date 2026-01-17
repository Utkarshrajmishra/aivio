import {
  Book,
  Bot,
  LayoutDashboardIcon,
  MessageSquareIcon,
  SectionIcon,
  Settings,
} from "lucide-react";

export const SidebarConfig = [
  {
    id: 1,
    label: "Dashboard",
    icon: <LayoutDashboardIcon className="size-4" />,
  },
  {
    id: 2,
    label: "Knowledge",
    icon: <Book className="size-4" />,
  },
  {
    id: 3,
    label: "Sections",
    icon: <SectionIcon className="size-4" />,
  },
  {
    id: 4,
    label: "Chatbot",
    icon: <Bot className="size-4" />,
  },
  {
    id: 6,
    label: "Conversations",
    icon: <MessageSquareIcon className="size-4" />,
  },
  {
    id: 7,
    label: "Setting",
    icon: <Settings className="size-4" />,
  },
];
