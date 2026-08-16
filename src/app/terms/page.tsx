import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import { BackNav } from "@/components/layout/BackNav";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Terms of Service — Ari Connect",
  description: "The terms of service governing use of Ari Connect.",
};

function getTermsContent() {
  const file = path.join(process.cwd(), "src/content/terms.md");
  return fs.readFileSync(file, "utf8");
}

export default function TermsPage() {
  const content = getTermsContent();

  return (
    <div className={styles.page}>
      <BackNav />
      <div className={styles.wrap}>
        <div className={styles.prose}>
          <ReactMarkdown rehypePlugins={[rehypeSlug]}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
