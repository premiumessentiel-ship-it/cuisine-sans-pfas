/**
 * cuisine-sans-pfas.fr — Main JavaScript
 * Version: 2.0.0 — Rich editorial build
 * Architecture: Vanilla JS SPA router, pathname-based
 */

'use strict';

/* ================================================================
   ROUTER
   ================================================================ */
const pages = {};

function reg(id, fn) { pages[id] = fn; }

function navigate(id, e) {
  if (e) e.preventDefault();
  history.pushState({}, '', id === 'home' ? '/' : '/' + id);
  renderPage(id);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function renderPage(id) {
  const app = document.getElementById('app');
  const fn = pages[id] || pages['home'];
  app.innerHTML = fn();
  app.className = 'page-enter';
  requestAnimationFrame(() => app.classList.remove('page-enter'));
  initFAQ();
  updateNavState(id);
  const base = 'https://cuisine-sans-pfas.fr';
  const path = id === 'home' ? '' : '/' + id;
  const canon = document.querySelector('link[rel="canonical"]');
  if (canon) canon.href = base + (path || '/');
  const h1 = app.querySelector('h1');
  if (h1) document.title = h1.textContent.trim() + ' — cuisine-sans-pfas.fr';
  else document.title = 'Cuisine sans PFAS — Guide expert poêles inox, céramique et cuisson saine';
}

window.addEventListener('popstate', () => {
  const id = location.pathname.replace(/^\//, '') || 'home';
  renderPage(id);
});

function updateNavState(id) {
  document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('is-active'));
  const map = {
    'poele-inox': 'nav-inox', 'poele-ceramique': 'nav-ceramic',
    'poele-sans-pfas': 'nav-pfas', 'quelle-poele-induction': 'nav-induction',
    'inox-vs-ceramique': 'nav-comp', 'avis-cflagrant': 'nav-avis'
  };
  if (map[id]) { const el = document.getElementById(map[id]); if (el) el.classList.add('is-active'); }
}

/* ================================================================
   HEADER SCROLL
   ================================================================ */
(function initHeaderScroll() {
  const hdr = document.getElementById('hdr');
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => { hdr.classList.toggle('is-scrolled', window.scrollY > 8); ticking = false; });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ================================================================
   MOBILE DRAWER
   ================================================================ */
(function initDrawer() {
  const drawer = document.getElementById('drawer');
  const burgerBtn = document.getElementById('burgerBtn');
  const closeBtn = document.getElementById('drawerClose');
  const overlay = document.getElementById('drawerOverlay');

  function openDrawer() {
    drawer.classList.add('is-open');
    burgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function closeDrawer() {
    drawer.classList.remove('is-open');
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    burgerBtn.focus();
  }
  window.closeDrawer = closeDrawer;
  burgerBtn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer();
  });
})();

/* ================================================================
   FAQ ACCORDION
   ================================================================ */
function initFAQ() {
  document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', function () {
      const item = this.closest('.faq__item');
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq__item.is-open').forEach(i => {
        i.classList.remove('is-open');
        i.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) { item.classList.add('is-open'); this.setAttribute('aria-expanded', 'true'); }
    });
  });
}

/* ================================================================
   HTML BUILDER HELPERS
   ================================================================ */

function faq(question, answer) {
  return `<div class="faq__item">
    <button class="faq__question" aria-expanded="false">${question}<span class="faq__toggle" aria-hidden="true">+</span></button>
    <div class="faq__answer" role="region"><div class="faq__answer-clip"><div class="faq__answer-body">${answer}</div></div></div>
  </div>`;
}

function shopBtn(path, label, cls) {
  cls = cls || 'btn-primary';
  return '<a href="https://www.cflagrant.shop' + path + '" target="_blank" rel="noopener sponsored" class="btn ' + cls + '">' + label + '</a>';
}

function prodCard(icon, name, desc, tags, shopPath, shopLabel) {
  return '<div class="prod-card">'
    + '<div class="prod-card__icon">' + icon + '</div>'
    + '<div class="prod-card__info">'
    + '<div class="prod-card__name">' + name + '</div>'
    + '<p class="prod-card__desc">' + desc + '</p>'
    + '<div class="prod-card__tags">' + tags.map(function(t){return '<span class="pill ' + t[0] + '">' + t[1] + '</span>';}).join('') + '</div>'
    + '</div>'
    + '<div class="prod-card__action">' + shopBtn(shopPath, shopLabel) + '</div>'
    + '</div>';
}

function buildSidebar(tocItems, prodEmoji, prodName, prodDesc, shopPath, related) {
  return '<aside class="sidebar" aria-label="Navigation rapide">'
    + '<div class="sb-card"><div class="sb-card__head">Sommaire</div><ul class="sb-toc">'
    + tocItems.map(function(t){return '<li><a href="#' + t[1] + '">' + t[0] + '</a></li>';}).join('')
    + '</ul></div>'
    + '<div class="sb-card sb-prod" style="text-align:center">'
    + '<span class="sb-prod__emoji">' + prodEmoji + '</span>'
    + '<div class="sb-prod__name">' + prodName + '</div>'
    + '<p class="sb-prod__desc">' + prodDesc + '</p>'
    + shopBtn(shopPath, 'Voir sur CFLAGRANT &rarr;')
    + '</div>'
    + '<div class="sb-card"><div class="sb-card__head">Guides li&eacute;s</div><ul class="sb-related">'
    + related.map(function(r){return '<li><a href="/' + (r[1] === 'home' ? '' : r[1]) + '" onclick="navigate(\'' + r[1] + '\',event)">' + r[0] + '</a></li>';}).join('')
    + '</ul></div></aside>';
}

function artShell(opts) {
  var h1 = opts.h1, intro = opts.intro, pills = opts.pills, readTime = opts.readTime;
  var breadParts = opts.breadParts, schema = opts.schema, content = opts.content, sidebar = opts.sidebar;
  var bc = breadParts.map(function(p, i) {
    return i < breadParts.length - 1
      ? '<a href="/' + (p[1] === 'home' ? '' : p[1]) + '" onclick="navigate(\'' + p[1] + '\',event)">' + p[0] + '</a><span class="breadcrumb__sep" aria-hidden="true">&rsaquo;</span>'
      : '<span aria-current="page">' + p[0] + '</span>';
  }).join('');
  return (schema || '')
    + '<section class="art-hero"><div class="wrap">'
    + '<nav class="breadcrumb" aria-label="Fil d\'Ari&agrave;ne"><a href="/" onclick="navigate(\'home\',event)">Accueil</a><span class="breadcrumb__sep" aria-hidden="true">&rsaquo;</span>' + bc + '</nav>'
    + '<div class="art-meta">' + pills.map(function(p){return '<span class="pill ' + p[0] + '">' + p[1] + '</span>';}).join('') + '<span class="art-reading">&timesb; ' + readTime + '</span></div>'
    + '<h1 class="art-h1">' + h1 + '</h1>'
    + '<p class="art-intro">' + intro + '</p>'
    + '</div></section>'
    + '<section class="art-body"><div class="wrap"><div class="art-layout">'
    + '<article class="art-content">' + content + '</article>'
    + sidebar
    + '</div></div></section>';
}

function gCard(cat, time, title, desc, id) {
  return '<a class="gcard" href="/' + id + '" onclick="navigate(\'' + id + '\',event)" role="article" aria-label="' + title + '">'
    + '<div class="gcard__top"><span class="gcard__cat">' + cat + '</span><span class="gcard__time">' + time + '</span></div>'
    + '<h3>' + title + '</h3><p>' + desc + '</p>'
    + '<div class="gcard__arrow" aria-hidden="true">&rarr;</div>'
    + '</a>';
}

/* ================================================================
   INLINE SVG VISUALS — zero external requests, dark-themed
   ================================================================ */

