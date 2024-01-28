import { Room } from "@/app/Room";
import CollaborativeEditor from "@/components/Editor";

import styles from "@/components/Editor.module.css";

export default function Page() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.editorContainer}>
          <Room>
            <CollaborativeEditor />
          </Room>
        </div>
      </div>
    </main>
  );
}
