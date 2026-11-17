# Epiphany Apps

Upload this image into the code it will be used as a pwa and crop it as a circle for favicon throuhjout the sites pages. extend the beackground i need it to have the logo to the left and say Epiphany Apps in white text I'm goinmg to need a ulytimate hero section for the 50 apps im building 6 so far and another idea but it wont link back to sociualkmediatoolsworg as the authority pointing to our apps. Use the logo as the websites thee colors just a simpke landing page witrh updates seo and geo standards I could share y link for Featurebase on tnhe site too https://epiphanyapps.featurebase.app/ dont show the actual link but use text like build me an app or and add a feature oior wevn better request a festure this website wiullll host landing pages for each app and it will host the app itself. I could display every app and just let them keep scrolling as i add create new apps with a logo and minimal text maybe gfor the E background you extend it from the top left in a header but i think ill use a transparent just barely or maybe no header you can see but the text is up there there shpould be a seacr that it can serach keywords icon no blog just apps subscribe button i dont know how to build the ultimate websute for thsi im stumped been up 2 days now lol this is how im using the websites to bring in revenue: ⚖️ My strong recommendation:

Do this hybrid structure:

🏠 SocialMediaTools.org

Purpose: Traffic magnet + content authority hub

What to include:

Blog articles, comparisons, tutorials, and reviews.

An Apps page or section like socialmediatools.org/apps/ listing all your tools (including LogoSnap AI).

Each app listed there links to the main landing page for conversion.

🚀 EpiphanyApps.org

Purpose: Brand + product showcase

Each app has a focused, beautiful, minimal page with clear calls to action.

Example: epiphanyapps.io/logosnap-ai

You can even use canonical links to tie SEO juice together (so Google knows SocialMediaTools.org is the parent authority).

Anyways you get the idea

## Individual App Pages (Placeholder Template)
Each `/apps/[app-name]` page should have:
- Hero with app name and full description
- "Launch App" button (links to `[appname].epiphanyapps.io`)
- Feature list (3-5 bullet points)
- Screenshot placeholder area
- Back to home button

---

## Legal & Support Pages

### Terms of Service (`/terms`)
Create a clean, simple TOS page with:
- Standard SaaS terms template
- "Use at your own risk" clauses
- No refund policy
- Account termination rights
- Link to Privacy Policy
- Contact email: support@epiphanyapps.io

### Privacy Policy (`/privacy`)
Create a GDPR-compliant privacy policy with:
- What data we collect (emails, usage analytics)
- How we use data (app functionality, marketing)
- No selling of data clause
- Cookie usage
- User rights (delete account, export data)
- Contact email: support@epiphanyapps.io