function svgInox() {
  return '<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<defs>'
    + '<linearGradient id="sg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#B8C8CE"/><stop offset="40%" stop-color="#E8F0F3"/><stop offset="100%" stop-color="#8FA5B0"/></linearGradient>'
    + '<linearGradient id="sg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(255,255,255,.55)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></linearGradient>'
    + '<radialGradient id="sg3" cx="50%" cy="45%"><stop offset="0%" stop-color="#F2F7F9"/><stop offset="100%" stop-color="#7A9BAA"/></radialGradient>'
    + '</defs>'
    + '<rect width="420" height="280" fill="#1a2e24"/>'
    + '<ellipse cx="210" cy="155" rx="165" ry="100" fill="url(#sg1)" stroke="#9AB0BB" stroke-width="3"/>'
    + '<ellipse cx="210" cy="148" rx="155" ry="90" fill="url(#sg3)"/>'
    + '<ellipse cx="210" cy="148" rx="120" ry="68" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="1.5"/>'
    + '<ellipse cx="210" cy="148" rx="85" ry="48" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="1.5"/>'
    + '<ellipse cx="210" cy="148" rx="50" ry="28" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="1.5"/>'
    + '<ellipse cx="175" cy="118" rx="55" ry="22" fill="url(#sg2)" opacity=".7"/>'
    + '<rect x="355" y="138" width="58" height="20" rx="10" fill="#8A9BA3" stroke="#6B7F8A" stroke-width="2"/>'
    + '<rect x="358" y="141" width="52" height="14" rx="7" fill="rgba(255,255,255,.15)"/>'
    + '<rect x="168" y="138" width="84" height="22" rx="4" fill="rgba(15,31,24,.45)"/>'
    + '<text x="210" y="154" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#7BAD92" text-anchor="middle" letter-spacing="2">INOX 18/10</text>'
    + '</svg>';
}

function svgCeramic() {
  return '<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<defs>'
    + '<radialGradient id="cg1" cx="45%" cy="40%" r="65%"><stop offset="0%" stop-color="#4A7C63"/><stop offset="55%" stop-color="#2D5A42"/><stop offset="100%" stop-color="#1a3828"/></radialGradient>'
    + '<radialGradient id="cg2" cx="38%" cy="32%" r="35%"><stop offset="0%" stop-color="rgba(255,255,255,.38)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient>'
    + '</defs>'
    + '<rect width="420" height="280" fill="#0f1f18"/>'
    + '<ellipse cx="205" cy="152" rx="168" ry="103" fill="#1a3828" stroke="#2D5A42" stroke-width="3"/>'
    + '<ellipse cx="205" cy="145" rx="158" ry="93" fill="url(#cg1)"/>'
    + '<ellipse cx="205" cy="145" rx="158" ry="93" fill="url(#cg2)"/>'
    + '<circle cx="170" cy="130" r="2.5" fill="rgba(255,255,255,.09)"/>'
    + '<circle cx="200" cy="115" r="2" fill="rgba(255,255,255,.07)"/>'
    + '<circle cx="240" cy="125" r="3" fill="rgba(255,255,255,.06)"/>'
    + '<circle cx="225" cy="160" r="2" fill="rgba(255,255,255,.08)"/>'
    + '<circle cx="180" cy="168" r="2.5" fill="rgba(255,255,255,.07)"/>'
    + '<rect x="352" y="136" width="60" height="22" rx="11" fill="#2D5A42" stroke="#4A7C63" stroke-width="2"/>'
    + '<rect x="356" y="140" width="52" height="14" rx="7" fill="rgba(255,255,255,.12)"/>'
    + '<rect x="156" y="137" width="98" height="22" rx="4" fill="rgba(15,31,24,.5)"/>'
    + '<text x="205" y="153" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#C8DDD4" text-anchor="middle" letter-spacing="1.5">SANS PFAS &#183; CERAMIQUE</text>'
    + '</svg>';
}

function svgPierre() {
  return '<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<defs>'
    + '<radialGradient id="pg1" cx="50%" cy="42%" r="60%"><stop offset="0%" stop-color="#8B7B6B"/><stop offset="55%" stop-color="#6B5B4A"/><stop offset="100%" stop-color="#3d2e22"/></radialGradient>'
    + '</defs>'
    + '<rect width="420" height="280" fill="#1c1008"/>'
    + '<ellipse cx="210" cy="152" rx="165" ry="100" fill="#3d2e22" stroke="#6B5B4A" stroke-width="2.5"/>'
    + '<ellipse cx="210" cy="145" rx="155" ry="90" fill="url(#pg1)"/>'
    + '<circle cx="160" cy="128" r="3.5" fill="#C4B5A0" opacity=".55"/>'
    + '<circle cx="195" cy="112" r="2.5" fill="#D4C5B0" opacity=".55"/>'
    + '<circle cx="235" cy="120" r="4" fill="#B8A898" opacity=".55"/>'
    + '<circle cx="265" cy="145" r="2.5" fill="#C8B9A4" opacity=".55"/>'
    + '<circle cx="245" cy="165" r="3" fill="#B4A494" opacity=".55"/>'
    + '<circle cx="205" cy="170" r="2" fill="#C0B0A0" opacity=".55"/>'
    + '<circle cx="175" cy="158" r="3" fill="#BCA898" opacity=".55"/>'
    + '<rect x="354" y="137" width="58" height="21" rx="10" fill="#6B5B4A" stroke="#8B7B6B" stroke-width="2"/>'
    + '<rect x="162" y="137" width="96" height="22" rx="4" fill="rgba(0,0,0,.45)"/>'
    + '<text x="210" y="153" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#D4C5B0" text-anchor="middle" letter-spacing="1.5">GREBLON &#183; FACON PIERRE</text>'
    + '</svg>';
}

function svgSteak() {
  return '<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<defs>'
    + '<radialGradient id="hg" cx="50%" cy="80%"><stop offset="0%" stop-color="rgba(255,140,40,.28)"/><stop offset="100%" stop-color="rgba(255,140,40,0)"/></radialGradient>'
    + '<radialGradient id="stg" cx="45%" cy="40%"><stop offset="0%" stop-color="#8B4513"/><stop offset="50%" stop-color="#6B2F0A"/><stop offset="100%" stop-color="#3A1A08"/></radialGradient>'
    + '<linearGradient id="pns" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#C8D8DE"/><stop offset="40%" stop-color="#E8F0F3"/><stop offset="100%" stop-color="#8FA5B0"/></linearGradient>'
    + '</defs>'
    + '<rect width="560" height="340" fill="#0a1810"/>'
    + '<ellipse cx="280" cy="320" rx="220" ry="60" fill="url(#hg)"/>'
    + '<ellipse cx="280" cy="220" rx="195" ry="112" fill="url(#pns)" stroke="#9AB0BB" stroke-width="2.5"/>'
    + '<ellipse cx="280" cy="212" rx="182" ry="100" fill="#B0C5CC"/>'
    + '<ellipse cx="275" cy="208" rx="88" ry="55" fill="url(#stg)" stroke="#2A1005" stroke-width="2"/>'
    + '<line x1="225" y1="190" x2="255" y2="228" stroke="rgba(0,0,0,.6)" stroke-width="7" stroke-linecap="round"/>'
    + '<line x1="255" y1="188" x2="285" y2="226" stroke="rgba(0,0,0,.6)" stroke-width="7" stroke-linecap="round"/>'
    + '<line x1="285" y1="190" x2="315" y2="226" stroke="rgba(0,0,0,.5)" stroke-width="7" stroke-linecap="round"/>'
    + '<path d="M238 195 Q248 198 255 193 Q262 188 270 193" stroke="rgba(255,220,180,.35)" stroke-width="2" fill="none"/>'
    + '<g opacity=".55" stroke="#C8D8DE" stroke-width="1.5" fill="none" stroke-linecap="round">'
    + '<path d="M240 165 Q235 150 242 135 Q249 120 244 105"/>'
    + '<path d="M268 158 Q263 142 270 127 Q277 112 272 97"/>'
    + '<path d="M298 162 Q293 146 300 131 Q307 116 302 101"/>'
    + '</g>'
    + '<rect x="455" y="203" width="82" height="24" rx="12" fill="#8A9BA3" stroke="#6B7F8A" stroke-width="2"/>'
    + '</svg>';
}

