
"use client"

import * as React from "react"
import {
  BrainCircuit,
  LayoutDashboard,
  FolderKanban,
  Database,
  Workflow,
  Target,
  ListTodo,
  RefreshCw,
  History,
  Settings2,
  Plug,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const navigation = [
  {
    title: "Overview",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Memory",
    url: "/memory",
    icon: Database,
    items: [
      { title: "All Memories", url: "/memory" },
      { title: "Knowledge Base", url: "/memory/knowledge" },
      { title: "Summaries", url: "/memory/summaries" },
    ],
  },
  {
    title: "Skills & Instructions",
    url: "/skills",
    icon: BrainCircuit,
    items: [
      { title: "All Skills", url: "/skills" },
      { title: "AI Instructions", url: "/skills/instructions" },
    ],
  },
  {
    title: "Workflows",
    url: "/workflows",
    icon: Workflow,
    items: [
      { title: "All Workflows", url: "/workflows" },
      { title: "AI Assignments", url: "/workflows/assignments" },
    ],
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Tasks",
    url: "/tasks",
    icon: ListTodo,
  },
  {
    title: "Goals",
    url: "/goals",
    icon: Target,
  },
  {
    title: "AI Connections",
    url: "/connections",
    icon: Plug,
    items: [
      { title: "All Connections", url: "/connections" },
      { title: "ChatGPT", url: "/connections/chatgpt" },
      { title: "Claude", url: "/connections/claude" },
      { title: "Gemini", url: "/connections/gemini" },
    ],
  },
  {
    title: "Memory Refresh",
    url: "/refresh",
    icon: RefreshCw,
  },
  {
    title: "Activity History",
    url: "/history",
    icon: History,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings2,
  },
]

export function AppSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  
const [expandedItems, setExpandedItems] = React.useState<
  Record<string, boolean>
>({
  Memory: false,
  "Skills & Instructions": false,
  Workflows: false,
  "AI Connections": false,
})


  const toggleItem = (title: string) => {
    setExpandedItems((previous) => ({
      ...previous,
      [title]: !(previous[title] ?? true),
    }))
  }

  return (
    <Sidebar {...props} className="border-r border-sidebar-border/70">
      <SidebarHeader className="border-b border-sidebar-border/70 bg-sidebar px-4 py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              render={<Link href="/" className="group" />}
              className="rounded-2xl px-3 py-2 hover:bg-sidebar-accent"
            >
              <Image
                src="/long-icon.png"
                alt="Yur Platform"
                width={160}
                height={38}
                className="mx-auto"
              />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarMenu className="gap-1">
          {navigation.map((item) => (
            <SidebarMenuItem key={item.title}>
              {item.items ? (
                <>
                  <SidebarMenuButton
                    onClick={() => toggleItem(item.title)}
                    tooltip={item.title}
                    className="rounded-xl px-3"
                    aria-expanded={expandedItems[item.title] ?? true}
                  >
                    <item.icon className="size-4" />
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`ml-auto size-4 transition-transform duration-200 ${
                        expandedItems[item.title] ?? true
                          ? ""
                          : "-rotate-90"
                      }`}
                    />
                  </SidebarMenuButton>

                  {(expandedItems[item.title] ?? true) && (
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            render={<Link href={subItem.url} />}
                            className="rounded-lg"
                          >
                            {subItem.title}
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </>
              ) : (
                <SidebarMenuButton
                  render={<Link href={item.url} />}
                  tooltip={item.title}
                  className="rounded-xl px-3"
                >
                  <item.icon className="size-4" />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
