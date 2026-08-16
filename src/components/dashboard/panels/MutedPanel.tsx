"use client";

import { useEffect, useState } from "react";
import type { MutedUser } from "@/data/mock/dashboard";
import { SectionHead } from "../SectionHead";
import { PanelLoading } from "../PanelLoading";
import styles from "./MutedPanel.module.scss";

export function MutedPanel() {
  const [muted, setMuted] = useState<MutedUser[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/dashboard/muted")
      .then((res) => res.json())
      .then((json: { muted: MutedUser[] }) => {
        if (!cancelled) setMuted(json.muted);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <SectionHead title="Muted Users" />

      <div className={styles.addRow}>
        <div className={styles.addField}>
          <span className={styles.at}>@</span>
          <span className={styles.addPlaceholder}>user ID…</span>
        </div>
        <div className={styles.reasonField}>
          <span className={styles.addPlaceholder}>reason…</span>
        </div>
        <button type="button" className={styles.mute}>
          Mute
        </button>
      </div>

      {!muted ? (
        <PanelLoading />
      ) : (
        <div className={styles.list}>
          {muted.map((user) => (
            <div key={user.id} className={styles.row}>
              <span className={styles.avatar}>{user.initial}</span>
              <div className={styles.info}>
                <div className={styles.name}>{user.name}</div>
                <div className={styles.reason}>{user.reason}</div>
              </div>
              <div className={styles.durationBlock}>
                <div className={styles.duration}>{user.duration}</div>
                <div className={styles.by}>by {user.by}</div>
              </div>
              <button type="button" className={styles.unmute}>
                unmute
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