function svgEggs() {
  return '<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<defs>'
    + '<radialGradient id="cg3" cx="50%" cy="45%" r="60%"><stop offset="0%" stop-color="#3A6B52"/><stop offset="100%" stop-color="#1E3828"/></radialGradient>'
    + '<radialGradient id="yk1" cx="45%" cy="38%"><stop offset="0%" stop-color="#FFD460"/><stop offset="70%" stop-color="#F5A623"/><stop offset="100%" stop-color="#D4851A"/></radialGradient>'
    + '</defs>'
    + '<rect width="420" height="300" fill="#0d1c14"/>'
    + '<ellipse cx="210" cy="170" rx="172" ry="105" fill="#1a3828" stroke="#2D5A42" stroke-width="2.5"/>'
    + '<ellipse cx="210" cy="162" rx="160" ry="95" fill="url(#cg3)"/>'
    + '<ellipse cx="175" cy="158" rx="56" ry="42" fill="rgba(250,248,243,.88)"/>'
    + '<ellipse cx="250" cy="162" rx="54" ry="40" fill="rgba(250,248,243,.85)"/>'
    + '<circle cx="175" cy="155" r="20" fill="url(#yk1)"/>'
    + '<circle cx="170" cy="151" r="5" fill="rgba(255,255,255,.28)"/>'
    + '<circle cx="252" cy="159" r="19" fill="url(#yk1)"/>'
    + '<circle cx="247" cy="155" r="4.5" fill="rgba(255,255,255,.25)"/>'
    + '<rect x="358" y="152" width="54" height="20" rx="10" fill="#2D5A42" stroke="#4A7C63" stroke-width="2"/>'
    + '</svg>';
}

function svgCrepe() {
  return '<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<defs>'
    + '<radialGradient id="cr1" cx="50%" cy="48%"><stop offset="0%" stop-color="#D4A55A"/><stop offset="60%" stop-color="#B8843A"/><stop offset="100%" stop-color="#8B5E22"/></radialGradient>'
    + '<radialGradient id="cp2" cx="50%" cy="44%" r="62%"><stop offset="0%" stop-color="#3A6050"/><stop offset="100%" stop-color="#1c3022"/></radialGradient>'
    + '</defs>'
    + '<rect width="420" height="280" fill="#0d1c14"/>'
    + '<ellipse cx="210" cy="155" rx="175" ry="103" fill="#162820" stroke="#2D5A42" stroke-width="2"/>'
    + '<ellipse cx="210" cy="148" rx="163" ry="92" fill="url(#cp2)"/>'
    + '<ellipse cx="210" cy="148" rx="142" ry="78" fill="url(#cr1)" opacity=".92"/>'
    + '<circle cx="178" cy="135" r="4.5" fill="#8B5E22" opacity=".7"/>'
    + '<circle cx="215" cy="128" r="3" fill="#8B5E22" opacity=".6"/>'
    + '<circle cx="248" cy="140" r="5" fill="#8B5E22" opacity=".65"/>'
    + '<circle cx="235" cy="158" r="3.5" fill="#8B5E22" opacity=".6"/>'
    + '<circle cx="195" cy="162" r="4" fill="#8B5E22" opacity=".65"/>'
    + '<ellipse cx="210" cy="148" rx="142" ry="78" fill="none" stroke="rgba(180,120,50,.6)" stroke-width="3"/>'
    + '<rect x="360" y="139" width="52" height="19" rx="9" fill="#2D5A42" stroke="#4A7C63" stroke-width="1.5"/>'
    + '</svg>';
}

function svgKitchen() {
  return '<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<defs>'
    + '<linearGradient id="kg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2A3C30"/><stop offset="100%" stop-color="#1a2820"/></linearGradient>'
    + '<linearGradient id="kg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a1810"/><stop offset="100%" stop-color="#162820"/></linearGradient>'
    + '<linearGradient id="lb" x1=".5" y1="0" x2=".5" y2="1"><stop offset="0%" stop-color="rgba(255,240,200,.12)"/><stop offset="100%" stop-color="rgba(255,240,200,0)"/></linearGradient>'
    + '</defs>'
    + '<rect width="700" height="420" fill="url(#kg2)"/>'
    + '<polygon points="300,0 400,0 520,420 180,420" fill="url(#lb)"/>'
    + '<rect x="0" y="280" width="700" height="140" fill="url(#kg1)"/>'
    + '<rect x="0" y="280" width="700" height="3" fill="rgba(200,220,210,.2)"/>'
    + '<g stroke="rgba(255,255,255,.06)" stroke-width="1" fill="none">'
    + '<line x1="0" y1="60" x2="700" y2="60"/><line x1="0" y1="120" x2="700" y2="120"/>'
    + '<line x1="0" y1="180" x2="700" y2="180"/><line x1="0" y1="240" x2="700" y2="240"/>'
    + '<line x1="100" y1="0" x2="100" y2="280"/><line x1="200" y1="0" x2="200" y2="280"/>'
    + '<line x1="300" y1="0" x2="300" y2="280"/><line x1="400" y1="0" x2="400" y2="280"/>'
    + '<line x1="500" y1="0" x2="500" y2="280"/><line x1="600" y1="0" x2="600" y2="280"/>'
    + '</g>'
    + '<ellipse cx="200" cy="285" rx="70" ry="14" fill="#8FA5B0" stroke="#6B8A96" stroke-width="1.5"/>'
    + '<rect x="133" y="268" width="134" height="18" rx="4" fill="#9AB5BE"/>'
    + '<ellipse cx="200" cy="268" rx="67" ry="12" fill="#B0C8D0"/>'
    + '<ellipse cx="200" cy="268" rx="55" ry="9" fill="#C8D8DE"/>'
    + '<ellipse cx="200" cy="258" rx="60" ry="11" fill="#8A9BA3" stroke="#6B8A96" stroke-width="1.5"/>'
    + '<rect x="143" y="244" width="114" height="15" rx="3" fill="#95A8B0"/>'
    + '<rect x="258" y="261" width="45" height="12" rx="6" fill="#6B8A96"/>'
    + '<rect x="255" y="247" width="42" height="10" rx="5" fill="#5A7882"/>'
    + '<rect x="480" y="240" width="28" height="46" rx="4" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.2)" stroke-width="1.5"/>'
    + '<circle cx="488" cy="230" r="5" fill="#4A7C63"/><circle cx="496" cy="225" r="4.5" fill="#4A7C63"/>'
    + '<circle cx="504" cy="229" r="5.5" fill="#4A7C63"/><circle cx="492" cy="220" r="4" fill="#4A7C63"/>'
    + '<rect x="560" y="220" width="26" height="66" rx="6" fill="rgba(180,160,60,.18)" stroke="rgba(180,160,60,.35)" stroke-width="1.5"/>'
    + '<rect x="567" y="214" width="12" height="12" rx="3" fill="rgba(180,160,60,.4)"/>'
    + '<rect x="55" y="295" width="180" height="28" rx="5" fill="rgba(180,140,90,.35)" stroke="rgba(180,140,90,.5)" stroke-width="1.5"/>'
    + '<circle cx="100" cy="295" r="14" fill="rgba(255,220,60,.6)"/>'
    + '</svg>';
}

