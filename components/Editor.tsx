import React, { memo, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

const Editor = () => {
  // add a reference to editor
  const ref = useRef<EditorJS>();

  // initialize editorjs
  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: "holder",
        placeholder: "Write a great article....",
      });
      ref.current = editor;
    }

    // handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return <div id="holder" />;
};

export default memo(Editor);
