
import {
  LayoutDashboard,
  FolderKanban,
  Brain,
  Database,
  Workflow,
  Settings,
  User,
  Palette,
  Code2,
  BookOpen,
  History,
  Star,
  Search,
  type LucideIcon,
} from "lucide-react";

export type SidebarItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  items?: SidebarItem[];
};

export type SidebarGroup = {
  label: string;
  items: SidebarItem[];
};

export const sidebarData: SidebarGroup[] = [
  {
    label: "Workspace",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Projects",
        url: "/projects",
        icon: FolderKanban,
        items: [
          {
            title: "All Projects",
            url: "/projects",
          },
          {
            title: "Active Projects",
            url: "/projects/active",
          },
          {
            title: "Archived Projects",
            url: "/projects/archived",
          },
        ],
      },
      {
        title: "Workflows",
        url: "/workflows",
        icon: Workflow,
      },
    ],
  },
  {
    label: "AI & Memory",
    items: [
      {
        title: "AI Connections",
        url: "/ai-connections",
        icon: Brain,
        items: [
          {
            title: "All Connections",
            url: "/ai-connections",
          },
          {
            title: "Claude",
            url: "/ai-connections/claude",
          },
          {
            title: "ChatGPT",
            url: "/ai-connections/chatgpt",
          },
          {
            title: "Gemini",
            url: "/ai-connections/gemini",
          },
        ],
      },
      {
        title: "Memory",
        url: "/memory",
        icon: Database,
        items: [
          {
            title: "All Memories",
            url: "/memory",
          },
          {
            title: "Knowledge Base",
            url: "/memory/knowledge",
          },
          {
            title: "Import & Export",
            url: "/memory/import-export",
          },
        ],
      },
      {
        title: "Prompt Library",
        url: "/prompts",
        icon: BookOpen,
        items: [
          {
            title: "All Prompts",
            url: "/prompts",
          },
          {
            title: "Favorites",
            url: "/prompts/favorites",
          },
          {
            title: "Recently Used",
            url: "/prompts/recent",
          },
        ],
      },
    ],
  },
  {
    label: "Personalize",
    items: [
      {
        title: "Design System",
        url: "/design-system",
        icon: Palette,
      },
      {
        title: "Developer Tools",
        url: "/developer",
        icon: Code2,
      },
      {
        title: "Search",
        url: "/search",
        icon: Search,
      },
      {
        title: "History",
        url: "/history",
        icon: History,
      },
      {
        title: "Settings",
        url: "/settings",
        icon: Settings,
        items: [
          {
            title: "General",
            url: "/settings",
          },
          {
            title: "Profile",
            url: "/settings/profile",
          },
          {
            title: "Appearance",
            url: "/settings/appearance",
          },
          {
            title: "Integrations",
            url: "/settings/integrations",
          },
        ],
      },
    ],
  },
];
