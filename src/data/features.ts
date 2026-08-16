export interface Feature {
  no: string;
  icon: string;
  title: string;
  body: string;
}

export const features: Feature[] = [
  {
    no: "01",
    icon: "🔗",
    title: "Cross-Server Chat",
    body: "Connect channels across servers via webhooks. Messages relay instantly with full author context — public, private or topic-based.",
  },
  {
    no: "02",
    icon: "🛡️",
    title: "Moderation Built-In",
    body: "Spam and profanity filters, role-based control and shared mute lists keep every connected lobby clean across all servers at once.",
  },
  {
    no: "03",
    icon: "📊",
    title: "Polls & Events",
    body: "Run cross-server polls and competitions from Discord. Votes aggregate and results post back to every connected server.",
  },
  {
    no: "04",
    icon: "🎮",
    title: "Matchmaking Lobbies",
    body: "Dedicated lobby channels let players from different servers find each other, team up and queue together.",
  },
  {
    no: "05",
    icon: "🖥️",
    title: "Web Portal & Analytics",
    body: "A companion dashboard gives admins full control over lobbies, mods, filters and access — no commands required.",
  },
  {
    no: "06",
    icon: "🔒",
    title: "Safe by Design",
    body: "Bridge communities without giving strangers server access. Whitelists, blacklists and per-lobby roles keep you in control.",
  },
];

export const steps = [
  { n: "1", title: "Add Ari to your server", body: "Invite the bot with one click — no config needed to start." },
  { n: "2", title: "Create or join a lobby", body: "Run /connect and pick a lobby. Ari links your channel instantly." },
  { n: "3", title: "Chat across servers", body: "Messages relay live. Manage everything from the web dashboard." },
];
