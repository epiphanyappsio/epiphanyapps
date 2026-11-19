# Keep scroll animations, but never leave app cards invisible

## Goal
App cards always show on Cloudflare (and every phone/browser), while still sliding and fading in as you scroll.

## What changes
1. **Cards are visible by default.** Cards render fully visible in the page first. The slide-in effect only switches on once the page confirms scroll detection works, so a card can never get stuck invisible.
2. **Animation still plays.** Cards below the screen get "armed" (hidden and offset) only after the page loads, then slide and fade in as you scroll to them, with the same center pop and side slide-ins and the purple glow as now.
3. **Safety timer.** If a card hasn't appeared within about 2.5 seconds of being on screen (for example, a browser that blocks scroll detection), it shows anyway.
4. **Reduced motion.** Visitors with "reduce motion" turned on see cards instantly, with no animation.
5. **Cards already on screen when the page loads** show right away, so you never see an empty grid first.
6. **Logo paths:** these already use imported files that are packaged at the same paths in the build. I'll check the deployed `dist` output contains every logo and that the build passes cleanly.

## Technical details
- `AppCard.tsx`: `armed` state starts `false` (opacity 1, no transform). In an effect: if no `IntersectionObserver` or `prefers-reduced-motion` is on, or the card's bounding rect is already in the viewport, stay visible. Otherwise set `armed=true` and reveal on intersect. Add a fallback `setTimeout` to force `inView`.
- Keep the existing "active" highlight observer.
- Verify: `bun test scripts/`, production build, check that `dist/__l5e/assets-v1/*` has all logos, and run Playwright on desktop and mobile viewports (load, scroll, all cards visible, logos loaded).
