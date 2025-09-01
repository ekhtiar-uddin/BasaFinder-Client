import { Dock, House, Settings, SquareKanban, User } from "lucide-react";
export const tenantsPaths = [
  {
    title: "My Profile",
    url: "/tenant/profile",
    icon: User,
  },
  {
    title: "Applications",
    url: "/tenant/applications",
    icon: Dock,
  },
  // {
  //   title: "Residences",
  //   url: "/tenant/residences",
  //   icon: HouseIcon,
  // },
  {
    title: "Overview",
    url: "/tenant/overview",
    icon: SquareKanban,
  },
  {
    title: "Settings",
    url: "/tenant/settings",
    icon: Settings,
  },
  {
    title: "Go Home",
    url: "/",
    icon: House,
  },
];
