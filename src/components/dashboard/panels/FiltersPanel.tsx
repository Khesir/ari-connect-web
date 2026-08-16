"use client";

import { useEffect, useState } from "react";
import { SectionHead } from "../SectionHead";
import { PanelLoading } from "../PanelLoading";
import styles from "./FiltersPanel.module.scss";

interface FiltersData {
  bannedWords: string[];
  bannedUrls: string[];
}

export function FiltersPanel() {
  const [data, setData] = useState<FiltersData | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/dashboard/filters")
      .then((res) => res.json())
      .then((json: FiltersData) => {
        if (!cancelled) setData(json);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <SectionHead title="Content Filters" />

      {!data ? (
        <PanelLoading />
      ) : (
        <div className={styles.stack}>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <span className={styles.cardTitle}>banned words</span>
              <span className={styles.cardCount}>{data.bannedWords.length} entries</span>
            </div>
            <div className={styles.words}>
              {data.bannedWords.map((word) => (
                <span key={word} className={styles.word}>
                  {word}
                  <span className={styles.remove}>×</span>
                </span>
              ))}
            </div>
            <div className={styles.addWord}>
              <span className={styles.plus}>+</span>
              <span className={styles.placeholder}>add word…</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHead}>
              <span className={styles.cardTitle}>banned URLs</span>
              <span className={styles.cardCount}>{data.bannedUrls.length} entries</span>
            </div>
            <div className={styles.urls}>
              {data.bannedUrls.map((url) => (
                <div key={url} className={styles.urlRow}>
                  <span className={styles.link}>🔗</span>
                  <span className={styles.urlValue}>{url}</span>
                  <span className={styles.remove}>×</span>
                </div>
              ))}
            </div>
            <div className={styles.addUrl}>
              <span className={styles.plus}>+</span>
              <span className={styles.placeholder}>add URL or domain…</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
