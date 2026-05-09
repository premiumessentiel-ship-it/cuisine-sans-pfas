/**
 * CFLAGRANT GUIDE — Article Pages Content
 * All SEO article pages with full editorial content
 * Registered into the global pages router
 */

/* ================================================================
   PAGE: POELE INOX
   ================================================================ */
reg('poele-inox', () => artShell({
  h1: 'Poêle inox 18/10 : le guide qui répond vraiment à vos questions',
  intro: "L'inox 18/10 est le matériau de référence des cuisiniers professionnels depuis des décennies. Sa réputation de « difficile » est souvent exagérée — mais ses avantages, eux, sont bien réels. Ce guide démonte les idées reçues.",
  pills: [['pill-steel', 'Inox 18/10'], ['pill-sage', 'Cuisson saine'], ['pill-dust', 'Sans revêtement']],
  readTime: '8 min de lecture',
  breadParts: [['Guides Inox', 'poele-inox'], ['Poêle inox 18/10', null]],
  schema: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"Poêle inox 18/10 : le guide complet","author":{"@type":"Organization","name":"CFLAGRANT Guide"},"about":{"@type":"Product","name":"Poêle inox 18/10 CFLAGRANT"}}<\/script>`,
  sidebar: buildSidebar(
    [['Ce que « 18/10 » signifie', 'inox-what'], ['Les vrais avantages', 'inox-pros'], ['Les limites honnêtes', 'inox-limits'], ['La technique', 'inox-tech'], ['Produits CFLAGRANT', 'inox-prod'], ['Entretien', 'inox-clean'], ['FAQ', 'inox-faq']],
    '⚙️', 'Poêles inox 18/10 CFLAGRANT',
    'Set 20/24/28 cm avec manche amovible. Compatible induction, gaz, vitrocéramique.',
    '',
    [['Cuire un steak en inox', 'comment-cuire-steak-poele-inox'], ['Pourquoi ça accroche ?', 'pourquoi-poele-inox-colle'], ['Nettoyer l\'inox brûlé', 'nettoyer-poele-inox-brulee'], ['Inox vs Céramique', 'inox-vs-ceramique'], ['Batterie de cuisine', 'batterie-cuisine-inox']]
  ),
  content: `
    <h2 id="inox-what">Ce que « 18/10 » veut dire concrètement</h2>
    <p>L'inox 18/10 est un alliage d'acier inoxydable composé de 18 % de chrome et 10 % de nickel. Ces deux éléments lui confèrent une résistance à la corrosion remarquable, une surface parfaitement neutre au contact des aliments, et une brillance durable.</p>
    <p>C'est exactement la même nuance d'acier que vous retrouvez dans les cuisines professionnelles. La différence avec l'inox bas de gamme est mesurable : plus de nickel = surface plus dense, moins poreuse, moins susceptible de rouiller ou d'absorber les saveurs.</p>
    <div class="callout callout--info">
      <p>✅ L'inox 18/10 ne contient aucun revêtement chimique. Il est donc exempt de PFAS, PFOA et PTFE par construction — pas par marketing. C'est le matériau lui-même qui garantit la neutralité alimentaire.</p>
    </div>

    <h2 id="inox-pros">Les avantages qui font vraiment la différence</h2>
    <ul>
      <li><strong>Durée de vie sans limite :</strong> sans revêtement à ménager, une poêle inox 18/10 correctement entretenue se transmet de génération en génération.</li>
      <li><strong>Montée en température :</strong> l'inox supporte les hautes températures sans se dégrader — idéal pour les saisies à feu vif qui créent la réaction de Maillard.</li>
      <li><strong>Neutralité chimique totale :</strong> l'acier inoxydable ne réagit pas avec les aliments acides comme la tomate, le citron ou le vinaigre.</li>
      <li><strong>Versatilité maximale :</strong> compatible induction, gaz, vitrocéramique et électrique. Passe au four et au lave-vaisselle.</li>
      <li><strong>Entretien simple :</strong> compatible lave-vaisselle, résistant aux ustensiles métalliques, sans protocole particulier.</li>
    </ul>

    <h2 id="inox-limits">Ce que l'inox ne fait pas — parlons franchement</h2>
    <p>L'inox n'est pas une poêle antiadhésive. Cette précision est fondamentale pour ne pas être déçu après l'achat.</p>
    <div class="callout callout--warn">
      <p>⚠️ Pour les œufs au plat, les crêpes, les poissons délicats ou les omelettes : une poêle céramique ou façon pierre sera toujours plus confortable qu'un inox. Ce n'est pas un défaut — c'est une caractéristique inhérente au matériau.</p>
    </div>
    <ul>
      <li>La surface accroche si le préchauffage est insuffisant ou si l'aliment est humide.</li>
      <li>L'inox nécessite un temps d'apprentissage — comptez 3 à 5 utilisations.</li>
      <li>La distribution de chaleur varie selon l'épaisseur du fond — un fond épais tri-ply améliore ce point.</li>
    </ul>

    <h2 id="inox-tech">La technique en 4 étapes claires</h2>
    <p>La cuisson en inox repose sur un principe physique simple : à la bonne température, l'eau contenue dans les aliments forme une couche vapeur qui empêche le contact direct avec le métal.</p>
    <div class="steps">
      <div class="step"><div class="step__num">1</div><div class="step__body"><div class="step__title">Préchauffez la poêle vide, 2 à 3 minutes à feu moyen</div><div class="step__desc">Posez la poêle à sec sur feu moyen. L'inox doit être uniformément chaud avant que vous ajoutiez quoi que ce soit. Ce préchauffage est l'étape que 90 % des gens zappent.</div></div></div>
      <div class="step"><div class="step__num">2</div><div class="step__body"><div class="step__title">Le test de la goutte d'eau (effet Leidenfrost)</div><div class="step__desc">Versez 2 à 3 gouttes d'eau froide. Si elles roulent en petites billes sans s'évaporer, la poêle est prête. Si elles disparaissent immédiatement, réduisez le feu 30 secondes.</div></div></div>
      <div class="step"><div class="step__num">3</div><div class="step__body"><div class="step__title">Ajoutez l'huile, attendez 30 secondes, puis l'aliment</div><div class="step__desc">Utilisez une huile à point de fumée élevé — tournesol, arachide ou ghee. Attendez que l'huile soit brillante et légèrement ondulante avant de déposer l'aliment.</div></div></div>
      <div class="step"><div class="step__num">4</div><div class="step__body"><div class="step__title">Ne touchez pas. Attendez le décrochage naturel.</div><div class="step__desc">L'inox libère l'aliment quand la croûte est formée. Si vous tirez et ça résiste, attendez encore 30 à 60 secondes. Forcer, c'est déchirer. Attendre, c'est réussir.</div></div></div>
    </div>

    <h2 id="inox-prod">Quelle poêle inox CFLAGRANT choisir ?</h2>
    ${prodCard('⚙️', 'Set 3 poêles inox 18/10 — 20/24/28 cm avec manche amovible', 'Le set de référence pour équiper une cuisine complète. Compatible tous feux, four, lave-vaisselle.', [['pill-sage', 'Sans PFAS'], ['pill-steel', 'Inox 18/10'], ['pill-forest', 'Induction']], '', 'Voir les poêles inox →')}
    ${prodCard('🥘', 'Sauteuse inox 18/10', 'Plus haute qu\'une poêle, idéale pour les sautés, plats mijotés et préparations en sauce.', [['pill-sage', 'Sans PFAS'], ['pill-steel', 'Induction']], '', 'Voir les sauteuses →')}

    <h2 id="inox-clean">Entretien : ce qu'il faut vraiment faire</h2>
    <ul>
      <li>Laissez toujours refroidir avant de passer sous l'eau (le choc thermique peut déformer le métal).</li>
      <li>Résidus collés : versez de l'eau, portez à ébullition, décollez à la spatule en bois.</li>
      <li>Taches blanches calcaires : vinaigre blanc dilué dans l'eau, 2 minutes d'ébullition, rinçage.</li>
      <li>Taches dorées ou bleutées (arc-en-ciel) : cosmétiques uniquement, sans incidence sur la cuisson. Le vinaigre les atténue.</li>
      <li>Compatible lave-vaisselle — le lavage à la main préserve mieux la brillance à long terme.</li>
    </ul>

    <h2 id="inox-faq">Questions fréquentes</h2>
    <div class="faq__list">
      ${faq('L\'inox 18/10 est-il vraiment sans PFAS ?', 'Absolument. L\'inox 18/10 est un acier inoxydable sans aucun revêtement ajouté. Zéro PFAS, PFOA, PTFE. La sécurité alimentaire est garantie par le matériau lui-même.')}
      ${faq('Pourquoi mon inox accroche-t-il malgré le préchauffage ?', 'Deux causes fréquentes : l\'aliment était trop humide (séchez-le avec du papier absorbant) ou trop froid (sortez-le du réfrigérateur 15 à 30 minutes avant). Un aliment humide fait tomber la température de surface.')}
      ${faq('Peut-on mettre une poêle inox au four ?', 'Oui, à condition que le manche soit compatible. Les poêles inox à manche inox passent au four sans aucune limite de température. Les modèles à manche amovible CFLAGRANT permettent aussi cette utilisation une fois le manche retiré.')}
      ${faq('Quelle est la différence entre un inox tri-ply et un inox simple ?', 'Un fond tri-ply (inox-aluminium-inox) distribue la chaleur de façon beaucoup plus uniforme grâce à la couche d\'aluminium centrale. L\'inox simple peut concentrer la chaleur au centre.')}
      ${faq('L\'inox convient-il pour cuire du poisson ?', 'Oui, avec précaution. Préchauffez bien, utilisez suffisamment de matière grasse, et ne bougez pas le poisson avant qu\'il se décolle naturellement. Pour les poissons très délicats, la céramique reste plus confortable.')}
    </div>`
}));

/* ================================================================
   PAGE: SANS PFAS
   ================================================================ */
reg('poele-sans-pfas', () => artShell({
  h1: 'Poêle sans PFAS : comprendre les enjeux pour choisir en conscience',
  intro: "PFAS, PFOA, PTFE — ces sigles techniques inondent les emballages. Que signifient-ils vraiment ? Quelles poêles sont authentiquement exemptées ? Ce guide démêle la réalité du marketing.",
  pills: [['pill-forest', 'Sans PFAS'], ['pill-sage', 'Cuisson saine'], ['pill-dust', 'Décryptage']],
  readTime: '7 min de lecture',
  breadParts: [['Guides Sans PFAS', 'poele-sans-pfas'], ['Poêle sans PFAS', null]],
  schema: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"Poêle sans PFAS : guide complet","author":{"@type":"Organization","name":"CFLAGRANT Guide"}}<\/script>`,
  sidebar: buildSidebar(
    [['C\'est quoi les PFAS ?', 'pfas-def'], ['Les alternatives', 'pfas-alt'], ['Lire une fiche produit', 'pfas-read'], ['Conseils pratiques', 'pfas-tips'], ['FAQ', 'pfas-faq']],
    '🌿', 'Poêles sans PFAS CFLAGRANT',
    'Céramique Green Pearl et inox 18/10 — les deux gammes exemptes de PFAS.',
    '',
    [['Guide céramique', 'poele-ceramique'], ['Guide inox', 'poele-inox'], ['Inox vs Céramique', 'inox-vs-ceramique']]
  ),
  content: `
    <h2 id="pfas-def">PFAS, PFOA, PTFE : un lexique essentiel</h2>
    <p>Ces acronymes désignent des familles de composés chimiques fluorés. Voici la distinction qui compte :</p>
    <ul>
      <li><strong>PTFE (polytétrafluoroéthylène) :</strong> le revêtement antiadhésif classique, popularisé sous la marque Téflon®. Stable à température normale, il peut libérer des composés volatils au-delà de 230-250°C. Appartient à la famille des PFAS.</li>
      <li><strong>PFOA (acide perfluorooctanoïque) :</strong> agent chimique utilisé dans la fabrication du PTFE. Officiellement interdit en Europe depuis 2020, il reste présent dans des stocks antérieurs.</li>
      <li><strong>PFAS :</strong> terme générique couvrant plusieurs milliers de composés fluorés. La réglementation européenne les encadre de plus en plus strictement.</li>
    </ul>
    <div class="callout callout--info">
      <p>✅ La mention « sans PFOA » est aujourd'hui le minimum légal en Europe. Ce qui différencie vraiment les produits, c'est l'absence totale de composé fluoré (inox) ou l'usage d'un revêtement minéral non fluoré (céramique).</p>
    </div>

    <h2 id="pfas-alt">Les alternatives disponibles chez CFLAGRANT</h2>
    <h3>Option 1 — L'inox 18/10 : zéro compromis</h3>
    <p>L'inox est la réponse la plus radicale à la question des PFAS : il n'y en a tout simplement aucun, parce qu'il n'y a aucun revêtement. La surface de cuisson est le métal lui-même — chimiquement inerte, thermiquement stable.</p>
    ${prodCard('⚙️', 'Poêles inox 18/10 CFLAGRANT — Set 20/24/28 cm', 'Sans aucun revêtement. Aucun PFAS par nature. Compatible induction, gaz, vitrocéramique, four.', [['pill-sage', 'Zéro PFAS'], ['pill-steel', 'Inox 18/10'], ['pill-forest', 'Induction']], '', 'Voir les poêles inox')}

    <h3>Option 2 — La céramique Green Pearl & Nature Ceramic</h3>
    <p>Ces revêtements minéraux (à base de silicium) offrent un antiadhésif naturel sans composé fluoré. Idéaux pour les cuissons douces où l'inox est moins à l'aise — œufs, crêpes, poissons, légumes.</p>
    ${prodCard('🌿', 'Poêle céramique Green Pearl — sans PFAS, PFOA, PTFE', 'Revêtement minéral antiadhésif. Cuisson saine et confortable pour les aliments délicats.', [['pill-forest', 'Sans PFAS'], ['pill-forest', 'Céramique'], ['pill-sage', 'Cuisson douce']], '', 'Voir les poêles céramique')}

    <h2 id="pfas-read">Comment lire une fiche produit sans se faire avoir</h2>
    <ul>
      <li><strong>« Sans PFOA » :</strong> minimum légal depuis 2020. Ne dit rien sur la présence d'autres PFAS.</li>
      <li><strong>« Sans PFAS » :</strong> plus ambitieux, mais vérifiez si c'est certifié ou simplement déclaratif.</li>
      <li><strong>Revêtement céramique :</strong> naturellement sans PFAS si le revêtement est minéral pur.</li>
      <li><strong>Inox sans revêtement :</strong> la seule garantie absolue — il n'y a tout simplement rien à contenir.</li>
    </ul>
    <div class="callout callout--warn">
      <p>⚠️ Certains produits affichent « pierre naturelle » ou « granit naturel » alors qu'il s'agit d'un revêtement avec charges minérales dans une matrice polymérique. Lisez la composition réelle, pas seulement le nom commercial.</p>
    </div>

    <h2 id="pfas-tips">Conseils pratiques pour cuisiner plus sainement</h2>
    <ul>
      <li>Réservez l'inox aux cuissons à haute température — saisie, rissolage, déglaçage.</li>
      <li>Utilisez la céramique pour les cuissons douces où le PTFE était traditionnellement utilisé.</li>
      <li>Ne dépassez jamais 200°C avec un revêtement céramique — la surchauffe dégrade le revêtement prématurément.</li>
      <li>Renouvelez votre céramique dès l'apparition de rayures profondes ou d'un accrochage persistant.</li>
    </ul>

    <h2 id="pfas-faq">Questions fréquentes</h2>
    <div class="faq__list">
      ${faq('Le PTFE est-il vraiment dangereux ?', 'À température normale (< 230°C), le PTFE est chimiquement stable. Le risque survient en cas de surchauffe importante. Si vous voulez éliminer tout risque, l\'inox et la céramique minérale sont les alternatives les plus sûres.')}
      ${faq('La céramique Green Pearl est-elle certifiée sans PFAS ?', 'La gamme Green Pearl est formulée sans PFAS, PFOA ni PTFE. Pour des détails de certification, consultez la fiche produit officielle sur cflagrant.shop.')}
      ${faq('Peut-on avoir confiance en un « sans PFAS » affiché sur un emballage ?', 'Cela dépend de si la marque fournit des certifications ou des tests tiers. L\'inox reste la garantie la plus incontestable car le matériau lui-même exclut la question.')}
    </div>`
}));

