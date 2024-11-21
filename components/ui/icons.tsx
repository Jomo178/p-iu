import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import {
  BookOpenCheck,
  CalendarPlus,
  ChartColumn,
  ChartLine,
  ChartNoAxesGantt,
  Check,
  ChevronUp,
  CircleAlert,
  Ellipsis,
  FilePenLine,
  Frame,
  GitPullRequestClosed,
  Info,
  ListFilter,
  ListTodo,
  Loader2,
  LogOut,
  LucideProps,
  Menu,
  Plus,
  ScanEye,
  Signature,
  SquareMousePointer,
  Star,
  Trash2,
  Upload,
  User,
  Users,
  X,
} from "lucide-react";

export const Icons = {
  arrowUp: ChevronUp,
  user: User,
  signOut: LogOut,
  star: Star,
  deleteButton: Trash2,
  addButton: Plus,
  customPropsButton: MixerHorizontalIcon,
  previewButton: ScanEye,
  upload: Upload,
  info: Info,
  todo: ListTodo,
  staff: Users,
  blog: BookOpenCheck,
  stats: ChartColumn,
  frames: Frame,
  manage: ChartNoAxesGantt,
  growth: ChartLine,
  rejected: GitPullRequestClosed,
  menu: Menu,
  approve: Signature,
  reject: CircleAlert,
  edit: FilePenLine,
  selected: Check,
  select: SquareMousePointer,
  filter: ListFilter,
  cancel: X,
  pending: Ellipsis,
  soon: CalendarPlus,
  editPen: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e8eaed"
      {...props}
    >
      <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
    </svg>
  ),
  addIssue: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e8eaed"
      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v240H160v240h400v80H160Zm0-480h640v-80H160v80ZM760-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM160-240v-480 480Z" />
    </svg>
  ),
  spinner: (props: LucideProps) => (
    <Loader2 className="animate-spin" {...props} />
  ),
  icon: (props: LucideProps) => (
    <svg
      width="78.001"
      height="71.201"
      viewBox="0 0 78.001 71.201"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        id="svgGroup"
        strokeLinecap="round"
        fillRule="evenodd"
        fontSize="9pt"
        stroke="#ffffff"
        strokeWidth="0.25mm"
        fill="#ffffff"
        style={{ stroke: "#ffffff", strokeWidth: "0.25mm", fill: "#ffffff" }}
      >
        <path
          d="M 26 43.4 L 26 0 L 35.5 0 L 35.5 41.9 A 39.482 39.482 0 0 0 35.9 47.711 Q 36.781 53.619 39.6 57.4 A 13.242 13.242 0 0 0 48.056 62.556 A 20.418 20.418 0 0 0 51.9 62.9 A 21.386 21.386 0 0 0 56.904 62.351 A 13.455 13.455 0 0 0 64.6 57.55 A 17.382 17.382 0 0 0 67.396 52.155 Q 68.186 49.736 68.531 46.794 A 42.042 42.042 0 0 0 68.8 41.9 L 68.8 0 L 78 0 L 78 43 A 39.957 39.957 0 0 1 77.378 50.231 A 28.663 28.663 0 0 1 74.75 58.15 Q 71.5 64.5 65.65 67.85 A 25.023 25.023 0 0 1 57.089 70.804 A 32.816 32.816 0 0 1 51.9 71.2 A 32.706 32.706 0 0 1 43.895 70.275 A 22.492 22.492 0 0 1 32.9 64 Q 26.788 57.623 26.09 46.381 A 48.096 48.096 0 0 1 26 43.4 Z M 9.5 70 L 0 70 L 0 0 L 9.5 0 L 9.5 70 Z"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  ),
  deselect: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox={`0 0 ${props.size} ${props.size}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className="icon icon-tabler icons-tabler-outline icon-tabler-deselect"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8h3a1 1 0 0 1 1 1v3" />
      <path d="M16 16h-7a1 1 0 0 1 -1 -1v-7" />
      <path d="M12 20v.01" />
      <path d="M16 20v.01" />
      <path d="M8 20v.01" />
      <path d="M4 20v.01" />
      <path d="M4 16v.01" />
      <path d="M4 12v.01" />
      <path d="M4 8v.01" />
      <path d="M8 4v.01" />
      <path d="M12 4v.01" />
      <path d="M16 4v.01" />
      <path d="M20 4v.01" />
      <path d="M20 8v.01" />
      <path d="M20 12v.01" />
      <path d="M20 16v.01" />
      <path d="M3 3l18 18" />
    </svg>
  ),
};
