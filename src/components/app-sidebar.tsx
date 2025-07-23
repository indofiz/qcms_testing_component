import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
      isActive: false,

        },
        {
          title: "Starred",
          url: "#",
      isActive: false,

        },
        {
          title: "Settings",
          url: "#",
      isActive: false,

        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      isActive: false,

      items: [
        {
          title: "Genesis",
          url: "#",
      isActive: false,

        },
        {
          title: "Explorer",
          url: "#",
      isActive: false,

        },
        {
          title: "Quantum",
          url: "#",
      isActive: false,

        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      isActive: false,

      items: [
        {
          title: "Introduction",
          url: "#",
      isActive: false,

        },
        {
          title: "Get Started",
          url: "#",
      isActive: false,

        },
        {
          title: "Tutorials",
          url: "#",
      isActive: false,

        },
        {
          title: "Changelog",
          url: "#",
      isActive: false,

        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      isActive: false,

      items: [
        {
          title: "General",
          url: "#",
      isActive: false,

        },
        {
          title: "Team",
          url: "#",
      isActive: false,

        },
        {
          title: "Billing",
          url: "#",
      isActive: false,

        },
        {
          title: "Limits",
          url: "#",
      isActive: false,

        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
      isActive: false,

    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
      isActive: false,

    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
      isActive: true,

    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
      isActive: false,

    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
      isActive: false,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