/* ================================================================
   PAGE: CÉRAMIQUE
   ================================================================ */
reg('poele-ceramique', () => artShell({
  h1: 'Poêle céramique : ce qu\'elle fait mieux que les autres (et ce qu\'elle ne fait pas)',
  intro: "La céramique Green Pearl et Nature Ceramic de CFLAGRANT combinent l'antiadhésif naturel et l'absence de composés fluorés. Un choix cohérent — à condition de comprendre son domaine d'excellence.",
  pills: [['pill-forest', 'Céramique'], ['pill-forest', 'Sans PFAS'], ['pill-dust', 'Cuisson douce']],
  readTime: '6 min de lecture',
  breadParts: [['Guides Céramique', 'poele-ceramique'], ['Poêle céramique', null]],
  schema: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"Poêle céramique : avantages, limites, conseils","author":{"@type":"Organization","name":"CFLAGRANT Guide"}}<\/script>`,
  sidebar: buildSidebar(
    [['Qu\'est-ce que la céramique ?', 'cer-def'], ['Domaine d\'excellence', 'cer-best'], ['Limites réelles', 'cer-limits'], ['Utilisation correcte', 'cer-use'], ['FAQ', 'cer-faq']],
    '🌿', 'Céramique CFLAGRANT',
    'Green Pearl et Nature Ceramic. Sans PFAS. Cuisson douce pour les aliments délicats.',
    '',
    [['Poêle sans PFAS', 'poele-sans-pfas'], ['Inox vs Céramique', 'inox-vs-ceramique'], ['Façon pierre', 'poele-pierre-greblon']]
  ),
  content: `
    <h2 id="cer-def">La céramique de cuisson, c'est quoi réellement ?</h2>
    <p>Le « revêtement céramique » d'une poêle est une couche à base de silicium (sol-gel) appliquée sur un corps en aluminium. Ce revêtement minéral crée une surface lisse naturellement antiadhésive, sans recourir aux composés fluorés du PTFE traditionnel.</p>
    <p>Chez CFLAGRANT, deux déclinaisons : la <strong>Green Pearl</strong> (vert profond, caractère affirmé) et la <strong>Nature Ceramic</strong> (ton naturel, discret). Mêmes propriétés fonctionnelles, esthétiques différentes.</p>

    <h2 id="cer-best">Où la céramique excelle vraiment</h2>
    <div class="callout callout--info">
      <p>✅ La céramique est dans son élément pour tout ce qui demande de la douceur : œufs sous toutes leurs formes, crêpes, pancakes, poissons à chair fragile, légumes printaniers.</p>
    </div>
    <ul>
      <li><strong>Œufs :</strong> le glissement est naturel sans matière grasse excessive. Résultat homogène.</li>
      <li><strong>Crêpes :</strong> la surface lisse permet de retourner sans difficulté. La crêpière céramique CFLAGRANT est particulièrement adaptée.</li>
      <li><strong>Poissons délicats :</strong> la chair ne s'accroche pas, la peau reste intacte.</li>
      <li><strong>Nettoyage :</strong> un simple passage à l'eau tiède avec une éponge douce suffit dans 90 % des cas.</li>
    </ul>
    ${prodCard('🌿', 'Poêle céramique Green Pearl — sans PFAS, PFOA, PTFE', 'Revêtement minéral antiadhésif. Cuisson saine et douce. Esthétique vert profond.', [['pill-forest', 'Sans PFAS'], ['pill-forest', 'Céramique'], ['pill-sage', 'Cuisson douce']], '', 'Voir la Green Pearl')}
    ${prodCard('🥞', 'Crêpière céramique CFLAGRANT', 'Fond plat, bord bas pour faciliter le retournement. Sans PFAS. Idéale pour les crêpes, pancakes et blinis.', [['pill-forest', 'Sans PFAS'], ['pill-forest', 'Céramique']], '', 'Voir la crêpière')}

    <h2 id="cer-limits">Les limites à connaître avant d'acheter</h2>
    <div class="callout callout--warn">
      <p>⚠️ La céramique n'est pas faite pour la saisie à feu vif. Dépasser 200°C détériore le revêtement irrémédiablement. Pour les steaks et cuissons à haute température, l'inox est le matériau approprié.</p>
    </div>
    <ul>
      <li>Durée de vie du revêtement : 2 à 5 ans selon la fréquence d'utilisation.</li>
      <li>Ne supporte pas la surchauffe (ne jamais préchauffer à vide sur feu vif).</li>
      <li>Lave-vaisselle déconseillé : les détergents et la chaleur dégradent le revêtement.</li>
      <li>Éviter les ustensiles métalliques et les éponges abrasives.</li>
      <li>Un choc thermique (poêle chaude dans l'eau froide) peut endommager le revêtement.</li>
    </ul>

    <h2 id="cer-use">Comment prolonger la durée de vie de votre céramique</h2>
    <div class="steps">
      <div class="step"><div class="step__num">1</div><div class="step__body"><div class="step__title">Toujours feu doux à moyen</div><div class="step__desc">La céramique chauffe vite — inutile de mettre à fond. Feu 5-6/10 est généralement suffisant.</div></div></div>
      <div class="step"><div class="step__num">2</div><div class="step__body"><div class="step__title">Une petite noisette de matière grasse</div><div class="step__desc">Même sur une surface antiadhésive, un peu de beurre ou d'huile améliore le résultat et protège le revêtement.</div></div></div>
      <div class="step"><div class="step__num">3</div><div class="step__body"><div class="step__title">Ustensiles doux uniquement</div><div class="step__desc">Spatule en bois, silicone alimentaire ou nylon. Jamais de fouet métallique ni de cuillère en acier.</div></div></div>
      <div class="step"><div class="step__num">4</div><div class="step__body"><div class="step__title">Nettoyage à la main, eau tiède</div><div class="step__desc">Après refroidissement complet, éponge douce et eau tiède. Le lave-vaisselle est l'ennemi numéro un de la céramique.</div></div></div>
    </div>

    <h2 id="cer-faq">Questions fréquentes</h2>
    <div class="faq__list">
      ${faq('La poêle céramique Green Pearl est-elle compatible induction ?', 'Selon les modèles. Certaines poêles céramique CFLAGRANT disposent d\'un fond magnétique compatible induction. Vérifiez la fiche produit sur cflagrant.shop.')}
      ${faq('Mon revêtement céramique commence à coller — que faire ?', 'Remplissez d\'eau tiède avec quelques gouttes de liquide vaisselle doux, laissez tremper 15 minutes, puis nettoyez à l\'éponge douce. Si le problème persiste, le revêtement est peut-être usé.')}
      ${faq('Peut-on cuire de la viande dans une poêle céramique ?', 'Pour des escalopes fines ou de la volaille à feu moyen, oui. Pour saisir un steak à feu vif, non — réservez l\'inox. La surchauffe dégrade définitivement le revêtement céramique.')}
      ${faq('Combien de temps dure un revêtement céramique CFLAGRANT ?', 'Avec un respect des préconisations (feu moyen, ustensiles doux, lavage à la main), comptez 2 à 4 ans d\'utilisation régulière.')}
    </div>`
}));

/* ================================================================
   PAGE: PIERRE GREBLON
   ================================================================ */
reg('poele-pierre-greblon', () => artShell({
  h1: 'Poêle façon pierre Greblon : pour quel cuisiner, pour quel usage ?',
  intro: "L'esthétique granité de la poêle façon pierre cache un revêtement Greblon aux propriétés thermiques sérieuses. Un choix de confort quotidien — à distinguer clairement de l'inox et de la céramique minérale.",
  pills: [['pill-dust', 'Façon pierre'], ['pill-copper', 'Greblon'], ['pill-dust', 'Quotidien']],
  readTime: '5 min de lecture',
  breadParts: [['Façon Pierre', 'poele-pierre-greblon'], ['Poêle façon pierre', null]],
  sidebar: buildSidebar(
    [['Qu\'est-ce que Greblon ?', 'greb-def'], ['Avantages', 'greb-pros'], ['Comparaison', 'greb-comp'], ['Pour qui ?', 'greb-who'], ['FAQ', 'greb-faq']],
    '🪨', 'Façon pierre CFLAGRANT',
    'Revêtement Greblon. Compatible induction. Cuisson homogène pour le quotidien.',
    '',
    [['Inox vs Pierre', 'inox-vs-pierre'], ['Guide céramique', 'poele-ceramique'], ['Quelle taille ?', 'taille-poele']]
  ),
  content: `
    <h2 id="greb-def">Le revêtement Greblon : plus qu'une question d'esthétique</h2>
    <p>Greblon est une marque de revêtement antiadhésif développée par Weilburger Coatings (Allemagne). Contrairement aux revêtements d'entrée de gamme, Greblon bénéficie d'une formulation renforcée qui lui confère une meilleure résistance à l'abrasion et aux rayures légères.</p>
    <p>Les poêles « façon pierre » utilisent ce revêtement avec une texture granulée qui améliore la répartition thermique et donne l'aspect visuel d'une surface minérale naturelle.</p>

    <h2 id="greb-pros">Ce que la façon pierre apporte vraiment</h2>
    <ul>
      <li><strong>Cuisson homogène :</strong> la texture du revêtement crée des micro-aspérités qui favorisent une distribution plus régulière de la chaleur.</li>
      <li><strong>Confort immédiat :</strong> aucune technique particulière requise — on pose, on chauffe, on cuit.</li>
      <li><strong>Antiadhésif durable :</strong> le Greblon résiste mieux à l'usure que les revêtements standards — durée de vie 3 à 5 ans.</li>
      <li><strong>Polyvalence :</strong> légumes, volailles, œufs, poissons — la façon pierre gère l'essentiel du quotidien.</li>
      <li><strong>Induction :</strong> le fond magnétique est compatible avec les plaques modernes.</li>
    </ul>

    <h2 id="greb-comp">Positionnement par rapport à l'inox et à la céramique</h2>
    <div class="callout callout--tip">
      <p>💡 La façon pierre se situe entre la céramique (plus pure sur la composition) et l'inox (plus durable). C'est le choix du confort quotidien sans contrainte pour qui ne veut pas apprendre la technique inox.</p>
    </div>
    <div class="callout callout--warn">
      <p>⚠️ La façon pierre Greblon contient une matrice polymérique. Elle est formulée sans PFOA, mais n'est pas équivalente à une surface 100 % minérale comme la céramique pure ou à l'inox sans revêtement.</p>
    </div>

    <h2 id="greb-who">Pour qui est fait ce type de poêle ?</h2>
    <ul>
      <li>Le cuisiner qui veut un antiadhésif fiable sans apprentissage ni technique particulière.</li>
      <li>Les foyers qui cuisinent principalement légumes, volailles et œufs au quotidien.</li>
      <li>Ceux qui recherchent une poêle esthétique et moderne.</li>
      <li>Le profil « bon rapport confort/durabilité/prix ».</li>
    </ul>

    <h2 id="greb-faq">Questions fréquentes</h2>
    <div class="faq__list">
      ${faq('La poêle façon pierre est-elle sans PFAS ?', 'La gamme façon pierre CFLAGRANT est formulée sans PFOA. Pour l\'absence totale de tout composé fluoré, l\'inox 18/10 et la céramique minérale sont les options les plus pures.')}
      ${faq('Peut-on cuire de la viande à feu vif dans une poêle façon pierre ?', 'À feu moyen, oui — avec de bons résultats. Pour la saisie haute température d\'un steak épais, l\'inox est préférable pour ne pas dégrader le revêtement.')}
      ${faq('Quelle est la durée de vie d\'une poêle Greblon ?', 'Avec un usage adapté (feu moyen, ustensiles doux, nettoyage à la main recommandé), comptez 3 à 5 ans. C\'est supérieur à un antiadhésif d\'entrée de gamme, inférieur à l\'inox sans revêtement.')}
    </div>`
}));

/* ================================================================
   PAGE: INDUCTION
   ================================================================ */
reg('quelle-poele-induction', () => artShell({
  h1: 'Poêle et induction : le guide de compatibilité complet',
  intro: "L'induction est la technologie de cuisson la plus précise et économe qui soit. Elle impose une contrainte : le fond magnétique. Ce guide explique ce que ça change réellement dans votre choix de poêle.",
  pills: [['pill-steel', 'Induction'], ['pill-dust', 'Compatibilité'], ['pill-copper', 'Achat']],
  readTime: '6 min de lecture',
  breadParts: [['Guides Induction', 'quelle-poele-induction'], ['Quelle poêle pour induction', null]],
  schema: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"Quelle poêle pour plaque induction ?","author":{"@type":"Organization","name":"CFLAGRANT Guide"}}<\/script>`,
  sidebar: buildSidebar(
    [['Comment fonctionne l\'induction', 'ind-how'], ['Tester la compatibilité', 'ind-test'], ['Inox ou céramique ?', 'ind-vs'], ['Tailles recommandées', 'ind-size'], ['FAQ', 'ind-faq']],
    '⚡', 'Poêles induction CFLAGRANT',
    'Inox 18/10, céramique et façon pierre. Compatibles induction, gaz, vitrocéramique.',
    '',
    [['Taille de poêle', 'taille-poele'], ['Inox vs Céramique', 'inox-vs-ceramique'], ['Guide inox', 'poele-inox']]
  ),
  content: `
    <h2 id="ind-how">Pourquoi l'induction est différente</h2>
    <p>Les plaques à induction ne chauffent pas par rayonnement thermique — elles génèrent un champ électromagnétique qui crée des courants induits directement dans le métal de votre poêle. Conséquence : seul le fond de la poêle chauffe, pas la plaque. Plus rapide, plus précis, plus sûr.</p>
    <p>La contrainte : le fond doit être en métal ferritique (magnétique). L'aluminium pur et l'inox austénitique pur ne fonctionnent pas.</p>

    <h2 id="ind-test">Comment tester la compatibilité</h2>
    <div class="steps">
      <div class="step"><div class="step__num">1</div><div class="step__body"><div class="step__title">Le test de l'aimant — 2 secondes</div><div class="step__desc">Approchez un aimant du fond de votre poêle. S'il adhère fortement, elle est compatible induction. Si l'aimant ne tient pas, elle ne fonctionnera pas.</div></div></div>
      <div class="step"><div class="step__num">2</div><div class="step__body"><div class="step__title">Le symbole sur l'emballage</div><div class="step__desc">Cherchez le pictogramme représentant une bobine ou la mention « induction compatible » sur l'emballage ou la fiche produit.</div></div></div>
      <div class="step"><div class="step__num">3</div><div class="step__body"><div class="step__title">Vérifier le fond spécifiquement</div><div class="step__desc">Certaines poêles ont un fond composite avec un disque d'acier soudé à l'aluminium. Testez le fond (pas les côtés).</div></div></div>
    </div>
    <div class="callout callout--info">
      <p>✅ Toutes les poêles et casseroles CFLAGRANT compatibles induction sont clairement identifiées sur les fiches produits de cflagrant.shop.</p>
    </div>

    <h2 id="ind-vs">Inox, céramique ou façon pierre sur induction — les nuances</h2>
    <ul>
      <li><strong>Inox sur induction :</strong> montée en température très rapide. Commencez à un niveau modéré (5-6/10) plutôt qu'à pleine puissance.</li>
      <li><strong>Céramique sur induction :</strong> parfaitement compatible si le fond est magnétique. Ne jamais laisser chauffer à vide — l'induction peut monter très vite.</li>
      <li><strong>Façon pierre sur induction :</strong> comportement naturel, aucune précaution particulière au-delà des préconisations standard.</li>
    </ul>

    <h2 id="ind-size">Quelle taille pour votre induction ?</h2>
    <div class="comp-wrap">
      <table class="comp-table">
        <caption class="sr-only">Tailles de poêle recommandées selon la zone d'induction</caption>
        <thead><tr><th scope="col">Zone induction</th><th scope="col">Taille poêle conseillée</th><th scope="col">Usage</th></tr></thead>
        <tbody>
          <tr><td>14–18 cm (petite)</td><td>20–24 cm</td><td>Œufs, sauces, 1 portion</td></tr>
          <tr><td>20–26 cm (grande)</td><td>24–28 cm</td><td>Repas complet, famille</td></tr>
          <tr><td>Feu bridge (28+ cm)</td><td>28–30 cm</td><td>Sauteuse, grande saisie</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="ind-faq">Questions fréquentes</h2>
    <div class="faq__list">
      ${faq('Toutes les poêles inox fonctionnent-elles sur induction ?', 'Non. Seul l\'inox ferritique (magnétique) est compatible. L\'inox austénitique pur ne l\'est pas. Faites toujours le test de l\'aimant ou vérifiez la fiche produit.')}
      ${faq('Ma poêle céramique ne chauffe pas sur mon induction — pourquoi ?', 'Si le fond n\'est pas magnétique, la plaque à induction ne peut pas la détecter. Vérifiez avec un aimant : si rien n\'adhère au fond, votre poêle n\'est pas compatible induction.')}
      ${faq('L\'induction peut-elle abîmer ma céramique ?', 'Si vous laissez une poêle céramique chauffer à vide ou à pleine puissance sur induction, oui — la montée en température peut être trop rapide. Commencez toujours à puissance modérée.')}
      ${faq('Peut-on utiliser une poêle induction sur le gaz ?', 'Oui. Une poêle compatible induction fonctionne aussi sur gaz, vitrocéramique et électrique. La compatibilité induction n\'est pas restrictive — elle élargit la versatilité.')}
    </div>`
}));

