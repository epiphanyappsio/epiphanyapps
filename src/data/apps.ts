import type { LucideIcon } from "lucide-react";
import { Shield, KeyRound } from "lucide-react";
import logoSnapLogo from "@/assets/logosnap-ai-logo.png";
import brandTagLogo from "@/assets/brandtag-ai-logo.png";
import promoWizardLogo from "@/assets/promowizard-ai-logo.png";
import autoPilotLogo from "@/assets/autopilot-ai-logo.png";
import spiritLogo from "@/assets/spirit-network-logo.png";
import killSwitchLogo from "@/assets/killswitch-logo.png";
import ledditAsset from "@/assets/leddit-logo.png.asset.json";
import aiVibesAsset from "@/assets/ai-vibes-logo.png.asset.json";
import floAsset from "@/assets/flo-logo.png.asset.json";
import intelAnalystAsset from "@/assets/intel-analyst-logo-v2.png.asset.json";
import keyFlowAsset from "@/assets/key-flow-logo-v3.png.asset.json";
import divergentAsset from "@/assets/divergent-logo-v2.png.asset.json";
import linkAppAsset from "@/assets/link-app-logo.png.asset.json";
import screenTimeAsset from "@/assets/screen-time-logo-v2.png.asset.json";
import autoCloseAsset from "@/assets/auto-close-logo.png.asset.json";
import tagTrendsAsset from "@/assets/tag-trends-logo.png.asset.json";
import socialSwiftAsset from "@/assets/social-swift-ai-logo.png.asset.json";
import dragonAsset from "@/assets/chaos-ai-logo.png.asset.json";
import chaosAsset from "@/assets/chaos-ai-logo-v3.png.asset.json";
import devHiveAsset from "@/assets/dev-hive-logo.png.asset.json";
import gigglesAsset from "@/assets/giggles-logo.png.asset.json";
import pukiAsset from "@/assets/puki-logo.png.asset.json";
import luminisAsset from "@/assets/luminis-logo.jpg.asset.json";
import socialTeamAsset from "@/assets/social-team-ai-logo.png.asset.json";


export type AppCategory = "featured" | "revolutionary" | "social" | "studio";

export interface AppEntry {
  name: string;
  description: string;
  image?: string;
  /** Tailwind background class behind the logo image (defaults to black) */
  imageBg?: string;
  icon?: LucideIcon;
  url: string;
  externalUrl?: string;
  color: string;
  badge?: string;
  comingSoon?: boolean;
  category: AppCategory;
}


