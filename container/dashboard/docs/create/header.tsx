import { Typography } from "@/components/ui/typography";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <div className="p-2">
      <Typography variant="h4">New Documentation</Typography>
    </div>
  );
}
