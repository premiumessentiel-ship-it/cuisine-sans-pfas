# CFLAGRANT Guide — Portail Éditorial Expert

> Encyclopédie pratique de la cuisson saine. Guides experts sur les poêles inox 18/10, la céramique sans PFAS et la cuisson saine.

**Portail éditorial indépendant** — pas une boutique. Tous les liens d'achat pointent vers [cflagrant.shop](https://www.cflagrant.shop).

---

## 📁 Architecture des fichiers

```
cflagrant-guide/
├── index.html                  ← Entrée SPA, tous les meta SEO, schemas JSON-LD
├── sitemap.xml                 ← Sitemap complet (14 URLs)
├── robots.txt                  ← Directives robots
├── manifest.json               ← PWA manifest (icônes, shortcuts, screenshots)
├── .htaccess                   ← Apache : SPA routing, gzip, cache, sécurité
├── _redirects                  ← Netlify / Cloudflare Pages : SPA fallback
├── vercel.json                 ← Vercel : rewrites + headers
├── README.md                   ← Ce fichier
└── assets/
    ├── css/
    │   └── main.css            ← Design system complet (~2000 lignes, BEM + custom props)
    ├── js/
    │   ├── app.js              ← Router SPA, interactions, page d'accueil
    │   └── pages.js            ← Contenu éditorial des 14 pages articles
    └── images/
        ├── favicon.svg         ← Favicon SVG scalable (recommandé)
        ├── favicon-16.png      ← Favicon 16×16
        ├── favicon-32.png      ← Favicon 32×32
        ├── apple-touch-icon.png← Apple Touch Icon 180×180
        ├── icon-72.png         ← PWA icon 72×72
        ├── icon-96.png         ← PWA icon 96×96
        ├── icon-128.png        ← PWA icon 128×128
        ├── icon-192.png        ← PWA icon 192×192 (maskable)
        ├── icon-512.png        ← PWA icon 512×512 (maskable)
        └── og-image.jpg        ← OG image 1200×630 pour les partages sociaux
```

---

## 🚀 Déploiement

### Option 1 — Hébergement Apache (mutualisé / VPS)

