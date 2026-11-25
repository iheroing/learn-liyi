export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// RSS requires a clock value. Midnight UTC is a serialization convention for
// date-only frontmatter, not a claim about the actual hour of publication.
export function rfc822Date(date: string): string {
  return new Date(`${date}T00:00:00.000Z`).toUTCString();
}
