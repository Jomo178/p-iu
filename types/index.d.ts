import { Icons } from "@/components/ui/Icons";

export type NavigationItem = {
  title: string;
  href: string;
  disabled?: boolean;
  icon?: FC<{ className: string }>;
  action?: () => void;
};

export interface DashboradActionsType {
  href: string;
  Icon: FC<{ className: string }>;
  title: string;
  description: string;
  disabled?: boolean;
}
