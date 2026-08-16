export type RoleKey = "admin" | "level2" | "level1";

export interface Lobby {
  id: string;
  name: string;
  initial: string;
  iconGradient: string;
  role: string;
  roleKey: RoleKey;
  connected: number;
  limit: number;
  activity: string;
  visibility: "public" | "private";
}

export interface Mod {
  id: string;
  name: string;
  initial: string;
  iconGradient: string;
  discordId: string;
  level: "LEVEL 1" | "LEVEL 2";
}

export interface MutedUser {
  id: string;
  name: string;
  initial: string;
  reason: string;
  duration: string;
  by: string;
}

export interface AccessEntry {
  id: string;
  name: string;
  discordId: string;
  initial: string;
}

export const currentLobby = {
  name: "#global-lounge",
  initial: "G",
  description:
    "A cross-server lounge bridging our partner communities. Relays chat, polls and events to every connected server.",
  connected: 14,
  limit: 25,
};

export function getLobbies(): Lobby[] {
  return [
    {
      id: "global-lounge",
      name: "#global-lounge",
      initial: "G",
      iconGradient: "linear-gradient(135deg,#f472b6,#a855f7)",
      role: "ADMIN",
      roleKey: "admin",
      connected: 14,
      limit: 25,
      activity: "active 2m ago",
      visibility: "public",
    },
    {
      id: "valorant-lfg",
      name: "#valorant-lfg",
      initial: "V",
      iconGradient: "linear-gradient(135deg,#ff8a8a,#d63b35)",
      role: "ADMIN",
      roleKey: "admin",
      connected: 8,
      limit: 10,
      activity: "active 11m ago",
      visibility: "public",
    },
    {
      id: "art-share",
      name: "#art-share",
      initial: "A",
      iconGradient: "linear-gradient(135deg,#7aa6ff,#a855f7)",
      role: "LEVEL 2",
      roleKey: "level2",
      connected: 5,
      limit: 15,
      activity: "active 1h ago",
      visibility: "public",
    },
    {
      id: "staff-backroom",
      name: "#staff-backroom",
      initial: "S",
      iconGradient: "linear-gradient(135deg,#5b5766,#2a2833)",
      role: "LEVEL 1",
      roleKey: "level1",
      connected: 3,
      limit: 5,
      activity: "active 4h ago",
      visibility: "private",
    },
  ];
}

export function getMods(): Mod[] {
  return [
    {
      id: "1",
      name: "Nova",
      initial: "N",
      iconGradient: "linear-gradient(135deg,#f472b6,#a855f7)",
      discordId: "184737264519823360",
      level: "LEVEL 2",
    },
    {
      id: "2",
      name: "pixelwitch",
      initial: "P",
      iconGradient: "linear-gradient(135deg,#7aa6ff,#a855f7)",
      discordId: "209114882930081792",
      level: "LEVEL 2",
    },
    {
      id: "3",
      name: "kettle",
      initial: "K",
      iconGradient: "linear-gradient(135deg,#ffb36b,#ff6f91)",
      discordId: "331902847710003200",
      level: "LEVEL 1",
    },
    {
      id: "4",
      name: "gizmo.exe",
      initial: "G",
      iconGradient: "linear-gradient(135deg,#5fd0a8,#3e9bc8)",
      discordId: "415088273920114688",
      level: "LEVEL 1",
    },
  ];
}

export function getMuted(): MutedUser[] {
  return [
    { id: "1", name: "toxicTom", initial: "T", reason: "posting spam invite links", duration: "2h 14m left", by: "Nova" },
    { id: "2", name: "raid_bot_07", initial: "R", reason: "coordinated raid attempt", duration: "permanent", by: "you" },
    { id: "3", name: "caps_lord", initial: "C", reason: "excessive caps after warning", duration: "27m left", by: "pixelwitch" },
  ];
}

export function getFilters() {
  return {
    bannedWords: [
      "freenitro",
      "airdrop-scam",
      "buyfollowers",
      "selfbot",
      "token-grab",
      "dox",
      "raidcall",
      "crypto-pump",
    ],
    bannedUrls: ["grabify.link", "iplogger.org", "discord-nitro.ru", "bit.ly/free-nitro", "steamcommnunity.com"],
  };
}

export function getAccess(): { whitelist: AccessEntry[]; blacklist: AccessEntry[] } {
  return {
    whitelist: [
      { id: "1", name: "Pixel Arcade", discordId: "1099274483920117760", initial: "PA" },
      { id: "2", name: "Café Lo-Fi", discordId: "882017463728841216", initial: "CL" },
      { id: "3", name: "Indie Devs Hub", discordId: "774401920038617088", initial: "ID" },
    ],
    blacklist: [
      { id: "1", name: "Raid Central", discordId: "620038841173000192", initial: "RC" },
      { id: "2", name: "Scam Hub 7", discordId: "558119284013858816", initial: "S7" },
    ],
  };
}
