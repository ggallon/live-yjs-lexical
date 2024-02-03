import type { Metadata } from "next";

import styles from "@/components/Editor.module.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className={styles.container}>
            <div className={styles.editorContainer}>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
