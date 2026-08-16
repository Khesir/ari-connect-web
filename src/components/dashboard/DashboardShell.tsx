"use client";

import { useMemo, useState } from "react";
import type { Lobby, RoleKey } from "@/data/mock/dashboard";
import { currentLobby } from "@/data/mock/dashboard";
import { TopBar } from "./TopBar";
import { Tabs } from "./Tabs";
import { LobbyHeader } from "./LobbyHeader";
import { LockedPanel } from "./LockedPanel";
import { LobbiesPanel } from "./panels/LobbiesPanel";
import { SettingsPanel } from "./panels/SettingsPanel";
import { AccessPanel } from "./panels/AccessPanel";
import { ModsPanel } from "./panels/ModsPanel";
import { MutedPanel } from "./panels/MutedPanel";
import { FiltersPanel } from "./panels/FiltersPanel";
import { DangerPanel } from "./panels/DangerPanel";
import { ROLE_ACCESS, LOCK_TITLES, LOCK_MESSAGES, type TabId } from "./access";
import styles from "./DashboardShell.module.scss";

export function DashboardShell({ initialLobbies }: { initialLobbies: Lobby[] }) {
  const [tab, setTab] = useState<TabId>("lobbies");
  const [role, setRole] = useState<RoleKey>("admin");

  const allowedTabs = ROLE_ACCESS[role];
  const isAllowed = allowedTabs.includes(tab);

  const panel = useMemo(() => {
    if (!isAllowed) {
      return (
        <LockedPanel title={LOCK_TITLES[tab] ?? "Restricted"} message={LOCK_MESSAGES[role]} role={role} />
      );
    }
    switch (tab) {
      case "lobbies":
        return <LobbiesPanel lobbies={initialLobbies} />;
      case "settings":
        return <SettingsPanel />;
      case "access":
        return <AccessPanel />;
      case "mods":
        return <ModsPanel />;
      case "muted":
        return <MutedPanel />;
      case "filters":
        return <FiltersPanel />;
      case "danger":
        return <DangerPanel />;
      default:
        return null;
    }
  }, [tab, role, isAllowed, initialLobbies]);

  return (
    <>
      <TopBar
        lobbyName={currentLobby.name}
        lobbyInitial={currentLobby.initial}
        role={role}
        onGoLobbies={() => setTab("lobbies")}
        onSetRole={setRole}
      />
      <Tabs activeTab={tab} allowedTabs={allowedTabs} onSelect={setTab} />
      <div className={styles.content}>
        {tab !== "lobbies" && isAllowed && <LobbyHeader role={role} />}
        {panel}
      </div>
    </>
  );
}
