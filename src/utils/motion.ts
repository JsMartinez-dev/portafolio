export function installMotion() {
  const preference = matchMedia('(prefers-reduced-motion: no-preference)');
  const portrait = document.querySelector('figure');
  const observer = new IntersectionObserver(([entry]) =>
    portrait?.toggleAttribute('data-floating', entry?.isIntersecting ?? false),
  );
  if (portrait) observer.observe(portrait);
  let dispose: (() => void) | undefined;
  let active = true;
  let reachedContent = false;
  const contentObserver = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      reachedContent = true;
      contentObserver.disconnect();
      void start().catch(() => {});
    }
  });
  document
    .querySelectorAll('.home-section, .contact')
    .forEach((section) => contentObserver.observe(section));
  async function start() {
    if (!reachedContent || !preference.matches || !active) return;
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]);
    if (!active || !preference.matches || dispose) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(
        '.section-title, .feature > img, .feature > div, .feature .actions, .editorial p, .skills > div, .skills li, .contact h2, .contact p, .contact a',
      );
      ScrollTrigger.batch(targets, {
        start: 'top 96%',
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 18, opacity: 0.72 },
            {
              y: 0,
              opacity: 1,
              duration: 0.62,
              stagger: 0.08,
              ease: 'power2.out',
              clearProps: 'opacity,transform',
            },
          ),
      });
    });
    dispose = () => context.revert();
  }
  function change() {
    dispose?.();
    dispose = undefined;
    void start().catch(() => {});
  }
  preference.addEventListener('change', change);
  change();
  window.addEventListener(
    'pagehide',
    () => {
      active = false;
      observer.disconnect();
      contentObserver.disconnect();
      preference.removeEventListener('change', change);
      dispose?.();
    },
    { once: true },
  );
}
