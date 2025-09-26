// ===== main.js =====
document.addEventListener('DOMContentLoaded', () => {
  // --- 1) Бургер-меню ---
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // --- 2) Подсветка активного пункта меню ---
  // Приводим путь страницы к виду "index.html", "menu.html" и т.п.
  const current = location.pathname
    .replace(/^\//, '')            // убираем ведущий слэш: "/menu.html" -> "menu.html"
    .replace(/[?#].*$/, '')        // отрезаем ?query и #hash
    || 'index.html';               // если пусто -> главная

  document.querySelectorAll('.nav__menu a').forEach(a => {
    const link = (a.getAttribute('href') || '')
      .replace(/^\//, '')          // одинаковый формат для href
      .replace(/[?#].*$/, '');

    if (link === current || (current === 'index.html' && (link === '' || link === 'index.html'))) {
      a.classList.add('active');
    }
  });

  // Фильтр меню (работает с 'alle', 'kaffee', 'desserts', 'frühstück')
document.querySelectorAll('[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    const f = (btn.dataset.filter || '').toLowerCase();
    document.querySelectorAll('.item').forEach(it => {
      const cat = (it.dataset.category || '').toLowerCase();
      const show = f === 'alle' || f === 'all' || f === '' || cat === f;
      it.style.display = show ? '' : 'none';
    });
  });
});

  // --- 4) Сообщение об успехе на странице брони (booking.html) ---
  const form = document.getElementById('bookingForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = form.querySelector('.form__msg');
    msg.textContent = 'Заявка отправлена! Мы свяжемся с вами по email.';
    form.reset();
  });

  console.log('JavaScript funktioniert! 🚀');
});