/* ==========================================================
   TEXAS RANCH STEAKHOUSE — interacciones
   Puertas de saloon de entrada; rótulo de neón que parpadea
   y un matojo rodando; la parrillada con sus piezas marcadas
   sobre la foto real; la vaca del mantel con sus cortes;
   la pizarra de la carta (hamburguesa simple o doble);
   carteles de «se busca» con recompensa; fuegos sobre la
   terraza de noche.
   ========================================================== */
(() => {
'use strict';

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const STATIC = /[?&]static\b/.test(location.search);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches || STATIC;
const hasGSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
const motion = hasGSAP && !reduced;
if (hasGSAP) gsap.registerPlugin(ScrollTrigger);
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
document.documentElement.classList.add('js');
if (!motion) document.documentElement.classList.add('no-motion');
const play = (v) => { if (!v) return; const p = v.play(); if (p) p.catch(() => {}); };
const IMG = (f) => 'assets/img/' + f;

/* ----------------------------------------------------------
   IDIOMAS
   ---------------------------------------------------------- */
const I18N = window.TR_I18N || { langs: [{ c: 'es', n: 'Castellano', loc: 'es-ES' }], ui: { es: {} } };
const CARTA = window.TR_CARTA || { sections: [], items: [] };
const LANGS = I18N.langs, CODES = LANGS.map((l) => l.c), LANG_KEY = 'texasranch-lang';
const store = { get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };
let lang = [new URLSearchParams(location.search).get('lang'), store.get(LANG_KEY)].find((c) => CODES.includes(c)) || 'es';
const t = (k, vars) => {
  let s = (I18N.ui[lang] && I18N.ui[lang][k]) ?? (I18N.ui.es && I18N.ui.es[k]) ?? k;
  if (vars) for (const v in vars) s = s.split('{' + v + '}').join(vars[v]);
  return s;
};
const loc = () => (LANGS.find((l) => l.c === lang) || LANGS[0]).loc;
const money = (v) => new Intl.NumberFormat(loc(), { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }).format(v);
const onLang = [];
let refreshT = 0;
const refreshSoon = () => { if (!hasGSAP) return; clearTimeout(refreshT); refreshT = setTimeout(() => ScrollTrigger.refresh(), 200); };
function paintSwitches() {
  const cur = LANGS.find((l) => l.c === lang);
  $$('[data-lang-switch]').forEach((box) => {
    box.innerHTML = `<button class="lang__btn" type="button" aria-expanded="false" aria-label="${t('lang.change')} (${cur.n})"><i class="ph-bold ph-globe-simple" aria-hidden="true"></i><span>${cur.c.toUpperCase()}</span><i class="ph-bold ph-caret-down" aria-hidden="true"></i></button>
      <ul class="lang__menu" hidden>${LANGS.map((l) => `<li><button type="button" lang="${l.c}" data-set-lang="${l.c}"${l.c === lang ? ' aria-current="true"' : ''}><b>${l.c.toUpperCase()}</b>${l.n}</button></li>`).join('')}</ul>`;
  });
  $$('[data-lang-list]').forEach((box) => {
    box.innerHTML = `<span>${t('lang.label')}</span>` + LANGS.map((l) => `<button type="button" lang="${l.c}" data-set-lang="${l.c}"${l.c === lang ? ' aria-current="true"' : ''}>${l.n}</button>`).join('');
  });
}
function applyLang() {
  document.documentElement.lang = lang;
  document.title = t('meta.title');
  const md = $('#metaDesc'); if (md) md.setAttribute('content', t('meta.desc'));
  $$('[data-i18n]').forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
  $$('[data-i18n-attr]').forEach((el) => el.dataset.i18nAttr.split(';').forEach((p) => {
    const [a, k] = p.split(':'); if (a && k) el.setAttribute(a.trim(), t(k.trim()));
  }));
  paintSwitches();
  onLang.forEach((f) => f());
}
function setLang(c) {
  if (!CODES.includes(c) || c === lang) return;
  lang = c; store.set(LANG_KEY, c);
  try { const u = new URL(location.href); if (c === 'es') u.searchParams.delete('lang'); else u.searchParams.set('lang', c); history.replaceState(history.state, '', u); } catch (e) {}
  applyLang(); refreshSoon();
}
const closeLangMenus = () => $$('.lang__menu:not([hidden])').forEach((m) => { m.hidden = true; m.previousElementSibling.setAttribute('aria-expanded', 'false'); });
document.addEventListener('click', (e) => {
  const sw = e.target.closest('.lang__btn');
  if (sw) { const m = sw.nextElementSibling, open = m.hidden; closeLangMenus(); m.hidden = !open; sw.setAttribute('aria-expanded', String(open)); if (open) { const c = m.querySelector('[aria-current]'); if (c) c.focus(); } return; }
  const set = e.target.closest('[data-set-lang]');
  if (set) { const box = set.closest('[data-lang-switch]'); closeLangMenus(); setLang(set.dataset.setLang); if (box) { const b = box.querySelector('.lang__btn'); if (b) b.focus(); } return; }
  if (!e.target.closest('.lang__menu')) closeLangMenus();
});
document.addEventListener('keydown', (e) => {
  const m = $('.lang__menu:not([hidden])'); if (!m) return;
  const items = $$('button', m), i = items.indexOf(document.activeElement);
  if (e.key === 'Escape') { closeLangMenus(); m.previousElementSibling.focus(); }
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); items[(i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length].focus(); }
});
document.addEventListener('focusin', (e) => { const m = $('.lang__menu:not([hidden])'); if (m && !m.parentNode.contains(e.target)) closeLangMenus(); });

/* ----------------------------------------------------------
   HORARIO (Google, temporada actual) · 0 = domingo
   ---------------------------------------------------------- */
const HOURS = { 0: null, 1: null, 2: [1020, 1320], 3: [1020, 1320], 4: [1020, 1320], 5: [1020, 1350], 6: [780, 1350] };
const hm = (m) => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;
const madrid = () => {
  try {
    const p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    const g = (k) => (p.find((x) => x.type === k) || {}).value;
    return { wd: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(g('weekday')), m: (+g('hour') % 24) * 60 + +g('minute') };
  } catch (e) { const d = new Date(); return { wd: d.getDay(), m: d.getHours() * 60 + d.getMinutes() }; }
};
const dayName = (wd) => new Intl.DateTimeFormat(loc(), { weekday: 'long' }).format(new Date(2026, 9, 18 + wd, 12)); // 18-oct-2026 = domingo
function paintLive() {
  const { wd, m } = madrid(), h = HOURS[wd];
  const open = !!h && m >= h[0] && m < h[1];
  let txt;
  if (open) txt = t('live.open', { h: hm(h[1]) });
  else {
    let when = null, at = 0;
    if (h && m < h[0]) { when = t('live.today'); at = h[0]; }
    else for (let i = 1; i <= 7; i++) { const d = (wd + i) % 7; if (HOURS[d]) { when = i === 1 ? t('live.tomorrow') : t('live.on', { d: dayName(d) }); at = HOURS[d][0]; break; } }
    txt = t('live.closed', { when, h: hm(at) });
  }
  $$('[data-live]').forEach((el) => { el.classList.toggle('is-open', open); el.classList.toggle('is-closed', !open); const s = $('[data-live-text]', el); if (s) s.textContent = txt; });
}
function paintHours() {
  const ul = $('#hoursList'); if (!ul) return;
  const { wd } = madrid();
  ul.innerHTML = [1, 2, 3, 4, 5, 6, 0].map((d) => {
    const h = HOURS[d];
    return `<li class="${d === wd ? 'is-today' : ''} ${h ? '' : 'is-off'}"><span>${dayName(d)}${d === wd ? `<small>${t('vis.today')}</small>` : ''}</span><span>${h ? hm(h[0]) + ' – ' + hm(h[1]) : t('vis.closed')}</span></li>`;
  }).join('');
}
onLang.push(paintLive, paintHours);
setInterval(paintLive, 60000);

/* ----------------------------------------------------------
   CABECERA Y SCROLL
   ---------------------------------------------------------- */
const nav = $('#nav'), burger = $('#burger'), drawer = $('#drawer');
let lenis = null;
if (motion && typeof window.Lenis !== 'undefined') {
  lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}
const goTo = (sel) => { const el = $(sel); if (!el) return; if (lenis) lenis.scrollTo(el, { offset: -60, duration: 1.2 }); else el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); };
const toggleDrawer = (open) => { drawer.classList.toggle('is-open', open); burger.setAttribute('aria-expanded', String(open)); document.body.classList.toggle('is-locked', open); if (lenis) open ? lenis.stop() : lenis.start(); };
burger.addEventListener('click', () => toggleDrawer(!drawer.classList.contains('is-open')));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && drawer.classList.contains('is-open')) { toggleDrawer(false); burger.focus(); } });
$$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => { const id = a.getAttribute('href'); if (id.length < 2) return; e.preventDefault(); toggleDrawer(false); goTo(id); history.replaceState(history.state, '', id); }));
let lastY = 0;
addEventListener('scroll', () => { const y = scrollY; nav.classList.toggle('is-solid', y > 40); nav.classList.toggle('is-hidden', y > lastY && y > 700 && !drawer.classList.contains('is-open')); lastY = y; }, { passive: true });
const navLinks = $$('.nav__links a');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle('is-on', a.getAttribute('href') === '#' + en.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach((s) => io.observe(s));
}
const fmtInt = (n) => new Intl.NumberFormat(loc()).format(n);
onLang.push(() => $$('[data-count]').forEach((el) => { el.textContent = fmtInt(+el.dataset.count); }));
const ranVid = $('#ranVid');
if (ranVid && 'IntersectionObserver' in window) new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting && !STATIC) play(ranVid); else ranVid.pause(); }), { threshold: 0.25 }).observe(ranVid);

