import React, { forwardRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { editorToken } from "../../lib/constant";

const CustomEditor = forwardRef(({ value, onEditorChange, ...props }, ref) => {
  return (
    <Editor
      apiKey={editorToken}
      value={value}
      onEditorChange={onEditorChange}
      onInit={(evt, editor) => {
        if (ref) {
          if (typeof ref === "function") {
            ref(editor);
          } else {
            ref.current = editor;
          }
        }
      }}
      init={{
        plugins:
          "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
      }}
      {...props}
    />
  );
});

CustomEditor.displayName = "CustomEditor";

export default CustomEditor;
