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

export interface ViewDashboardType {
  title: string;
  Icon: FC<{ className: string }>;
  href: string;
  isActive: boolean;
  items: DashboradActionsType[];
}