/* ----------------------------------------------------------
   LA PARRILLADA · piezas sobre la foto
   ---------------------------------------------------------- */
const PARTS = [
  { k: 'chorizo', x: 23, y: 62 }, { k: 'secreto', x: 54, y: 43 }, { k: 'pollo', x: 38, y: 76 },
  { k: 'burger', x: 63, y: 76 }, { k: 'ribs', x: 84, y: 55 }, { k: 'champ', x: 30, y: 21 }, { k: 'patatas', x: 70, y: 18 }
];
let partOn = -1;
function paintParts() {
  const pins = $('#pins'), list = $('#parts'); if (!pins) return;
  pins.innerHTML = PARTS.map((p, i) => `<button class="pin" type="button" style="left:${p.x}%;top:${p.y}%" data-part="${i}" aria-pressed="${i === partOn}" aria-label="${t('hs.' + p.k)}">${i + 1}<span class="pin__tip">${t('hs.' + p.k)}</span></button>`).join('');
  list.innerHTML = PARTS.map((p, i) => `<li><button type="button" data-part="${i}" aria-pressed="${i === partOn}"><i>${i + 1}</i><b>${t('hs.' + p.k)}</b><span>${t('hs.' + p.k + '.d')}</span></button></li>`).join('');
}
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-part]'); if (!b) return;
  const i = +b.dataset.part; partOn = partOn === i ? -1 : i;
  $$('[data-part]').forEach((x) => x.setAttribute('aria-pressed', String(+x.dataset.part === partOn)));
});
onLang.push(paintParts);

