import type { Metadata } from "next";
import { Providers } from "@/app/Providers";

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
            <div className={styles.editorContainer}>
              <Providers>{children}</Providers>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
