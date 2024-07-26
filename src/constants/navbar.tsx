import { LocationIcon } from "@/components/assets";
import { SideNavItem } from "@/types/navbar";
import { Icon } from "@iconify/react";


export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Salad maker",
    path: "/home",
    icon: <LocationIcon className="w-[24px] h-[24px]" />,
  },
  {
    title: "Recipe",
    path: "/recipe",
    icon: <Icon icon="solar:book-2-bold" width="24" height="24" />,
  },
];