/* ================================================================
   PAGE: INOX VS CERAMIQUE
   ================================================================ */
reg('inox-vs-ceramique', () => artShell({
  h1: 'Poêle inox ou céramique : le comparatif qui répond vraiment à la question',
  intro: "C'est le duel le plus souvent posé. La réponse n'est pas « l'une est meilleure que l'autre » — c'est « chacune excelle dans un contexte différent ». Voici lequel vous correspond.",
  pills: [['pill-dust', 'Comparatif'], ['pill-steel', 'Inox 18/10'], ['pill-forest', 'Céramique']],
  readTime: '6 min de lecture',
  breadParts: [['Comparatifs', 'inox-vs-ceramique'], ['Inox vs Céramique', null]],
  sidebar: buildSidebar(
    [['Le résumé rapide', 'comp-sum'], ['Tableau complet', 'comp-table-sec'], ['Inox : pour qui ?', 'comp-inox'], ['Céramique : pour qui ?', 'comp-cer'], ['FAQ', 'comp-faq']],
    '⚖️', 'Les deux gammes CFLAGRANT',
    'Inox 18/10 et céramique Green Pearl. Découvrez les deux pour comparer.',
    '',
    [['Guide inox complet', 'poele-inox'], ['Guide céramique', 'poele-ceramique'], ['Inox vs Pierre', 'inox-vs-pierre'], ['Sans PFAS', 'poele-sans-pfas']]
  ),
  content: `
    <h2 id="comp-sum">En 30 secondes chrono</h2>
    <ul>
      <li><strong>Inox :</strong> investissement d'une vie. Aucun revêtement à ménager. Demande un apprentissage. Parfait pour saisir, dorer, déglacer.</li>
      <li><strong>Céramique :</strong> antiadhésif immédiat et sans souci. Cuisson douce idéale. Durée de vie limitée. Parfait pour les œufs, crêpes, poissons.</li>
    </ul>
    <div class="callout callout--info">
      <p>💡 La plupart des cuisiniers réguliers finissent par avoir les deux. Ce n'est pas un luxe — c'est une logique d'usage complémentaire.</p>
    </div>

    <h2 id="comp-table-sec">Le comparatif complet, critère par critère</h2>
    <div class="comp-wrap">
      <table class="comp-table">
        <caption class="sr-only">Comparatif inox 18/10 vs céramique</caption>
        <thead><tr><th scope="col">Critère</th><th scope="col">Inox 18/10</th><th scope="col">Céramique</th></tr></thead>
        <tbody>
          <tr><td>Durabilité</td><td class="c-good">Illimitée — sans revêtement</td><td class="c-ok">2 à 5 ans</td></tr>
          <tr><td>Absence de PFAS</td><td class="c-good">Absolue — aucun revêtement</td><td class="c-good">Revêtement minéral sans PFAS</td></tr>
          <tr><td>Antiadhésif naturel</td><td class="c-bad">Non — technique requise</td><td class="c-good">Oui — naturellement glissant</td></tr>
          <tr><td>Saisie viande haute T°</td><td class="c-good">Excellente</td><td class="c-bad">Déconseillée</td></tr>
          <tr><td>Œufs & crêpes</td><td class="c-bad">Difficile sans technique</td><td class="c-good">Parfaite</td></tr>
          <tr><td>Lave-vaisselle</td><td class="c-good">Compatible</td><td class="c-bad">Déconseillé</td></tr>
          <tr><td>Four compatible</td><td class="c-good">Oui (inox pur)</td><td class="c-bad">Non</td></tr>
          <tr><td>Facilité d'usage</td><td class="c-ok">~5 utilisations d'apprentissage</td><td class="c-good">Immédiate</td></tr>
          <tr><td>Température maximale</td><td class="c-good">Illimitée</td><td class="c-bad">200°C maximum</td></tr>
          <tr><td>Déglaçage de fond</td><td class="c-good">Idéal — crée des sucs</td><td class="c-bad">Déconseillé</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="comp-inox">L'inox est votre choix si...</h2>
    <ul>
      <li>Vous aimez saisir des viandes, faire des fonds de sauce, déglacer avec du vin ou du bouillon.</li>
      <li>Vous voulez un équipement qui dure des décennies sans jamais se dégrader.</li>
      <li>Vous êtes prêt à pratiquer le préchauffage quelques fois pour acquérir le geste.</li>
      <li>Vous passez régulièrement vos ustensiles au lave-vaisselle.</li>
    </ul>

    <h2 id="comp-cer">La céramique est votre choix si...</h2>
    <ul>
      <li>Vous préparez souvent des œufs, des crêpes, des poissons ou des légumes à feu doux.</li>
      <li>Vous voulez un outil simple qui fonctionne immédiatement sans apprentissage.</li>
      <li>La question des PFAS est importante et vous préférez un revêtement minéral certifié.</li>
      <li>Vous cuisinez exclusivement à feu doux ou moyen.</li>
    </ul>

    <h2 id="comp-faq">Questions fréquentes</h2>
    <div class="faq__list">
      ${faq('L\'inox est-il vraiment difficile à utiliser ?', 'Non — à condition d\'apprendre le préchauffage. Après 3 à 5 utilisations, les gestes deviennent instinctifs. La « difficulté » est souvent exagérée.')}
      ${faq('La céramique dure-t-elle vraiment moins longtemps ?', 'Oui, le revêtement s\'use. Une céramique bien entretenue dure 2 à 4 ans. L\'inox n\'a pas de durée de vie limitée.')}
      ${faq('Peut-on avoir les deux dans la même cuisine ?', 'Absolument — et c\'est souvent la combinaison la plus cohérente. L\'inox pour les viandes et la cuisine technique, la céramique pour les œufs et la cuisine rapide.')}
    </div>`
}));