/* ----------------------------------------------------------
   EL CORTE · la vaca del mantel
   ---------------------------------------------------------- */
const DISH_CUT = { rib: { k: 'cor.rib', p: 19.95 }, short: { k: 'cor.short', p: 28.95 }, tender: { k: 'cor.tender', p: 28 } };
const CUT_NAME = { head: 'Head', neck: 'Neck', chuck: 'Chuck', sirloin: 'Sirloin', round: 'Round', brisket: 'Brisket', plate: 'Plate', flank: 'Flank', shank: 'Shank' };
let cutOn = null;
function paintCut() {
  const T = $('#cutT'), D = $('#cutD'), P = $('#cutP'); if (!T) return;
  $$('.cut').forEach((c) => { c.classList.toggle('is-on', c.dataset.cut === cutOn); c.classList.toggle('is-dish', !!DISH_CUT[c.dataset.cut]); });
  if (!cutOn) { T.textContent = '—'; D.textContent = ''; P.textContent = ''; return; }
  const d = DISH_CUT[cutOn];
  if (d) { T.textContent = t(d.k); D.textContent = t(d.k + '.d'); P.textContent = money(d.p); }
  else { T.textContent = CUT_NAME[cutOn]; D.textContent = t('cor.none'); P.textContent = ''; }
}
$$('.cut').forEach((c) => {
  c.setAttribute('tabindex', '0'); c.setAttribute('role', 'button');
  c.setAttribute('aria-label', (CUT_NAME[c.dataset.cut] || c.dataset.cut));
  const pick = () => { cutOn = c.dataset.cut; paintCut(); };
  c.addEventListener('click', pick);
  c.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); } });
  c.addEventListener('mouseenter', () => { if (matchMedia('(hover: hover)').matches) { cutOn = c.dataset.cut; paintCut(); } });
});
const labelFor = { rib: 'Rib', short: 'Short loin', tender: 'Tenderloin' };
$$('.cut').forEach((c) => { if (labelFor[c.dataset.cut]) c.setAttribute('aria-label', labelFor[c.dataset.cut]); });
onLang.push(paintCut);

