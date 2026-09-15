(() => {
  const links = [...document.querySelectorAll('.primary-nav a, .site-footer nav a')];
  const sections = ['projects', 'experience', 'skills']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!('IntersectionObserver' in window) || !links.length || !sections.length) return;

  const setCurrent = (id) => {
    links.forEach((link) => {
      if (link.getAttribute('href') === `#${id}`) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setCurrent(visible.target.id);
    },
    { rootMargin: '-18% 0px -65% 0px', threshold: [0, 0.25, 0.6] },
  );

  sections.forEach((section) => observer.observe(section));
})();