function svgProduce() {
  return '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<defs>'
    + '<radialGradient id="dbg" cx="50%" cy="40%"><stop offset="0%" stop-color="#1a2e20"/><stop offset="100%" stop-color="#0a1810"/></radialGradient>'
    + '</defs>'
    + '<rect width="480" height="320" fill="url(#dbg)"/>'
    + '<ellipse cx="240" cy="218" rx="145" ry="55" fill="#8FA5B0" stroke="#6B8A96" stroke-width="2"/>'
    + '<rect x="98" y="150" width="284" height="72" rx="8" fill="#9AB5BE"/>'
    + '<ellipse cx="240" cy="150" rx="142" ry="46" fill="#B5CACF"/>'
    + '<ellipse cx="240" cy="150" rx="120" ry="35" fill="#4A6E5A" opacity=".7"/>'
    + '<ellipse cx="215" cy="147" rx="8" ry="3.5" fill="#3A7850" opacity=".8"/>'
    + '<ellipse cx="255" cy="152" rx="6" ry="2.5" fill="#2D6040" opacity=".8"/>'
    + '<ellipse cx="238" cy="140" rx="7" ry="3" fill="#4A7C63" opacity=".8"/>'
    + '<g stroke="rgba(180,200,195,.45)" stroke-width="1.5" fill="none" stroke-linecap="round">'
    + '<path d="M205 118 Q200 105 207 92 Q214 79 209 66"/>'
    + '<path d="M235 112 Q230 98 237 85 Q244 72 239 59"/>'
    + '<path d="M265 116 Q260 102 267 89 Q274 76 269 63"/>'
    + '</g>'
    + '<rect x="50" y="158" width="52" height="22" rx="11" fill="#8FA5B0" stroke="#6B8A96" stroke-width="2"/>'
    + '<rect x="378" y="158" width="52" height="22" rx="11" fill="#8FA5B0" stroke="#6B8A96" stroke-width="2"/>'
    + '<circle cx="240" cy="104" r="14" fill="#8FA5B0" stroke="#6B8A96" stroke-width="2"/>'
    + '<circle cx="240" cy="104" r="8" fill="#B0C5CC"/>'
    + '</svg>';
}

/* ================================================================
   HOME PAGE — rich editorial build
   ================================================================ */
