# Audit Verite -- Site Vitrine cgenial-cc

**Date :** 2026-02-10
**Analyste :** Agent analyste-verite
**Sources croisees :** `fonctionnalites-produit.md`, `strategie-produit.md`, `brief-produit-consolide.md`, pages TSX du site

---

## A) Features FAUSSES ou EXAGEREES

### 1. Temoignages INVENTES (Optimizer.tsx, lignes 186-219)

**Verdict : FAUX -- temoignages fictifs presentes comme reels**

Trois temoignages sont affiches sur la page Optimizer avec des noms, des initiales et 5 etoiles :
- **Thomas R.** : "J'ai rentabilise les 15$ de l'audit en 30 secondes. J'etais sur le mauvais forfait depuis 2 ans."
- **Sarah L.** : "L'analyse du Flex Pass est introuvable ailleurs. C'est le seul outil qui le calcule correctement."
- **Marc D.** : "Interface propre, securise, et le resultat est sans appel. Merci pour l'economie."

**Probleme :** Le produit n'a pas encore ete lance (cf. strategie-produit.md, plan d'action 90 jours, semaine 3 = "Site lance"). Il est impossible d'avoir des clients reels qui temoignent. Ces temoignages sont **fabriques de toute piece**. Les presenter comme des avis reels constitue une **pratique trompeuse**.

**Severite : CRITIQUE** -- risque legal (Loi sur la concurrence, article 74.01 au Canada ; Loi sur la protection du consommateur, art. 219 au Quebec). Les faux temoignages sont explicitement interdits.

