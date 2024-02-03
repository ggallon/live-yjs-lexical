import { Room } from "@/app/Room";
import CollaborativeEditor from "@/components/Editor";

export default function Page() {
  const id = "nextjs-yjs-notes";

  return (
    <Room roomId={id}>
      <CollaborativeEditor />
    </Room>
  );
}
