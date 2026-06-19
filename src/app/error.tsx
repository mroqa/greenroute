"use client";

import { useEffect } from "react";
import { RefreshCw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error so it shows in the server console / dev log
    console.error("GreenRoute page error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background p-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
        <AlertTriangle className="h-8 w-8" />
      </div>
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground">
          Something went wrong
        </h2>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          The page encountered an error while loading. Try refreshing — if the
          problem persists, the dev server may be restarting.
        </p>
        {error?.message && (
          <pre className="mt-4 max-w-md overflow-auto rounded-lg bg-muted p-3 text-left text-xs text-muted-foreground">
            {error.message}
          </pre>
        )}
      </div>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-emerald transition-transform hover:scale-[1.03]"
      >
        <RefreshCw className="h-4 w-4" />
        Try again
      </button>
    </div>
  );
}
