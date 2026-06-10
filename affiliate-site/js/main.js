/* ============================================================
   KI-Tools Vergleich — Main JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Tool-Karten Filter ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const toolCards  = document.querySelectorAll('.tool-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.filter;
      toolCards.forEach(card => {
        if (cat === 'all' || card.dataset.category === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* ── FAQ Accordion ── */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Smooth Scroll für Anker-Links ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Newsletter Form ── */
  const form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        form.innerHTML = '<p style="color:var(--cyan);font-weight:600;">✓ Danke! Du erhältst eine Bestätigungsmail.</p>';
      }
    });
  }

  /* ── Affiliate Link Tracking (einfaches Click-Logging) ── */
  document.querySelectorAll('[data-affiliate]').forEach(link => {
    link.addEventListener('click', () => {
      const tool = link.dataset.affiliate;
      console.log(`[Affiliate Click] Tool: ${tool}`);
      // Hier später Analytics-Event einfügen (z.B. Google Analytics)
      // gtag('event', 'affiliate_click', { tool_name: tool });
    });
  });

  /* ── Sticky Nav Schatten ── */
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 4px 24px rgba(0,0,0,.4)'
      : 'none';
  });

});