**Recommandation :** Supprimer immediatement ces temoignages. Les remplacer par :
- Rien (le produit n'a pas de clients)
- Un encadre "beta" ou "bientot" si on veut montrer la proposition de valeur
- Plus tard : de vrais temoignages avec consentement verifiable

---

### 2. "Economie moyenne constatee : 180 $/an" (Optimizer.tsx, ligne 191)

**Verdict : NON VERIFIE -- chiffre plausible mais non constate**

Le texte dit "Economie moyenne **constatee**" -- le mot "constatee" implique une mesure empirique sur des vrais utilisateurs. Or :
- `fonctionnalites-produit.md` (ligne 117) mentionne "Economies moyennes constatees : ~180 $/an" -- donc le chiffre vient de la doc produit interne
- `strategie-produit.md` (lignes 102-104) parle d'"economies typiques de 100-500$/an"
- Aucun utilisateur reel n'a encore utilise le produit

**Probleme :** Le mot "constatee" est mensonger. C'est au mieux une **estimation theorique** basee sur des simulations internes, pas une mesure reelle.

**Severite : ELEVEE** -- "constatee" est un claim verifiable qui peut etre conteste.

**Recommandation :** Remplacer par "Economie moyenne estimee : 100 a 500 $ par an" ou "Economies typiques : 100 a 500 $/an selon le profil" (conforme a la strategie produit).

---

### 3. "ROI Immediat (16x)" (Optimizer.tsx, ligne 160)

**Verdict : EXAGERE -- calcul biaise**

- Le badge "ROI Immediat (16x)" apparait dans l'exemple de rapport (etape 3 du workflow interactif)
- Le calcul implicite : 245$ economie / 14.99$ prix = 16.3x
- `fonctionnalites-produit.md` (ligne 135) confirme "ROI moyen annonce : 16x le prix d'achat"
- `strategie-produit.md` (ligne 102) indique un "ROI de 7x a 33x"

**Problemes :**
1. Le "16x" est base sur l'exemple illustratif de 245$ et non sur une moyenne reelle
2. L'adjectif "Immediat" est trompeur -- l'economie se realise sur 12 mois, pas immediatement
3. Le ROI reel depend du profil : la strategie produit dit 7x a 33x -- presenter le 16x comme LA valeur est cherry-picking

**Severite : MOYENNE** -- exageration marketing classique mais contestable

**Recommandation :** Remplacer par "ROI estine : 7x a 33x selon votre profil" ou simplement supprimer le badge ROI de l'exemple.

---

### 4. Chiffres de l'exemple de rapport non sources (Optimizer.tsx, lignes 143-160)

L'exemple illustratif montre :
- Forfait Actuel : 1 240 $
- Forfait Optimal (Eco+) : 995 $
- Ajustement Flex Pass : -65 $
- Economie : 245 $

**Verdict :** Ces chiffres sont des exemples illustratifs (acceptables) mais pourraient etre confondus avec des resultats reels car ils ne portent aucune mention "exemple" ou "illustration".

**Recommandation :** Ajouter un asterisque ou une mention "Exemple de resultat illustratif" sous le rapport fictif.

---

### 5. "Compatible tarifs 2026" (Home.tsx, ligne 14)

**Verdict : A VERIFIER** -- `fonctionnalites-produit.md` mentionne "6 grilles tarifaires historiques (avril 2021 a aujourd'hui)" et `strategie-produit.md` dit "avril 2021 a mars 2025". Si la grille 2026 (avril 2025+) n'est pas encore integree dans le moteur de calcul, cette affirmation est fausse.

**Severite : MOYENNE** -- depend de l'etat reel du code

**Recommandation :** Verifier dans `src/lib/calculator/` si les tarifs post-avril 2025 sont presents. Si non, retirer le badge ou le remplacer par "Tarifs a jour".

---

## B) Features IMPRECISES ou VAGUES

### 1. Calculateur -- description trop courte (Home.tsx, ligne 69-71)

**Affiche :** "Simulateur pour vos trajets futurs ou recurrents (ex: Epicerie, Chalet)."

**Realite documentee :** Le calculateur est un outil sophistique avec :
- Multi-trajets avec nommage, modification, suppression
- Recurrence configurable (quotidien, hebdomadaire, mensuel) avec intervalle et fin parametrable
- Calcul en temps reel (300ms debounce)
- Double mode Station/Flex par trajet
- 6 grilles tarifaires historiques
- Supplements week-end, nuit, longue distance, saisonnier
- Assistant IA (experimental)

**Probleme :** La description ne rend pas justice a la puissance de l'outil. L'avantage competitif majeur vs le simulateur officiel Communauto (multi-trajet + recurrence + 5 forfaits simultanes) n'est pas mis en avant sur la Home.

---

### 2. Extracteur -- "Ne copiez plus vos factures a la main" (Home.tsx, ligne 106)

**Affiche :** Description centree sur le probleme (ne plus copier a la main) mais pas sur la solution complete.

**Realite documentee :**
- Import batch jusqu'a 24 fichiers (~2 ans)
- Detection doublons
- Validation du compte (protection multi-abonne)
- Export Excel/CSV
- Dashboard avec graphiques et comparaison mensuelle
- Statistiques : nombre trajets, cout moyen, total depense

**Probleme :** Les features les plus impressionnantes (dashboard, graphiques, stats) sont sous-vendues sur la Home. La page Extractor.tsx les mentionne mieux mais la Home donne une impression reductrice.

---

### 3. Optimiseur -- "Nous rejouons votre historique reel" (Home.tsx, ligne 146)

**Affiche :** Description tres courte qui ne mentionne pas les analyses complementaires.

**Realite documentee :**
- Analyse du forfait ideal sur 5 forfaits
- Filtrage par periode et nombre de co-abonnes
- Analyse Flex Pass (rentabilite du 75$/mois)
- Analyse assurance EDC (8-15$/mois)
- Garantie satisfait ou rembourse 30 jours
- 12 mois d'acces

---

### 4. "au centime pres" (Extractor.tsx, ligne 27)

**Affiche dans le hero :** "Pilotez votre budget au centime pres."

**Probleme :** L'Extracteur ne fait pas de calcul de precision -- c'est l'Optimiseur qui valide au centime pres (via le moteur de calcul a 5 algorithmes). L'Extracteur extrait des donnees PDF. L'expression "au centime pres" est associee a la mauvaise fonctionnalite.

---

### 5. Termes marketing flous

| Terme | Page | Probleme |
|-------|------|----------|
| "Simulation Massive" | Optimizer.tsx, ligne 95 | Exagere -- le mot "massive" suggere du Big Data. En realite c'est 5 forfaits x N trajets |
| "Notre algorithme" | Extractor.tsx, ligne 104 | Vague -- c'est un parser PDF, pas un algorithme au sens ML |
| "La boite a outils complete" | Home.tsx, ligne 18 | Le mot "complete" est discutable -- il manque le dashboard, les comparatifs Leo/auto |
| "le seul capable" | Optimizer.tsx, ligne 180 | Claim d'unicite non verifiable (meme si probablement vrai, c'est risque) |

---

## C) Features ABSENTES du site vitrine

### Calculateur -- features documentees non mentionnees sur le site

