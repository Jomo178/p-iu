"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { NavigationItem } from "@/types";
import { signIn, signOut } from "next-auth/react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Icons } from "./ui/Icons";
import ProfileAvatar from "./ui/profile-avatar";

interface NavbarProps {
  user?: { global_name?: string; image?: string | null };
  navigationItems?: NavigationItem[];
}

export default function Navbar({ user, navigationItems }: NavbarProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="container flex flex-row justify-between @container">
      <div className="flex">
        <ProfileAvatar
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jade"
          alt="IU"
          name="IU"
          size="md"
          className="~mr-4/6"
        />

        {navigationItems?.length ? (
          <nav className="hidden items-center gap-4 text-base font-medium leading-none md:flex lg:gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>

      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger
            className="flex cursor-pointer items-center"
            asChild
          >
            <div className="group flex items-center">
              <ProfileAvatar
                src={user.image || ""}
                alt={user.global_name || ""}
                name={user.global_name || ""}
                size="md"
              />
              <Icons.arrowUp className="ml-1 rotate-0 transform transition-transform duration-500 ease-in-out group-data-[state=open]:rotate-180" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            <DropdownMenuGroup>
              <DropdownMenuItem disabled={true}>
                <Icons.user className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                <Icons.logout className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button variant="secondary" onClick={() => signIn("discord")}>
          Login
        </Button>
      )}
    </nav>
  );
}
