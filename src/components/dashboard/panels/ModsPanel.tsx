"use client";

import { useEffect, useState } from "react";
import type { Mod } from "@/data/mock/dashboard";
import { SectionHead } from "../SectionHead";
import { PanelLoading } from "../PanelLoading";
import styles from "./ModsPanel.module.scss";

export function ModsPanel() {
  const [mods, setMods] = useState<Mod[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/dashboard/mods")
      .then((res) => res.json())
      .then((json: { mods: Mod[] }) => {
        if (!cancelled) setMods(json.mods);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <SectionHead title="Moderators" />

      <div className={styles.addRow}>
        <div className={styles.addField}>
          <span className={styles.at}>@</span>
          <span className={styles.addPlaceholder}>Discord user ID…</span>
        </div>
        <div className={styles.levelSeg}>
          <span className={styles.levelOff}>Level 1</span>
          <span className={styles.levelOn}>Level 2</span>
        </div>
        <button type="button" className={styles.assign}>
          Assign
        </button>
      </div>

      {!mods ? (
        <PanelLoading />
      ) : (
        <div className={styles.list}>
          {mods.map((mod) => (
            <div key={mod.id} className={styles.row}>
              <span className={styles.avatar} style={{ background: mod.iconGradient }}>
                {mod.initial}
              </span>
              <div className={styles.info}>
                <div className={styles.name}>{mod.name}</div>
                <div className={styles.id}>{mod.discordId}</div>
              </div>
              <span className={mod.level === "LEVEL 2" ? styles.levelBadgeL2 : styles.levelBadgeL1}>
                {mod.level}
              </span>
              <button type="button" className={styles.change}>
                change
              </button>
              <button type="button" className={styles.remove}>
                remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
