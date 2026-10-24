// Small, progressive-enhancement interactions. Everything still works without JavaScript.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Scroll reveals ────────────────────────────────────────────
const revealables = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealables.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealables.forEach((el) => io.observe(el));
}

// ── Rotating headline word ────────────────────────────────────
const rotator = document.querySelector<HTMLElement>('[data-rotator]');
if (rotator && !reduceMotion) {
  const words = Array.from(rotator.querySelectorAll<HTMLElement>('.rotator__word'));
  let current = 0;
  setInterval(() => {
    if (document.hidden) return;
    const prev = words[current];
    current = (current + 1) % words.length;
    prev.classList.remove('is-active');
    prev.classList.add('is-leaving');
    words[current].classList.add('is-active');
    setTimeout(() => prev.classList.remove('is-leaving'), 700);
  }, 2800);
}

// ── Nav: solid background after scrolling ─────────────────────
const nav = document.querySelector<HTMLElement>('[data-nav]');
const onScroll = () => nav?.classList.toggle('is-scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ── Highlight the section you're reading (nav + case-study index) ──
const trackers = document.querySelectorAll<HTMLAnchorElement>('[data-nav-link], [data-toc-link]');
if (trackers.length && 'IntersectionObserver' in window) {
  const byId = new Map<string, HTMLAnchorElement[]>();
  trackers.forEach((a) => {
    const id = a.dataset.navLink ?? a.dataset.tocLink ?? '';
    byId.set(id, [...(byId.get(id) ?? []), a]);
  });
  const sections = [...byId.keys()].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const links = byId.get(entry.target.id) ?? [];
        links.forEach((a) => {
          if (entry.isIntersecting) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  sections.forEach((s) => spy.observe(s));
}

// ── Copy email button ─────────────────────────────────────────
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy ?? '');
      const label = btn.querySelector('[data-copy-label]');
      if (label) {
        const original = label.textContent;
        label.textContent = 'Copied!';
        setTimeout(() => (label.textContent = original), 1800);
      }
    } catch {
      window.location.href = `mailto:${btn.dataset.copy}`;
    }
  });
});
