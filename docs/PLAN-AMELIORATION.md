# Plan d'amelioration du site vitrine — Synthese des 4 audits

**Date :** 2026-02-10
**Sources :** audit-verite.md, audit-contenu.md, audit-ux.md, audit-funnel.md

---

## P0 — CRITIQUE (a faire en premier)

### P0-1. Supprimer les faux temoignages
**Fichier :** `pages/Optimizer.tsx` (lignes 186-219)
**Probleme :** 3 temoignages inventes (Thomas R., Sarah L., Marc D.) — risque legal (Loi sur la protection du consommateur, art. 219 QC)
**Action :** Remplacer toute la section par un bloc "Precision & Garantie" :
- "Moteur valide au centime pres contre vos factures reelles"
- "Garantie satisfait ou rembourse 30 jours"
- "Paiement unique — pas d'abonnement, pas de piege"
- "Economies typiques : 100$ a 500$/an"

### P0-2. Corriger "Economie moyenne constatee"
**Fichier :** `pages/Optimizer.tsx` (ligne 191)
**Probleme :** Le mot "constatee" est mensonger — aucun client reel
**Action :** Remplacer par "Economies typiques estimees : 100 a 500 $/an selon le profil"

### P0-3. Corriger "ROI Immediat (16x)"
**Fichier :** `pages/Optimizer.tsx` (ligne 160)
**Action :** Remplacer par "ROI estime : 7x a 33x" ou supprimer

### P0-4. Ajouter mention "Exemple illustratif" sur le rapport mockup
**Fichier :** `pages/Optimizer.tsx` (lignes 132-165)
**Action :** Ajouter un asterisque "* Exemple illustratif" sous le rapport

### P0-5. Inverser les CTAs du hero Home
**Fichier :** `pages/Home.tsx` (lignes 24-37)
**Probleme :** Le CTA principal envoie vers l'Extracteur (friction) au lieu du Calculateur (zero friction) — contredit la strategie
**Action :**
- Primaire (bleu) : "Essayer le simulateur gratuit" -> /calculator
- Secondaire (outline) : "J'ai des factures a analyser" -> /extractor

### P0-6. Corriger les boutons CTA non fonctionnels
**Fichiers :** `pages/Extractor.tsx` (ligne 32), `pages/Optimizer.tsx` (ligne 33)
**Probleme :** Les boutons sont des `<button>` sans action
**Action :** Transformer en `<Link to>` vers les destinations appropriees

### P0-7. Corriger les liens du Footer
**Fichier :** `components/Footer.tsx`
**Actions :**
- Remplacer `<a href="/...">` par `<Link to="/...">` pour les liens internes (eviter le rechargement complet)
- Supprimer les 9 liens morts (Blog, Guide, Aide, etc.) — les remplacer par un footer simplifie
- Supprimer les icones sociales non cliquables (Twitter, LinkedIn, GitHub) ou les lier
- Remplacer l'emoji globe par l'icone `Globe` de Lucide

---

## P1 — IMPORTANT (enrichissement du contenu)

### P1-1. Creer les ponts narratifs entre les pages (funnel)
**Probleme :** Chaque page est un cul-de-sac. Score funnel : 6/30.
**Actions :**
- **Calculator.tsx** — Ajouter une section bottom AVANT le CTA final :
  "Le simulateur estime. Vos factures prouvent. Importez-les pour voir vos economies exactes." -> /extractor
- **Extractor.tsx** — Ajouter un CTA final (actuellement absent) :
  "Vos donnees sont pretes. Decouvrez combien vous pourriez economiser." -> /optimizer
- **Optimizer.tsx** — Ajouter un CTA final avec prix + garantie
- **FAQ.tsx** — Ajouter un CTA bottom : "Pret a essayer ?" -> /calculator

### P1-2. Enrichir la page Calculator avec la comparaison vs Communauto.com
**Fichier :** `pages/Calculator.tsx`
**Action :** Ajouter une section "Pourquoi ce calculateur est different" (tableau comparatif) :

| | Communauto.com | Notre simulateur |
|---|---|---|
| Trajets | 1 a la fois | Multi-trajets avec nommage |
| Recurrence | Non | Quotidien, hebdo, mensuel |
| Forfaits | 1 a la fois | 5 simultanement |
| Vehicule | Station seulement | Station, Flex, ou auto |
| Precision | Estimation | 6 grilles tarifaires historiques |

### P1-3. Enrichir les feature cards avec des bullets specifiques
**Fichiers :** `pages/Calculator.tsx`, `pages/Extractor.tsx`, `pages/Optimizer.tsx`
**Action :** Ajouter 2-3 bullets concrets sous chaque card existante. Exemples :
- Calculator "Recurrences" : + quotidien/hebdo/mensuel, choix des jours, fin par date ou occurrences
- Calculator "Details subtils" -> renommer "Tarification de precision" : + 6 grilles, 4 formules, saisonnalite
- Extractor "Sauvegarde" : + chiffrement, traitement serverless, suppression a tout moment

### P1-4. Remplacer le paragraphe generique de l'Optimizer par une vraie grille
**Fichier :** `pages/Optimizer.tsx` (lignes 172-184)
**Action :** Remplacer le paragraphe unique par 4 cards :
1. "Replay Historique" — chaque trajet recalcule sous 5 forfaits, filtrage par periode
2. "Analyse Flex Pass" — Illimite vs 20 trajets, base sur le volume reel
3. "Assurance EDC" — 8-15$/mois, analyse par conducteur
4. "Parametres flexibles" — co-abonnes, periode, forfait de reference