| Feature documentee | Mentionnee sur le site ? |
|---|---|
| Nommer chaque trajet (ex: "Epicerie") | OUI (Home card) |
| Choisir le type de vehicule par trajet | OUI (Calculator.tsx) |
| Recurrence quotidien/hebdomadaire/mensuel | OUI mais sans detail |
| Choix des jours de la semaine pour l'hebdomadaire | NON |
| Fin par date ou nombre d'occurrences | NON |
| Calcul en temps reel (300ms debounce) | OUI (Calculator.tsx) |
| Animation quand le forfait optimal change | NON |
| Mode "le moins cher" auto (Station/Flex) | NON -- le site mentionne le double mode mais pas le mode automatique |
| 6 grilles tarifaires historiques | NON |
| Supplements week-end | NON (mention vague dans "Details subtils") |
| Heures de nuit gratuites selon forfait | PARTIELLEMENT ("tarifs de nuit" dans Calculator.tsx) |
| Formules : regulier, aller-retour, longue distance, travail | NON |
| Tarifs saisonniers longue distance | NON |
| Cout abonnements proratis + co-abonnes | NON |
| Assistant IA conversationnel | NON (retire de l'offre selon strategie-produit.md) |
| **Comparaison voiture personnelle / Leo** | NON sur Calculator.tsx ni Optimizer.tsx en feature lists statiques |

### Extracteur -- features documentees non mentionnees sur le site

| Feature documentee | Mentionnee sur le site ? |
|---|---|
| Import 1 a 24 fichiers a la fois | NON |
| Taille max 50 Mo par fichier | NON |
| Detection automatique des doublons | NON |
| Bouton de reessai en cas d'erreur | NON |
| Donnees detaillees : numero vehicule, tarif applique, frais reservation | NON (mentions generiques seulement) |
| Validation du compte (protection multi-abonne) | NON |
| Export Excel/CSV | OUI (Extractor.tsx card 6) |
| Dashboard avec graphiques mois par mois | PARTIELLEMENT (illustre dans le workflow interactif mais pas dans les features statiques) |
| Statistiques : cout moyen, total depense | PARTIELLEMENT (illustre mais pas explicite) |

### Optimiseur -- features documentees non mentionnees sur le site

| Feature documentee | Mentionnee sur le site ? |
|---|---|
| Filtrage par periode specifique | NON |
| Ajustement nombre co-abonnes | NON |
| Choix du forfait de reference | NON |
| Analyse assurance EDC detaillee (8-15$/mois) | OUI (Optimizer.tsx etape 2) |
| Garantie satisfait ou rembourse 30 jours | OUI (Optimizer.tsx, ligne 37) |
| 12 mois d'acces aux analyses | OUI (Optimizer.tsx, ligne 22) |

### Features du brief produit TOTALEMENT absentes du site

| Feature | Source | Statut site |
|---|---|---|
| **Comparaison Leo & voiture perso** (outil independant) | brief-produit-consolide.md, section 3, "Comparaison d'alternatives" | ABSENT -- mentionne dans le card Optimizer sur Home (ligne 160) mais n'est ni sur Calculator.tsx ni sur Optimizer.tsx en detail |
| **Dashboard de depenses** (outil independant) | brief-produit-consolide.md, section 3 | ABSENT comme outil a part -- integre partiellement dans l'Extracteur |
| **Donnees completes** (tables avancees) | brief-produit-consolide.md, section 3 | ABSENT -- aucune page dediee |
| **Sauvegarde de scenarios** (premium) | brief-produit-consolide.md, section 3 tableau | ABSENT |
| **Comparaison de scenarios** (premium) | brief-produit-consolide.md, section 3 tableau | ABSENT |
| **Apercu flou des economies** (teaser gratuit) | strategie-produit.md, lignes 83-88 | ABSENT -- le funnel teaser n'est pas decrit sur le site |
| **Offre B2B** (79$/mois organisations) | strategie-produit.md, section B2B | ABSENT -- aucune page "Pour les organisations" |

---

## D) INCOHERENCES entre pages

### 1. "Comparatif Leo & Auto Perso" place dans le mauvais outil

**Localisation :** Home.tsx, card Optimizer (ligne 160)
**Probleme :** Le feature "Comparatif Leo & Auto Perso" est listee dans la card de l'Optimiseur sur la Home. Or, selon le `brief-produit-consolide.md` (section 3), la "Comparaison d'alternatives" est un outil **gratuit sans compte**, distinct de l'Optimiseur (qui est payant a 14.99$).

En pratique, le comparatif Leo/auto devrait etre :
- Soit dans le Calculateur (outil gratuit)
- Soit un outil a part (comme le decrit le brief)
- Pas dans l'Optimiseur payant

**Impact :** Un utilisateur qui veut comparer Communauto vs sa voiture pourrait croire qu'il doit payer 14.99$ pour ca.

---

### 2. "Analyse Flex Pass" affichee dans deux outils differents

- **Calculator.tsx** (ligne 223-225) : "Analyse Flex Pass" listee dans les features du Calculateur
- **Optimizer.tsx** (ligne 108-111) : "Analyse Flex Pass" listee dans les features de l'Optimiseur
- **Home.tsx** (ligne 156) : "Rentabilite Flex (Illimite/20)" dans la card Optimizer

**Probleme :** L'utilisateur ne sait pas ou trouver l'analyse Flex Pass -- est-ce gratuit (Calculateur) ou payant (Optimiseur) ?

Selon `fonctionnalites-produit.md`, l'analyse Flex Pass fait partie de l'**Optimiseur** (section 3, "Analyse Flex Pass"). Le Calculateur ne fait que le calcul par trajet.

---

### 3. Bouton "Importer mes factures" non fonctionnel sur Extractor.tsx

**Localisation :** Extractor.tsx, ligne 32-34
**Probleme :** Le CTA principal est un `<button>` sans `onClick`, sans `Link`, et sans redirection. Il ne fait rien.

---

### 4. Nombre d'outils incoherent

- **Home.tsx** (ligne 51) : "Trois outils simples."
- **brief-produit-consolide.md** (section 3) : "5 outils" (Simulateur, Comparaison, Dashboard, Donnees completes, Optimisation)
- **fonctionnalites-produit.md** : 3 outils (Calculateur, Extracteur, Optimiseur)

Le site et la doc produit sont alignes sur 3 outils, mais le brief en decrit 5. Incoherence entre documents internes.

---

### 5. Nom du produit incoherent

- Footer : "Cgenial" et "Cgenial Labs"
- FAQ.tsx (ligne 17) : "Cgenial"
- Aucune autre page ne mentionne le nom "Cgenial"
- Les docs parlent de "Communauto-CC" ou "Communauto CC"

Le branding n'est pas uniforme sur le site.

---

### 6. Page FAQ -- categories incompletes

La FAQ ne couvre que 2 categories (Securite et Fonctionnement) avec 5 questions. Il manque :
- Questions sur le pricing (pourquoi 14.99$, qu'est-ce qui est inclus)
- Questions sur l'Extracteur
- Questions sur la difference entre les 3 outils
- Questions sur les co-abonnes
- Questions sur le remboursement

---

## E) Liens MORTS

### Footer (Footer.tsx)

| Lien | href | Statut |
|------|------|--------|
| Nouveautes | `#` | **MORT** -- aucune page cible |
| Blog | `#` | **MORT** -- aucune page cible |
| Guide des tarifs | `#` | **MORT** -- aucune page cible |
| Aide & Support | `#` | **MORT** -- aucune page cible |
| Communaute | `#` | **MORT** -- aucune page cible |
| A propos | `#` | **MORT** -- aucune page cible |
| Contact | `#` | **MORT** -- aucune page cible |
| Confidentialite | `#` | **MORT** -- aucune page cible |
| Conditions | `#` | **MORT** -- aucune page cible |

**Total : 9 liens morts dans le footer.**

### Reseaux sociaux (Footer.tsx, lignes 21-23)

| Reseau | Element | Statut |
|--------|---------|--------|
| Twitter/X | `<Twitter>` sans href -- pas un `<a>`, juste une icone | **MORT** -- aucun lien |
| LinkedIn | `<Linkedin>` sans href | **MORT** -- aucun lien |
| GitHub | `<Github>` sans href | **MORT** -- aucun lien |

**Probleme :** Les icones de reseaux sociaux ne sont meme pas des liens (`<a>`), ce sont de simples icones avec un `cursor-pointer`. Elles ne menent nulle part.

### Liens manquants a la FAQ

La page FAQ devrait etre accessible depuis le footer (section "Ressources" ou "Aide & Support") mais elle n'y figure pas.

---

## F) Resume des severites

| Probleme | Severite | Action requise |
|----------|----------|----------------|
| Temoignages inventes | **CRITIQUE** | Supprimer immediatement |
| "Economie constatee" (non constatee) | **ELEVEE** | Reformuler en "estimee" |
| "ROI Immediat (16x)" | **MOYENNE** | Reformuler ou supprimer |
| "Compatible tarifs 2026" | **MOYENNE** | Verifier le code, ajuster si faux |
| Comparatif Leo/Auto dans le mauvais outil | **MOYENNE** | Deplacer ou clarifier |
| Flex Pass dans 2 outils | **MOYENNE** | Clarifier la repartition |
| 9 liens morts dans le footer | **ELEVEE** | Supprimer les liens ou creer les pages |
| 3 icones reseaux sociaux non cliquables | **FAIBLE** | Supprimer si pas de comptes reels |
| Features sous-vendues | **FAIBLE** | Enrichir les descriptions |
| Features absentes du site (Dashboard, B2B, scenarios) | **INFO** | A integrer selon roadmap |
| CTA Extracteur non fonctionnel | **ELEVEE** | Corriger le bouton |

---

*Rapport genere a partir de l'analyse croisee de 8 fichiers sources.*
