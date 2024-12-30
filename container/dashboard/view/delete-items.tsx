"use client";

import { useState } from "react";
import { FramesViewPort, IssuesViewPort, ItemsViewPortType } from "@/types";
import { EventType } from "@prisma/client";

import { Button } from "@/components/ui/button";
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";
import { PasswordInput } from "@/components/ui/input";

import { usehandleApprovePendingItems } from "./handlers";

interface DeleteIssuesProps {
  issues: { id: string; name: string; image: string }[];
  itemType: `${EventType}`;
  openDialog: boolean;
  setOpenDialogAction: React.Dispatch<React.SetStateAction<boolean>>;
  setViewTypeDataAction?: React.Dispatch<
    React.SetStateAction<ItemsViewPortType>
  >;
  viewPortType: ItemsViewPortType;
}

export default function DeleteItemsDialog({
  issues,
  itemType,
  openDialog,
  setOpenDialogAction,
  setViewTypeDataAction,
  viewPortType,
}: DeleteIssuesProps) {
  const { handleDeleteItems } = usehandleApprovePendingItems(
    itemType,
    setViewTypeDataAction
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleDelete = async () => {
    if (password === "") return setError("Password is required!");

    const response = await handleDeleteItems(
      viewPortType.id,
      issues.map((issue) => ({ id: issue.id, image: issue.image })),
      password
    );

    setError(response ?? "");
  };

  return (
    <Credenza open={openDialog} onOpenChange={setOpenDialogAction}>
      <CredenzaContent className="sm:max-w-[600px]">
        <CredenzaHeader>
          <CredenzaTitle>Delete Pending Issues</CredenzaTitle>
          <CredenzaDescription>
            Are you sure you want to delete the following issues?
          </CredenzaDescription>
        </CredenzaHeader>

        <CredenzaBody>
          <PasswordInput
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            autoComplete="new-password"
          />
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          <ul className="mt-4">
            <li>Issues that will be deleted:</li>
            <div className="flex gap-4">
              {issues.map((issue) => (
                <li key={issue.id}>
                  <p>{issue.name}</p>
                </li>
              ))}
            </div>
          </ul>
        </CredenzaBody>

        <CredenzaFooter className="flex flex-row justify-center">
          <Button variant="outline" onClick={() => setOpenDialogAction(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
}
