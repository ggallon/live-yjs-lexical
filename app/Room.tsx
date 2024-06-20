"use client";

import { RoomProvider } from "@liveblocks/react/suspense";
import { ClientSideSuspense } from "@liveblocks/react";
import { Loading } from "@/components/Loading";

export function Room({
  children,
  roomId,
}: {
  children: React.ReactNode;
  roomId: string;
}) {
  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loading />}>{children}</ClientSideSuspense>
    </RoomProvider>
  );
}
