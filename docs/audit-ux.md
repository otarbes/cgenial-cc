# Audit UX/UI - Site Vitrine Cgenial

**Date** : 2026-02-10
**Style de reference** : Notion-like / Linear
**Stack** : React + Tailwind CDN + Lucide Icons + Recharts

---

## 1. Design Tokens / Coherence

### 1.1 Palette de couleurs

| Role | Valeur hex | Usage |
|------|-----------|-------|
| Texte principal | `#050505` | Titres, corps principal |
| Texte secondaire | `#37352f` | Sous-titres, paragraphes, navbar links |
| Texte muted | `#9D9D9D` | Sous-titre hero Home uniquement |
| Gris texte Tailwind | `text-gray-500`, `text-gray-400`, `text-gray-600` | Texte secondaire (multiple classes) |
| Fond principal | `#FFFFFF` (blanc) | Background des pages |
| Fond secondaire | `#F7F7F5` | Cards, sections alternees, hover |
| Fond neutre | `#FAFAFA`, `#F5F5F5` | Steps inactifs du workflow |
| Bordure principale | `#E3E3E3` | Bordures partout |
| Bordure secondaire | `#D4D4D4` | Bordure du divider Optimizer card (Home) |
| Bleu primaire (CTA) | `#0066DA` | Boutons, liens, accents, barres actives |
| Bleu hover | `#0055b5` | Hover sur CTA bleu |
| Noir CTA | `#050505` | Boutons secondaires / CTA alternatif |
| Noir CTA hover | `#333333` / `#333` | Hover sur boutons noirs |
| Vert validation | `text-green-600` / `text-green-500` | Checkmarks, economies |
| Orange accent | `text-orange-400` / `text-orange-600` | Badge Sparkles, icones |
| Jaune etoiles | `text-yellow-400` | Temoignages Optimizer |

**Fond body (index.html)** : `#f8fafc` (slate-50)
**Fond body (CSS inline)** : `color: #0f172a` (slate-900)

### 1.2 Incoherences constatees

**CRITIQUE - Conflit de couleur texte/fond** :
- `index.html` definit `body { color: #0f172a; background-color: #f8fafc }` via `<style>`
- `App.tsx` definit `text-gray-900` sur le wrapper
- `Home.tsx` redefinit `text-[#050505]` et `bg-white`
- Toutes les pages redefinissent `text-[#050505]` et `bg-white`
- La couleur `brand-*` (verte) definie dans Tailwind config n'est utilisee NULLE PART dans le site -- seulement dans `selection:bg-brand-200 selection:text-brand-900` dans App.tsx

**MOYEN - Gris texte inconsistant** :
- Utilisation mixte de `text-[#37352f]` (Notion-style) et classes Tailwind (`text-gray-500`, `text-gray-600`, `text-gray-400`)
- Difficile de prevoir la hierarchie visuelle -- parfois `#37352f` est le texte principal, parfois secondaire

**MINEUR - Fond CalculatorTool** :
- `CalculatorTool` utilise `bg-slate-50` alors que toutes les autres pages utilisent `bg-white`
- Rupture visuelle quand on navigue vers l'outil

**MINEUR - Bordure Optimizer card Home** :
- Utilise `border-[#D4D4D4]` au lieu de `border-[#E3E3E3]` pour le divider interne

### 1.3 Spacing Patterns

| Pattern | Valeur | Usage |
|---------|--------|-------|
| Padding top hero | `pt-20` / `pt-24` / `pt-32` | Varie entre pages |
| Padding bottom hero | `pb-12` / `pb-20` / `pb-24` | Inconsistant |
| Section padding Y | `py-20` / `py-24` | Alternance sans logique claire |
| Container max-width | `max-w-7xl`, `max-w-6xl`, `max-w-5xl`, `max-w-4xl`, `max-w-3xl`, `max-w-2xl` | 6 valeurs differentes |
| Padding horizontal | `px-4`, `px-6` | Mixte |
| Card padding | `p-6`, `p-8`, `p-12` | 3 niveaux |

