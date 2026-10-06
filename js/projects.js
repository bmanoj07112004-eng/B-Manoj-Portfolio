/* =========================================================
   "More work" cards — edit this list to add or change projects.
   Each entry renders as one card in the #work section.

   Fields:
     title       Card heading
     status      "live" | "wip" | "proto" | "paused"  (sets the tag colour)
     statusLabel Text inside the tag, e.g. "Rapid prototype · 2026"
     role        Your role on the project
     desc        1–3 sentences: what it is + what you designed
     tools       Short list of tools / skills used
     link        { href, label } or null if there is no public link
     art         Optional CSS background for the card header
     image       Optional image URL for the card header
   ========================================================= */

window.PROJECTS = [
  {
    title: "Hamster Game",
    status: "proto",
    statusLabel: "Rapid prototype · 2026",
    role: "Game Designer & Developer · Solo",
    desc: "A funny, hamster-themed casual browser game. I took it from idea to a playable first version in about 16 hours by finding the core mechanic fast and cutting everything else. Now re-prototyping the concept in Unreal Engine 5.",
    tools: ["Rapid prototyping", "Casual design", "Browser", "UE5 (in progress)"],
    link: { href: "https://lnkd.in/p/g7zQ_iun", label: "See the prototype →" },
    art: "radial-gradient(circle at 75% 30%, rgba(242,163,58,.45), transparent 55%), linear-gradient(135deg, #2a1d10, #120d08)"
  },
  {
    title: "Outlander",
    status: "wip",
    statusLabel: "In early production",
    role: "Lead Game Designer · Red Deck Studio",
    desc: "An atmospheric sci-fi survival adventure on an uncharted world, built around exploration, scarcity and making somewhere hostile liveable. Unreal Engine 5. Nothing revealed publicly yet.",
    tools: ["Unreal Engine 5", "Survival systems", "Exploration design"],
    link: { href: "https://red-deck.com/games/outlander", label: "Project page →" },
    art: "radial-gradient(circle at 70% 35%, rgba(80,130,255,.35), transparent 55%), linear-gradient(135deg, #0e1a33, #070a12)"
  },
  {
    title: "Multiplayer Prototype",
    status: "paused",
    statusLabel: "Early project · Paused",
    role: "Game Designer & Developer",
    desc: "An early online multiplayer game built in Unity with Photon PUN. It taught me networked gameplay and how scope decides what ships. I paused it because of budget and took the lessons into UE5.",
    tools: ["Unity", "Photon PUN", "Multiplayer design"],
    link: null,
    art: "radial-gradient(circle at 70% 30%, rgba(147,197,253,.28), transparent 55%), linear-gradient(135deg, #142030, #0a0e15)"
  },
  {
    title: "UE5 Design Experiments",
    status: "proto",
    statusLabel: "2023 – 2025",
    role: "Self-directed",
    desc: "Short Unreal Engine 5 prototypes across story-driven, horror, combat systems, enemy AI, environments and level design. Each one taught me a new design skill before Blackout Arena.",
    tools: ["Blueprints", "C++", "Behavior Trees", "Level design"],
    link: null,
    art: "radial-gradient(circle at 75% 35%, rgba(229,38,47,.35), transparent 55%), linear-gradient(135deg, #2a0f12, #0c0708)"
  },
  {
    title: "OptaLead AI",
    status: "live",
    statusLabel: "Shipped · Beyond games",
    role: "Architect & Builder",
    desc: "An AI agent and automation platform that runs voice calls and WhatsApp workflows. It's the same AI-workflow skill set I use to speed up game production.",
    tools: ["AI agents", "Automation workflows", "Speech AI"],
    link: { href: "https://youtu.be/NtDdmXQsikA", label: "Watch the demo →" },
    art: "repeating-radial-gradient(circle at 80% 40%, rgba(229,38,47,.22) 0 1px, transparent 1px 16px), linear-gradient(135deg, #1a0b0d, #0a0708)"
  }

  // TODO(B Manoj): add your other games here, one object per game, same shape as above.
];
