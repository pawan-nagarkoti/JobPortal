import DOMPurify from "dompurify";

export function HtmlSanitizer(htmlData) {
  if (!htmlData) return "";
  const sanitizedHtml = DOMPurify.sanitize(htmlData);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div>;
}