/* ================================================================
   PAGE: INOX VS PIERRE
   ================================================================ */
reg('inox-vs-pierre', () => artShell({
  h1: 'Inox ou façon pierre : technique contre confort, quel est votre profil ?',
  intro: "L'inox et la façon pierre partagent la compatibilité induction — mais leur philosophie de cuisson est radicalement différente. Ce guide vous aide à choisir selon ce qui vous ressemble.",
  pills: [['pill-dust', 'Comparatif'], ['pill-steel', 'Inox'], ['pill-copper', 'Façon pierre']],
  readTime: '5 min de lecture',
  breadParts: [['Comparatifs', 'inox-vs-pierre'], ['Inox vs Pierre', null]],
  sidebar: buildSidebar(
    [['Les deux philosophies', 'ivp-phil'], ['Comparatif', 'ivp-comp'], ['Profils', 'ivp-who'], ['FAQ', 'ivp-faq']],
    '⚖️', 'Gammes CFLAGRANT',
    'Inox 18/10 et façon pierre Greblon. Deux approches de la cuisson quotidienne.',
    '',
    [['Inox vs Céramique', 'inox-vs-ceramique'], ['Guide façon pierre', 'poele-pierre-greblon'], ['Taille de poêle', 'taille-poele']]
  ),
  content: `
    <h2 id="ivp-phil">Deux philosophies de cuisson</h2>
    <p><strong>L'inox</strong> est le matériau du cuisinier qui veut maîtriser. La surface nue répond directement à vos gestes, à votre feu, à votre huile. C'est une relation active avec la cuisson — exigeante, mais gratifiante.</p>
    <p><strong>La façon pierre</strong> est le matériau du cuisiner qui veut cuisiner sans y penser. Le revêtement Greblon gère le confort antiadhésif. On se concentre sur la recette, pas sur la technique.</p>
    <div class="callout callout--tip">
      <p>💡 Ni l'un ni l'autre n'est objectivement « meilleur ». Tout dépend du cuisiner que vous êtes et de celui que vous voulez devenir.</p>
    </div>

    <h2 id="ivp-comp">Comparatif direct</h2>
    <div class="comp-wrap">
      <table class="comp-table">
        <caption class="sr-only">Comparatif inox vs façon pierre Greblon</caption>
        <thead><tr><th scope="col">Critère</th><th scope="col">Inox 18/10</th><th scope="col">Façon pierre Greblon</th></tr></thead>
        <tbody>
          <tr><td>Facilité d'usage</td><td class="c-ok">Apprentissage requis</td><td class="c-good">Immédiate</td></tr>
          <tr><td>Saisie viande</td><td class="c-good">Excellente</td><td class="c-ok">Correcte à feu moyen</td></tr>
          <tr><td>Antiadhésif</td><td class="c-bad">Technique</td><td class="c-good">Naturel</td></tr>
          <tr><td>Durabilité</td><td class="c-good">Illimitée</td><td class="c-ok">3–5 ans</td></tr>
          <tr><td>Sans PFAS</td><td class="c-good">Absolu</td><td class="c-ok">Sans PFOA</td></tr>
          <tr><td>Lave-vaisselle</td><td class="c-good">Compatible</td><td class="c-ok">Possible</td></tr>
          <tr><td>Déglaçage</td><td class="c-good">Excellent</td><td class="c-bad">Déconseillé</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="ivp-who">Quel profil êtes-vous ?</h2>
    <ul>
      <li><strong>Choisissez l'inox si :</strong> vous aimez la précision, cuisinez des viandes régulièrement, êtes patient, et voulez un équipement définitif.</li>
      <li><strong>Choisissez la façon pierre si :</strong> vous voulez cuisiner simplement sans technique, préparez surtout des légumes, des œufs et de la volaille, et êtes prêt à renouveler dans 4-5 ans.</li>
    </ul>

    <h2 id="ivp-faq">Questions fréquentes</h2>
    <div class="faq__list">
      ${faq('Peut-on faire la même chose avec une façon pierre qu\'avec un inox ?', 'Presque — mais pas tout. La façon pierre ne permet pas le déglaçage, ne monte pas à très haute température sans risquer le revêtement, et ne convient pas au four. L\'inox est plus polyvalent à long terme.')}
      ${faq('Pour un débutant, lequel recommandez-vous ?', 'La façon pierre offre une prise en main immédiate. L\'inox est un excellent investissement si le débutant est prêt à pratiquer le préchauffage.')}
    </div>`
}));