/* ----------------------------------------------------------
   CARTA · la pizarra
   ---------------------------------------------------------- */
let tab = 'entrantes', size = 1;
const secName = (s) => s[lang] || s.es;
const itemName = (it) => (it.nn && it.nn[lang]) || it.n;
const chili = (n) => n ? `<span class="bitem__hot" title="${t('car.hot')}" aria-label="${t('car.hot')}">${'🌶'.repeat(n)}</span>` : '';
function paintTabs() {
  $('#tabs').innerHTML = CARTA.sections.map((s) => `<button class="tab" type="button" role="tab" data-tab="${s.id}" aria-selected="${s.id === tab}">${secName(s)}</button>`).join('');
}
function paintBoard(flip) {
  const s = CARTA.sections.find((x) => x.id === tab);
  $('#sizeBox').hidden = !s.double;
  const items = CARTA.items.filter((it) => it.s === tab);
  $('#board').innerHTML = `<div class="bsec"><h3 class="bsec__h">${secName(s)}</h3>${s.note ? `<p class="bsec__note">${s.note[lang] || s.note.es}</p>` : ''}
    <div class="bitems">${items.map((it) => {
      const price = s.double && size === 2 && it.p2 ? it.p2 : it.p;
      return `<div class="bitem"><div class="bitem__top"><span class="bitem__n">${itemName(it)}</span>${chili(it.hot)}<span class="bitem__dots"></span><span class="bitem__p${flip && it.p2 ? ' is-flip' : ''}">${money(price)}</span></div>${it.d ? `<p class="bitem__d">${it.d[lang] || it.d.es}</p>` : ''}</div>`;
    }).join('')}</div></div>`;
  refreshSoon();
}
$('#tabs').addEventListener('click', (e) => { const b = e.target.closest('[data-tab]'); if (!b) return; tab = b.dataset.tab; paintTabs(); paintBoard(); });
$('#tabs').addEventListener('keydown', (e) => {
  if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
  const ids = CARTA.sections.map((s) => s.id), i = ids.indexOf(tab);
  tab = ids[(i + (e.key === 'ArrowRight' ? 1 : -1) + ids.length) % ids.length]; paintTabs(); paintBoard(); $(`[data-tab="${tab}"]`).focus();
});
$$('.seg button').forEach((b) => b.addEventListener('click', () => {
  size = +b.dataset.size; $$('.seg button').forEach((x) => x.setAttribute('aria-checked', String(x === b))); paintBoard(true);
}));
onLang.push(paintTabs, () => paintBoard());

