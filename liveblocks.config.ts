import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";
import type LiveblocksProvider from "@liveblocks/yjs";

const client = createClient({
  authEndpoint: "/api/liveblocks-auth",
});

// Presence represents the properties that will exist on every User in the Room
// and that will automatically be kept in sync. Accessible through the
// `user.presence` property. Must be JSON-serializable.
type Presence = {
  // cursor: { x: number, y: number } | null,
  // ...
};

// Optionally, Storage represents the shared document that persists in the
// Room, even after all Users leave. Fields under Storage typically are
// LiveList, LiveMap, LiveObject instances, for which updates are
// automatically persisted and synced to all connected clients.
type Storage = {
  // author: LiveObject<{ firstName: string, lastName: string }>,
  // ...
};

// Optionally, UserMeta represents static/readonly metadata on each User, as
// provided by your own custom auth backend (if used). Useful for data that
// will not change during a session, like a User's name or avatar.
type UserMeta = {
  id: string; // Accessible through `user.id`
  info: {
    name: string;
    color: string;
    picture: string;
  }; // Accessible through `user.info`
};

// Optionally, the type of custom events broadcast and listened for in this
// room. Must be JSON-serializable.
// type RoomEvent = {};

export const {
  suspense: { RoomProvider, useRoom, useOthers, useSelf },
} = createRoomContext<Presence, Storage, UserMeta>(client);