/* ================================================================
   PAGE: CUIRE STEAK
   ================================================================ */
reg('comment-cuire-steak-poele-inox', () => artShell({
  h1: 'Comment cuire un steak parfait dans une poêle inox : la méthode complète',
  intro: "La croûte dorée, le cœur rosé, les sucs en fond de poêle pour déglacer — le steak en inox est une expérience culinaire à part entière. Voici la méthode, étape par étape.",
  pills: [['pill-steel', 'Inox'], ['pill-copper', 'Technique'], ['pill-sage', 'Viande']],
  readTime: '6 min de lecture',
  breadParts: [['Guides Inox', 'poele-inox'], ['Cuire un steak en inox', null]],
  sidebar: buildSidebar(
    [['Pourquoi l\'inox pour le steak ?', 'steak-why'], ['Préparation', 'steak-prep'], ['La méthode', 'steak-method'], ['Erreurs fréquentes', 'steak-err'], ['FAQ', 'steak-faq']],
    '🥩', 'Poêle inox 18/10 — 28 cm',
    'Le format idéal pour un ou deux steaks. Compatible induction.',
    '',
    [['Guide inox complet', 'poele-inox'], ['Pourquoi ça accroche ?', 'pourquoi-poele-inox-colle'], ['Quelle taille ?', 'taille-poele']]
  ),
  content: `
    <h2 id="steak-why">Pourquoi l'inox est le meilleur allié du steak</h2>
    <p>La réaction de Maillard — cette transformation chimique qui crée la croûte brune, croustillante et savoureuse d'un bon steak — se produit à partir de 140-150°C. L'inox atteint et maintient ces températures sans se dégrader, sans libérer de composés, sans limite pratique.</p>
    <p>Les poêles antiadhésives sont limitées en température pour préserver leur revêtement. Résultat : une viande qui « cuit » plutôt que « saisit ». L'inox permet ce que les autres ne peuvent pas.</p>

    <h2 id="steak-prep">La préparation : la moitié du résultat</h2>
    <ul>
      <li><strong>Sortez la viande 20-30 min avant :</strong> un steak à température ambiante cuit de manière plus homogène.</li>
      <li><strong>Séchez bien la surface :</strong> tamponnez avec du papier absorbant. L'humidité empêche la croûte de se former.</li>
      <li><strong>Salez juste avant la cuisson :</strong> le sel appliqué à l'avance fait ressortir l'humidité.</li>
      <li><strong>Choisissez une huile à point de fumée élevé :</strong> tournesol, arachide ou ghee.</li>
    </ul>

    <h2 id="steak-method">La méthode pas à pas</h2>
    <div class="steps">
      <div class="step"><div class="step__num">1</div><div class="step__body"><div class="step__title">Préchauffez la poêle vide, 3 min à feu moyen-vif</div><div class="step__desc">La poêle doit être uniformément chaude. Un préchauffage insuffisant est la cause n°1 du steak qui accroche.</div></div></div>
      <div class="step"><div class="step__num">2</div><div class="step__body"><div class="step__title">Test Leidenfrost</div><div class="step__desc">Quelques gouttes d'eau froide. Elles doivent former des billes qui roulent et rebondissent — c'est l'effet Leidenfrost.</div></div></div>
      <div class="step"><div class="step__num">3</div><div class="step__body"><div class="step__title">Huile dans la poêle, 30 secondes</div><div class="step__desc">1 à 2 cuillères à soupe d'huile. Attendez qu'elle soit chaude et légèrement ondulante.</div></div></div>
      <div class="step"><div class="step__num">4</div><div class="step__body"><div class="step__title">Déposez le steak — ne le touchez plus</div><div class="step__desc">Vous devez entendre un fort « tsss ». Posez le steak et n'y touchez plus pendant 2 à 3 minutes.</div></div></div>
      <div class="step"><div class="step__num">5</div><div class="step__body"><div class="step__title">Attendez le décrochage naturel</div><div class="step__desc">L'inox libère la viande quand la croûte est formée. Si vous tirez et résistez, attendez encore 30 secondes.</div></div></div>
      <div class="step"><div class="step__num">6</div><div class="step__body"><div class="step__title">Retournez, ajoutez beurre et herbes</div><div class="step__desc">Retournez une seule fois. Ajoutez une noix de beurre, ail, thym. Arrosez avec le beurre fondu.</div></div></div>
      <div class="step"><div class="step__num">7</div><div class="step__body"><div class="step__title">Repos et déglaçage</div><div class="step__desc">Retirez le steak, laissez reposer 3 minutes. Déglacez la poêle avec 50 ml de vin rouge ou de bouillon.</div></div></div>
    </div>

    <h2 id="steak-err">Les 5 erreurs les plus fréquentes</h2>
    <ul>
      <li><strong>Poêle insuffisamment préchauffée :</strong> la cause n°1 du steak qui accroche.</li>
      <li><strong>Steak humide :</strong> l'humidité en surface empêche la croûte. Séchez toujours.</li>
      <li><strong>Steak froid :</strong> sortez la viande 20-30 min avant la cuisson.</li>
      <li><strong>Trop bouger la viande :</strong> un steak qu'on tourne toutes les 30 secondes ne saisit pas.</li>
      <li><strong>Pas de repos :</strong> un steak coupé immédiatement perd tout son jus.</li>
    </ul>

    <h2 id="steak-faq">Questions fréquentes</h2>
    <div class="faq__list">
      ${faq('Quelle huile pour cuire un steak en inox ?', 'Une huile à point de fumée élevé : tournesol, arachide, ou ghee. Évitez le beurre ordinaire qui brûle à haute température — réservez-le pour l\'arrosage en fin de cuisson.')}
      ${faq('Quelle taille de poêle inox pour un steak ?', 'Un steak individuel : poêle 24 cm. Deux steaks simultanément : 28 cm pour éviter l\'entassement, qui génère de la vapeur et empêche la saisie.')}
      ${faq('Mon steak accroche malgré un préchauffage — que faire ?', 'Vérifiez si la viande était sèche et à température ambiante. Attendez aussi le décrochage naturel sans forcer.')}
    </div>`
}));