/* ----------------------------------------------------------
   SE BUSCA · carteles con recompensa
   ---------------------------------------------------------- */
const POSTERS = [
  { img: 'nachos.jpg', k: 'w.nachos', p: 8.95 },
  { img: 'parrillada-2.jpg', k: 'w.parri', p: 24.95 },
  { img: 'ribs.jpg', k: 'w.ribs', p: 18.95 },
  { img: 'burger.jpg', k: 'w.burger', p: 11.95, from: true },
  { img: 'burrito-2.jpg', k: 'w.fajitas', p: 15.95, from: true },
  { img: 'cesar.jpg', k: 'w.cesar', p: 12.95 },
  { img: 'champinones.jpg', k: 'w.champ', p: 7.5 },
  { img: 'cocteles.jpg', k: 'w.coc', p: null }
];
function paintPosters() {
  $('#posters').innerHTML = POSTERS.map((p, i) => `<button class="poster" type="button" data-poster="${i}" style="--rot:${[-2.5, 1.8, -1, 2.6, 1.2, -2.2, 2, -1.4][i]}deg">
    <span class="poster__w">${t('wan.word')}</span><img src="${IMG(p.img)}" alt="${t(p.k)}" loading="lazy"><span class="poster__n">${t(p.k)}</span>
    <span class="poster__r">${t('wan.reward')}</span><span class="poster__p">${p.p == null ? `<small>${t('wan.drinks')}</small>` : (p.from ? `<small>${t('wan.from')} </small>` : '') + money(p.p)}</span></button>`).join('');
}
onLang.push(paintPosters);
const lb = $('#lb'); let lbReturn = null;
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-poster]'); if (!b) return;
  const p = POSTERS[+b.dataset.poster]; lbReturn = b;
  $('#lbImg').src = IMG(p.img); $('#lbImg').alt = t(p.k); $('#lbCap').textContent = t(p.k);
  lb.hidden = false; document.body.classList.add('is-locked'); if (lenis) lenis.stop(); $('#lbX').focus();
});
const closeLb = () => { lb.hidden = true; document.body.classList.remove('is-locked'); if (lenis) lenis.start(); if (lbReturn) lbReturn.focus(); };
$('#lbX').addEventListener('click', closeLb);
lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', (e) => { if (!lb.hidden && (e.key === 'Escape' || e.key === 'Tab')) { e.preventDefault(); if (e.key === 'Escape') closeLb(); } });

/* ----------------------------------------------------------
   LA TERRAZA · fuegos artificiales
   ---------------------------------------------------------- */
