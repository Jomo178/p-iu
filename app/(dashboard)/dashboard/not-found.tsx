"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function NotFound() {
  return (
    <div className="space-y-3.5 flex flex-col max-w-[50%] ml-auto mr-auto mt-[10%]">
      <h2>Not Found</h2>
      <p>Could not find requested resource please try to log in</p>
      <Button variant="secondary" onClick={() => signIn("discord")}>
        Login
      </Button>
    </div>
  );
}