### Support Page (`/support`)
Create a simple support page with:
- Heading: "Need Help?"
- Text: "We're here to help. Send us a message and we'll get back to you within 24 hours."
- Email link: support@epiphanyapps.io (clickable mailto link)
- Feature request section with text: "Have an idea? Submit feature requests and vote on others:"
- Featurebase widget embed code placeholder (add comment: "<!-- Insert# Epiphany Apps Landing Page - Complete Build Prompt

## Project Overview
Build a modern, bold landing page for Epiphany Apps - a portfolio showcasing 5 AI-powered web applications. The design should be cutting-edge, visually striking, and conversion-focused.

---

## Design Requirements

### Hero Section (60% viewport height)
- **Background**: Extend the provided gradient E logo image across the entire hero section
  - Purple-to-cyan gradient aesthetic
  - Glowing neon effect
  - Particles and sparkles maintained throughout
- **Layout**: 
  - Giant "E" logo positioned in LEFT corner (use provided image)
  - "EPIPHANY APPS" text in large white sans-serif font (top right area)
  - Tagline below brand name: "Apps that just work. No BS. No bloat."
- **CTA Button**: Single "Subscribe" button
  - Modern, prominent design
  - Positioned below tagline
  - Email capture functionality (show success message on submit)

### Apps Showcase Section
- **Layout**: 3-column grid on desktop, 1-column on mobile
- **Each App Card Includes**:
  - App icon/logo (circular or square with rounded corners)
  - App name as heading
  - One-sentence description
  - "View App →" button linking to `/apps/[app-name]`
- **Styling**: 
  - Glass morphism effect (semi-transparent cards)
  - Subtle hover animations
  - Maintain purple/cyan color scheme from hero

---

## App Content (5 Apps)

### 1. BrandTag AI
- **Description**: "Instantly watermark images with professional logos, embed invisible metadata, and optimize for social media with smart cropping and batch processing."
- **Icon**: Use a watermark/stamp icon
- **URL**: `/apps/brandtag-ai`

### 2. LogoSnap AI
- **Description**: "Transform your ideas into professional logos in seconds using advanced AI design technology."
- **Icon**: Use a camera or image icon
- **URL**: `/apps/logosnap-ai`

### 3. PromoWizard AI
- **Description**: "Create scroll-stopping social media content and ad copy that converts with AI-powered marketing."
- **Icon**: Use a magic wand or sparkles icon
- **URL**: `/apps/promowizard-ai`

### 4. Social Swift AI
- **Description**: "Schedule and manage posts across 45+ social platforms with one-click posting automation."
- **Icon**: Use a lightning bolt or rocket icon
- **URL**: `/apps/social-swift-ai`

### 5. Auto Pilot AI
- **Description**: "Revolutionary AI that automatically shares your content across every platform - the future of social media automation."
- **Icon**: Use an autopilot/steering wheel or robot icon
- **URL**: `/apps/auto-pilot-ai`
- **Special Badge**: Add a small "GAME CHANGER" badge or pill on this card

---

## Technical Requirements

### Routing
- Homepage: `/`
- Individual app pages: `/apps/[app-name]` (create placeholder pages)

### Responsive Design
- Mobile-first approach
- Hero section adapts to smaller screens (stack logo and text vertically)
- App grid: 3 columns → 2 columns (tablet) → 1 column (mobile)

### Animations
- Smooth scroll behavior
- Fade-in animations for app cards on scroll
- Hover effects on cards and buttons
- Subtle floating animation for hero section

### Components Needed
- Header/Navigation (simple logo + menu icon for future use)
- Hero section with background image
- App card component (reusable)
- Footer with copyright "© 2024 Epiphany Apps" AND links to:
  - Terms of Service (`/terms`)
  - Privacy Policy (`/privacy`)
  - Support (`/support`)

### Color Palette
- Primary: Cyan (#00E5FF)
- Secondary: Purple (#8B5CF6)
- Accent: Pink/Magenta (#EC4899)
- Background: Dark purple (#1E1B4B to #0F172A gradient)
- Text: White (#FFFFFF)
- Card backgrounds: Semi-transparent white (rgba(255, 255, 255, 0.1))

### Typography
- Headings: Bold, modern sans-serif (Inter, Poppins, or similar)
- Body: Clean, readable sans-serif
- Maintain high contrast for accessibility

---

## Subscribe Functionality
- Email input field in hero section
- "Subscribe" button
- On submit: 
  - Show success message: "Thanks! You'll be the first to know about new apps."
  - Store email (localStorage for now, can integrate real service later)
  - Clear input field

---

## Key Design Principles
1. **Bold & Modern**: This should feel like a premium SaaS product portfolio
2. **Visual Hierarchy**: Hero → Apps → Footer (clear flow)
3. **Conversion Focus**: Every element drives toward exploring apps or subscribing
4. **Performance**: Fast loading, optimized images, smooth animations
5. **Scannable**: User should understand what this is within 3 seconds

---

## Individual App Pages (Placeholder Template)
Each `/apps/[app-name]` page should have:
- Hero with app name and full description
- "Launch App" button (links to `[appname].epiphanyapps.io`)
- Feature list (3-5 bullet points)
- Screenshot placeholder area
- Back to home button

---

## Notes
- Use the provided E logo image as the hero background (extended/repeated)
- Keep it simple - no extra badges, testimonials, or footer bloat yet
- Focus on making it visually stunning and fast
- All apps link to subdomain structure: `[appname].epiphanyapps.io`

---

## Build This In One Shot
Create the complete landing page with all components, styling, and routing. Make it production-ready with clean, maintainable code. The goal is to launch this TODAY and start collecting subscribers while the other apps are being finalized.

Do whgatevr ypou have to do to drive th eost amount of traffic to this site maybe the logo Epiphany Apps a seacrh bar and a subscribe nbtton in th eheader whichever your going to do transparent or? blocks odf solid colors purples than the baby blue or pink your a designer ansd seo a geo serch the web deep scan deep think to generate th emost anmount of traffic possible please  biuild a pwa ake this mobile first and you can make exceutive decisions if youd think they d be better to override what i said use gemeini for ui and icons use claude to code and use chatgpt to brainstorm and research

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://epiphanyapps.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0848aacc-c802-4275-9ce0-25e75555b21c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
