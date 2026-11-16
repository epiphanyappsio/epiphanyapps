

## Plan: Center "EPIPHANY APPS" text inside the bottom of the E logo

The text is currently positioned at the absolute bottom of the hero section. Instead, it needs to be centered within the lower opening of the "E" letterform in the background image.

### Changes to `src/components/Hero.tsx`

1. **Reposition the text container** — Change from `absolute bottom-2 md:bottom-6` to a centered position that places the text inside the bottom cavity of the E. Use `absolute bottom-[15%] md:bottom-[18%] left-1/2 -translate-x-1/2` (exact percentages will be tuned to land inside the E's lower opening).

2. **Keep the responsive layout** — Words side-by-side on desktop (`md:flex-row`), stacked on mobile (`flex-col`), small text size as currently set.

3. **Keep everything else** — Particles, gradient overlay, background image all stay the same.

This is a single-file, single-property tweak — just repositioning the text vertically so it sits centered and symmetrical inside the bottom portion of the E logo rather than at the very bottom edge of the hero.