reg('home', function() { return '' +

'<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","@id":"https://cuisine-sans-pfas.fr/#webpage","name":"Cuisine sans PFAS — Guide expert cuisson saine","url":"https://cuisine-sans-pfas.fr","isPartOf":{"@id":"https://cuisine-sans-pfas.fr/#website"}}<\/script>' +

/* ═══ HERO ═══ */
'<section class="hero" aria-labelledby="hero-heading">' +
'<div class="hero__grain" aria-hidden="true"></div>' +
'<div class="hero__orb hero__orb--1" aria-hidden="true"></div>' +
'<div class="hero__orb hero__orb--2" aria-hidden="true"></div>' +
'<div class="wrap"><div class="hero__inner">' +
'<div class="hero__copy">' +
'<div class="hero__eyebrow"><span class="hero__dot" aria-hidden="true"></span><span class="t-eyebrow" style="color:var(--fern)">Portail &eacute;ditorial &middot; Expertise cuisson</span></div>' +
'<h1 class="hero__h1" id="hero-heading">Mieux cuisiner commence par <em>mieux choisir</em></h1>' +
'<p class="hero__lead">Pas un magasin. Un guide. L\'inox, la c&eacute;ramique, la fa&ccedil;on pierre &mdash; les vraies diff&eacute;rences expliqu&eacute;es par des passionn&eacute;s, pour &eacute;quiper votre cuisine intelligemment.</p>' +
'<div class="hero__actions">' +
'<a href="#guides-section" class="btn btn-copper btn-lg" onclick="document.getElementById(\'guides-section\').scrollIntoView({behavior:\'smooth\'});return false;">Explorer les guides</a>' +
'<a href="https://www.cflagrant.shop" target="_blank" rel="noopener sponsored" class="btn btn-lg hero__ghost-btn">Boutique CFLAGRANT &rarr;</a>' +
'</div>' +
'<p class="hero__note" aria-label="Information &eacute;ditoriale"><span aria-hidden="true">&#128218;</span> Portail &eacute;ditorial ind&eacute;pendant &mdash; pas une boutique. Les liens d\'achat pointent vers <strong>cflagrant.shop</strong></p>' +
'</div>' +
'<div class="hero__cards" aria-hidden="true">' +
'<a class="hcard" href="/poele-inox" onclick="navigate(\'poele-inox\',event)"><div class="hcard__row"><div class="hcard__icon hcard__icon--inox">&#9881;&#65039;</div><div class="hcard__info"><div class="hcard__label">Mat&eacute;riau n&deg;1</div><div class="hcard__title">Inox 18/10</div><div class="hcard__desc">Sans rev&ecirc;tement. La po&ecirc;le des cuisiniers.</div></div><span class="hcard__arrow">&rarr;</span></div></a>' +
'<a class="hcard" href="/poele-ceramique" onclick="navigate(\'poele-ceramique\',event)"><div class="hcard__row"><div class="hcard__icon hcard__icon--cer">&#127807;</div><div class="hcard__info"><div class="hcard__label">Mat&eacute;riau n&deg;2</div><div class="hcard__title">C&eacute;ramique sans PFAS</div><div class="hcard__desc">Antiadh&eacute;sif min&eacute;ral. Cuisson douce.</div></div><span class="hcard__arrow">&rarr;</span></div></a>' +
'<a class="hcard" href="/poele-pierre-greblon" onclick="navigate(\'poele-pierre-greblon\',event)"><div class="hcard__row"><div class="hcard__icon hcard__icon--pierre">&#129704;</div><div class="hcard__info"><div class="hcard__label">Mat&eacute;riau n&deg;3</div><div class="hcard__title">Fa&ccedil;on pierre &middot; Greblon</div><div class="hcard__desc">Confort quotidien. Chauffe homog&egrave;ne.</div></div><span class="hcard__arrow">&rarr;</span></div></a>' +
'</div></div></div></section>' +

/* ═══ TRUST STRIP ═══ */
'<div class="trust" role="complementary"><div class="wrap"><ul class="trust__inner">' +
'<li class="trust__item"><span aria-hidden="true">&#127467;&#127479;</span> Marque fran&ccedil;aise</li>' +
'<li class="trust__item"><span aria-hidden="true">&#9889;</span> Compatible induction</li>' +
'<li class="trust__item"><span aria-hidden="true">&#127807;</span> Gammes sans PFAS</li>' +
'<li class="trust__item"><span aria-hidden="true">&#128666;</span> Livraison gratuite d&egrave;s 35&euro;</li>' +
'<li class="trust__item"><span aria-hidden="true">&#128216;</span> Guides r&eacute;dig&eacute;s par des passionn&eacute;s</li>' +
'</ul></div></div>' +

/* ═══ MATERIAL UNIVERSE — dark, with SVG visuals ═══ */
'<section class="section section--ink" aria-labelledby="mat-heading"><div class="wrap">' +
'<div class="section__head" style="color:#fff"><span class="t-eyebrow">Comprendre avant d\'acheter</span><h2 class="t-display" id="mat-heading" style="color:#fff">Trois mat&eacute;riaux. Trois philosophies.</h2><p style="color:rgba(255,255,255,.55)">Chaque rev&ecirc;tement r&eacute;pond &agrave; des gestes culinaires pr&eacute;cis. Identifier votre usage r&eacute;el est la premi&egrave;re &eacute;tape d\'un bon choix.</p></div>' +
'<div class="mat-grid">' +

'<a class="mat-card" href="/poele-inox" onclick="navigate(\'poele-inox\',event)">' +
'<div class="mat-card__visual mat-card__visual--inox">' + svgInox() + '<div class="mat-card__overlay"></div></div>' +
'<div class="mat-card__body"><div class="mat-card__tag"><span class="mat-dot mat-dot--inox"></span>Inox 18/10</div>' +
'<h3 class="mat-card__title">La durabilit&eacute; absolue</h3>' +
'<p class="mat-card__desc">Sans rev&ecirc;tement, sans limite. La po&ecirc;le des professionnels&nbsp;: saisie parfaite, dur&eacute;e de vie infinie, z&eacute;ro PFAS par nature.</p>' +
'<ul class="mat-card__props"><li>Aucun rev&ecirc;tement &mdash; z&eacute;ro PFAS, PFOA, PTFE</li><li>Saisie, Maillard, d&eacute;gla&ccedil;age</li><li>Dur&eacute;e de vie illimit&eacute;e</li><li>Technique de pr&eacute;chauffage requise</li></ul>' +
'<span class="mat-card__cta">Lire le guide complet &rarr;</span></div></a>' +

'<a class="mat-card" href="/poele-ceramique" onclick="navigate(\'poele-ceramique\',event)">' +
'<div class="mat-card__visual mat-card__visual--cer">' + svgCeramic() + '<div class="mat-card__overlay"></div></div>' +
'<div class="mat-card__body"><div class="mat-card__tag"><span class="mat-dot mat-dot--cer"></span>C&eacute;ramique</div>' +
'<h3 class="mat-card__title">L\'antiadh&eacute;sif sain</h3>' +
'<p class="mat-card__desc">Green Pearl et Nature Ceramic offrent un glissement naturel sans compos&eacute;s fluor&eacute;s &mdash; id&eacute;ales pour les &oelig;ufs, cr&ecirc;pes et poissons.</p>' +
'<ul class="mat-card__props"><li>Certifi&eacute; sans PFAS, PFOA et PTFE</li><li>Antiadh&eacute;sif naturel &agrave; feu doux/moyen</li><li>Dur&eacute;e de vie 2&ndash;5 ans</li><li>&Eacute;viter surchauffe et abrasifs</li></ul>' +
'<span class="mat-card__cta">Lire le guide complet &rarr;</span></div></a>' +

'<a class="mat-card" href="/poele-pierre-greblon" onclick="navigate(\'poele-pierre-greblon\',event)">' +
'<div class="mat-card__visual mat-card__visual--pierre">' + svgPierre() + '<div class="mat-card__overlay"></div></div>' +
'<div class="mat-card__body"><div class="mat-card__tag"><span class="mat-dot mat-dot--pierre"></span>Fa&ccedil;on pierre</div>' +
'<h3 class="mat-card__title">Le confort quotidien</h3>' +
'<p class="mat-card__desc">Le rev&ecirc;tement Greblon granit&eacute; associe r&eacute;sistance &agrave; l\'abrasion et chauffe douce. Cuisinez naturellement, sans technique.</p>' +
'<ul class="mat-card__props"><li>Greblon haute r&eacute;sistance &agrave; l\'abrasion</li><li>Chauffe douce et tr&egrave;s r&eacute;guli&egrave;re</li><li>Dur&eacute;e de vie 3&ndash;5 ans</li><li>Confort imm&eacute;diat, sans apprentissage</li></ul>' +
'<span class="mat-card__cta">Lire le guide complet &rarr;</span></div></a>' +

'</div></div></section>' +

/* ═══ EDITORIAL FEATURE: STEAK ═══ */
'<section class="section section--cream editorial-feature" aria-labelledby="feat-heading"><div class="wrap">' +
'<div class="editorial-feature__grid">' +
'<div class="editorial-feature__visual">' + svgSteak() +
'<div class="editorial-feature__caption">La r&eacute;action de Maillard en inox &mdash; la technique compl&egrave;te</div>' +
'</div>' +
'<div class="editorial-feature__content">' +
'<span class="t-eyebrow">Guide technique &middot; Inox</span>' +
'<h2 id="feat-heading" class="editorial-feature__title">Le steak parfait en po&ecirc;le inox&nbsp;: la m&eacute;thode des cuisiniers</h2>' +
'<p class="editorial-feature__lead">La r&eacute;action de Maillard ne se produit qu\'&agrave; partir de 140&deg;C. L\'inox est le seul mat&eacute;riau grand public qui y acc&egrave;de sans contrainte. Voici les 7 &eacute;tapes de la m&eacute;thode professionnelle.</p>' +
'<div class="feat-steps-mini">' +
'<div class="feat-step"><span class="feat-step__n">1</span><span class="feat-step__t">Pr&eacute;chauffez 3 min &agrave; sec</span></div>' +
'<div class="feat-step"><span class="feat-step__n">2</span><span class="feat-step__t">Test Leidenfrost (goutte d\'eau)</span></div>' +
'<div class="feat-step"><span class="feat-step__n">3</span><span class="feat-step__t">Huile &agrave; point de fum&eacute;e &eacute;lev&eacute;</span></div>' +
'<div class="feat-step"><span class="feat-step__n">4</span><span class="feat-step__t">S&eacute;chez la viande, feu moyen-vif</span></div>' +
'<div class="feat-step"><span class="feat-step__n">5</span><span class="feat-step__t">N\'y touchez plus &mdash; attendez le d&eacute;crochage</span></div>' +
'<div class="feat-step"><span class="feat-step__n">6</span><span class="feat-step__t">Beurre, thym, arrosage</span></div>' +
'<div class="feat-step"><span class="feat-step__n">7</span><span class="feat-step__t">Repos 3 min + d&eacute;gla&ccedil;age</span></div>' +
'</div>' +
'<a href="/comment-cuire-steak-poele-inox" onclick="navigate(\'comment-cuire-steak-poele-inox\',event)" class="btn btn-primary" style="margin-top:var(--space-6)">Lire la m&eacute;thode compl&egrave;te &rarr;</a>' +
'</div></div></div></section>' +

/* ═══ USAGE GRID: 4 cooking scenes ═══ */
'<section class="section section--white" aria-labelledby="usage-heading"><div class="wrap">' +
'<div class="section__head"><span class="t-eyebrow">Le bon outil, le bon usage</span><h2 class="t-display" id="usage-heading">Chaque plat a sa po&ecirc;le id&eacute;ale</h2><p>La m&ecirc;me recette r&eacute;ussit mieux avec le bon mat&eacute;riau.</p></div>' +
'<div class="usage-grid">' +

'<div class="usage-card"><div class="usage-card__visual">' + svgSteak() + '</div><div class="usage-card__body"><div class="usage-card__mat usage-card__mat--inox">Inox 18/10</div><h3 class="usage-card__title">Viandes &amp; saisies</h3><p class="usage-card__desc">Steaks, c&ocirc;telettes, magret, poulet dor&eacute; &mdash; l\'inox cr&eacute;e la cro&ucirc;te que l\'antiadh&eacute;sif ne peut pas. La r&eacute;action de Maillard exige une haute temp&eacute;rature.</p><a href="/poele-inox" onclick="navigate(\'poele-inox\',event)" class="usage-card__link">Guide inox &rarr;</a></div></div>' +

'<div class="usage-card"><div class="usage-card__visual">' + svgEggs() + '</div><div class="usage-card__body"><div class="usage-card__mat usage-card__mat--cer">C&eacute;ramique Green Pearl</div><h3 class="usage-card__title">&OElig;ufs, cr&ecirc;pes &amp; d&eacute;licats</h3><p class="usage-card__desc">Omelettes, &oelig;ufs au plat, cr&ecirc;pes, poissons &mdash; la c&eacute;ramique glisse naturellement &agrave; feu doux. R&eacute;sultat homog&egrave;ne, nettoyage en 10 secondes.</p><a href="/poele-ceramique" onclick="navigate(\'poele-ceramique\',event)" class="usage-card__link">Guide c&eacute;ramique &rarr;</a></div></div>' +

'<div class="usage-card"><div class="usage-card__visual">' + svgProduce() + '</div><div class="usage-card__body"><div class="usage-card__mat usage-card__mat--inox">Inox 18/10</div><h3 class="usage-card__title">Cuissons longues &amp; mijot&eacute;s</h3><p class="usage-card__desc">Cocottes, pot-au-feu, soupes, couscous &mdash; les casseroles inox 18/10 assurent une neutralit&eacute; chimique parfaite pour les pr&eacute;parations acides.</p><a href="/batterie-cuisine-inox" onclick="navigate(\'batterie-cuisine-inox\',event)" class="usage-card__link">Batterie de cuisine &rarr;</a></div></div>' +

'<div class="usage-card"><div class="usage-card__visual">' + svgCrepe() + '</div><div class="usage-card__body"><div class="usage-card__mat usage-card__mat--pierre">Fa&ccedil;on pierre Greblon</div><h3 class="usage-card__title">Quotidien &amp; l&eacute;gumes</h3><p class="usage-card__desc">L&eacute;gumes saut&eacute;s, volailles, riz, p&acirc;tes revenues &mdash; la fa&ccedil;on pierre chauffe de fa&ccedil;on r&eacute;guli&egrave;re et homog&egrave;ne. Aucune technique, r&eacute;sultat fiable.</p><a href="/poele-pierre-greblon" onclick="navigate(\'poele-pierre-greblon\',event)" class="usage-card__link">Guide fa&ccedil;on pierre &rarr;</a></div></div>' +

'</div></div></section>' +

/* ═══ GUIDES GRID ═══ */
'<section class="section section--cream" aria-labelledby="guides-heading" id="guides-section"><div class="wrap">' +
'<div class="section__head"><span class="t-eyebrow">Encyclop&eacute;die pratique</span><h2 class="t-display" id="guides-heading">Tous nos guides experts</h2><p>Des r&eacute;ponses claires aux vraies questions que vous vous posez devant vos fourneaux.</p></div>' +
'<div class="guide-grid">' +
gCard('Inox','8 min','Comment cuire un steak parfait en inox ?','Pr&eacute;chauffage, test Leidenfrost, patience &mdash; la m&eacute;thode des professionnels.','comment-cuire-steak-poele-inox') +
gCard('Probl&egrave;me','5 min','Pourquoi ma po&ecirc;le inox accroche-t-elle ?','Comprendre la physique du collage pour ne plus jamais rater sa cuisson.','pourquoi-poele-inox-colle') +
gCard('Sans PFAS','7 min','Po&ecirc;le sans PFAS : s\'y retrouver enfin','PFAS, PFOA, PTFE &mdash; d&eacute;m&ecirc;ler les acronymes pour un choix &eacute;clair&eacute;.','poele-sans-pfas') +
gCard('Induction','6 min','Quelle po&ecirc;le pour une plaque induction ?','Fond magn&eacute;tique, compatibilit&eacute;, comportement thermique.','quelle-poele-induction') +
gCard('Comparatif','6 min','Inox ou c&eacute;ramique : le vrai match','Durabilit&eacute; contre facilit&eacute; d\'usage. Deux po&ecirc;les pour deux cuisiniers.','inox-vs-ceramique') +
gCard('Achat','5 min','20, 24, 26 ou 28 cm : quelle taille ?','Ni trop petite pour le steak, ni trop grande pour l\'omelette.','taille-poele') +
gCard('Entretien','5 min','Nettoyer une po&ecirc;le inox br&ucirc;l&eacute;e','Bicarbonate, vinaigre, eau bouillante &mdash; trois m&eacute;thodes sans abrasif.','nettoyer-poele-inox-brulee') +
gCard('Batterie','7 min','Composer sa batterie inox intelligemment','Set 5 casseroles, manche amovible, couscoussier.','batterie-cuisine-inox') +
gCard('Avis','8 min','CFLAGRANT : analyse &eacute;ditoriale honn&ecirc;te','Mat&eacute;riaux, performances, limites et rapport qualit&eacute;/prix.','avis-cflagrant') +
'</div></div></section>' +

/* ═══ ATMOSPHERE BAND ═══ */
'<section class="atmo-section" aria-labelledby="atmo-heading">' +
'<div class="atmo-section__visual">' + svgKitchen() + '</div>' +
'<div class="atmo-section__content"><div class="atmo-section__inner">' +
'<span class="t-eyebrow" style="color:var(--fern)">Notre philosophie</span>' +
'<h2 id="atmo-heading" class="atmo-section__title">S\'&eacute;quiper bien, une seule fois</h2>' +
'<blockquote class="atmo-quote"><p>&laquo;&nbsp;L\'inox 18/10 est la r&eacute;ponse la plus honn&ecirc;te &agrave; la question de l\'&eacute;quipement durable. Pas de rev&ecirc;tement &agrave; m&eacute;nager, pas de dur&eacute;e de vie programm&eacute;e. Juste de l\'acier, du feu, et votre technique.&nbsp;&raquo;</p><footer>&mdash; La r&eacute;daction cuisine-sans-pfas.fr</footer></blockquote>' +
'<div class="atmo-stats">' +
'<div class="atmo-stat"><span class="atmo-stat__n">14</span><span class="atmo-stat__l">guides experts</span></div>' +
'<div class="atmo-stat"><span class="atmo-stat__n">45</span><span class="atmo-stat__l">FAQ d&eacute;taill&eacute;es</span></div>' +
'<div class="atmo-stat"><span class="atmo-stat__n">3</span><span class="atmo-stat__l">mat&eacute;riaux analys&eacute;s</span></div>' +
'<div class="atmo-stat"><span class="atmo-stat__n">100%</span><span class="atmo-stat__l">contenu original</span></div>' +
'</div></div></div></section>' +

/* ═══ COMPARE TABLE ═══ */
'<section class="section section--white" aria-labelledby="comp-heading"><div class="wrap">' +
'<div class="section__head"><span class="t-eyebrow">Comparatif rapide</span><h2 class="t-display" id="comp-heading">Les 3 mat&eacute;riaux face &agrave; face</h2><p>Huit crit&egrave;res essentiels pour orienter votre choix.</p></div>' +
'<div class="comp-wrap"><table class="comp-table" role="table">' +
'<caption class="sr-only">Comparatif inox 18/10, c&eacute;ramique et fa&ccedil;on pierre</caption>' +
'<thead><tr><th scope="col">Crit&egrave;re</th><th scope="col">&#9881; Inox 18/10</th><th scope="col">&#127807; C&eacute;ramique</th><th scope="col">&#129704; Fa&ccedil;on pierre</th></tr></thead>' +
'<tbody>' +
'<tr><td>Durabilit&eacute;</td><td class="c-good">Illimit&eacute;e</td><td class="c-ok">2&ndash;5 ans</td><td class="c-ok">3&ndash;5 ans</td></tr>' +
'<tr><td>Absence de PFAS</td><td class="c-good">Absolu (sans rev&ecirc;tement)</td><td class="c-good">Rev&ecirc;tement min&eacute;ral</td><td class="c-ok">Sans PFOA</td></tr>' +
'<tr><td>Antiadh&eacute;sif</td><td class="c-ok">Technique requise</td><td class="c-good">Naturel</td><td class="c-good">Tr&egrave;s bon</td></tr>' +
'<tr><td>Saisie viande</td><td class="c-good">Excellente</td><td class="c-bad">D&eacute;conseill&eacute;e</td><td class="c-ok">Correcte</td></tr>' +
'<tr><td>&OElig;ufs / cr&ecirc;pes</td><td class="c-bad">Difficile</td><td class="c-good">Parfaite</td><td class="c-good">Bonne</td></tr>' +
'<tr><td>Lave-vaisselle</td><td class="c-good">Oui</td><td class="c-bad">D&eacute;conseill&eacute;</td><td class="c-ok">Possible</td></tr>' +
'<tr><td>Facilit&eacute; d\'usage</td><td class="c-ok">Apprentissage</td><td class="c-good">Imm&eacute;diate</td><td class="c-good">Imm&eacute;diate</td></tr>' +
'<tr><td>Induction</td><td class="c-good">Oui</td><td class="c-ok">Selon mod&egrave;le</td><td class="c-good">Oui</td></tr>' +
'</tbody></table></div>' +
'<div style="text-align:center;margin-top:var(--space-6);display:flex;gap:12px;justify-content:center;flex-wrap:wrap">' +
'<a href="/inox-vs-ceramique" onclick="navigate(\'inox-vs-ceramique\',event)" class="btn btn-ghost">Inox vs C&eacute;ramique &rarr;</a>' +
'<a href="/inox-vs-pierre" onclick="navigate(\'inox-vs-pierre\',event)" class="btn btn-ghost">Inox vs Pierre &rarr;</a>' +
'</div></div></section>' +

/* ═══ DECISION TOOL ═══ */
'<section class="section-sm section--parch" aria-labelledby="decider-heading"><div class="wrap">' +
'<div class="section__head"><span class="t-eyebrow">Aide &agrave; la d&eacute;cision</span><h2 class="t-display" id="decider-heading">Quel est votre vrai besoin ?</h2><p>Partez de votre usage, pas du mat&eacute;riau. La bonne po&ecirc;le est celle qui correspond &agrave; votre fa&ccedil;on de cuisiner.</p></div>' +
'<div class="decider__grid">' +
'<a class="dcard" href="/poele-ceramique" onclick="navigate(\'poele-ceramique\',event)"><div class="dcard__icon">&#127859;</div><div><div class="dcard__text">Je veux que rien n\'accroche</div><div class="dcard__sub">C&eacute;ramique ou fa&ccedil;on pierre</div></div></a>' +
'<a class="dcard" href="/poele-inox" onclick="navigate(\'poele-inox\',event)"><div class="dcard__icon">&#128170;</div><div><div class="dcard__text">Je veux une po&ecirc;le pour la vie</div><div class="dcard__sub">Inox 18/10 &mdash; aucune usure</div></div></a>' +
'<a class="dcard" href="/quelle-poele-induction" onclick="navigate(\'quelle-poele-induction\',event)"><div class="dcard__icon">&#9889;</div><div><div class="dcard__text">Je cuisine &agrave; l\'induction</div><div class="dcard__sub">Guide de compatibilit&eacute; magn&eacute;tique</div></div></a>' +
'<a class="dcard" href="/poele-sans-pfas" onclick="navigate(\'poele-sans-pfas\',event)"><div class="dcard__icon">&#127807;</div><div><div class="dcard__text">Je veux &eacute;viter les PFAS</div><div class="dcard__sub">Inox ou c&eacute;ramique min&eacute;rale</div></div></a>' +
'<a class="dcard" href="/batterie-cuisine-inox" onclick="navigate(\'batterie-cuisine-inox\',event)"><div class="dcard__icon">&#129368;</div><div><div class="dcard__text">Je veux tout &eacute;quiper d\'un coup</div><div class="dcard__sub">Sets &amp; batteries compl&egrave;tes</div></div></a>' +
'<a class="dcard" href="/taille-poele" onclick="navigate(\'taille-poele\',event)"><div class="dcard__icon">&#128208;</div><div><div class="dcard__text">Je ne sais pas quelle taille</div><div class="dcard__sub">Guide 20 &rarr; 28 cm par usage</div></div></a>' +
'</div></div></section>' +

/* ═══ RECIPE INSPIRATION ═══ */
'<section class="section section--ink" aria-labelledby="recipe-heading"><div class="wrap">' +
'<div class="section__head" style="color:#fff"><span class="t-eyebrow">Inspirations cuisine</span><h2 class="t-display" id="recipe-heading" style="color:#fff">Ce que vous pouvez cuisiner</h2><p style="color:rgba(255,255,255,.55)">La m&ecirc;me technique, des r&eacute;sultats radicalement diff&eacute;rents selon la po&ecirc;le choisie.</p></div>' +
'<div class="recipe-grid">' +

'<div class="recipe-card"><div class="recipe-card__visual">' + svgSteak() + '</div><div class="recipe-card__body"><span class="recipe-card__tag">&#129385; Viande</span><h3 class="recipe-card__title">Steak saisi, fond d&eacute;glac&eacute;</h3><p class="recipe-card__mat"><span class="pill pill-steel">Inox 18/10</span></p><p class="recipe-card__note">Pr&eacute;chauffage 3 min &middot; Huile arachide &middot; Ne pas bouger &middot; D&eacute;coller naturel &middot; Beurre thym &middot; Repos 3 min &middot; D&eacute;gla&ccedil;age vin rouge</p></div></div>' +

'<div class="recipe-card"><div class="recipe-card__visual">' + svgEggs() + '</div><div class="recipe-card__body"><span class="recipe-card__tag">&#127859; &OElig;uf</span><h3 class="recipe-card__title">&OElig;ufs au plat parfaits</h3><p class="recipe-card__mat"><span class="pill pill-sage">C&eacute;ramique</span></p><p class="recipe-card__note">Feu doux &middot; Noisette de beurre &middot; Couvercle 2 min &middot; Blanc pris, jaune coulant &middot; Sel fleur &middot; Herbes fra&icirc;ches</p></div></div>' +

'<div class="recipe-card"><div class="recipe-card__visual">' + svgCrepe() + '</div><div class="recipe-card__body"><span class="recipe-card__tag">&#129380; Cr&ecirc;pe</span><h3 class="recipe-card__title">Cr&ecirc;pes bretonnes</h3><p class="recipe-card__mat"><span class="pill pill-sage">C&eacute;ramique / Pierre</span></p><p class="recipe-card__note">P&acirc;te repos&eacute;e 1h &middot; Feu moyen &middot; Beurre fondu &middot; Retournement ais&eacute; &middot; Garnitures sucr&eacute;es ou sal&eacute;es</p></div></div>' +

'<div class="recipe-card"><div class="recipe-card__visual">' + svgProduce() + '</div><div class="recipe-card__body"><span class="recipe-card__tag">&#129368; Mijot&eacute;</span><h3 class="recipe-card__title">Soupe, pot-au-feu, couscous</h3><p class="recipe-card__mat"><span class="pill pill-steel">Inox 18/10</span></p><p class="recipe-card__note">Casserole 18/20 cm &middot; Eau froide &middot; Mont&eacute;e douce &middot; &Eacute;cumage &middot; L&eacute;gumes de saison &middot; Cuisson longue</p></div></div>' +

'</div></div></section>' +

/* ═══ EXPERT ADVICE ═══ */
'<section class="section section--forest advice-section" aria-labelledby="advice-heading"><div class="wrap"><div class="advice-section__inner">' +
'<div class="advice-section__head"><span class="t-eyebrow" style="color:var(--fern)">Conseils d\'expert</span><h2 id="advice-heading" style="color:#fff;font-family:var(--font-serif);font-size:clamp(1.5rem,3vw,2.25rem);font-weight:700;margin-top:8px">Ce que tout cuisinier devrait savoir</h2></div>' +
'<div class="advice-grid">' +

'<div class="advice-card"><div class="advice-card__icon">&#127777;&#65039;</div><h3 class="advice-card__title">Le test Leidenfrost</h3><p class="advice-card__text">Quelques gouttes d\'eau froide dans l\'inox pr&eacute;chauff&eacute;&nbsp;: si elles roulent en billes sans s\'&eacute;vaporer, la po&ecirc;le est &agrave; la bonne temp&eacute;rature. Le secret de la cuisson sans accrochage.</p></div>' +

'<div class="advice-card"><div class="advice-card__icon">&#127807;</div><h3 class="advice-card__title">200&deg;C maximum pour la c&eacute;ramique</h3><p class="advice-card__text">Le rev&ecirc;tement min&eacute;ral se d&eacute;grade irr&eacute;m&eacute;diablement au-dessus de 200&deg;C. Ne jamais pr&eacute;chauffer &agrave; vide, ne jamais saisir &agrave; feu vif. La c&eacute;ramique est faite pour la douceur.</p></div>' +

'<div class="advice-card"><div class="advice-card__icon">&#129474;</div><h3 class="advice-card__title">S&eacute;chez votre viande</h3><p class="advice-card__text">L\'humidit&eacute; en surface d\'une viande emp&ecirc;che la r&eacute;action de Maillard. Un simple passage au papier absorbant fait toute la diff&eacute;rence entre un steak dor&eacute; et un steak vapeur.</p></div>' +

'<div class="advice-card"><div class="advice-card__icon">&#9201;&#65039;</div><h3 class="advice-card__title">Attendez le d&eacute;crochage naturel</h3><p class="advice-card__text">En inox, la viande se d&eacute;colle seule quand la cro&ucirc;te est form&eacute;e. Si vous tirez et &ccedil;a r&eacute;siste, attendez encore 30 secondes. Forcer, c\'est d&eacute;chirer. La patience est la vraie technique.</p></div>' +

'<div class="advice-card"><div class="advice-card__icon">&#129767;</div><h3 class="advice-card__title">D&eacute;glacer les sucs</h3><p class="advice-card__text">Apr&egrave;s la saisie en inox, les d&eacute;p&ocirc;ts dor&eacute;s au fond sont de l\'or liquide. Un trait de vin ou de bouillon et une spatule en bois&nbsp;: une sauce en 2 minutes.</p></div>' +

'<div class="advice-card"><div class="advice-card__icon">&#129396;</div><h3 class="advice-card__title">Bicarbonate pour l\'inox br&ucirc;l&eacute;</h3><p class="advice-card__text">Fond noirci apr&egrave;s une cuisson intense&nbsp;? Eau + bicarbonate + &eacute;bullition 2 minutes. Les r&eacute;sidus se d&eacute;collent seuls, sans produit chimique, sans abrasif agressif.</p></div>' +

'</div></div></div></section>' +

/* ═══ FAQ ═══ */
'<section class="section section--cream" aria-labelledby="faq-home-heading"><div class="wrap">' +
'<div class="section__head"><span class="t-eyebrow">Questions fr&eacute;quentes</span><h2 class="t-display" id="faq-home-heading">Les vraies questions que vous vous posez</h2><p>R&eacute;ponses directes, sans jargon technique inutile.</p></div>' +
'<div class="faq__list">' +
faq('Quelle est la diff&eacute;rence entre une po&ecirc;le inox et une po&ecirc;le c&eacute;ramique ?', 'L\'inox n\'a aucun rev&ecirc;tement &mdash; il est sans PFAS par nature, dure toute une vie, mais demande un apprentissage du pr&eacute;chauffage. La c&eacute;ramique a un rev&ecirc;tement min&eacute;ral antiadh&eacute;sif, sans PFAS, id&eacute;al pour les &oelig;ufs et cr&ecirc;pes, mais sa dur&eacute;e de vie est de 2 &agrave; 5 ans. Le choix d&eacute;pend de votre usage dominant et de votre rapport &agrave; la technique.') +
faq('L\'inox 18/10 est-il vraiment sans PFAS ?', 'Absolument. L\'inox 18/10 est un alliage d\'acier inoxydable (18% chrome, 10% nickel) sans aucun rev&ecirc;tement. Il n\'y a donc aucun PFAS, PFOA ni PTFE &mdash; pas parce qu\'ils ont &eacute;t&eacute; retir&eacute;s, mais parce qu\'il n\'y en a jamais eu. C\'est la seule garantie v&eacute;ritablement absolue.') +
faq('Pourquoi ma po&ecirc;le inox accroche-t-elle m&ecirc;me avec de l\'huile ?', 'Cause principale dans 70% des cas&nbsp;: le pr&eacute;chauffage est insuffisant. L\'inox doit &ecirc;tre uniformément chaud (2 &agrave; 3 minutes &agrave; feu moyen) avant d\'ajouter l\'huile. Autre cause&nbsp;: l\'aliment est trop humide ou trop froid. S&eacute;chez vos viandes et sortez-les du frigo 20 minutes avant.') +
faq('Les po&ecirc;les CFLAGRANT sont-elles compatibles induction ?', 'Les gammes inox 18/10 et fa&ccedil;on pierre CFLAGRANT sont compatibles induction gr&acirc;ce &agrave; leur fond magn&eacute;tique. Les po&ecirc;les c&eacute;ramique selon les mod&egrave;les &mdash; v&eacute;rifiez la fiche produit sur cflagrant.shop. Test simple&nbsp;: un aimant adh&egrave;re au fond &rarr; compatible induction.') +
faq('Quelle taille de po&ecirc;le pour une famille de 4 personnes ?', 'Pour 3-4 personnes, la po&ecirc;le 28 cm est la plus polyvalente. Elle permet de cuire 2-3 steaks simultan&eacute;ment ou une grande omelette familiale. Le set 20/24/28 cm CFLAGRANT est la solution la plus coh&eacute;rente pour &eacute;quiper une cuisine de famille.') +
faq('Combien de temps dure un rev&ecirc;tement c&eacute;ramique ?', 'Avec un usage adapt&eacute; (feu doux &agrave; moyen, ustensiles doux, lavage &agrave; la main, pas de surchauffe), un rev&ecirc;tement c&eacute;ramique dure 2 &agrave; 4 ans. La dur&eacute;e de vie raccourcit avec le lave-vaisselle, la surchauffe ou les ustensiles m&eacute;talliques.') +
'</div></div></section>' +

/* ═══ TRUST PILLARS ═══ */
'<section class="section section--white trust-section" aria-labelledby="trust-heading"><div class="wrap">' +
'<div class="section__head"><span class="t-eyebrow">Pourquoi nous lire</span><h2 class="t-display" id="trust-heading">Un guide &eacute;ditorial, pas une vitrine</h2><p>cuisine-sans-pfas.fr existe pour vous aider &agrave; choisir &mdash; pas pour vous vendre quoi que ce soit.</p></div>' +
'<div class="trust-pillars">' +

'<div class="trust-pillar"><div class="trust-pillar__icon" aria-hidden="true">&#9997;&#65039;</div><h3 class="trust-pillar__title">Contenu 100% original</h3><p class="trust-pillar__text">Tous les guides sont r&eacute;dig&eacute;s exclusivement pour ce portail. Aucun texte copi&eacute; de la boutique officielle. Chaque article est une ressource &eacute;ditoriale ind&eacute;pendante.</p></div>' +

'<div class="trust-pillar"><div class="trust-pillar__icon" aria-hidden="true">&#128300;</div><h3 class="trust-pillar__title">Explications techniques honn&ecirc;tes</h3><p class="trust-pillar__text">Nous expliquons ce que l\'inox ne fait pas aussi bien que ce qu\'il fait. La c&eacute;ramique a des limites &mdash; on les dit clairement. Pas de sur-promesses, pas d\'euph&eacute;mismes.</p></div>' +

'<div class="trust-pillar"><div class="trust-pillar__icon" aria-hidden="true">&#128683;</div><h3 class="trust-pillar__title">Aucun panier, aucun paiement</h3><p class="trust-pillar__text">Ce site ne vend rien. Tous les boutons d\'achat renvoient vers cflagrant.shop, la boutique officielle. Notre seule mission est de vous aider &agrave; faire le bon choix.</p></div>' +

'<div class="trust-pillar"><div class="trust-pillar__icon" aria-hidden="true">&#128208;</div><h3 class="trust-pillar__title">Conseils par usage, pas par produit</h3><p class="trust-pillar__text">Nous raisonnons toujours &agrave; partir de votre fa&ccedil;on de cuisiner, pas depuis les caract&eacute;ristiques d\'un produit. Le bon outil est celui qui correspond &agrave; vos gestes.</p></div>' +

'</div></div></section>' +

/* ═══ CTA BANNER ═══ */
'<section class="cta-banner" aria-labelledby="cta-heading">' +
'<div class="cta-banner__mesh" aria-hidden="true"></div>' +
'<div class="wrap cta-banner__inner">' +
'<div class="cta-banner__badge">&#128722; Boutique officielle CFLAGRANT</div>' +
'<h2 id="cta-heading">Vous savez ce qu\'il vous faut. Passez &agrave; l\'action.</h2>' +
'<p class="cta-banner__desc">Retrouvez toute la gamme &mdash; po&ecirc;les inox, c&eacute;ramique Green Pearl, sets de casseroles, couscoussier &mdash; sur la boutique officielle.</p>' +
'<div class="cta-banner__actions">' +
'<a href="https://www.cflagrant.shop" target="_blank" rel="noopener sponsored" class="btn btn-copper btn-lg">Voir les po&ecirc;les inox 18/10</a>' +
'<a href="https://www.cflagrant.shop" target="_blank" rel="noopener sponsored" class="btn btn-lg" style="background:rgba(255,255,255,.12);color:#fff;border-color:rgba(255,255,255,.2)">D&eacute;couvrir les po&ecirc;les sans PFAS</a>' +
'</div>' +
'<div class="cta-banner__note">&#128666; Livraison gratuite d&egrave;s 35&euro; &middot; Paiement s&eacute;curis&eacute; &middot; Service client fran&ccedil;ais</div>' +
'</div></section>'

; });

/* ================================================================
   INIT
   ================================================================ */
document.addEventListener('DOMContentLoaded', function() {
  var initId = location.pathname.replace(/^\//, '') || 'home';
  renderPage(initId);
});