export const APPS: AppEntry[] = [
  {
    name: "Auto Close",
    description: "Take back your phone. AI-powered control that schedules app shutdowns, cuts background data, and blocks mic and camera access, so apps like YouTube can't listen or track you.",
    image: autoCloseAsset.url,
    url: "/auto-close",
    color: "text-purple-400",
    comingSoon: true,
    category: "revolutionary",
  },
  {
    name: "AutoPilot AI",
    description: "World's first autonomous social media engine. Slices content into viral clips & auto-posts everywhere.",
    image: autoPilotLogo,
    url: "/auto-pilot-ai",
    color: "text-blue-400",
    comingSoon: true,
    category: "revolutionary",
  },
  {
    name: "BrandTag AI",
    description: "Logo creation and branding, QR codes, social media sizing, custom AI with rule-based guided responses, hashtags, metatags, branded photos, AI images and batch processing.",
    image: brandTagLogo,
    url: "/brand-tag-ai",
    color: "text-purple-400",
    comingSoon: true,
    category: "featured",
  },
  {
    name: "Guardrail",
    description: "Hard guardrails for AI. Keeps your agents inside the lines — no rogue actions, no hijacked pipelines, no surprises in production.",
    icon: Shield,
    url: "/epiphany-guardrails",
    color: "text-yellow-400",
    comingSoon: true,
    category: "studio",
  },
  {
    name: "Kill Switch",
    description: "Automated digital legacy & business succession. AI-activated estate protection.",
    image: killSwitchLogo,
    url: "/kill-switch",
    color: "text-red-400",
    comingSoon: true,
    category: "revolutionary",
  },
  {
    name: "LogoSnap AI",
    description: "Instant AI-powered logo maker. Unique, professional logos in seconds.",
    image: logoSnapLogo,
    url: "/logo-snap-ai",
    color: "text-cyan-400",
    comingSoon: true,
    category: "featured",
  },
  {
    name: "PromoWizard AI",
    description: "Conjure social posts, captions, hashtags & AI visuals. Marketing magic in a flash.",
    image: promoWizardLogo,
    url: "/promo-wizard-ai",
    color: "text-pink-400",
    comingSoon: true,
    category: "featured",
  },
  {
    name: "Spirit Network",
    description: "Decentralized P2P VPN & DNS protector. Peer-to-peer bandwidth-sharing network.",
    image: spiritLogo,
    url: "/spirit-network",
    color: "text-green-400",
    comingSoon: true,
    category: "revolutionary",
  },
  {
    name: "AI ViBES",
    description: "AI, website, web app & app builder. Walks you all the way into the app stores.",
    image: aiVibesAsset.url,
    imageBg: "bg-white",
    url: "/ai-vibes",
    color: "text-blue-400",
    comingSoon: true,
    category: "featured",
  },
  {
    name: "Flo",
    description: "Your control center for all your work. Connects to every app you use — Gmail and beyond — with an AI that actually does the work for you.",
    image: floAsset.url,
    url: "/flo",
    color: "text-purple-400",
    comingSoon: true,
    category: "featured",
  },
  {
    name: "Intel Analyst",
    description: "Cuts through the noise and the spin. It cross-examines data from every angle to surface the truth about any topic you throw at it.",
    image: intelAnalystAsset.url,
    url: "/intel-analyst",
    color: "text-green-400",
    comingSoon: true,
    category: "studio",
  },
  {
    name: "Key Flow",
    description: "Plug in your AI subscriptions and API keys once. Key Flow rotates them the instant one taps out, so your work never hits a wall.",
    image: keyFlowAsset.url,
    url: "/key-flow",
    color: "text-cyan-400",
    comingSoon: true,
    category: "studio",
  },
  {
    name: "Leddit",
    description: "Reddit's cousin that gets you invited to the party with lead alerts and guided responses on any topic.",
    image: ledditAsset.url,
    imageBg: "bg-white",
    url: "/leddit",
    color: "text-lime-400",
    comingSoon: true,
    category: "featured",
  },
  {
    name: "Social Swift AI",
    description: "One tool to rule them all. Posts to 113 platforms with SEO and organic-traffic boosters, AI that switches tone and character limits per platform, and auto hashtags.",
    image: socialSwiftAsset.url,
    url: "/social-swift-ai",
    color: "text-indigo-400",
    comingSoon: true,
    category: "social",
  },
  {
    name: "Social Team",
    description: "A fully automated social team of AI agents, each an expert in its own lane — hashtags, captions, scheduling, engagement — working together like a real marketing department.",
    image: socialTeamAsset.url,
    url: "/social-team",
    color: "text-blue-400",
    comingSoon: true,
    category: "social",
  },
  {
    name: "Tag Trends",
    description: "Real-time trending hashtag alerts for every platform, so you can ride the wave while it's still rising and bump your posts to the top.",
    image: tagTrendsAsset.url,
    url: "/tag-trends",
    color: "text-pink-400",
    comingSoon: true,
    category: "social",
  },
  {
    name: "Chaos AI",
    description: "Tames the chaos. One organization engine that pulls your projects, notes, tasks and files into a single calm system your AI keeps tidy for you.",
    image: chaosAsset.url,
    imageBg: "bg-white",
    url: "/chaos-ai",
    color: "text-pink-400",
    comingSoon: true,
    category: "revolutionary",
  },
  {
    name: "Screen Time",
    description: "Adaptive education that interrupts screen time with quick quizzes matched to your grade — school, high school or college. It asks more often when grades slip, tracks progress, and gives parents full control plus alerts when sessions are skipped.",
    image: screenTimeAsset.url,
    imageBg: "bg-white",
    url: "/screen-time",
    color: "text-yellow-400",
    comingSoon: true,
    category: "revolutionary",
  },
  {
    name: "Puki",
    description: "A friendly little companion you look after. Feed it, talk to it, and it grows with you — a pocket-sized pet with a real personality.",
    image: pukiAsset.url,
    imageBg: "bg-white",
    url: "/puki",
    color: "text-orange-300",
    comingSoon: true,
    category: "revolutionary",
  },
  {
    name: "Giggles",
    description: "An AI joke bot with perfect timing. Endless original jokes, roasts and comebacks on any topic, in any style you want.",
    image: gigglesAsset.url,
    url: "/giggles",
    color: "text-fuchsia-400",
    comingSoon: true,
    category: "revolutionary",
  },
  {
    name: "Luminis Browser",
    description: "250 search engines in one browser. Search everywhere at once and get the whole picture instead of one biased opinion.",
    image: luminisAsset.url,
    imageBg: "bg-white",
    url: "/luminis-browser",
    color: "text-cyan-400",
    comingSoon: true,
    category: "featured",
  },
  {
    name: "One Key",
    description: "One API key to rule them all. A single hub key that controls, routes and secures every other key you own.",
    icon: KeyRound,
    url: "/one-key",
    color: "text-amber-400",
    comingSoon: true,
    category: "studio",
  },
  {
    name: "Divergent",
    description: "An AI anarchist information engine. It breaks the consensus apart and shows you every angle the mainstream feed buried.",
    image: divergentAsset.url,
    url: "/divergent",
    color: "text-red-400",
    comingSoon: true,
    category: "studio",
  },
  {
    name: "Link App",
    description: "The connective tissue for your stack. Links your apps, data and AI agents together so everything talks to everything without custom glue code.",
    image: linkAppAsset.url,
    url: "/link",
    color: "text-teal-400",
    comingSoon: true,
    category: "studio",
  },
  {
    name: "Dragon Social",
    description: "A decentralized, blockchain-powered peer-to-peer social network built for digital freedom, privacy and true user ownership.",
    image: dragonAsset.url,
    url: "/dragon-social",
    color: "text-cyan-400",
    comingSoon: true,
    category: "revolutionary",
  },
  {
    name: "Dev Hive",
    description: "The startup hub for builders, founders and investors. Connect your GitHub repos, websites and social platforms — your whole world in one place.",
    image: devHiveAsset.url,
    url: "/dev-hive",
    color: "text-amber-400",
    comingSoon: true,
    category: "social",
  },
];



// Always alphabetical
export const sortedApps = () => [...APPS].sort((a, b) => a.name.localeCompare(b.name));

export const getAppsByCategory = (category: AppCategory) =>
  sortedApps().filter((a) => a.category === category);