**Constat** : Le spacing est globalement coherent dans l'esprit Notion (genereux, aere) mais manque de rigueur systematique. Les `max-w-*` varient trop (6 valeurs differentes). Recommandation : se limiter a 3 paliers (page hero: `max-w-5xl`, sections de contenu: `max-w-6xl`, texte centre: `max-w-3xl`).

### 1.4 Border-Radius Patterns

| Pattern | Valeur | Usage |
|---------|--------|-------|
| Boutons CTA | `rounded-[4px]` | Tous les boutons primaires |
| Badges pill | `rounded-full` | Tags, pills |
| Cards principales | `rounded-xl` (12px) | Cards features, FAQ items |
| Cards grandes | `rounded-2xl` (16px) | Module workflow, panels principaux |
| Cards tres grandes | `rounded-3xl` (24px) | Section methodologie Optimizer |
| Icon containers | `rounded-lg` (8px) | Conteneurs d'icones |

**Constat** : Bonne coherence globale. Le `rounded-[4px]` pour les boutons est un choix Notion tres affirme (angles presque droits). Seul point a surveiller : le `rounded-3xl` sur la section methodologie Optimizer est un outlier.

### 1.5 Typography Patterns

| Element | Classe(s) | Poids |
|---------|-----------|-------|
| Titre hero H1 | `text-4xl md:text-6xl` (Home), `text-5xl md:text-7xl` (pages) | `font-bold tracking-tight` |
| Titre section H2 | `text-3xl` / `text-4xl` | `font-bold` |
| Titre card H3 | `text-xl` / `text-lg` | `font-bold` |
| Texte body | `text-lg` / `text-xl` | `font-medium` ou normal |
| Texte small | `text-sm` / `text-xs` | Variable |

**Constat** : La police Inter est bien chargee. L'echelle typographique est Notion-like (titres tres gros, corps relativement gros). Le H1 de Home (`text-4xl md:text-6xl`) est plus petit que celui des pages outils (`text-5xl md:text-7xl`), ce qui est contre-intuitif puisque la Home devrait avoir le titre le plus impactant.

---

## 2. Module Interactif 3-Steps

### 2.1 Usage actuel

Le pattern est identique sur 3 pages : **Calculator**, **Extractor**, **Optimizer**.

Structure :
1. Navigation 3 onglets (boutons numerotes avec label)
2. Zone de contenu dynamique (min-height ~450-500px)
3. Auto-rotation toutes les 5 secondes via `setInterval`
4. Animation `animate-fade-in` au changement

### 2.2 Evaluation

**Points positifs** :
- Le pattern est visuellement fort et communique bien le workflow en 3 etapes
- La barre bleue active en bas des onglets est un bon affordance
- Le contenu de chaque step est bien differencie par page

**Points negatifs** :

- **Auto-rotation a 5 secondes -- PROBLEME UX MAJEUR** :
  - 5 secondes ne suffit pas pour lire le contenu de certaines etapes (surtout les grilles 2x2 avec descriptions)
  - L'utilisateur perd le controle : s'il clique sur l'onglet 2, le timer continue et change l'onglet 3 apres 5s
  - Le `setInterval` ne se reset PAS au clic manuel -- c'est un bug UX. Le clic devrait reset le timer
  - Le pattern d'auto-rotation sur les carousels est considere comme un anti-pattern UX reconnu (NN Group, Baymard Institute)

- **Repetitivite** : Voir le meme pattern 3 fois quand on explore les 3 pages peut donner une impression de "template" plutot que de produit sur-mesure

- **Absence de barre de progression** : Il n'y a pas d'indication visuelle du timer (pas de progress bar qui se remplit en 5s). L'utilisateur ne sait pas quand le contenu va changer

### 2.3 Recommandations

1. **Supprimer l'auto-rotation** : Laisser l'utilisateur cliquer manuellement sur les onglets. C'est plus respectueux et plus Notion-like (Notion ne fait jamais d'auto-rotation)
2. **Alternative** : Si l'auto-rotation est conservee, ajouter une barre de progression animee sous l'onglet actif (5s de fill) et reset le timer au clic
3. **Differencier les pages** : Varier legerement le layout du module entre les 3 pages (ex: Extractor pourrait avoir une zone de drop, Calculator un formulaire inline, Optimizer un visuel de "replay")

---

## 3. Grille de Features (6 Cards)

