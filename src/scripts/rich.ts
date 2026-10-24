// Turns plain text into safe HTML and highlights [[placeholders]].

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const PLACEHOLDER = /\[\[(.+?)\]\]/g;

export function rich(text = ''): string {
  return escape(text).replace(PLACEHOLDER, (_, inner) => `<mark class="ph" title="Placeholder — replace in the data file">${inner}</mark>`);
}

export function isPlaceholder(text = ''): boolean {
  return /^\s*\[\[.*\]\]\s*$/.test(text);
}

/** Text with any placeholder brackets removed — for <title>, alt text and meta tags. */
export function plain(text = ''): string {
  return text.replace(PLACEHOLDER, '$1');
}

/** Counts placeholders anywhere inside a value (used for the dev-only reminder badge). */
export function countPlaceholders(value: unknown): number {
  const json = JSON.stringify(value) ?? '';
  return (json.match(PLACEHOLDER) ?? []).length;
}