### P1-5. Ajouter "Ce qui est inclus" sur la page Optimizer
**Fichier :** `pages/Optimizer.tsx`
**Action :** Checklist avant le bloc de prix/CTA :
- 12 mois d'acces
- Paiement unique, pas d'abonnement
- Garantie satisfait ou rembourse 30 jours
- Recalcul si nouvelles factures importees

### P1-6. Ajouter section "Avant/Apres" sur la page Extractor
**Fichier :** `pages/Extractor.tsx`
**Action :** Tableau comparatif PDF brut vs donnees extraites

### P1-7. Enrichir les 3 cards de la Home avec des micro-donnees
**Fichier :** `pages/Home.tsx`
**Actions :**
- Calculator : "6 grilles tarifaires, tarifs saisonniers, 5 forfaits en temps reel"
- Extractor : "Importez jusqu'a 24 factures a la fois — 2 ans d'historique"
- Optimizer : remplacer "Comparatif Leo & Auto Perso" (incoherence) par "Economies chiffrees au dollar pres" + ajouter "Garantie 30 jours"

### P1-8. Corriger l'incoherence "Comparatif Leo & Auto Perso"
**Fichier :** `pages/Home.tsx` (ligne 160)
**Probleme :** Liste dans la card Optimizer mais c'est une feature gratuite (Calculator)
**Action :** Retirer de la card Optimizer, eventuellement l'ajouter dans Calculator

### P1-9. Clarifier "Analyse Flex Pass" — dans quel outil ?
**Fichiers :** `pages/Calculator.tsx`, `pages/Optimizer.tsx`, `pages/Home.tsx`
**Probleme :** Mentionnee dans les 2 outils — confusion
**Action :** Selon la doc produit, l'Analyse Flex Pass est dans l'Optimiseur. Le Calculateur fait le calcul Flex par trajet. Clarifier les descriptions.

---

## P2 — AMELIORATION (UX, polish, conversions)

### P2-1. Supprimer l'auto-rotation du module 3-steps
**Fichiers :** `pages/Calculator.tsx`, `pages/Extractor.tsx`, `pages/Optimizer.tsx`
**Probleme :** Anti-pattern UX (NN Group). Le timer ne reset pas au clic.
**Action :** Supprimer le `setInterval`. Laisser l'utilisateur cliquer.

### P2-2. Corriger le contraste du sous-titre Home
**Fichier :** `pages/Home.tsx`
**Probleme :** `text-[#9D9D9D]` -> contraste insuffisant
**Action :** Remplacer par `text-gray-400` minimum (= `#9CA3AF`)

### P2-3. Remplacer `animate-bounce` par une animation plus subtile
**Fichier :** `pages/Home.tsx` (ligne 39)
**Action :** Remplacer par un simple `animate-pulse` ou supprimer

### P2-4. Augmenter le H1 de Home
**Fichier :** `pages/Home.tsx`
**Probleme :** Le H1 Home (text-4xl/6xl) est plus petit que les pages outils (text-5xl/7xl)
**Action :** Passer a `text-5xl md:text-7xl`

### P2-5. Uniformiser les design tokens
**Fichiers :** Tous
**Actions :**
- Choisir entre `text-[#37352f]` et `text-gray-500` pour le texte secondaire
- Limiter les `max-w-*` a 3 paliers (5xl, 6xl, 3xl)
- Uniformiser `gap-6` vs `gap-8` dans les grilles de features
- Uniformiser `px-4` vs `px-6`

### P2-6. Corriger le fond du CalculatorTool
**Fichier :** `pages/CalculatorTool.tsx`
**Probleme :** Utilise `bg-slate-50` alors que toutes les pages sont `bg-white`
**Action :** Passer a `bg-white` ou ajouter une transition visuelle

### P2-7. Ameliorer le responsive mobile du module 3-steps
**Fichiers :** Calculator.tsx, Extractor.tsx, Optimizer.tsx
**Actions :**
- Afficher les labels en `text-xs` sur mobile au lieu de les masquer (`hidden md:inline`)
- Reduire `min-h-[450px]` a `min-h-[300px] md:min-h-[450px]`

### P2-8. Segmenter les publics dans le hero Home
**Fichier :** `pages/Home.tsx`
**Action :** Adapter le sous-titre pour adresser non-abonnes ET abonnes :
"Que vous decouvriez Communauto ou que vous soyez abonne depuis 5 ans, nos outils vous montrent exactement combien ca coute."

### P2-9. Enrichir la FAQ
**Fichier :** `pages/FAQ.tsx`
**Action :** Ajouter 3 categories manquantes :
- Pricing (pourquoi 14.99$, ce qui est inclus, remboursement)
- Extracteur (quelles donnees, combien de factures, securite)
- Differences entre les 3 outils

### P2-10. Ameliorer le menu mobile
**Fichier :** `components/Navbar.tsx`
**Actions :**
- Ajouter le bouton "Connexion" (absent sur mobile)
- Ajouter une animation d'ouverture/fermeture
- Fermer au clic en dehors du menu

---

## Ordre d'execution suggere

| Vague | Items | Estimation |
|-------|-------|-----------|
| **Vague 1** | P0-1 a P0-7 (corrections critiques) | Rapide |
| **Vague 2** | P1-1, P1-5, P1-7, P1-8, P1-9 (funnel + incoherences) | Moyen |
| **Vague 3** | P1-2, P1-3, P1-4, P1-6 (enrichissement contenu) | Moyen |
| **Vague 4** | P2-1 a P2-10 (polish UX) | Variable |