### 3.1 Usage actuel

Le pattern 6 cards (grille `lg:grid-cols-3 md:grid-cols-2`) est utilise sur :
- Calculator.tsx : 6 cards dans une grille 3x2 (`gap-8`, `p-8`)
- Extractor.tsx : 6 cards dans une grille 3x2 (`gap-6`, `p-8`)

### 3.2 Evaluation

**Points positifs** :
- La grille 3x2 est un choix classique et fiable
- Les cards ont une structure claire : icone > titre > description
- Le hover avec `hover:shadow-lg` est subtil et Notion-like

**Points negatifs** :
- **Monotonie** : 6 cards identiques en taille et structure cree un "mur" visuel plat
- **Gap inconsistant** : `gap-8` sur Calculator vs `gap-6` sur Extractor
- **Pas de hierarchie** : Toutes les features semblent egalement importantes
- **Repetition avec le module 3-steps** : Certaines features (Flex Pass, recurrences) sont mentionnees a la fois dans le module interactif ET dans la grille statique

### 3.3 Recommandations

1. **Pattern "Bento Grid" asymetrique** : Au lieu de 6 cards egales, utiliser une grille Bento (comme Apple/Linear) avec 2 grandes cards + 4 petites, pour creer une hierarchie visuelle
2. **Accordeons** : Pour les pages avec beaucoup de features, un pattern accordeon (FAQ-style) avec progressive disclosure serait plus Notion-like et moins fatigant visuellement
3. **Tabs horizontaux** : Au-dessus de la grille, des tabs "Calcul", "Comparaison", "Extras" permettraient de montrer 3 features a la fois au lieu de 6
4. **Fusionner avec le module 3-steps** : Les features statiques pourraient etre integrees DANS le module interactif (chaque step montre 2 features en detail) pour eviter la redondance

---

## 4. Page Home

### 4.1 Proposition de valeur

**Force** : Le titre "La boite a outils complete pour votre budget Communauto" est clair et direct.

**Faiblesse** :
- Le sous-titre gris `text-[#9D9D9D]` est trop discret -- contraste insuffisant
- La proposition "Simple, gratuit et securise" est generique et ne differencie pas le produit
- Le badge "Compatible tarifs 2026" est un bon element de confiance mais pas le plus important a mettre en premier

### 4.2 Parcours utilisateur

**Structure actuelle** :
1. Hero -> 2 CTA (Analyser / Simuler)
2. "En savoir plus" -> scroll vers outils
3. Grille 3 cards outils
4. Section securite
5. CTA final