/* ================================================================
   PAGE: POURQUOI ACCROCHE
   ================================================================ */
reg('pourquoi-poele-inox-colle', () => artShell({
  h1: 'Pourquoi une poêle inox accroche-t-elle ? La physique derrière le problème',
  intro: "Vous avez préchauffé, vous avez mis de l'huile — et pourtant ça accroche encore. Ce guide identifie les causes précises et les corrections pour ne plus jamais avoir ce problème.",
  pills: [['pill-steel', 'Inox'], ['pill-copper', 'Problème'], ['pill-dust', 'Solution']],
  readTime: '5 min de lecture',
  breadParts: [['Guides Inox', 'poele-inox'], ['Pourquoi ça accroche', null]],
  sidebar: buildSidebar(
    [['La physique du collage', 'col-phy'], ['Les 3 causes', 'col-causes'], ['Les solutions', 'col-fix'], ['FAQ', 'col-faq']],
    '⚙️', 'Poêle inox 18/10 CFLAGRANT',
    'Set 3 poêles inox 18/10. Compatible induction.',
    '',
    [['Guide inox complet', 'poele-inox'], ['Cuire un steak', 'comment-cuire-steak-poele-inox'], ['Nettoyer l\'inox', 'nettoyer-poele-inox-brulee']]
  ),
  content: `
    <h2 id="col-phy">La physique du collage en inox</h2>
    <p>L'inox est un métal à structure cristalline. À température insuffisante, les protéines des aliments créent des liaisons chimiques avec les atomes de métal en surface. C'est l'adhérence par dénaturation des protéines.</p>
    <p>À la bonne température, l'eau contenue dans l'aliment se vaporise instantanément en contact avec le métal chaud, créant une micro-couche de vapeur entre l'aliment et la surface — l'effet Leidenfrost. Les aliments glissent naturellement.</p>
    <div class="callout callout--info">
      <p>✅ La bonne nouvelle : l'inox ne « colle » pas — il accroche quand on ne lui offre pas les conditions pour ne pas le faire. La solution est toujours dans la technique, pas dans la poêle.</p>
    </div>

    <h2 id="col-causes">Les 3 causes réelles</h2>
    <div class="steps">
      <div class="step"><div class="step__num">1</div><div class="step__body"><div class="step__title">Préchauffage insuffisant (cause n°1 — ~70% des cas)</div><div class="step__desc">Une minute de préchauffage n'est pas suffisante. L'inox doit être uniformément chaud. Comptez 2 à 3 minutes à feu moyen. Faites le test de la goutte d'eau.</div></div></div>
      <div class="step"><div class="step__num">2</div><div class="step__body"><div class="step__title">Aliment trop humide ou trop froid</div><div class="step__desc">Un aliment sorti directement du réfrigérateur fait chuter la température de surface. L'humidité crée de la vapeur qui empêche la saisie. Séchez avec du papier absorbant, sortez la viande 20 min avant.</div></div></div>
      <div class="step"><div class="step__num">3</div><div class="step__body"><div class="step__title">Mouvement prématuré de l'aliment</div><div class="step__desc">Retourner l'aliment avant que la croûte soit formée, c'est arracher plutôt que décoller. L'inox libère naturellement l'aliment quand la croûte est développée. Si ça résiste, attendez encore 30 à 60 secondes.</div></div></div>
    </div>

    <h2 id="col-fix">Les corrections, une par une</h2>
    <ul>
      <li><strong>Préchauffage :</strong> 2-3 minutes à feu moyen. Test goutte d'eau obligatoire.</li>
      <li><strong>Aliments humides :</strong> papier absorbant sur toutes les surfaces.</li>
      <li><strong>Aliments froids :</strong> 15-30 minutes à température ambiante avant cuisson.</li>
      <li><strong>Patience :</strong> ne jamais forcer le décrochage — attendre toujours.</li>
    </ul>
    <div class="callout callout--warn">
      <p>⚠️ Si après toutes ces corrections votre inox accroche encore sur des œufs ou des crêpes : c'est normal. L'inox n'est pas fait pour ces usages. La céramique est la bonne réponse pour les aliments très fragiles.</p>
    </div>

    <h2 id="col-faq">Questions fréquentes</h2>
    <div class="faq__list">
      ${faq('Comment faire le test de la goutte d\'eau ?', 'Versez 2-3 gouttes d\'eau froide dans la poêle préchauffée. Si elles forment des sphères qui roulent (effet Leidenfrost) : température parfaite. Si elles s\'évaporent en une seconde : trop chaud. Si elles restent plates : pas encore assez chaud.')}
      ${faq('Ma poêle inox neuve accroche-t-elle plus qu\'une ancienne ?', 'Pas nécessairement. Une poêle neuve peut avoir un léger film de fabrication — lavez-la avant la première utilisation. Les micro-aspérités diminuent légèrement avec l\'usage régulier.')}
    </div>`
}));

/* ================================================================
   PAGE: NETTOYER INOX
   ================================================================ */
