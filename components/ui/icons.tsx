import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import {
  ChevronUp,
  CreditCard,
  Info,
  Loader2,
  LucideProps,
  Plus,
  ScanEye,
  Star,
  Trash2,
  Upload,
  User,
} from "lucide-react";

export const Icons = {
  arrowUp: ChevronUp,
  user: User,
  logout: CreditCard,
  star: Star,
  deleteButton: Trash2,
  addButton: Plus,
  customPropsButton: MixerHorizontalIcon,
  previewButton: ScanEye,
  upload: Upload,
  info: Info,
  spinner: (props: LucideProps) => (
    <Loader2 className="animate-spin" {...props} />
  ),
};