**Evaluation** :
- Le parcours est logique et bien structure
- Le "En savoir plus" avec `animate-bounce` est un bon guidage mais le bounce perpetuel est agacant
- Les 2 CTA du hero sont clairs et bien hierarchises (primaire bleu / secondaire outline)
- La grille 3 cards est excellente -- chaque outil a son identite visuelle (couleur d'icone differente)
- La card Optimizer avec fond `bg-[#F7F7F5]` et icone bleue est bien distinguee comme premium

### 4.3 Section securite

**Position** : Entre la grille outils et le CTA final.

**Evaluation** :
- L'emplacement est correct -- apres avoir vu les outils, la securite rassure avant l'action
- Le design (icone verte + texte) est simple et efficace
- Le contenu est pertinent (serveurs securises, chiffrement)
- **Amelioration possible** : Transformer en "trust bar" plus compacte (3 pictos en ligne : Chiffre / Securise / Pas de donnees bancaires) plutot qu'un grand bloc isole

### 4.4 Recommandation Home

- Augmenter la taille du H1 (`text-5xl md:text-7xl` comme les pages outils) pour plus d'impact
- Changer le sous-titre gris de `text-[#9D9D9D]` a `text-gray-400` minimum pour meilleur contraste
- Remplacer `animate-bounce` par une animation plus subtile (un simple `animate-pulse` ou un fade-in au scroll)
- Ajouter un chiffre d'impact dans le hero ("Deja X utilisateurs" ou "Economie moyenne : 180$/an")

---

## 5. Navigation & Footer

### 5.1 Navbar

**Points positifs** :
- Structure Notion-like parfaite : logo gauche, liens centraux, actions droite
- `sticky top-0` avec `z-50` -- correct
- Indicateur d'etat actif via `isActive()` avec fond `bg-[#F7F7F5]`
- Separateur vertical (`h-4 w-px bg-gray-200`) entre produits et FAQ
- Le CTA "Essayer gratuitement" est bien en noir (hierarchie visuelle correcte)

**Points a ameliorer** :
- Le lien "Connexion" pointe vers `href="#"` -- lien mort
- "Essayer gratuitement" pointe vers `/calculator` -- devrait pointer vers un choix d'outil ou la Home section outils
- Pas de lien vers CalculatorTool dans la nav (accessible uniquement via la page Calculator)

### 5.2 Menu Mobile

**Points positifs** :
- Hamburger standard (Menu / X toggle)
- Menu plein ecran (`h-screen`) -- choix audacieux mais lisible
- Liens suffisamment grands (`text-lg`)
- CTA "Essayer gratuitement" en bas, separe visuellement

**Points a ameliorer** :
- Le menu ne se ferme pas quand on clique en dehors du menu
- Pas d'animation d'ouverture/fermeture (apparition brutale)
- Le `h-screen` couvre tout -- pas de moyen de voir le contenu derriere
- Pas de bouton "Connexion" dans le menu mobile (present uniquement en desktop)

### 5.3 Footer

**Liens morts identifies** (tous pointent vers `href="#"`) :
- Nouveautes
- Blog
- Guide des tarifs
- Aide & Support
- Communaute
- A propos
- Contact
- Confidentialite
- Conditions

**Problemes additionnels** :
- Les liens "Produits" utilisent `<a href="/calculator">` au lieu de `<Link to="/calculator">` -- cela causera un rechargement complet de page au lieu d'une navigation SPA
- Les icones sociales (Twitter/X, LinkedIn, GitHub) n'ont pas de `href` -- non cliquables
- Le sélecteur de langue "Francais (France)" n'est qu'un bouton decoratif sans fonctionnalite
- Utilisation d'un emoji (`globe`) dans le selecteur de langue -- inconsistant avec le reste du site qui utilise Lucide icons

**Recommandations** :
1. Remplacer les `<a href>` par des `<Link to>` pour les liens internes
2. Supprimer les liens morts ou les remplacer par des `<span>` avec style "coming soon"
3. Ajouter les URL reelles pour les reseaux sociaux ou supprimer les icones
4. Remplacer l'emoji globe par l'icone `Globe` de Lucide
5. Ajouter une page "Contact" a minima (ou un lien mailto)

---

## 6. Mobile Responsiveness

### 6.1 Breakpoints utilises

Le site utilise principalement 3 breakpoints Tailwind :
- `sm:` (640px) -- Peu utilise (seulement flex-row pour CTA)
- `md:` (768px) -- Breakpoint principal pour grilles et layout
- `lg:` (1024px) -- Utilise pour CalculatorTool (grid 12 colonnes)

### 6.2 Analyse

**Bien gere** :
- Les grilles passent de 1 colonne (mobile) a 2-3 colonnes (desktop) via `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Les CTA du hero passent en colonne sur mobile via `flex-col sm:flex-row`
- Le H1 a un scaling mobile/desktop (`text-4xl md:text-6xl`)
- La toolbar sticky de CalculatorTool masque le badge "Tarifs 2026" sur mobile (`hidden sm:block`)

**A ameliorer** :
- Le module 3-steps masque les labels texte sur mobile (`hidden md:inline`) -- l'utilisateur ne voit que les numeros 1/2/3 sans contexte
- Les sections ont un padding horizontal `px-4` parfois et `px-6` d'autres fois -- uniformiser
- La grille de features 6 cards passe de 3 colonnes a 1 colonne directement, sans etape intermediaire a 2 colonnes sur tablette (le `md:grid-cols-2` est present sur Extractor mais pas toujours coherent)
- Le module workflow a une hauteur minimum (`min-h-[450px]` / `min-h-[500px]`) qui peut etre excessive sur petits ecrans mobiles
- Le sticky panel de resultats dans CalculatorTool (`sticky top-28`) peut causer des problemes sur tablettes en portrait

### 6.3 Recommandations Mobile

1. Ajouter les labels texte des onglets sur mobile (en taille reduite `text-xs`) au lieu de les masquer completement
2. Uniformiser le padding horizontal a `px-4 md:px-6`
3. Reduire `min-h-[450px]` a `min-h-[300px]` sur mobile via `min-h-[300px] md:min-h-[450px]`
4. Tester le scroll sur le panneau de resultats sticky en tablette

---

## 7. Recommandations Priorisees

### Priorite 1 -- Quick Wins (impact eleve, effort faible)

| # | Action | Fichier(s) | Impact |
|---|--------|-----------|--------|
| 1 | Supprimer l'auto-rotation des modules 3-steps ou a minima reset le timer au clic | Calculator.tsx, Extractor.tsx, Optimizer.tsx | UX majeur |
| 2 | Remplacer `<a href>` par `<Link to>` dans le Footer | Footer.tsx | Bug fonctionnel |
| 3 | Uniformiser la couleur texte secondaire : choisir `text-[#37352f]` OU `text-gray-500` | Tous les fichiers | Coherence visuelle |
| 4 | Augmenter le contraste du sous-titre Home (`#9D9D9D` -> `#6B7280` min) | Home.tsx | Accessibilite |
| 5 | Remplacer `animate-bounce` par `animate-pulse` sur le chevron "En savoir plus" | Home.tsx | UX |
| 6 | Supprimer les liens morts du footer ou ajouter un style "coming soon" | Footer.tsx | Credibilite |

### Priorite 2 -- Ameliorations structurelles (impact eleve, effort moyen)

| # | Action | Fichier(s) | Impact |
|---|--------|-----------|--------|
| 7 | Uniformiser les `max-w-*` a 3 paliers max | Toutes les pages | Coherence |
| 8 | Uniformiser `bg-slate-50` de CalculatorTool avec `bg-white` ou appliquer `bg-slate-50` partout | CalculatorTool.tsx | Coherence visuelle |
| 9 | Transformer la grille 6 features en Bento Grid asymetrique | Calculator.tsx, Extractor.tsx | Profondeur visuelle |
| 10 | Ajouter un element de preuve sociale dans le hero Home | Home.tsx | Conversion |
| 11 | Ajouter l'animation d'ouverture au menu mobile | Navbar.tsx | Polish UX |
| 12 | Ajouter les labels texte (petits) dans les onglets du module 3-steps en mobile | Calculator.tsx, Extractor.tsx, Optimizer.tsx | UX mobile |

### Priorite 3 -- Evolutions futures (impact moyen, effort significatif)

| # | Action | Impact |
|---|--------|--------|
| 13 | Migrer Tailwind du CDN vers une installation locale (build-time) | Performance, maintenabilite |
| 14 | Creer un systeme de design tokens centralise (variables CSS ou theme Tailwind) | Scalabilite |
| 15 | Ajouter un CTA final sur les pages Extractor et Optimizer (absents actuellement) | Conversion |
| 16 | Ajouter une animation de fermeture au clic exterieur pour le menu mobile | Polish mobile |
| 17 | Nettoyer les couleurs `brand-*` inutilisees dans le config Tailwind | Code proprete |
| 18 | Connecter les boutons CTA de l'Extractor et Optimizer a des actions reelles (actuellement `<button>` sans `onClick`) | Fonctionnalite |

---

## 8. Verdict Global

Le site est **visuellement tres reussi** dans son intention Notion-like. La palette sobre, les bordures fines `#E3E3E3`, les border-radius `rounded-[4px]` sur les boutons, et la typographie Inter creent une esthetique propre et professionnelle.

Les principaux axes d'amelioration sont :
1. **Coherence** : Unifier les valeurs de couleurs/spacing qui varient sans raison
2. **Auto-rotation** : Supprimer ou ameliorer ce pattern qui nuit a l'experience
3. **Footer** : Nettoyer les liens morts et corriger les `<a>` en `<Link>`
4. **Profondeur visuelle** : La grille 6 features pourrait beneficier d'un layout Bento pour casser la monotonie

Le style Notion-like est parfaitement respecte et ne devrait pas etre modifie dans son essence. Les ameliorations proposees renforcent ce style plutot que de le contredire.
