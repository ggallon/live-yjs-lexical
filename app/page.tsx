import { Suspense } from "react";

import { Room } from "@/app/Room";
import CollaborativeEditor from "@/components/Editor";

import styles from "@/components/Editor.module.css";

export default function Page() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.editorContainer}>
          <Suspense fallback={<div>Loading... </div>}>
            <Room>
              <CollaborativeEditor />
            </Room>
          </Suspense>
        </div>
      </div>
    </main>
  );
}
