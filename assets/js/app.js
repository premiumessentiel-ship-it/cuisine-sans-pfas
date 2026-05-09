/**
 * CFLAGRANT GUIDE — Main JavaScript
 * Version: 1.0.0
 * Architecture: Vanilla JS SPA router with hash-based navigation
 * Performance: Minimal JS, event delegation, passive listeners
 */

'use strict';

/* ================================================================
   ROUTER
   ================================================================ */
const pages = {};

function reg(id, fn) { pages[id] = fn; }

function navigate(id, e) {
  if (e) e.preventDefault();
  history.pushState({}, '', '#/' + id);
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
}

// Handle browser back/forward
window.addEventListener('popstate', () => {
  const id = location.hash.replace('#/', '').split('?')[0] || 'home';
  renderPage(id);
});

function updateNavState(id) {
  document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('is-active'));
  const map = {
    'poele-inox': 'nav-inox',
    'poele-ceramique': 'nav-ceramic',
    'poele-sans-pfas': 'nav-pfas',
    'quelle-poele-induction': 'nav-induction',
    'inox-vs-ceramique': 'nav-comp',
    'avis-cflagrant': 'nav-avis'
  };
  if (map[id]) {
    const el = document.getElementById(map[id]);
    if (el) el.classList.add('is-active');
  }
}

/* ================================================================
   HEADER SCROLL EFFECT
   ================================================================ */