1. **Uploader** tous les fichiers à la racine de votre hébergement (ou sous-dossier configuré).
2. **Vérifier** que le module `mod_rewrite` est activé (nécessaire pour le SPA routing).
3. **Configurer** le domaine `cuisine-sans-pfas.fr` et pointer le DNS vers l'hébergeur.
4. **Activer SSL** (Let's Encrypt recommandé), puis décommenter la section HSTS dans `.htaccess`.

```bash
# Upload via FTP ou rsync
rsync -avz ./cflagrant-guide/ user@host:/var/www/cuisine-sans-pfas.fr/
```

### Option 2 — Netlify (recommandé, gratuit)

1. Glisser-déposer le dossier `cflagrant-guide/` dans [app.netlify.com/drop](https://app.netlify.com/drop)
2. Le fichier `_redirects` gère le SPA routing automatiquement.
3. Configurer le domaine custom dans les paramètres Netlify.

### Option 3 — Vercel

```bash
npm install -g vercel
cd cflagrant-guide
vercel --prod
```
Le fichier `vercel.json` gère le routing et les headers.

### Option 4 — Cloudflare Pages

1. Connecter votre dépôt Git dans le dashboard Cloudflare Pages.
2. Build command : *(vide — site statique)*
3. Output directory : `cflagrant-guide/`
4. Le fichier `_redirects` gère le SPA routing.

---

## 🛠 Technique

### Architecture SPA

Le site est une **Single Page Application** sans framework. Le routeur est vanilla JS, basé sur `history.pushState` et les hash fragments (`#/page-id`).

```
navigate('poele-inox', event)  →  renderPage('poele-inox')  →  pages['poele-inox']()
```

**Fichiers concernés :**
- `app.js` : router, drawer mobile, FAQ accordion, page d'accueil, helpers HTML
- `pages.js` : contenu éditorial complet des 14 pages articles

### Design System

- **Tokens** : 180+ CSS custom properties dans `:root`
- **Typographie** : Lora (serif, display) + Outfit (sans-serif, corps)
- **Palette** : Forest green (#1E3A2F) + Parchment (#F5F0E8) + Copper (#B8703A)
- **Mobile-first** : breakpoints 480px / 768px / 1024px

### Performance

- Fonts Google avec `display=swap` (pas de FOIT)
- `preconnect` / `crossorigin` pour fonts.googleapis.com
- `will-change: opacity` sur `#app` uniquement
- Animations CSS pures (accordion FAQ via `grid-template-rows`)
- Scroll listener `{ passive: true }`
- `requestAnimationFrame` pour l'effet header scroll
- Sticky mobile CTA avec `env(safe-area-inset-bottom)` (notch iOS)
- Print styles pour masquer navigation/CTA

### SEO

- Schema.org : WebSite + Organization + BreadcrumbList en global
- Schema.org Article par page (injecté inline dans chaque page JS)
- `<link rel="canonical">` sur `cuisine-sans-pfas.fr`
- OG + Twitter Card meta complets
- Breadcrumb structuré accessible (`aria-label`, `aria-current`)
- `aria-live="polite"` sur `#main` pour les transitions SPA
- Skip link accessibilité

---

## 📄 Pages (14 guides éditoriaux)

| URL hash | Titre | Durée lecture |
|---|---|---|
| `#/` | Accueil | — |
| `#/poele-inox` | Guide poêle inox 18/10 complet | 8 min |
| `#/poele-sans-pfas` | Poêle sans PFAS — décryptage | 7 min |
| `#/poele-ceramique` | Poêle céramique Green Pearl | 6 min |
| `#/poele-pierre-greblon` | Façon pierre Greblon | 5 min |
| `#/quelle-poele-induction` | Guide induction compatibilité | 6 min |
| `#/inox-vs-ceramique` | Comparatif inox vs céramique | 6 min |
| `#/inox-vs-pierre` | Comparatif inox vs façon pierre | 5 min |
| `#/comment-cuire-steak-poele-inox` | Cuire un steak en inox | 6 min |
| `#/pourquoi-poele-inox-colle` | Pourquoi ça accroche ? | 5 min |
| `#/nettoyer-poele-inox-brulee` | Nettoyer l'inox brûlé | 5 min |
| `#/taille-poele` | Quelle taille 20/24/26/28 cm | 5 min |
| `#/batterie-cuisine-inox` | Batterie cuisine inox complète | 7 min |
| `#/avis-cflagrant` | Analyse éditoriale honnête | 8 min |

---

## ⚠️ Instructions importantes

- **Toutes les URL d'achat** pointent vers `https://www.cflagrant.shop` avec `rel="noopener sponsored"`
- **Aucun panier, aucun checkout, aucun paiement** sur ce site
- Le footer et la section hero contiennent des disclaimers éditoriaux explicites
- Tout le contenu écrit est **unique** — aucune copie de cflagrant.shop
- La directive `rel="sponsored"` sur les liens produits signale correctement la relation à Google

---

## 🔧 Mise à jour du contenu

Pour modifier une page article, éditez la fonction correspondante dans `assets/js/pages.js`.

```javascript
// Exemple : modifier le guide inox
reg('poele-inox', () => artShell({
  h1: 'Nouveau titre...',
  // ...
}));
```

Pour ajouter une nouvelle page :
1. Enregistrer avec `reg('ma-nouvelle-page', () => artShell({...}))`  dans `pages.js`
2. Ajouter le lien dans le drawer mobile (index.html)
3. Ajouter le lien dans le footer (index.html)
4. Ajouter l'URL dans `sitemap.xml`

---

*© 2025 CFLAGRANT Guide — Portail éditorial indépendant*
