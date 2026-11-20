// Call only in a browser and only from components that actually need motion.
// F0 intentionally imports no animation code into the base page.
export async function createMotionContext(
  scope: HTMLElement,
  setup: (gsap: typeof import('gsap').gsap) => void,
) {
  if (
    typeof window === 'undefined' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return null;
  }
  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
  ]);
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();
  // Animations added here later are reverted when the preference changes.
  media.add('(prefers-reduced-motion: no-preference)', () => {
    const context = gsap.context(() => setup(gsap), scope);
    return () => context.revert();
  });
  return { gsap, media, dispose: () => media.revert() };
}
