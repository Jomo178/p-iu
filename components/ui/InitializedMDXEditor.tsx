"use client";

// check https://mdxeditor.dev/editor/docs/getting-started

// InitializedMDXEditor.tsx
import type { ForwardedRef } from "react";
import {
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
} from "@mdxeditor/editor";

// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return <MDXEditor {...props} ref={editorRef} />;
}
