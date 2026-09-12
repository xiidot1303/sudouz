import Link from "next/link";
import "./globals.css";

/**
 * Global fallback for requests that never matched a locale segment.
 */
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-dvh flex-col items-center justify-center gap-4 p-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">404</h1>
        <p className="text-muted-foreground">This page could not be found.</p>
        <Link href="/" className="text-sm underline underline-offset-4">
          Go home
        </Link>
      </body>
    </html>
  );
}