reg('nettoyer-poele-inox-brulee', () => artShell({
  h1: 'Comment nettoyer une poêle inox brûlée : 3 méthodes qui marchent vraiment',
  intro: "Fond noirci, résidus carbonisés, taches arc-en-ciel — l'inox donne parfois l'impression d'être abîmé. La réalité : c'est presque toujours cosmétique et très récupérable.",
  pills: [['pill-steel', 'Entretien'], ['pill-steel', 'Inox'], ['pill-dust', 'Nettoyage']],
  readTime: '5 min de lecture',
  breadParts: [['Guides Inox', 'poele-inox'], ['Nettoyer l\'inox', null]],
  sidebar: buildSidebar(
    [['Ce qu\'il faut éviter', 'net-avoid'], ['Méthode 1 : eau bouillante', 'net-m1'], ['Méthode 2 : bicarbonate', 'net-m2'], ['Méthode 3 : vinaigre', 'net-m3'], ['FAQ', 'net-faq']],
    '✨', 'Gamme inox CFLAGRANT',
    'Poêles et casseroles inox 18/10. Durables, sans revêtement.',
    '',
    [['Guide inox complet', 'poele-inox'], ['Pourquoi ça accroche ?', 'pourquoi-poele-inox-colle'], ['Batterie de cuisine', 'batterie-cuisine-inox']]
  ),
  content: `
    <h2 id="net-avoid">Ce qu'il faut absolument éviter</h2>
    <ul>
      <li><strong>Paille de fer très agressive :</strong> raye la surface et la rend plus poreuse à l'avenir.</li>
      <li><strong>Eau de Javel :</strong> peut provoquer des taches et des points de corrosion.</li>
      <li><strong>Choc thermique :</strong> ne jamais plonger une poêle brûlante dans de l'eau froide — risque de déformation.</li>
    </ul>
    <div class="callout callout--info">
      <p>✅ L'inox 18/10 est robuste. Les taches brunes, noires ou arc-en-ciel sont presque toujours récupérables sans produit chimique agressif.</p>
    </div>

    <h2 id="net-m1">Méthode 1 — Eau bouillante pour les résidus alimentaires</h2>
    <div class="steps">
      <div class="step"><div class="step__num">1</div><div class="step__body"><div class="step__title">Laissez refroidir la poêle</div><div class="step__desc">Jamais d'eau froide sur une poêle brûlante. Attendez quelques minutes.</div></div></div>
      <div class="step"><div class="step__num">2</div><div class="step__body"><div class="step__title">Versez de l'eau et portez à ébullition</div><div class="step__desc">Couvrez les résidus d'eau, mettez sur le feu. Les résidus commencent à se décoller en 2 à 3 minutes.</div></div></div>
      <div class="step"><div class="step__num">3</div><div class="step__body"><div class="step__title">Raclez à la spatule et rincez</div><div class="step__desc">Une spatule en bois ou silicone suffit. Lavez ensuite normalement.</div></div></div>
    </div>

    <h2 id="net-m2">Méthode 2 — Bicarbonate pour le fond noirci</h2>
    <div class="steps">
      <div class="step"><div class="step__num">1</div><div class="step__body"><div class="step__title">Saupoudrez généreusement de bicarbonate</div><div class="step__desc">Couvrez le fond noirci d'une couche généreuse de bicarbonate de soude alimentaire.</div></div></div>
      <div class="step"><div class="step__num">2</div><div class="step__body"><div class="step__title">Ajoutez un peu d'eau chaude</div><div class="step__desc">Formez une pâte épaisse. Laissez agir 20 à 30 minutes.</div></div></div>
      <div class="step"><div class="step__num">3</div><div class="step__body"><div class="step__title">Frottez en cercles avec une éponge douce</div><div class="step__desc">Le bicarbonate est légèrement abrasif mais doux avec l'inox. Rincez à l'eau chaude.</div></div></div>
    </div>

    <h2 id="net-m3">Méthode 3 — Vinaigre blanc pour les taches calcaires</h2>
    <ul>
      <li>Mélangez eau et vinaigre blanc à parts égales dans la poêle.</li>
      <li>Portez à ébullition, maintenez 2 à 3 minutes.</li>
      <li>Laissez refroidir, videz, rincez à l'eau claire.</li>
    </ul>
    <div class="callout callout--tip">
      <p>💡 Les taches arc-en-ciel (reflets bleus, dorés, violets) sur l'inox sont des taches thermiques purement cosmétiques — elles n'affectent pas la cuisson. Le vinaigre les atténue significativement.</p>
    </div>

    <h2 id="net-faq">Questions fréquentes</h2>
    <div class="faq__list">
      ${faq('Peut-on mettre une poêle inox brûlée au lave-vaisselle ?', 'Oui — l\'inox 18/10 est compatible lave-vaisselle. Pour les résidus incrustés, un pré-trempage ou la méthode eau bouillante est plus efficace avant passage en machine.')}
      ${faq('La paille de fer verte (non métallique) est-elle acceptable ?', 'Oui — les éponges à gratter non métalliques (nylon vert) sont acceptables sur l\'inox, à condition de ne pas frotter trop fort. Préférez les mouvements circulaires.')}
    </div>`
}));

/* ================================================================
   PAGE: TAILLE POELE
   ================================================================ */
reg('taille-poele', () => artShell({
  h1: 'Quelle taille de poêle choisir ? Le guide par usage et par foyer',
  intro: "20, 24, 26 ou 28 cm — le diamètre d'une poêle n'est pas un détail. Ce guide vous aide à choisir juste selon votre façon de cuisiner.",
  pills: [['pill-copper', 'Achat'], ['pill-dust', 'Guide taille'], ['pill-dust', 'Tous matériaux']],
  readTime: '5 min de lecture',
  breadParts: [['Conseils d\'achat', 'taille-poele'], ['Quelle taille choisir', null]],
  sidebar: buildSidebar(
    [['Guide par diamètre', 'taille-guide'], ['Par usage', 'taille-usage'], ['Le set 20/24/28', 'taille-set'], ['FAQ', 'taille-faq']],
    '📐', 'Set 3 poêles CFLAGRANT',
    'Set inox 18/10 — 20/24/28 cm avec manche amovible. La solution complète.',
    '',
    [['Batterie de cuisine', 'batterie-cuisine-inox'], ['Guide inox', 'poele-inox'], ['Induction', 'quelle-poele-induction']]
  ),
  content: `
    <h2 id="taille-guide">Le guide de diamètre : ce que chaque taille permet</h2>
    <div class="comp-wrap">
      <table class="comp-table">
        <caption class="sr-only">Guide des tailles de poêle par usage et foyer</caption>
        <thead><tr><th scope="col">Diamètre</th><th scope="col">Usage principal</th><th scope="col">Foyer</th><th scope="col">Exemples concrets</th></tr></thead>
        <tbody>
          <tr><td><strong>20 cm</strong></td><td>Petites préparations</td><td>1 personne</td><td>2 œufs, 1 crêpe, sauces légères</td></tr>
          <tr><td><strong>24 cm</strong></td><td>Quotidien polyvalent</td><td>1–2 personnes</td><td>Omelette, 2 filets, légumes sautés</td></tr>
          <tr><td><strong>26 cm</strong></td><td>Usage famille</td><td>2–3 personnes</td><td>Volaille, poissons, riz sauté</td></tr>
          <tr><td><strong>28 cm</strong></td><td>Grande cuisine</td><td>3–4 personnes</td><td>3 steaks, grande omelette, sauté complet</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="taille-usage">Choisir par usage plutôt que par foyer</h2>
    <ul>
      <li><strong>Crêpes :</strong> 24 ou 26 cm. CFLAGRANT propose aussi une crêpière céramique dédiée.</li>
      <li><strong>Steak :</strong> 24 cm pour un seul, 28 cm si vous cuisinez deux steaks ensemble.</li>
      <li><strong>Œufs :</strong> 20 cm suffisent pour 2 œufs — plus maniable.</li>
      <li><strong>Légumes sautés :</strong> 26 ou 28 cm pour avoir la place de remuer sans déborder.</li>
    </ul>

    <h2 id="taille-set">Le set 20/24/28 cm : la réponse complète</h2>
    ${prodCard('🍳', 'Set 3 poêles inox 18/10 — 20/24/28 cm avec manche amovible', 'Compatible induction, gaz, vitrocéramique, four. Le kit complet pour équiper une cuisine intelligemment.', [['pill-sage', 'Sans PFAS'], ['pill-steel', 'Inox 18/10'], ['pill-forest', 'Induction'], ['pill-copper', 'Manche amovible']], '', 'Voir le set 3 poêles →')}

    <h2 id="taille-faq">Questions fréquentes</h2>
    <div class="faq__list">
      ${faq('Quelle est la taille la plus polyvalente si je n\'en achète qu\'une ?', 'Le 24 cm est le meilleur compromis universel : assez grand pour 2 personnes, assez maniable pour une utilisation quotidienne.')}
      ${faq('Le manche amovible change-t-il quelque chose à la cuisson ?', 'Non — il n\'affecte pas les performances thermiques. En revanche, il permet le passage au four, le rangement empilé et un seul manche pour plusieurs poêles.')}
    </div>`
}));

/* ================================================================
   PAGE: BATTERIE
   ================================================================ */
