/**
 * Prepends the Next.js basePath to a public asset path.
 * Required on GitHub Pages where the site lives under /dncon.
 *
 * Usage:  src={assetPath("/images/hero-bg.jpg")}
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  return `${BASE}${path}`;
}
