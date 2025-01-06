"use client";

import {
  BoldItalicUnderlineToggles,
  diffSourcePlugin,
  DiffSourceToggleWrapper,
  headingsPlugin,
  quotePlugin,
  toolbarPlugin,
  UndoRedo,
} from "@mdxeditor/editor";
import { RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MDXEditors } from "@/components/ui/mdx-editor";

interface DocsMainBodyProps {}

export default function DocsMainBody({}: DocsMainBodyProps) {
  return (
    <>
      <div>
        {/* height is configured in global.css */}
        <MDXEditors
          contentEditableClassName="prose"
          placeholder="Start writing here..."
          plugins={[
            headingsPlugin(),
            quotePlugin(),
            diffSourcePlugin({
              diffMarkdown: "An older version",
              viewMode: "rich-text",
            }),
            toolbarPlugin({
              toolbarClassName: "flex flex-row gap-4",
              toolbarContents: () => (
                <>
                  <DiffSourceToggleWrapper>
                    <UndoRedo />
                  </DiffSourceToggleWrapper>

                  <BoldItalicUnderlineToggles />
                </>
              ),
            }),
          ]}
          markdown=""
          className="h-96 rounded-[0.5rem] border"
        />
      </div>
    </>
  );
}
