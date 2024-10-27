import { Icons } from "@/components/ui/Icons";

export type NavigationItem = {
  title: string;
  href: string;
  disabled?: boolean;
  icon?: FC<{ className: string }>;
  action?: () => void;
};
