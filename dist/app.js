(() => {
  'use strict';
  const data = window.SAGA_DATA;
  const $ = (id) => document.getElementById(id);
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const behavior = reduced ? 'auto' : 'smooth';
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = $('mobile-menu');
  function closeMenu(restoreFocus) {
    mobileMenu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', '메뉴 열기');
    if (restoreFocus) menuToggle.focus();
  }
  menuToggle.addEventListener('click', () => {
    const opened = menuToggle.getAttribute('aria-expanded') === 'true';
    mobileMenu.hidden = opened;
    menuToggle.setAttribute('aria-expanded', String(!opened));
    menuToggle.setAttribute('aria-label', opened ? '메뉴 열기' : '메뉴 닫기');
  });
  mobileMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeMenu(false);
  });
  document.addEventListener('click', (e) => {
    if (!mobileMenu.hidden && !e.target.closest('.site-header')) closeMenu(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.hidden) closeMenu(true);
  });
  if ('IntersectionObserver' in window) {
    const links = Array.from(document.querySelectorAll('.desktop-nav a'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => {
          const active = a.hash === '#' + entry.target.id;
          a.classList.toggle('active', active);
          if (active) a.setAttribute('aria-current', 'location');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    links.forEach((a) => { const section = document.querySelector(a.hash); if (section) observer.observe(section); });
  }
  const dialog = $('video-dialog');
  let returnFocus = null;
  function openVideo(button) {
    const id = button.dataset.video;
    if (!/^[A-Za-z0-9_-]{11}$/.test(id || '')) return;
    const start = Math.max(0, Number(button.dataset.start) || 0);
    const title = button.dataset.title || 'SaGA 영상';
    const source = 'https://www.youtube.com/watch?v=' + id + (start ? '&t=' + start + 's' : '');
    if (typeof dialog.showModal !== 'function') {
      window.open(source, '_blank', 'noopener');
      return;
    }
    returnFocus = button;
    $('dialog-title').textContent = title;
    $('dialog-source').href = source;
    const frame = document.createElement('iframe');
    frame.title = title;
    frame.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&cc_load_policy=0' + (start ? '&start=' + start : '');
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    $('dialog-screen').replaceChildren(frame);
    dialog.showModal();
    document.body.classList.add('modal-open');
    $('close-video').focus();
  }
  document.addEventListener('click', (e) => {
    const button = e.target.closest('button[data-video]');
    if (button) openVideo(button);
  });
  $('close-video').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    $('dialog-screen').replaceChildren();
    document.body.classList.remove('modal-open');
    if (returnFocus && returnFocus.isConnected) returnFocus.focus();
  });
  dialog.addEventListener('click', (e) => {
    if (e.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom) dialog.close();
  });
  const lessonButtons = Array.from(document.querySelectorAll('[data-lesson]'));
  lessonButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
      const lesson = data.lessons[i];
      lessonButtons.forEach((b,j) => b.setAttribute('aria-pressed', String(i === j)));
      const screen = $('lesson-screen');
      screen.dataset.video = lesson.id;
      screen.dataset.title = lesson.title;
      screen.setAttribute('aria-label', lesson.title + ' 재생');
      $('lesson-image').src = 'https://i.ytimg.com/vi/' + lesson.id + '/hqdefault.jpg';
      $('lesson-image').alt = lesson.title + ' 영상 썸네일';
      $('lesson-tag').textContent = lesson.tag;
      $('lesson-title').textContent = lesson.title;
      $('lesson-description').textContent = lesson.desc;
      $('lesson-source').href = 'https://www.youtube.com/watch?v=' + lesson.id;
    });
  });
  document.querySelectorAll('img[src*="i.ytimg.com"]').forEach((img) => {
    img.addEventListener('error', () => {
      if (!img.src.endsWith('/assets/recruitment-poster.jpg')) img.src = 'assets/recruitment-poster.jpg';
    });
  });
  const track = $('testimonial-track');
  function moveReviews(direction) {
    const card = track.querySelector('.testimonial');
    const gap = parseFloat(getComputedStyle(track).columnGap) || 22;
    track.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior });
  }
  $('reviews-prev').addEventListener('click', () => moveReviews(-1));
  $('reviews-next').addEventListener('click', () => moveReviews(1));
  track.addEventListener('keydown', (e) => {
    if (e.target !== track) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      moveReviews(e.key === 'ArrowRight' ? 1 : -1);
    }
  });
  const symbols = {
    share: '<circle cx="14" cy="32" r="6"/><circle cx="48" cy="13" r="6"/><circle cx="48" cy="51" r="6"/><path d="m20 29 22-12M20 35l22 12"/>',
    science: '<circle cx="32" cy="32" r="4"/><ellipse cx="32" cy="32" rx="27" ry="10"/><ellipse cx="32" cy="32" rx="27" ry="10" transform="rotate(60 32 32)"/><ellipse cx="32" cy="32" rx="27" ry="10" transform="rotate(120 32 32)"/>',
    grow: '<path d="M32 56V30M32 39C15 39 9 29 11 17c13-2 23 6 21 22Zm0-10C31 15 42 6 54 8c2 13-8 24-22 21ZM20 56h24"/>',
    heart: '<path d="M32 53 11 32C-2 18 17 4 32 20 47 4 66 18 53 32Z"/><path d="M19 36h9l5-11 5 19 5-8h6"/>',
    medical: '<path d="M25 7h14v18h18v14H39v18H25V39H7V25h18Z"/>',
    art: '<rect x="8" y="12" width="48" height="40" rx="4"/><path d="m27 23 15 9-15 9ZM8 21h9M8 43h9M47 21h9M47 43h9"/>',
    sport: '<circle cx="32" cy="11" r="5"/><path d="m25 22 13 5 12-6M25 22l-9 12-9 2M32 25l-6 15 15 6 4 13M26 40l-9 13H7"/>',
    work: '<rect x="6" y="21" width="52" height="34" rx="4"/><path d="M21 21v-9h22v9M6 35c17 8 35 8 52 0M27 32h10v10H27Z"/>',
    startup: '<path d="M24 42c-8-19 7-33 29-32 1 22-13 37-32 29M27 22H15L5 35l17 2M42 38v12L29 60l-2-18M17 47l-9 9"/><circle cx="42" cy="21" r="5"/>',
    coffee: '<path d="M10 24h34v19a14 14 0 0 1-14 14h-6a14 14 0 0 1-14-14ZM44 27h5a9 9 0 0 1 0 18h-5M8 59h43M19 7c-6 5 6 7 0 12M31 5c-6 5 6 7 0 12"/>',
    globe: '<circle cx="32" cy="32" r="26"/><ellipse cx="32" cy="32" rx="11" ry="26"/><path d="M6 32h52M11 17h42M11 47h42"/>'
  };
  const groupButtons = Array.from(document.querySelectorAll('[data-group]'));
  let currentGroup = 0;
  function selectGroup(index, moveFocus) {
    currentGroup = (index + data.groups.length) % data.groups.length;
    const group = data.groups[currentGroup];
    groupButtons.forEach((button, i) => {
      const selected = i === currentGroup;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    const panel = $('group-panel');
    panel.setAttribute('aria-labelledby', 'group-tab-' + currentGroup);
    panel.dataset.current = String(currentGroup);
    $('group-en').textContent = group.en;
    $('group-title').textContent = group.title;
    $('group-desc').textContent = group.desc;
    $('group-tags').innerHTML = group.tags.map((tag) => '<span>' + esc(tag) + '</span>').join('');
    const stats = group.stats || [];
    $('group-stats').hidden = stats.length === 0;
    $('group-stats').innerHTML = stats.map((s) => '<div><strong>' + esc(s.value) + '<span>' + esc(s.unit) + '</span></strong><small>' + esc(s.label) + '</small></div>').join('');
    $('group-stats-note').hidden = !group.stats_note;
    $('group-stats-note').textContent = group.stats_note || '';
    $('group-activities-label').textContent = group.activities_label;
    $('group-activities').innerHTML = group.activities.map((a, i) => '<li><span>' + String(i + 1).padStart(2, '0') + '</span><div><h4>' + esc(a.title) + '</h4><p>' + esc(a.text) + '</p></div></li>').join('');
    $('group-source-note').textContent = group.source_note;
    $('group-source').href = group.source.href;
    $('group-source').innerHTML = '<strong>소개자료 PDF 보기</strong><span>' + group.source.pages + '쪽 · ' + group.source.size_mb + ' MB ↗</span>';
    const visual = $('group-visual');
    if (group.photos && group.photos.length) {
      visual.className = 'group-visual group-gallery' + (group.photos.length === 1 ? ' single-visual' : '');
      visual.innerHTML = group.photos.map((p) => '<figure><a href="' + esc(p.src) + '" target="_blank" rel="noopener" aria-label="' + esc(p.caption) + ' 이미지 크게 보기"><img src="' + esc(p.src) + '" alt="' + esc(p.alt) + '" width="' + p.width + '" height="' + p.height + '" loading="lazy"></a><figcaption>' + esc(p.caption) + '</figcaption></figure>').join('');
    } else {
      visual.className = 'group-visual';
      visual.innerHTML = '<div class="group-artwork"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + symbols[group.icon] + '</svg><p>' + esc(group.name) + '</p></div>';
    }
    $('group-count').textContent = String(currentGroup + 1).padStart(2, '0') + ' / 12 · ' + group.name;
    if (moveFocus) groupButtons[currentGroup].focus({ preventScroll: true });
    if (groupButtons[currentGroup].scrollIntoView) groupButtons[currentGroup].scrollIntoView({ behavior, block: 'nearest', inline: 'nearest' });
  }
  groupButtons.forEach((button, index) => {
    button.addEventListener('click', () => selectGroup(index, false));
    button.addEventListener('keydown', (event) => {
      let next = null;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = currentGroup + 1;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = currentGroup - 1;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = data.groups.length - 1;
      if (next !== null) { event.preventDefault(); selectGroup(next, true); }
    });
  });
  $('group-next').addEventListener('click', () => selectGroup(currentGroup + 1, false));
  $('group-prev').addEventListener('click', () => selectGroup(currentGroup - 1, false));
  let touchStart = null;
  $('group-panel').addEventListener('touchstart', (e) => {
    const touch = e.changedTouches[0];
    touchStart = { x: touch.clientX, y: touch.clientY };
  }, { passive: true });
  $('group-panel').addEventListener('touchend', (e) => {
    if (!touchStart) return;
    const touch = e.changedTouches[0];
    const x = touch.clientX - touchStart.x;
    const y = touch.clientY - touchStart.y;
    if (Math.abs(x) > 70 && Math.abs(x) > Math.abs(y) * 1.5) selectGroup(currentGroup + (x < 0 ? 1 : -1), false);
    touchStart = null;
  }, { passive: true });
  $('group-panel').dataset.current = '0';
  let calendar = '';
  const weekdays = ['일','월','화','수','목','금','토'];
  for (let month = 0; month < 12; month++) {
    const offset = new Date(Date.UTC(2027, month, 1)).getUTCDay();
    const count = new Date(Date.UTC(2027, month + 1, 0)).getUTCDate();
    let rows = '';
    for (let week = 0; week < 6; week++) {
      let cells = '';
      for (let day = 0; day < 7; day++) {
        const value = week * 7 + day - offset + 1;
        if (value < 1 || value > count) { cells += '<td></td>'; continue; }
        const iso = '2027-' + String(month + 1).padStart(2, '0') + '-' + String(value).padStart(2, '0');
        const term = data.terms.findIndex((t) => iso >= t.range[0] && iso <= t.range[1]);
        cells += '<td' + (term >= 0 ? ' class="t' + (term + 1) + '" title="' + (term + 1) + '학기 운영 기간"' : '') + '><time datetime="' + iso + '">' + value + '</time></td>';
      }
      rows += '<tr>' + cells + '</tr>';
    }
    calendar += '<div class="calendar-month"><table><caption>2027년 ' + (month + 1) + '월</caption><thead><tr>' + weekdays.map((d) => '<th scope="col">' + d + '</th>').join('') + '</tr></thead><tbody>' + rows + '</tbody></table></div>';
  }
  $('academic-calendar').innerHTML = calendar;
})();
