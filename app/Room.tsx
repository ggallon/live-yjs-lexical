"use client";

import { ClientSideSuspense } from "@liveblocks/react";
import type { ReactNode } from "react";

import { Loading } from "@/components/Loading";

import { RoomProvider } from "@/liveblocks.config";

export function Room({
  children,
  roomId,
}: {
  children: ReactNode;
  roomId: string;
}) {
  return (
    <RoomProvider
      id={roomId}
      initialPresence={{
        cursor: null,
      }}
    >
      <ClientSideSuspense fallback={<Loading />}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
