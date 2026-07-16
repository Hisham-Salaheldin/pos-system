import { LayoutDashboardIcon, ListIcon, ChartBarIcon, FolderIcon, UsersIcon, CameraIcon, FileTextIcon, Settings2Icon, CircleHelpIcon, SearchIcon, DatabaseIcon, FileChartColumnIcon, FileIcon } from "lucide-react"
export const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/",
        icon: (
          <LayoutDashboardIcon />
        ),
      },
      {
        title: "Orders",
        url: "/orders",
        icon: (
          <ListIcon />
        ),
      },
      {
        title: "Products",
        url: "/products",
        icon: (
          <ChartBarIcon />
        ),
      },
      {
        title: "Collections",
        url: "/collections",
        icon: (
          <ChartBarIcon />
        ),
      },
      {
        title: "Reports",
        url: "/reports",
        icon: (
          <FolderIcon />
        ),
      },
      {
        title: "Team",
        url: "/employes",
        icon: (
          <UsersIcon />
        ),
      },
    ],
    // navClouds: [
    //   {
    //     title: "Capture",
    //     icon: (
    //       <CameraIcon />
    //     ),
    //     isActive: true,
    //     url: "#",
    //     items: [
    //       {
    //         title: "Active Proposals",
    //         url: "#",
    //       },
    //       {
    //         title: "Archived",
    //         url: "#",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Proposal",
    //     icon: (
    //       <FileTextIcon />
    //     ),
    //     url: "#",
    //     items: [
    //       {
    //         title: "Active Proposals",
    //         url: "#",
    //       },
    //       {
    //         title: "Archived",
    //         url: "#",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Prompts",
    //     icon: (
    //       <FileTextIcon />
    //     ),
    //     url: "#",
    //     items: [
    //       {
    //         title: "Active Proposals",
    //         url: "#",
    //       },
    //       {
    //         title: "Archived",
    //         url: "#",
    //       },
    //     ],
    //   },
    // ],
    navSecondary: [
      {
        title: "Settings",
        url: "#",
        icon: (
          <Settings2Icon
          />
        ),
      },
    //   {
    //     title: "Get Help",
    //     url: "#",
    //     icon: (
    //       <CircleHelpIcon
    //       />
    //     ),
    //   },
      {
        title: "Search",
        url: "#",
        icon: (
          <SearchIcon
          />
        ),
      },
    ],
    // documents: [
    //   {
    //     name: "Media Library",
    //     url: "#",
    //     icon: (
    //       <DatabaseIcon
    //       />
    //     ),
    //   },
    //   {
    //     name: "Reports",
    //     url: "#",
    //     icon: (
    //       <FileChartColumnIcon
    //       />
    //     ),
    //   },
    //   {
    //     name: "Word Assistant",
    //     url: "#",
    //     icon: (
    //       <FileIcon
    //       />
    //     ),
    //   },
    // ],
  }