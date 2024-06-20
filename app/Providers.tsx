"use client";

import { LiveblocksProvider } from "@liveblocks/react";

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
      {children}
    </LiveblocksProvider>
  );
}