reg('batterie-cuisine-inox', () => artShell({
  h1: 'Batterie de cuisine inox 18/10 : composer son arsenal culinaire intelligemment',
  intro: "Casseroles, poêles, sauteuses, couscoussier — construire une batterie cohérente demande de réfléchir aux usages avant aux produits. Ce guide vous aide à composer un équipement complet sans acheter l'inutile.",
  pills: [['pill-forest', 'Batterie'], ['pill-steel', 'Inox 18/10'], ['pill-copper', 'Achat']],
  readTime: '7 min de lecture',
  breadParts: [['Guides Achat', 'batterie-cuisine-inox'], ['Batterie de cuisine inox', null]],
  sidebar: buildSidebar(
    [['Pourquoi l\'inox ?', 'bat-why'], ['Les casseroles CFLAGRANT', 'bat-cas'], ['Le manche amovible', 'bat-manche'], ['Au-delà des poêles', 'bat-plus'], ['FAQ', 'bat-faq']],
    '🥘', 'Sets & Batteries CFLAGRANT',
    'Set 5 casseroles + set 3 poêles inox 18/10 avec manche amovible.',
    '',
    [['Taille de poêle', 'taille-poele'], ['Guide inox', 'poele-inox'], ['Induction', 'quelle-poele-induction']]
  ),
  content: `
    <h2 id="bat-why">Pourquoi choisir l'inox pour une batterie complète</h2>
    <p>Une batterie de cuisine est un investissement à long terme. Le critère principal n'est pas le prix unitaire — c'est la durée de vie du parc complet. L'inox 18/10 sans revêtement est le choix le plus rationnel : pas de surface à ménager, pas de renouvellement programmé.</p>

    <h2 id="bat-cas">Le set 5 casseroles inox CFLAGRANT</h2>
    <div class="comp-wrap">
      <table class="comp-table">
        <caption class="sr-only">Guide des casseroles inox CFLAGRANT par taille et usage</caption>
        <thead><tr><th scope="col">Taille</th><th scope="col">Usage principal</th><th scope="col">Pour qui</th></tr></thead>
        <tbody>
          <tr><td><strong>12 cm</strong></td><td>Sauces, réductions, chocolat fondu</td><td>Finitions précises</td></tr>
          <tr><td><strong>14 cm</strong></td><td>Bouillon, œufs à la coque</td><td>1 personne</td></tr>
          <tr><td><strong>16 cm</strong></td><td>Pâtes (2 portions), riz, soupes légères</td><td>1–2 personnes</td></tr>
          <tr><td><strong>18 cm</strong></td><td>Soupes, légumes à l'eau, vapeur</td><td>2–3 personnes</td></tr>
          <tr><td><strong>20 cm</strong></td><td>Grande cuisson, pot-au-feu, famille</td><td>3–4 personnes</td></tr>
        </tbody>
      </table>
    </div>
    ${prodCard('🥘', 'Set 5 casseroles inox 18/10 — 12/14/16/18/20 cm', 'Compatible induction, gaz, vitrocéramique, électrique. Inox 18/10 alimentaire.', [['pill-sage', 'Sans PFAS'], ['pill-steel', 'Inox 18/10'], ['pill-forest', 'Induction']], '', 'Voir les casseroles inox')}

    <h2 id="bat-manche">L'avantage du manche amovible</h2>
    <ul>
      <li><strong>Rangement :</strong> les poêles s'empilent compactement sans manche.</li>
      <li><strong>Four :</strong> une fois le manche retiré, la poêle passe directement au four.</li>
      <li><strong>Polyvalence :</strong> un seul manche peut s'adapter à plusieurs poêles du set.</li>
    </ul>

    <h2 id="bat-plus">Au-delà des poêles : compléter la batterie</h2>
    <ul>
      <li><strong>Sauteuse inox 18/10 :</strong> pour les cuissons avec sauces et les sautés.</li>
      <li><strong>Couscoussier inox 18/10 — 8L :</strong> pour la cuisson à la vapeur. Neutralité parfaite des saveurs.</li>
      <li><strong>Cocottes et faitouts :</strong> pour les cuissons longues et les mijotés.</li>
      <li><strong>Couvercles universels :</strong> s'adaptent à plusieurs diamètres — pratique et économique.</li>
    </ul>

    <h2 id="bat-faq">Questions fréquentes</h2>
    <div class="faq__list">
      ${faq('Les casseroles inox CFLAGRANT passent-elles au lave-vaisselle ?', 'Oui — l\'inox 18/10 est compatible lave-vaisselle. Le lavage à la main préserve mieux la brillance à long terme.')}
      ${faq('Faut-il acheter le set complet ou les pièces séparément ?', 'Le set offre généralement un meilleur rapport qualité/prix et garantit la cohérence des matériaux. Si vous avez déjà certains formats, les pièces séparées permettent de compléter intelligemment.')}
    </div>`
}));

/* ================================================================
   PAGE: AVIS CFLAGRANT
   ================================================================ */
reg('avis-cflagrant', () => artShell({
  h1: 'CFLAGRANT : analyse éditoriale honnête des gammes et de la qualité',
  intro: "Ni publicité, ni dénigrement — une analyse objective de ce que propose CFLAGRANT : matériaux utilisés, performances réelles, limites à connaître, et rapport qualité/prix. Pour décider en connaissance de cause.",
  pills: [['pill-copper', 'Analyse'], ['pill-dust', 'Éditorial'], ['pill-sage', 'Objectif']],
  readTime: '8 min de lecture',
  breadParts: [['Tests & Avis', 'avis-cflagrant'], ['Avis CFLAGRANT', null]],
  sidebar: buildSidebar(
    [['Positionnement', 'av-pos'], ['Gamme inox', 'av-inox'], ['Gamme céramique', 'av-cer'], ['Façon pierre', 'av-pierre'], ['Verdict', 'av-verdict'], ['FAQ', 'av-faq']],
    '⭐', 'Boutique officielle CFLAGRANT',
    'Toute la gamme : poêles, casseroles, accessoires. Livraison gratuite dès 35€.',
    '',
    [['Guide inox complet', 'poele-inox'], ['Guide céramique', 'poele-ceramique'], ['Inox vs Céramique', 'inox-vs-ceramique'], ['Batterie de cuisine', 'batterie-cuisine-inox']]
  ),
  content: `
    <div class="callout callout--tip">
      <p>📋 Ce site est un portail éditorial indépendant. Cette analyse est rédigée par des passionnés de cuisine, pas par la marque. Tous les liens pointent vers la boutique officielle cflagrant.shop.</p>
    </div>

    <h2 id="av-pos">CFLAGRANT : qui est cette marque ?</h2>
    <p>CFLAGRANT est une marque française spécialisée dans les ustensiles de cuisine du quotidien. Son positionnement — « s'équiper sans se ruiner » — traduit une philosophie claire : proposer des produits solides à des prix accessibles, sans surfacturer le packaging ou le storytelling de marque.</p>

    <h2 id="av-inox">Analyse de la gamme inox 18/10</h2>
    <ul>
      <li><strong>Ce qui fonctionne bien :</strong> la durabilité est au rendez-vous, la compatibilité tous feux est effective, le manche amovible est pratique et bien conçu. Le rapport qualité/prix est cohérent.</li>
      <li><strong>Ce qui demande attention :</strong> comme tout inox, la technique de préchauffage est indispensable. Ce n'est pas un défaut — c'est le fonctionnement normal du matériau.</li>
      <li><strong>Ce qu'on ne peut pas attendre :</strong> l'inox CFLAGRANT n'est pas positionné comme du matériel de cuisine professionnelle haut de gamme à triple fond épais. Pour des cuissons très techniques à feu extrêmement vif, du matériel professionnel sera plus performant — mais à un prix sans commune mesure.</li>
    </ul>

    <h2 id="av-cer">Analyse de la gamme céramique Green Pearl / Nature Ceramic</h2>
    <ul>
      <li><strong>Ce qui fonctionne bien :</strong> l'antiadhésif est efficace à feu doux et moyen, le nettoyage est simple, et l'esthétique est appréciée. Le positionnement « sans PFAS » est sincère.</li>
      <li><strong>Ce qu'il faut accepter :</strong> comme toute céramique, le revêtement a une durée de vie limitée. Ce n'est pas propre à CFLAGRANT — c'est une caractéristique inhérente à la technologie.</li>
      <li><strong>Usage optimal :</strong> œufs, crêpes, poissons, légumes à feu doux ou moyen.</li>
    </ul>

    <h2 id="av-pierre">Analyse de la gamme façon pierre Greblon</h2>
    <ul>
      <li><strong>Points forts :</strong> confort d'usage immédiat, répartition thermique homogène, esthétique soignée, durée de vie supérieure à un antiadhésif standard.</li>
      <li><strong>À nuancer :</strong> le Greblon n'est pas équivalent à la céramique minérale pure sur la question des PFAS. Il est sans PFOA mais contient une matrice polymérique.</li>
    </ul>

    <h2 id="av-verdict">Notre verdict global</h2>
    <div class="callout callout--info">
      <p>✅ CFLAGRANT tient ses promesses sur le positionnement « s'équiper sans se ruiner ». Les matériaux sont honnêtes dans leur composition, les performances correspondent à leurs descriptions, et les prix restent accessibles.</p>
    </div>
    <div class="callout callout--warn">
      <p>⚠️ Les performances réelles dépendent de l'usage. L'inox demande de la technique. La céramique demande du soin. Ne pas attendre d'un produit bien utilisé des miracles — ni d'un produit mal utilisé des déceptions injustes.</p>
    </div>

    <h2 id="av-faq">Questions fréquentes</h2>
    <div class="faq__list">
      ${faq('La livraison est-elle vraiment gratuite sur cflagrant.shop ?', 'La livraison est gratuite à partir de 35€ d\'achat. Vérifiez les conditions actuelles directement sur cflagrant.shop — elles peuvent évoluer.')}
      ${faq('Où puis-je acheter les produits CFLAGRANT ?', 'La boutique officielle est cflagrant.shop. Ce site éditorial ne vend rien — tous les liens d\'achat redirigent vers le site officiel.')}
      ${faq('Les poêles CFLAGRANT valent-elles leur prix ?', 'Oui, dans l\'ensemble. Le rapport qualité/prix est cohérent avec le positionnement de marque. L\'inox 18/10 offre une durabilité supérieure à la plupart des alternatives dans cette gamme de prix.')}
    </div>`
}));
