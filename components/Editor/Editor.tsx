"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { TipTapEditorProps } from "./props";
import { TipTapEditorExtensions } from "./extensions";


export default function Editor() {
  const editor = useEditor({
    extensions: TipTapEditorExtensions,
    editorProps: TipTapEditorProps,
    content: "<h2>Untitled</h2>",
  });

  return (
    <div
      onClick={() => {
        editor?.chain().focus().run();
      }}
      className="relative flex min-h-screen w-full cursor-text flex-col items-center p-32 "
    >
      <div className="relative w-full max-w-screen-lg ">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}