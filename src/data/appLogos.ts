// Small WebP + PNG fallback for every app logo, stored as real files in the project
// so any host (Cloudflare, Netlify, etc.) serves them with no outside dependency.
import w1 from "@/assets/logos/auto-close.webp";
import p1 from "@/assets/logos/auto-close.png";
import w2 from "@/assets/logos/autopilot-ai.webp";
import p2 from "@/assets/logos/autopilot-ai.png";
import w3 from "@/assets/logos/brandtag-ai.webp";
import p3 from "@/assets/logos/brandtag-ai.png";
import w4 from "@/assets/logos/guardrail.webp";
import p4 from "@/assets/logos/guardrail.png";
import w5 from "@/assets/logos/kill-switch.webp";
import p5 from "@/assets/logos/kill-switch.png";
import w6 from "@/assets/logos/logosnap-ai.webp";
import p6 from "@/assets/logos/logosnap-ai.png";
import w7 from "@/assets/logos/promowizard-ai.webp";
import p7 from "@/assets/logos/promowizard-ai.png";
import w8 from "@/assets/logos/spirit-network.webp";
import p8 from "@/assets/logos/spirit-network.png";
import w9 from "@/assets/logos/ai-vibes.webp";
import p9 from "@/assets/logos/ai-vibes.png";
import w10 from "@/assets/logos/flo.webp";
import p10 from "@/assets/logos/flo.png";
import w11 from "@/assets/logos/intel-analyst.webp";
import p11 from "@/assets/logos/intel-analyst.png";
import w12 from "@/assets/logos/key-flow.webp";
import p12 from "@/assets/logos/key-flow.png";
import w13 from "@/assets/logos/leddit.webp";
import p13 from "@/assets/logos/leddit.png";
import w14 from "@/assets/logos/social-swift-ai.webp";
import p14 from "@/assets/logos/social-swift-ai.png";
import w15 from "@/assets/logos/social-team.webp";
import p15 from "@/assets/logos/social-team.png";
import w16 from "@/assets/logos/tag-trends.webp";
import p16 from "@/assets/logos/tag-trends.png";
import w17 from "@/assets/logos/chaos-ai.webp";
import p17 from "@/assets/logos/chaos-ai.png";
import w18 from "@/assets/logos/screen-time.webp";
import p18 from "@/assets/logos/screen-time.png";
import w19 from "@/assets/logos/puki.webp";
import p19 from "@/assets/logos/puki.png";
import w20 from "@/assets/logos/giggles.webp";
import p20 from "@/assets/logos/giggles.png";
import w21 from "@/assets/logos/luminis-browser.webp";
import p21 from "@/assets/logos/luminis-browser.png";
import w22 from "@/assets/logos/divergent.webp";
import p22 from "@/assets/logos/divergent.png";
import w23 from "@/assets/logos/link-app.webp";
import p23 from "@/assets/logos/link-app.png";
import w24 from "@/assets/logos/dragon-social.webp";
import p24 from "@/assets/logos/dragon-social.png";
import w25 from "@/assets/logos/dev-hive.webp";
import p25 from "@/assets/logos/dev-hive.png";

export const APP_LOGOS: Record<string, { webp: string; png: string }> = {
  "Auto Close": { webp: w1, png: p1 },
  "AutoPilot AI": { webp: w2, png: p2 },
  "BrandTag AI": { webp: w3, png: p3 },
  "Guardrail": { webp: w4, png: p4 },
  "Kill Switch": { webp: w5, png: p5 },
  "LogoSnap AI": { webp: w6, png: p6 },
  "PromoWizard AI": { webp: w7, png: p7 },
  "Spirit Network": { webp: w8, png: p8 },
  "AI ViBES": { webp: w9, png: p9 },
  "Flo": { webp: w10, png: p10 },
  "Intel Analyst": { webp: w11, png: p11 },
  "Key Flow": { webp: w12, png: p12 },
  "Leddit": { webp: w13, png: p13 },
  "Social Swift AI": { webp: w14, png: p14 },
  "Social Team": { webp: w15, png: p15 },
  "Tag Trends": { webp: w16, png: p16 },
  "Chaos AI": { webp: w17, png: p17 },
  "Screen Time": { webp: w18, png: p18 },
  "Puki": { webp: w19, png: p19 },
  "Giggles": { webp: w20, png: p20 },
  "Luminis Browser": { webp: w21, png: p21 },
  "Divergent": { webp: w22, png: p22 },
  "Link App": { webp: w23, png: p23 },
  "Dragon Social": { webp: w24, png: p24 },
  "Dev Hive": { webp: w25, png: p25 },
};