const sky = $('#sky'), scv = $('#skyCv'), sx = scv ? scv.getContext('2d') : null;
const FW = { w: 0, h: 0, dpr: 1, rockets: [], sparks: [], run: false, last: 0, visible: false, auto: 0 };
const COLORS = [[255, 176, 64], [255, 120, 40], [255, 240, 200], [120, 220, 120], [255, 80, 80], [140, 190, 255], [240, 200, 80]];
function sizeSky() { if (!scv) return; const b = scv.getBoundingClientRect(); FW.dpr = Math.min(2, devicePixelRatio || 1); FW.w = b.width; FW.h = b.height; scv.width = Math.round(b.width * FW.dpr); scv.height = Math.round(b.height * FW.dpr); }
function launch(x, y) {
  FW.rockets.push({ x: FW.w * (0.3 + Math.random() * 0.4), y: FW.h, tx: x, ty: y, t: 0, dur: 0.9 + Math.random() * 0.4, c: COLORS[(Math.random() * COLORS.length) | 0] });
  startSky();
}
function burst(r) {
  const n = 70 + ((Math.random() * 40) | 0), c2 = COLORS[(Math.random() * COLORS.length) | 0], ring = Math.random() < 0.35;
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, sp = ring ? 150 : 40 + Math.random() * 150;
    FW.sparks.push({ x: r.tx, y: r.ty, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1.2 + Math.random() * 0.9, t: 0, c: Math.random() < 0.7 ? r.c : c2 });
  }
}
function skyLoop(now) {
  const dt = clamp((now - FW.last) / 1000, 0.001, 0.05); FW.last = now;
  sx.setTransform(FW.dpr, 0, 0, FW.dpr, 0, 0);
  sx.globalCompositeOperation = 'destination-out'; sx.fillStyle = 'rgba(0,0,0,.22)'; sx.fillRect(0, 0, FW.w, FW.h);
  sx.globalCompositeOperation = 'lighter';
  FW.rockets = FW.rockets.filter((r) => {
    r.t += dt / r.dur; const k = 1 - Math.pow(1 - clamp(r.t, 0, 1), 2);
    const x = r.x + (r.tx - r.x) * k, y = r.y + (r.ty - r.y) * k;
    sx.fillStyle = 'rgba(255,220,170,.9)'; sx.beginPath(); sx.arc(x, y, 2.2, 0, 7); sx.fill();
    if (r.t >= 1) { burst(r); return false; } return true;
  });
  FW.sparks = FW.sparks.filter((s) => {
    s.t += dt; s.vx *= 0.985; s.vy = s.vy * 0.985 + 60 * dt; s.x += s.vx * dt; s.y += s.vy * dt;
    const a = clamp(1 - s.t / s.life, 0, 1); if (!a) return false;
    sx.fillStyle = `rgba(${s.c[0]},${s.c[1]},${s.c[2]},${a})`; sx.beginPath(); sx.arc(s.x, s.y, 1.8 + a, 0, 7); sx.fill();
    return true;
  });
  sx.globalCompositeOperation = 'source-over';
  if (FW.visible && !reduced) { FW.auto -= dt; if (FW.auto <= 0) { FW.auto = 2.2 + Math.random() * 2.5; launch(FW.w * (0.15 + Math.random() * 0.7), FW.h * (0.12 + Math.random() * 0.25)); } }
  if (FW.rockets.length || FW.sparks.length || (FW.visible && !reduced)) requestAnimationFrame(skyLoop); else { FW.run = false; sx.clearRect(0, 0, FW.w, FW.h); }
}
function startSky() { if (FW.run || !sx || STATIC) return; FW.run = true; FW.last = performance.now(); requestAnimationFrame(skyLoop); }
if (sky) {
  sky.addEventListener('pointerdown', (e) => { const b = scv.getBoundingClientRect(); launch(e.clientX - b.left, Math.min(e.clientY - b.top, FW.h * 0.6)); });
  if ('IntersectionObserver' in window) new IntersectionObserver((es) => es.forEach((en) => { FW.visible = en.isIntersecting; if (FW.visible) { FW.auto = 0.4; startSky(); } }), { threshold: 0.3 }).observe(sky);
}
addEventListener('resize', sizeSky);

/* ----------------------------------------------------------
   ARRANQUE: puertas del saloon y animaciones
   ---------------------------------------------------------- */
applyLang();
sizeSky();

