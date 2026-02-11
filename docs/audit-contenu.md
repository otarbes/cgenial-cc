# Audit de Profondeur de Contenu — Pages Features

**Date :** 2026-02-10

---

## Methodologie

Ce rapport compare le contenu affiche sur chaque page feature (Calculator.tsx, Extractor.tsx, Optimizer.tsx, Home.tsx) avec les capacites reelles du produit documentees dans `fonctionnalites-produit.md` et `brief-produit-consolide.md`. L'objectif : identifier les lacunes ou la richesse du produit est sous-representee, et proposer des structures de contenu enrichies tout en respectant le style Notion-like du site.

---

## 1. Page Calculator (`pages/Calculator.tsx`)

### Etat actuel

La page comporte :
- Un hero avec tagline "Simulez vos trajets au dollar pres"
- Un module interactif en 3 etapes (Definition / Moteur / Resultat)
- Une grille de 6 feature cards statiques (Recurrences, Double Mode, Temps Reel, 5 Forfaits, Flex Pass, Details subtils)
- Un CTA final

### Ce qui manque (ecart produit vs page)

| Capacite produit | Present sur la page | Niveau de detail |
|-----------------|-------------------|-----------------|
| 6 grilles tarifaires historiques (avril 2021 a aujourd'hui) | Non | Absent |
| Supplements week-end | Non | Absent |
| Heures de nuit gratuites (Eco+, Eco Extra) | Mentionne vaguement ("tarifs de nuit") | Superficiel |
| Formule regulier | Non | Absent |
| Formule aller-retour | Non | Absent |
| Formule longue distance (>300 km) | Mentionne vaguement ("longue distance") | Superficiel |
| Formule travail (Eco Extra) | Non | Absent |
| Tarifs saisonniers (haute saison 15 juin - 15 oct) | Non | Absent |
| Nommage des trajets | Present dans le mockup (Step 1) | OK mais pas explicite |
| Choix du type de vehicule par trajet | Mentionne ("Flex vs Station") | Adequat |
| Recurrences avancees (quotidien, hebdo, mensuel) | Mentionne ("Hebdomadaire ou Mensuel") | Partiel — manque "quotidien" |
| Jours de la semaine selectionnables | Non | Absent |
| Fin par date ou par nombre d'occurrences | Non | Absent |
| Prorata des abonnements avec co-abonnes | Non | Absent |
| Assistant IA conversationnel | Non | Absent |
| Mode "le moins cher" automatique | Non | Absent |
| Debounce 300ms + etats de chargement | Mentionne ("300ms") | OK |

### Diagnostic

La page communique bien le **workflow** (3 etapes) et les **grandes categories** de fonctionnalites. Mais elle ne rend pas justice a la **profondeur du moteur de calcul** : les 6 grilles historiques, les 4 formules de tarification, la saisonnalite et les subtilites des forfaits sont completement invisibles. Un visiteur ne peut pas comprendre que ce calculateur est radicalement plus precis que celui de Communauto.

### Structure de contenu enrichie proposee

**Section 1 — Hero** (garder tel quel, efficace)

**Section 2 — Module interactif 3 etapes** (garder tel quel)

**Section 3 — "Pourquoi ce calculateur est different"** (NOUVELLE section)
- Format : 2 colonnes, comparaison Communauto.com vs Communauto-CC
- Contenu :

| | Communauto.com | Notre simulateur |
|---|---|---|
| Trajets | 1 seul a la fois | Multi-trajets avec nommage |
| Recurrence | Non | Quotidien, hebdo, mensuel, jours specifiques |
| Forfaits compares | 1 a la fois | 5 simultanement |
| Vehicule | Station seulement | Station, Flex, ou "le moins cher" |
| Precision | Estimation | 6 grilles tarifaires historiques, tarifs saisonniers |

> Justification : cette comparaison est un argument de conversion puissant. Les visiteurs connaissent le simulateur officiel et le trouvent limite. Montrer la superiorite en un coup d'oeil est convaincant.

**Section 4 — Grille de fonctionnalites** (enrichir les cards existantes)

Card "Gestion des Recurrences" — ajouter :
- "Quotidien, hebdomadaire (avec choix des jours), mensuel"
- "Fin par date ou par nombre d'occurrences"
- "Intervalles personnalisables (ex: toutes les 2 semaines)"

Card "Details subtils" — renommer en **"Tarification de precision"** et detailler :
- "6 grilles tarifaires (avril 2021 a aujourd'hui)"
- "4 formules : regulier, aller-retour, longue distance, travail"
- "Tarifs saisonniers : haute saison du 15 juin au 15 octobre"
- "Heures de nuit gratuites sur Eco+ et Eco Extra"
- "Supplements week-end integres"

> Format recommande : garder le titre + sous-description courte, mais ajouter 2-3 bullets concrets sous chaque card. Le style Notion utilise des listes a puces courtes — c'est coherent.

**Section 5 — CTA** (garder tel quel)

---

## 2. Page Extractor (`pages/Extractor.tsx`)

### Etat actuel

La page comporte :
- Un hero "Pilotez votre budget au centime pres"
- Un module interactif 3 etapes (Importation / Extraction / Visualisation)
- 6 feature cards (Sauvegarde Securisee, Ventilation des Frais, Support Co-abonnes, Bilingue, Monitoring Mensuel, Export CSV)
- Pas de CTA final

### Ce qui manque (ecart produit vs page)

| Capacite produit | Present sur la page | Niveau de detail |
|-----------------|-------------------|-----------------|
| Import 1 a 24 PDFs a la fois (~2 ans) | Non mentionne | Absent (chiffre impactant) |
| Detection de doublons | Non | Absent |
| Retry sur erreur | Non | Absent |
| Validation du compte (1ere facture enregistre le n de compte) | Non | Absent |
| Protection contre import de factures d'un autre abonne | Non | Absent |
| Donnees extraites : solde, ancien solde, paiements recus | Non detaille | Absent |
| Interets de retard | Non | Absent |
| TPS/TVQ detaillees | Non | Absent |
| Donnees trajet : n vehicule, n usager, tarif applique | Non | Absent |
| Frais de reservation, autres frais/credits | Mentionne vaguement ("Ventilation des Frais") | Superficiel |
| Statistiques (nb trajets, cout moyen, total) | Present dans mockup Step 3 | OK via le visuel |
| Suivi de progression par fichier | Non | Absent |
| Taille max 50 Mo par fichier | Non | Absent |
| Stockage chiffre + traitement serverless | Mentionne ("securise") | Superficiel |
| Suppression des donnees possible a tout moment | Non | Absent |

### Diagnostic

La page presente bien l'experience utilisateur (drag & drop, dashboard) mais **ne chiffre rien**. Le "1 a 24 PDFs a la fois" est un argument de vente fort qui manque. La detection de doublons et le retry sont des preuves de maturite technique. La liste des donnees extraites (solde, TPS/TVQ, interets, tarif applique par trajet) est la veritable proposition de valeur — transformer un PDF illisible en donnees granulaires — et elle n'est pas montree.

### Structure de contenu enrichie proposee

**Section 1 — Hero** (garder, mais ajuster la sous-description)
- Ajouter dans le paragraphe : "Importez jusqu'a 24 factures a la fois — soit 2 ans d'historique en quelques secondes."

**Section 2 — Module interactif** (enrichir)

Step 1 "Deposez vos factures" — ajouter sous le drop zone :
- "1 a 24 PDFs a la fois"
- "Formats FR et EN acceptes"
- "Max 50 Mo par fichier"

Step 2 "Extraction Intelligente" — les 4 mini-cards sont bonnes mais generiques. Les remplacer par des donnees concretes :
- "Solde & paiements" — ancien solde, paiements recus, nouveau solde
- "Taxes detaillees" — TPS, TVQ, interets de retard isoles
- "Chaque trajet" — vehicule, usager, duree, distance, tarif applique
- "Transactions" — assurance, frais admin, contraventions

Step 3 "Tableau de bord" — le mockup est bon. Ajouter un indicateur "Export CSV/Excel" visible.

**Section 3 — "Ce que vous obtenez"** (NOUVELLE section, apres le module interactif)
- Format : tableau a 2 colonnes "Facture PDF Communauto" vs "Apres extraction"
- Objectif : montrer visuellement la transformation

| Facture PDF | Apres extraction |
|---|---|
| Texte brut copie-colle impossible | Tableaux structures et filtrables |
| Tarifs noyes dans les lignes | Prix du temps, prix du km, total isoles |
| Taxes agregees | TPS et TVQ detaillees par ligne |
| Pas de vue d'ensemble | Dashboard avec graphiques mensuels |
| Pas d'export | CSV / Excel en un clic |

**Section 4 — Feature cards** (enrichir les existantes)

Card "Sauvegarde Securisee" — ajouter :
- "Chiffrement AES-256"
- "Traitement serverless (fichier non conserve en clair)"
- "Suppression de vos donnees a tout moment"

Card "Ventilation des Frais" — renommer en **"Chaque dollar identifie"** :
- "Frais de reservation, penalites, franchise d'accident, interets de retard"
- "TPS et TVQ isolees"

Ajouter une card **"Fiabilite"** :
- "Detection automatique des doublons"
- "Retry automatique sur erreur reseau"
- "Validation du compte (protection contre l'import de factures d'un autre abonne)"

**Section 5 — CTA final** (A AJOUTER — actuellement absent)
- "Importez vos factures gratuitement" avec un bouton

---

## 3. Page Optimizer (`pages/Optimizer.tsx`)

### Etat actuel

La page comporte :
- Un hero "Identifiez des economies reelles" avec prix 14.99$
- Un module interactif 3 etapes (Donnees / Replay / Rapport)
- Une section "Fonctionnalites" avec un seul paragraphe generique
- Une section Temoignages (3 avis)
- Pas de CTA final

### Ce qui manque (ecart produit vs page)

| Capacite produit | Present sur la page | Niveau de detail |
|-----------------|-------------------|-----------------|
| Filtrage par periode | Non | Absent |
| Ajustement du nombre de co-abonnes | Non | Absent |
| Choix du forfait de reference | Non | Absent |
| Analyse Flex Pass (Illimite / 20 trajets) | Mentionne dans Step 2 (1 bullet) | Superficiel |
| Analyse assurance EDC par conducteur | Mentionne dans Step 2 ("Audit Assurance") | Superficiel |
| Garantie satisfait ou rembourse 30 jours | Mentionne sous le CTA (1 ligne) | Discret |
| 12 mois d'acces | Non | Absent |
| ROI moyen 16x | Mentionne dans le mockup Step 3 | OK mais seulement visuel |
| Economies moyennes 180$/an | Mentionne dans les temoignages | OK |
| 5 forfaits compares sur l'historique reel | Mentionne dans Step 2 ("Replay Historique") | Superficiel |
| Recalcul de chaque trajet reel sous chaque forfait | Non | Absent |

### Diagnostic

Le probleme principal est la section "Fonctionnalites" (lignes 172-184) qui ne contient qu'un **seul paragraphe generique**. C'est le produit payant — l'utilisateur doit comprendre exactement ce qu'il achete. La page ne detaille pas les parametres d'analyse (periode, co-abonnes, forfait de reference) qui sont pourtant des arguments de flexibilite importants. L'assurance EDC et le Flex Pass sont les "trouvailles" uniques de l'outil et meritent chacune une explication plus etoffee.

### Structure de contenu enrichie proposee

**Section 1 — Hero** (garder, renforcer le sous-titre)
- Remplacer "Nous rejouons votre historique avec les tarifs 2026 pour reveler l'economie cachee." par :
- "Nous recalculons chacun de vos trajets passes avec les 5 forfaits et les tarifs 2026. Resultat : le forfait mathematiquement optimal et vos economies au dollar pres."

**Section 2 — Module interactif** (garder, deja bien fait)

**Section 3 — Remplacer le paragraphe generique par une vraie grille de fonctionnalites**

Format : 3 colonnes, style cards comme les autres pages

Card 1 — **"Replay Historique"**
- "Chaque trajet de votre historique est recalcule sous les 5 forfaits"
- "Filtrage par periode : analysez 3 mois ou 2 ans"
- "Choix du forfait de reference pour comparer"

Card 2 — **"Analyse Flex Pass"**
- "Le Flex Pass (75$/mois) est-il rentable pour vous?"
- "Comparaison Illimite vs 20 trajets"
- "Basee sur votre volume reel d'utilisation"

Card 3 — **"Assurance EDC"**
- "L'Exclusion du Deductible de Collision (8-15$/mois) vaut-elle le cout?"
- "Analyse par conducteur (co-abonnes inclus)"
- "Basee sur votre frequence et vos types de trajets"

Card 4 — **"Parametres Flexibles"**
- "Ajustez le nombre de co-abonnes"
- "Changez la periode d'analyse"
- "Testez differents forfaits de reference"

**Section 4 — "Ce qui est inclus"** (NOUVELLE section, avant les temoignages)
- Format : checklist simple, style Notion
- 12 mois d'acces aux analyses
- Recalcul automatique si vous ajoutez des factures
- Garantie satisfait ou rembourse 30 jours
- Paiement unique, pas d'abonnement
- ROI moyen constate : 16x le prix d'achat

**Section 5 — Temoignages** (garder tel quel)

**Section 6 — CTA final** (A AJOUTER — actuellement absent)
- Reprendre prix + garantie + bouton

---

## 4. Page Home (`pages/Home.tsx`)

### Etat actuel

La page comporte :
- Un hero avec double CTA ("Analyser mes factures" + "Simulateur gratuit")
- 3 cards outils avec chacune 3-4 bullets
- Un encart securite
- Un CTA final

### Ce qui manque

Les 3 cards resument correctement les outils mais sont **trop equilibrees** (3 bullets chacune) ce qui nivelle la perception de richesse. Quelques observations :

| Card | Contenu actuel | Ce qui manque |
|------|---------------|---------------|
| Calculateur | 3 bullets (5 forfaits, recurrences, Flex vs Station) | Pas de mention de la precision tarifaire (6 grilles, saisonnalite) — c'est pourtant le differenciateur |
| Extracteur | 4 bullets (trajets, montants, assurances, co-abonnes) | Pas de chiffre ("24 PDFs a la fois", "2 ans d'historique") — les chiffres concrets vendent |
| Optimiseur | 3 bullets (replay, Flex, comparatif Leo) | "Comparatif Leo & Auto Perso" n'est pas mentionne dans le doc produit actuel de l'Optimiseur — est-ce une feature reelle? Pas de mention de la garantie ou du ROI |

### Structure de contenu enrichie proposee

**Card Calculateur** — garder les 3 bullets, ajouter une **ligne d'accroche chiffree** :
- Accroche actuelle : "Simulateur pour vos trajets futurs ou recurrents (ex: Epicerie, Chalet)."
- Proposition : "Simulateur avec 6 grilles tarifaires et tarifs saisonniers. Nommez vos trajets, configurez les recurrences, comparez 5 forfaits en temps reel."

**Card Extracteur** — garder les 4 bullets, renforcer l'accroche :
- Accroche actuelle : "Ne copiez plus vos factures a la main. Nous extrayons et organisons tout :"
- Proposition : "Importez jusqu'a 24 factures a la fois. En quelques secondes, 2 ans de donnees structurees :"

**Card Optimiseur** — ajouter un 4e bullet et ajuster :
- Remplacer "Comparatif Leo & Auto Perso" par "Economies chiffrees au dollar pres" (plus representatif du produit)
- Ajouter : "Garantie satisfait ou rembourse 30 jours"
- Ajouter sous la card un element de preuve sociale : "Economie moyenne constatee : 180$/an"

**Encart Securite** — garder tel quel, bien positionne.

---

## 5. Recommandations Transversales — Patterns de Contenu

### Pattern 1 : "Avant / Apres" (comparaison)

**Ou l'utiliser :** Pages Calculateur et Extracteur

Le pattern de comparaison en 2 colonnes est le plus puissant pour montrer la valeur ajoutee. Il fonctionne a deux niveaux :
- Calculateur : "Simulateur Communauto.com" vs "Notre simulateur" (fonctionnalites)
- Extracteur : "Facture PDF brute" vs "Donnees extraites" (experience)

Format Notion-like : un tableau simple avec bordures legeres, sans couleur de fond, police systeme.

### Pattern 2 : Micro-donnees chiffrees dans les accroches

**Ou l'utiliser :** Partout

Remplacer les descriptions vagues par des chiffres concrets :
- "Importez vos factures" → "Importez 1 a 24 factures a la fois"
- "Tarification precise" → "6 grilles tarifaires, d'avril 2021 a aujourd'hui"
- "Economies" → "180$/an en moyenne"

Les chiffres sont des signaux de credibilite. Ils montrent que le produit est mature et precis, pas un prototype.

### Pattern 3 : Checklist "Ce qui est inclus" (pour l'Optimiseur)

**Ou l'utiliser :** Page Optimiseur uniquement (produit payant)

Une liste simple avec des coches :
- ✓ 12 mois d'acces
- ✓ Paiement unique, pas d'abonnement
- ✓ Satisfait ou rembourse 30 jours
- ✓ Recalcul si nouvelles factures importees

Ce pattern rassure au moment de l'achat. Il est standard en SaaS et s'integre parfaitement au style Notion (toggle/checklist natif).

### Pattern 4 : Section de detail contextuelle (expandable ou inline)

**Ou l'utiliser :** Cards de fonctionnalites sur toutes les pages features

Actuellement, chaque card a un titre + un court paragraphe. Propositions pour ajouter de la profondeur sans surcharger :

**Option A — Bullets sous le paragraphe :**
Ajouter 2-3 bullets specifiques sous le paragraphe descriptif existant. Compatible Notion, leger visuellement.

```
[Icon] Gestion des Recurrences
"Definissez un trajet comme recurrent. L'outil projette le cout sur l'annee."
• Quotidien, hebdomadaire, mensuel
• Choix des jours de la semaine
• Fin par date ou par occurrences
```

**Option B — Tooltip / Expand (plus avancee) :**
Un lien "En savoir plus" sous chaque card qui expand un detail supplementaire. Plus elegant mais necessite un peu plus de dev.

**Recommandation :** Option A est la meilleure balance effort/impact. Elle ajoute de la profondeur sans casser le layout actuel.

### Pattern 5 : CTA final sur chaque page

**Ou l'utiliser :** Pages Extracteur et Optimiseur (actuellement absents)

Chaque page feature devrait se terminer par un CTA clair. Le Calculateur l'a deja ("Testez vos scenarios maintenant"). L'Extracteur et l'Optimiseur se terminent abruptement. Ajouter :
- Extracteur : "Importez vos factures gratuitement" + bouton
- Optimiseur : "Commencez l'audit pour 14.99$" + mention garantie + bouton

### Pattern 6 : FAQ inline (optionnel, faible priorite)

**Ou l'utiliser :** Page Optimiseur (produit payant)

3-4 questions anticipees :
- "Est-ce que ca fonctionne avec les anciens forfaits?"
- "Combien de factures faut-il importer?"
- "Comment fonctionne la garantie 30 jours?"

Format : accordeon simple, style Notion toggle. Utile pour rassurer mais pas prioritaire — a implementer dans un second temps.

---

## 6. Resume des Priorites

| Priorite | Action | Page | Impact attendu |
|----------|--------|------|---------------|
| 1 | Ajouter la section de comparaison "Communauto.com vs Notre simulateur" | Calculator | Differenciation immediate |
| 2 | Enrichir les descriptions des feature cards avec des bullets specifiques | Toutes | Credibilite et profondeur |
| 3 | Ajouter les micro-donnees chiffrees dans les accroches | Toutes | Signaux de maturite |
| 4 | Creer la section "Ce qui est inclus" | Optimizer | Reduction de la friction a l'achat |
| 5 | Remplacer le paragraphe generique par une vraie grille de fonctionnalites | Optimizer | Justification du prix |
| 6 | Ajouter la section "Avant/Apres" pour l'extraction | Extractor | Comprehension de la valeur |
| 7 | Ajouter un CTA final | Extractor, Optimizer | Conversion |
| 8 | Enrichir les cards de la Home avec chiffres et garantie | Home | Meilleur funnel |
| 9 | FAQ inline | Optimizer | Rassurance (second temps) |

---

## 7. Note sur le Style Notion-like

Toutes les recommandations ci-dessus respectent les principes du style Notion :
- **Blanc predominant** avec bordures legeres (#E3E3E3)
- **Typographie forte** (titres bold, corps en gris moyen)
- **Espacement genereux** (pas de surcharge visuelle)
- **Pas de gradients, pas d'ombres lourdes**
- **Listes a puces courtes** plutot que des paragraphes denses
- **Tableaux simples** pour la comparaison (pas de couleurs flashy)

L'ajout de profondeur se fait par **des donnees specifiques**, pas par du design supplementaire. C'est la philosophie Notion : le contenu parle, le design s'efface.