(function initHeaderScroll() {
  const hdr = document.getElementById('hdr');
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        hdr.classList.toggle('is-scrolled', window.scrollY > 8);
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ================================================================
   MOBILE DRAWER
   ================================================================ */
(function initDrawer() {
  const drawer    = document.getElementById('drawer');
  const burgerBtn = document.getElementById('burgerBtn');
  const closeBtn  = document.getElementById('drawerClose');
  const overlay   = document.getElementById('drawerOverlay');

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

  // Export so drawer links can call it
  window.closeDrawer = closeDrawer;

  burgerBtn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
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

      // Close all
      document.querySelectorAll('.faq__item.is-open').forEach(i => {
        i.classList.remove('is-open');
        i.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });

      // Open clicked (if was closed)
      if (!isOpen) {
        item.classList.add('is-open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ================================================================
   HELPERS — HTML BUILDERS
   ================================================================ */

/** Single FAQ item */
function faq(question, answer) {
  return `
    <div class="faq__item">
      <button class="faq__question" aria-expanded="false">
        ${question}
        <span class="faq__toggle" aria-hidden="true">+</span>
      </button>
      <div class="faq__answer" role="region">
        <div class="faq__answer-clip">
          <div class="faq__answer-body">${answer}</div>
        </div>
      </div>
    </div>`;
}

/** External shop button */
function shopBtn(path, label, cls = 'btn-primary') {
  return `<a href="https://www.cflagrant.shop${path}" target="_blank" rel="noopener sponsored" class="btn ${cls}">${label}</a>`;
}

/** Inline product card */
function prodCard(icon, name, desc, tags, shopPath, shopLabel) {
  return `
    <div class="prod-card">
      <div class="prod-card__icon">${icon}</div>
      <div class="prod-card__info">
        <div class="prod-card__name">${name}</div>
        <p class="prod-card__desc">${desc}</p>
        <div class="prod-card__tags">${tags.map(t => `<span class="pill ${t[0]}">${t[1]}</span>`).join('')}</div>
      </div>
      <div class="prod-card__action">${shopBtn(shopPath, shopLabel)}</div>
    </div>`;
}

/** Sidebar builder */
function buildSidebar(tocItems, prodEmoji, prodName, prodDesc, shopPath, related) {
  return `
    <aside class="sidebar" aria-label="Navigation rapide">
      <div class="sb-card">
        <div class="sb-card__head">Sommaire</div>
        <ul class="sb-toc">
          ${tocItems.map(([label, anchor]) => `<li><a href="#${anchor}">${label}</a></li>`).join('')}
        </ul>
      </div>
      <div class="sb-card sb-prod" style="text-align:center">
        <span class="sb-prod__emoji">${prodEmoji}</span>
        <div class="sb-prod__name">${prodName}</div>
        <p class="sb-prod__desc">${prodDesc}</p>
        ${shopBtn(shopPath, 'Voir sur CFLAGRANT →')}
      </div>
      <div class="sb-card">
        <div class="sb-card__head">Guides liés</div>
        <ul class="sb-related">
          ${related.map(([label, pageId]) => `<li><a href="#" onclick="navigate('${pageId}',event)">${label}</a></li>`).join('')}
        </ul>
      </div>
    </aside>`;
}

/** Article shell wrapper */
function artShell({ h1, intro, pills, readTime, breadParts, schema, content, sidebar }) {
  const bc = breadParts.map(([label, id], i) =>
    i < breadParts.length - 1
      ? `<a href="#" onclick="navigate('${id}',event)">${label}</a><span class="breadcrumb__sep" aria-hidden="true">›</span>`
      : `<span aria-current="page">${label}</span>`
  ).join('');

  return `
    ${schema || ''}
    <section class="art-hero">
      <div class="wrap">
        <nav class="breadcrumb" aria-label="Fil d'Ariane">
          <a href="#" onclick="navigate('home',event)">Accueil</a>
          <span class="breadcrumb__sep" aria-hidden="true">›</span>
          ${bc}
        </nav>
        <div class="art-meta">
          ${pills.map(([cls, label]) => `<span class="pill ${cls}">${label}</span>`).join('')}
          <span class="art-reading" aria-label="Temps de lecture">⏱ ${readTime}</span>
        </div>
        <h1 class="art-h1">${h1}</h1>
        <p class="art-intro">${intro}</p>
      </div>
    </section>
    <section class="art-body">
      <div class="wrap">
        <div class="art-layout">
          <article class="art-content">${content}</article>
          ${sidebar}
        </div>
      </div>
    </section>`;
}

/** Guide card for home grid */
function gCard(cat, time, title, desc, id) {
  return `
    <div class="gcard" onclick="navigate('${id}',event)" role="button" tabindex="0"
         aria-label="${title}" onkeydown="if(event.key==='Enter')navigate('${id}',event)">
      <div class="gcard__top">
        <span class="gcard__cat">${cat}</span>
        <span class="gcard__time">${time}</span>
      </div>
      <h3>${title}</h3>
      <p>${desc}</p>
      <div class="gcard__arrow" aria-hidden="true">→</div>
    </div>`;
}

/* ================================================================
   HOME PAGE
   ================================================================ */
reg('home', () => `
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebPage","@id":"https://guide.cflagrant.fr/#webpage","name":"CFLAGRANT Guide — L'encyclopédie pratique de la cuisson saine","description":"Guides experts sur l'inox 18/10, la céramique sans PFAS et la cuisson saine. Portail éditorial indépendant.","url":"https://guide.cflagrant.fr","isPartOf":{"@id":"https://guide.cflagrant.fr/#website"}}
  <\/script>

  <!-- HERO -->
  <section class="hero" aria-labelledby="hero-heading">
    <div class="hero__grain" aria-hidden="true"></div>
    <div class="hero__orb hero__orb--1" aria-hidden="true"></div>
    <div class="hero__orb hero__orb--2" aria-hidden="true"></div>
    <div class="wrap">
      <div class="hero__inner">
        <div>
          <div class="hero__eyebrow">
            <span class="hero__dot" aria-hidden="true"></span>
            <span class="t-eyebrow" style="color:var(--fern)">Portail éditorial · Expertise cuisson</span>
          </div>
          <h1 class="hero__h1" id="hero-heading">
            Mieux cuisiner commence par <em>mieux choisir</em>
          </h1>
          <p class="hero__lead">
            Pas un magasin. Un guide. L'inox, la céramique, la façon pierre — on vous explique les vraies différences pour équiper votre cuisine intelligemment.
          </p>
          <div class="hero__actions">
            <a href="#guides-section" class="btn btn-copper btn-lg"
               onclick="document.getElementById('guides-section').scrollIntoView({behavior:'smooth'});return false;">
              Explorer les guides
            </a>
            <a href="https://www.cflagrant.shop" target="_blank" rel="noopener sponsored"
               class="btn btn-lg"
               style="background:rgba(255,255,255,.1);color:rgba(255,255,255,.85);border-color:rgba(255,255,255,.2)">
              Boutique officielle ↗
            </a>
          </div>
          <p class="hero__note">
            <span aria-hidden="true">📚</span>
            Ce site est un portail éditorial indépendant — pas une boutique. Tous les liens d'achat pointent vers
            <strong style="color:rgba(255,255,255,.55)">cflagrant.shop</strong>, la boutique officielle.
          </p>
        </div>
        <div class="hero__cards" aria-hidden="true">
          <div class="hcard" onclick="navigate('poele-inox',event)" role="button" tabindex="-1">
            <div class="hcard__row">
              <div class="hcard__icon hcard__icon--inox">⚙️</div>
              <div class="hcard__info">
                <div class="hcard__label">Matériau n°1</div>
                <div class="hcard__title">Inox 18/10</div>
                <div class="hcard__desc">Sans revêtement. La poêle des cuisiniers.</div>
              </div>
              <span class="hcard__arrow">→</span>
            </div>
          </div>
          <div class="hcard" onclick="navigate('poele-ceramique',event)" role="button" tabindex="-1">
            <div class="hcard__row">
              <div class="hcard__icon hcard__icon--cer">🌿</div>
              <div class="hcard__info">
                <div class="hcard__label">Matériau n°2</div>
                <div class="hcard__title">Céramique sans PFAS</div>
                <div class="hcard__desc">Antiadhésif minéral. Cuisson douce.</div>
              </div>
              <span class="hcard__arrow">→</span>
            </div>
          </div>
          <div class="hcard" onclick="navigate('poele-pierre-greblon',event)" role="button" tabindex="-1">
            <div class="hcard__row">
              <div class="hcard__icon hcard__icon--pierre">🪨</div>
              <div class="hcard__info">
                <div class="hcard__label">Matériau n°3</div>
                <div class="hcard__title">Façon pierre · Greblon</div>
                <div class="hcard__desc">Confort quotidien. Chauffe homogène.</div>
              </div>
              <span class="hcard__arrow">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TRUST STRIP -->
  <div class="trust" role="complementary" aria-label="Informations clés">
    <div class="wrap">
      <ul class="trust__inner">
        <li class="trust__item"><span aria-hidden="true">🇫🇷</span> Marque française</li>
        <li class="trust__item"><span aria-hidden="true">⚡</span> Compatible induction</li>
        <li class="trust__item"><span aria-hidden="true">🌿</span> Gammes sans PFAS</li>
        <li class="trust__item"><span aria-hidden="true">🚚</span> Livraison gratuite dès 35€</li>
        <li class="trust__item"><span aria-hidden="true">📖</span> Guides rédigés par des passionnés</li>
      </ul>
    </div>
  </div>

  <!-- UNIVERSE — 3 matériaux -->
  <section class="section section--white" aria-labelledby="universe-heading">
    <div class="wrap">
      <div class="section__head">
        <span class="t-eyebrow">Comprendre avant d'acheter</span>
        <h2 class="t-display" id="universe-heading">Trois matériaux. Trois philosophies de cuisson.</h2>
        <p>Chaque revêtement répond à des gestes culinaires précis. Identifier votre usage réel est la première étape d'un choix cohérent.</p>
      </div>
      <div class="universe__grid">
        <div class="ucard" onclick="navigate('poele-inox',event)" role="button" tabindex="0"
             aria-label="Découvrir le guide Inox 18/10">
          <div class="ucard__num" aria-hidden="true">01</div>
          <div class="ucard__mat">
            <span class="ucard__dot ucard__dot--inox"></span>
            <span class="ucard__mat-label">Inox 18/10</span>
          </div>
          <h3>La durabilité absolue</h3>
          <p>Pas de revêtement, pas de limite. L'inox 18/10 monte haut en température, résiste aux décennies, passe au four et au lave-vaisselle. Idéal pour qui veut investir une fois.</p>
          <div class="ucard__props">
            <div class="ucard__prop">Sans aucun revêtement chimique — zéro PFAS, PFOA, PTFE par nature</div>
            <div class="ucard__prop">Saisie parfaite, réaction de Maillard, déglaçage possible</div>
            <div class="ucard__prop">Durée de vie indéfinie — aucun revêtement ne s'use</div>
            <div class="ucard__prop">Demande un apprentissage du préchauffage</div>
          </div>
          <span class="ucard__cta">Lire le guide complet →</span>
        </div>
        <div class="ucard" onclick="navigate('poele-ceramique',event)" role="button" tabindex="0"
             aria-label="Découvrir le guide Céramique">
          <div class="ucard__num" aria-hidden="true">02</div>
          <div class="ucard__mat">
            <span class="ucard__dot ucard__dot--cer"></span>
            <span class="ucard__mat-label">Céramique</span>
          </div>
          <h3>L'antiadhésif sain</h3>
          <p>Green Pearl et Nature Ceramic offrent un glissement naturel sans PFAS, PFOA ni PTFE. Idéales pour les cuissons douces — œufs, crêpes, poissons. Entretien sans contrainte.</p>
          <div class="ucard__props">
            <div class="ucard__prop">Revêtement minéral certifié sans PFAS, PFOA et PTFE</div>
            <div class="ucard__prop">Surface antiadhésive efficace à feu doux et moyen</div>
            <div class="ucard__prop">Durée de vie : 2 à 5 ans selon usage</div>
            <div class="ucard__prop">Éviter la surchauffe et les abrasifs</div>
          </div>
          <span class="ucard__cta">Lire le guide complet →</span>
        </div>
        <div class="ucard" onclick="navigate('poele-pierre-greblon',event)" role="button" tabindex="0"
             aria-label="Découvrir le guide Façon Pierre">
          <div class="ucard__num" aria-hidden="true">03</div>
          <div class="ucard__mat">
            <span class="ucard__dot ucard__dot--pierre"></span>
            <span class="ucard__mat-label">Façon pierre</span>
          </div>
          <h3>Le confort quotidien</h3>
          <p>Le revêtement Greblon façon pierre associe l'esthétique granité à une répartition de chaleur douce et homogène. Aucune technique particulière — cuisinez naturellement.</p>
          <div class="ucard__props">
            <div class="ucard__prop">Revêtement Greblon haute résistance à l'abrasion</div>
            <div class="ucard__prop">Chauffe douce et très régulière</div>
            <div class="ucard__prop">Durée de vie : 3 à 5 ans avec un usage adapté</div>
            <div class="ucard__prop">Confort immédiat, sans apprentissage</div>
          </div>
          <span class="ucard__cta">Lire le guide complet →</span>
        </div>
      </div>
    </div>
  </section>

  <!-- GUIDES GRID -->
  <section class="section section--cream" aria-labelledby="guides-heading" id="guides-section">
    <div class="wrap">
      <div class="section__head">
        <span class="t-eyebrow">Encyclopédie pratique</span>
        <h2 class="t-display" id="guides-heading">Tous nos guides experts</h2>
        <p>Des réponses claires aux vraies questions que vous vous posez devant vos fourneaux.</p>
      </div>
      <div class="guide-grid">
        ${gCard('Inox','8 min','Comment cuire un steak parfait en inox ?','La croûte dorée sans que ça accroche. Préchauffage, test Leidenfrost, patience — la méthode complète.','comment-cuire-steak-poele-inox')}
        ${gCard('Problème','5 min','Pourquoi ma poêle inox accroche-t-elle ?','Comprendre la physique du collage pour ne plus jamais rater sa cuisson en inox.','pourquoi-poele-inox-colle')}
        ${gCard('Sans PFAS','7 min','Poêle sans PFAS : s\'y retrouver enfin','PFAS, PFOA, PTFE — démêler les acronymes pour un choix de cuisson vraiment éclairé.','poele-sans-pfas')}
        ${gCard('Induction','6 min','Quelle poêle pour une plaque induction ?','Fond magnétique, compatibilité, comportement thermique — tout ce que l\'induction change.','quelle-poele-induction')}
        ${gCard('Comparatif','6 min','Inox ou céramique : le vrai match','Durabilité contre facilité d\'usage. Deux poêles pour deux cuisiniers différents.','inox-vs-ceramique')}
        ${gCard('Achat','5 min','20, 24, 26 ou 28 cm : quelle taille ?','Ni trop petite pour le steak, ni trop grande pour l\'omelette — le guide par usage.','taille-poele')}
        ${gCard('Entretien','5 min','Nettoyer une poêle inox brûlée','Bicarbonate, vinaigre, eau bouillante — trois méthodes sans produit agressif.','nettoyer-poele-inox-brulee')}
        ${gCard('Batterie','7 min','Composer sa batterie inox intelligemment','Set 5 casseroles, manche amovible, couscoussier — l\'arsenal culinaire complet.','batterie-cuisine-inox')}
        ${gCard('Avis','8 min','CFLAGRANT : analyse éditoriale honnête','Matériaux, performances, limites et rapport qualité/prix. Sans sur-promesses.','avis-cflagrant')}
      </div>
    </div>
  </section>

  <!-- DECISION TOOL -->
  <section class="section-sm section--parch" aria-labelledby="decider-heading">
    <div class="wrap">
      <div class="section__head">
        <span class="t-eyebrow">Aide à la décision</span>
        <h2 class="t-display" id="decider-heading">Quel est votre vrai besoin ?</h2>
        <p>Partez de votre usage, pas du matériau. La bonne poêle est celle qui correspond à votre façon de cuisiner.</p>
      </div>
      <div class="decider__grid">
        <button class="dcard" onclick="navigate('poele-ceramique',event)">
          <div class="dcard__icon">🍳</div>
          <div><div class="dcard__text">Je veux que rien n'accroche</div><div class="dcard__sub">Céramique ou façon pierre</div></div>
        </button>
        <button class="dcard" onclick="navigate('poele-inox',event)">
          <div class="dcard__icon">💪</div>
          <div><div class="dcard__text">Je veux une poêle pour la vie</div><div class="dcard__sub">Inox 18/10 — aucune usure</div></div>
        </button>
        <button class="dcard" onclick="navigate('quelle-poele-induction',event)">
          <div class="dcard__icon">⚡</div>
          <div><div class="dcard__text">Je cuisine à l'induction</div><div class="dcard__sub">Guide de compatibilité magnétique</div></div>
        </button>
        <button class="dcard" onclick="navigate('poele-sans-pfas',event)">
          <div class="dcard__icon">🌿</div>
          <div><div class="dcard__text">Je veux éviter les PFAS</div><div class="dcard__sub">Inox ou céramique minérale</div></div>
        </button>
        <button class="dcard" onclick="navigate('batterie-cuisine-inox',event)">
          <div class="dcard__icon">🥘</div>
          <div><div class="dcard__text">Je veux tout équiper d'un coup</div><div class="dcard__sub">Sets & batteries complètes</div></div>
        </button>
        <button class="dcard" onclick="navigate('taille-poele',event)">
          <div class="dcard__icon">📐</div>
          <div><div class="dcard__text">Je ne sais pas quelle taille</div><div class="dcard__sub">Guide 20 → 28 cm par usage</div></div>
        </button>
      </div>
    </div>
  </section>

  <!-- COMPARISON PREVIEW -->
  <section class="section section--white" aria-labelledby="comp-heading">
    <div class="wrap">
      <div class="section__head">
        <span class="t-eyebrow">Comparatif rapide</span>
        <h2 class="t-display" id="comp-heading">Les 3 matériaux face à face</h2>
        <p>Une vue synthétique pour orienter votre choix. Les guides détaillent chaque critère en profondeur.</p>
      </div>
      <div class="comp-wrap">
        <table class="comp-table" role="table">
          <caption class="sr-only">Comparatif des matériaux : inox 18/10, céramique et façon pierre</caption>
          <thead>
            <tr>
              <th scope="col">Critère</th>
              <th scope="col">Inox 18/10</th>
              <th scope="col">Céramique</th>
              <th scope="col">Façon pierre</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Durabilité</td><td class="c-good">Illimitée</td><td class="c-ok">2–5 ans</td><td class="c-ok">3–5 ans</td></tr>
            <tr><td>Sans PFAS</td><td class="c-good">Absolu (sans revêtement)</td><td class="c-good">Oui — minéral</td><td class="c-ok">Sans PFOA</td></tr>
            <tr><td>Antiadhésif</td><td class="c-ok">Technique requise</td><td class="c-good">Naturel</td><td class="c-good">Très bon</td></tr>
            <tr><td>Saisie viande</td><td class="c-good">Excellente</td><td class="c-bad">Déconseillée</td><td class="c-ok">Correcte</td></tr>
            <tr><td>Œufs / crêpes</td><td class="c-bad">Difficile</td><td class="c-good">Parfaite</td><td class="c-good">Bonne</td></tr>
            <tr><td>Lave-vaisselle</td><td class="c-good">Oui</td><td class="c-bad">Déconseillé</td><td class="c-ok">Possible</td></tr>
            <tr><td>Facilité d'usage</td><td class="c-ok">Apprentissage</td><td class="c-good">Immédiate</td><td class="c-good">Immédiate</td></tr>
            <tr><td>Induction</td><td class="c-good">Oui</td><td class="c-ok">Selon modèle</td><td class="c-good">Oui</td></tr>
          </tbody>
        </table>
      </div>
      <div style="text-align:center;margin-top:var(--space-6)">
        <a href="#" onclick="navigate('inox-vs-ceramique',event)" class="btn btn-ghost">
          Lire le comparatif complet →
        </a>
      </div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <section class="cta-banner" aria-labelledby="cta-heading">
    <div class="cta-banner__mesh" aria-hidden="true"></div>
    <div class="wrap cta-banner__inner">
      <div class="cta-banner__badge">🛒 Boutique officielle CFLAGRANT</div>
      <h2 id="cta-heading">Vous savez ce qu'il vous faut. Passez à l'action.</h2>
      <p class="cta-banner__desc">
        Retrouvez toute la gamme — poêles inox, céramique Green Pearl, sets de casseroles, couscoussier — sur la boutique officielle.
      </p>
      <div class="cta-banner__actions">
        <a href="https://www.cflagrant.shop" target="_blank" rel="noopener sponsored" class="btn btn-copper btn-lg">
          Voir les poêles inox 18/10
        </a>
        <a href="https://www.cflagrant.shop" target="_blank" rel="noopener sponsored" class="btn btn-lg"
           style="background:rgba(255,255,255,.12);color:#fff;border-color:rgba(255,255,255,.2)">
          Découvrir les poêles sans PFAS
        </a>
      </div>
      <div class="cta-banner__note">
        🚚 Livraison gratuite dès 35€ · Paiement sécurisé · Service client français
      </div>
    </div>
  </section>
`);

/* ================================================================
   ARTICLE PAGES — content registered separately in pages/*.js
   Loaded via inline script tags in index.html for production
   or via separate /pages/ imports.
   Here we register simplified versions for the SPA to function.
   Full content is in /pages/ directory.
   ================================================================ */

// Each page is registered with full editorial content
// See /pages/poele-inox.js, /pages/poele-ceramique.js, etc.
// The following registers are stubs that load from the pages array
// populated by the page scripts.

/* ================================================================
   INIT
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const initId = location.hash.replace('#/', '').split('?')[0] || 'home';
  renderPage(initId);
});