const saloon = $('#saloon');
let opened = false;
function heroIn() {
  $('.hero__neon').classList.add('is-flicker');
  if (!motion) return;
  gsap.from('.hero__w1, .hero__w2', { yPercent: 60, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' });
  gsap.from('.hero__neon', { opacity: 0, duration: 0.2, repeat: 3, yoyo: true, delay: 0.4 });
  gsap.from('.hero__kicker, .hero__lead, .hero__row, .hero__ctas', { y: 24, opacity: 0, duration: 0.8, stagger: 0.08, delay: 0.3, ease: 'power3.out' });
  gsap.fromTo('.hero__bg', { scale: 1.18 }, { scale: 1.06, duration: 2.2, ease: 'power2.out' });
  // matojo rodando
  const weed = $('.weed');
  const roll = () => gsap.fromTo(weed, { x: 0, rotation: 0, y: 0 }, { x: innerWidth + 280, rotation: 900, duration: 7, ease: 'none', onUpdate() { weed.style.translate = `0 ${-Math.abs(Math.sin(this.progress() * 18)) * 26}px`; }, onComplete: () => gsap.delayedCall(9 + Math.random() * 8, roll) });
  gsap.delayedCall(2.5, roll);
}
function openDoors() {
  if (opened || !saloon) return; opened = true;
  saloon.classList.add('is-open');
  if (!motion) { saloon.remove(); heroIn(); return; }
  gsap.timeline({ onComplete: () => saloon.remove() })
    .to('.saloon__go', { opacity: 0, duration: 0.2 })
    .to('.door--l', { rotateY: -112, duration: 1, ease: 'back.out(1.6)' }, 0)
    .to('.door--r', { rotateY: 112, duration: 1, ease: 'back.out(1.6)' }, 0)
    .to('.saloon__sign', { y: -40, opacity: 0, duration: 0.6 }, 0.2)
    .to(saloon, { opacity: 0, duration: 0.5 }, 0.65)
    .add(heroIn, 0.55);
}
if (motion && saloon) {
  if (lenis) lenis.stop();
  document.body.classList.add('is-locked');
  const go = () => { document.body.classList.remove('is-locked'); if (lenis) lenis.start(); openDoors(); };
  $('#saloonGo').addEventListener('click', go);
  addEventListener('wheel', go, { once: true, passive: true });
  addEventListener('touchmove', go, { once: true, passive: true });
  addEventListener('keydown', (e) => { if (!opened && ['Enter', ' ', 'ArrowDown', 'PageDown', 'Escape'].includes(e.key)) go(); });
  gsap.from('.door--l', { rotateY: -40, duration: 1.2, ease: 'elastic.out(1, .35)' });
  gsap.from('.door--r', { rotateY: 40, duration: 1.2, ease: 'elastic.out(1, .35)' });
  setTimeout(go, 2600);
} else { if (saloon) saloon.remove(); heroIn(); }

if (motion) {
  $$('.reveal').forEach((el) => gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
  $$('[data-count]').forEach((el) => { const end = +el.dataset.count, o = { v: 0 }; ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => gsap.to(o, { v: end, duration: 1.6, ease: 'power2.out', onUpdate: () => { el.textContent = fmtInt(Math.round(o.v)); } }) }); });
  gsap.from('.poster', { y: -120, opacity: 0, duration: 1, stagger: 0.07, ease: 'bounce.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: '#posters', start: 'top 80%', once: true } });
  gsap.from('.pin', { scale: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(2)', clearProps: 'transform', scrollTrigger: { trigger: '.plate', start: 'top 70%', once: true } });
  gsap.from('.cut', { opacity: 0, duration: 0.5, stagger: 0.04, scrollTrigger: { trigger: '#cow', start: 'top 80%', once: true } });
  gsap.to('.decor__f:nth-child(odd)', { yPercent: -8, ease: 'none', scrollTrigger: { trigger: '.decor', start: 'top bottom', end: 'bottom top', scrub: true } });
  addEventListener('load', () => ScrollTrigger.refresh());
} else $$('.reveal').forEach((el) => { el.style.opacity = 1; el.style.transform = 'none'; });
})();
