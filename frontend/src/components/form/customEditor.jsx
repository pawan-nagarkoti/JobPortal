import React, { forwardRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { editorToken } from "../../lib/constant";

const CustomEditor = forwardRef((props, ref) => {
  return (
    <Editor
      apiKey={editorToken}
      onInit={(evt, editor) => (ref.current = editor)}
      init={{
        plugins:
          "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
      }}
      initialValue=""
      {...props}
    />
  );
});

CustomEditor.displayName = "CustomEditor";

export default CustomEditor;
