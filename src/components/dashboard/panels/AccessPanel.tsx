"use client";

import { useEffect, useState } from "react";
import type { AccessEntry } from "@/data/mock/dashboard";
import { SectionHead } from "../SectionHead";
import { PanelLoading } from "../PanelLoading";
import styles from "./AccessPanel.module.scss";

interface AccessData {
  whitelist: AccessEntry[];
  blacklist: AccessEntry[];
}

function ServerRow({ entry, tone }: { entry: AccessEntry; tone: "allow" | "deny" }) {
  return (
    <div className={tone === "allow" ? styles.rowAllow : styles.rowDeny}>
      <span className={tone === "allow" ? styles.avatarAllow : styles.avatarDeny}>{entry.initial}</span>
      <div className={styles.entryInfo}>
        <div className={styles.entryName}>{entry.name}</div>
        <div className={styles.entryId}>{entry.discordId}</div>
      </div>
      <span className={styles.remove}>×</span>
    </div>
  );
}

export function AccessPanel() {
  const [data, setData] = useState<AccessData | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/dashboard/access")
      .then((res) => res.json())
      .then((json: AccessData) => {
        if (!cancelled) setData(json);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!data) {
    return (
      <div>
        <SectionHead title="Access Control" />
        <PanelLoading />
      </div>
    );
  }

  return (
    <div>
      <SectionHead title="Access Control" />
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardHead}>
            <span className={`${styles.dot} ${styles.dotGreen}`} />
            <span className={styles.cardTitle}>whitelist</span>
            <span className={styles.cardCount}>{data.whitelist.length} servers</span>
          </div>
          <div className={styles.addRow}>
            <span className={styles.addIconAllow}>+</span>
            <span className={styles.addLabel}>add server ID…</span>
          </div>
          <div className={styles.list}>
            {data.whitelist.map((entry) => (
              <ServerRow key={entry.id} entry={entry} tone="allow" />
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHead}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={styles.cardTitle}>blacklist</span>
            <span className={styles.cardCount}>{data.blacklist.length} servers</span>
          </div>
          <div className={styles.addRow}>
            <span className={styles.addIconDeny}>+</span>
            <span className={styles.addLabel}>add server ID…</span>
          </div>
          <div className={styles.list}>
            {data.blacklist.map((entry) => (
              <ServerRow key={entry.id} entry={entry} tone="deny" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
