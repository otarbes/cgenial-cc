# Audit Funnel de Conversion -- Site Vitrine Cgenial

**Date :** 2026-02-10
**Scope :** Pages Home, Calculator, Extractor, Optimizer, FAQ + Navbar
**Reference :** strategie-produit.md + brief-produit-consolide.md

---

## 1. NARRATION DU FUNNEL : Calculateur -> Extracteur -> Optimiseur

### Etat actuel

Le funnel strategique prevu est :
```
Calculateur (gratuit, sans compte) -> Extracteur (gratuit, avec compte) -> Optimiseur (14.99$)
```

**Constat : le site ne raconte pas cette histoire.** Les trois outils sont presentes comme des produits independants, sans narration de progression entre eux.

### Analyse page par page

| Page | Renvoie vers l'etape suivante? | CTA de transition? | Verdict |
|------|-------------------------------|---------------------|---------|
| **Home** | Le CTA principal ("Analyser mes factures") saute le Calculateur et envoie directement a l'Extracteur | Non | Contredit la strategie |
| **Calculator** | Aucune mention de l'Extracteur. Le bottom CTA renvoie a `/calculator/tool` (le meme outil) | Non | Cul-de-sac |
| **Extractor** | Aucune mention de l'Optimiseur. Pas de bottom CTA du tout | Non | Cul-de-sac |
| **Optimizer** | Aucun CTA fonctionnel (le bouton "Commencer l'audit" est un `<button>` sans action). Pas de renvoi vers l'Extracteur comme prerequis | Non | Impasse |
| **FAQ** | Aucun CTA en fin de page | Non | Sortie seche |

### Problemes critiques

1. **Calculateur est un cul-de-sac.** L'utilisateur finit sa simulation et n'a aucun CTA du type "Maintenant, verifiez avec vos vraies factures". Le pont vers l'Extracteur n'existe pas.

2. **Extracteur est un cul-de-sac.** L'utilisateur importe ses factures, voit son dashboard, et... rien. Aucun teaser de l'Optimiseur, aucun apercu flou des economies, aucun "Decouvrez combien vous pourriez economiser".

3. **Optimiseur est une impasse.** Le bouton CTA principal est un `<button>` HTML sans `onClick` ni `Link`. Il ne fait rien. Aucun lien vers la creation de compte ou l'upload de factures.

4. **Le "moment de tension maximale"** decrit dans la strategie (apercu flou des economies apres l'upload) n'est PAS implemente. Il est mentionne dans les docs strategie mais absent du site.

---

## 2. JUSTIFICATION DU PRIX (Page Optimizer)

### Ce qui fonctionne

- Le prix est clairement affiche (badge "14.99$ pour 12 mois")
- Le rapport mockup montre une economie concrete (245$/an, ROI 16x)
- La mention "Satisfait ou rembourse 30 jours" est presente (sous le CTA)
- L'approche "Replay historique" est bien expliquee

### Ce qui manque

| Element | Statut | Impact |
|---------|--------|--------|
| **Calcul de ROI explicite** | Absent de la page (present seulement dans le mockup du rapport) | Eleve -- l'utilisateur doit comprendre "14.99$ pour potentiellement 100-500$ d'economies" AVANT de payer |
| **Comparaison avec des produits familiers** | Absent | Moyen -- la strategie mentionne TurboTax (22-40$), CarFax (24.99$) comme ancres de prix |
| **Section "Pourquoi 14.99$"** | Absent | Eleve -- le prix semble arbitraire sans justification |
| **Garantie 30 jours mise en avant** | Present mais en petit texte gris sous le CTA | Moyen -- devrait etre plus visible, idealement avec une icone |
| **Argument "Paiement unique, pas d'abonnement"** | Absent | Eleve -- c'est un differenciateur fort (zero piege) |
| **Economies typiques chiffrees** | "Economie moyenne constatee : 180$/an" dans la section temoignages | Moyen -- devrait etre dans la section hero ou pricing |

### Recommandation : Ajouter un bloc "Pourquoi 14.99$"

```
- Economies typiques : 100$ a 500$/an
- ROI moyen : 12x votre investissement
- Paiement unique -- pas d'abonnement, pas de piege
- Garantie 30 jours -- aucune economie trouvee = rembourse
- Moins cher que TurboTax (22$), CarFax (25$) ou un rapport de credit (20$)
```

---

## 3. ELEMENTS DE CONFIANCE

### Temoignages (page Optimizer)

**Probleme identifie :** Les trois temoignages (Thomas R., Sarah L., Marc D.) sont tres probablement inventes. Les avatars sont des initiales generiques. Pas de photos, pas de profils verifiables. Un utilisateur averti le detectera immediatement, ce qui **detruit la confiance** au lieu de la construire.

**Alternatives aux faux temoignages :**

| Option | Effort | Impact |
|--------|--------|--------|
| **Retirer les temoignages** et les remplacer par des donnees factuelles ("Notre moteur a 5 algorithmes, valide au centime pres contre les factures reelles") | Faible | Positif -- honnete et coherent avec le positionnement |
| **Section "Comment ca marche" technique** | Faible | Positif -- montrer la precision du moteur est plus convaincant que des citations inventees |
| **Compteur de simulations / analyses** | Moyen | Fort -- "1,200 simulations effectuees" (si le chiffre est reel) |
| **Garantie mise en avant** a la place | Faible | Fort -- "Satisfait ou rembourse 30 jours" est plus credible qu'un faux temoignage |
| **Beta testers reels** | Eleve | Tres fort -- recruter 5-10 vrais utilisateurs avant le lancement |

**Recommandation immediate :** Remplacer les temoignages par un bloc combinant :
1. Precision technique ("Valide au centime pres contre vos factures reelles")
2. Garantie 30 jours (mis en avant visuellement)
3. Argument ROI (economies typiques vs cout de l'outil)

### Section securite

**Etat actuel :** Un seul bloc sur la page Home ("Securite & Sauvegarde") + mentions dispersees sur Extractor et FAQ.

**Ce qui manque :**
- Aucun badge de securite (SSL, chiffrement AES-256, etc.)
- Pas de mention de la conformite PIPEDA / Loi 25 (loi quebecoise sur la vie privee)
- Pas de lien vers une politique de confidentialite
- Le CTA Extractor dit "Importer mes factures" mais ne rassure pas sur ce qu'il advient des donnees

### Preuve sociale absente

- Aucun compteur d'utilisateurs ou de simulations
- Aucun logo de partenaire ou de media
- Aucune mention de la communaute Communauto
- Pas de badge "Projet independant" pour la transparence

---

## 4. CTAs ET HIERARCHIE

### Incoherence majeure : le CTA principal de Home

La strategie dit clairement :

> "Le simulateur est la porte d'entree massive. [...] Moteur d'acquisition, porte d'entree a zero friction."

**Or, le CTA principal de Home est "Analyser mes factures" (lien vers /extractor).** Le simulateur gratuit est relege au CTA secondaire ("Simulateur gratuit", style outline).

C'est l'inverse de la strategie. Le CTA principal devrait etre le Calculateur (zero friction, sans compte), pas l'Extracteur (necessite un compte + upload de factures = friction elevee).

### Navbar : correctement alignee

Le bouton "Essayer gratuitement" dans la Navbar pointe vers `/calculator`. C'est coherent avec la strategie. Mais la Navbar contredit le hero de la page Home.

### Bottom CTA de Home : bien aligne

Le bottom CTA "Commencez par le gratuit" met le Calculateur en premier. C'est le bon alignement. Mais il contredit le hero.

### Resume des CTAs

| Emplacement | CTA actuel | CTA recommande | Raison |
|-------------|-----------|----------------|--------|
| **Home hero (primaire)** | "Analyser mes factures" -> /extractor | "Essayer le simulateur" -> /calculator | Le simulateur est la porte d'entree zero friction |
| **Home hero (secondaire)** | "Simulateur gratuit" -> /calculator | "J'ai deja des factures" -> /extractor | Pour les utilisateurs qui savent ce qu'ils veulent |
| **Calculator bottom** | "Demarrer le simulateur" -> /calculator/tool | Garder + ajouter "Verifiez avec vos vraies factures" -> /extractor | Pont vers l'etape suivante |
| **Extractor bottom** | Absent | "Decouvrez combien vous pourriez economiser" -> /optimizer | Pont vers le paywall |
| **Optimizer CTA** | `<button>` sans action | `<Link>` vers le flow d'achat (ou /extractor si pas de factures) | Le bouton doit fonctionner |
| **FAQ bottom** | Absent | "Pret a essayer?" -> /calculator | Recuperer le trafic FAQ |

---

## 5. PARCOURS NON-ABONNE vs ABONNE

### Ce que dit la strategie

Deux publics distincts avec deux propositions de valeur :
1. **Non-abonnes / curieux** : "Combien couterait Communauto pour mon profil?" -> Simulateur
2. **Abonnes actuels** : "Etes-vous sur le bon forfait?" -> Upload factures -> Optimisation

### Ce que fait le site

| Public | Adresse? | Comment? |
|--------|----------|----------|
| **Non-abonnes** | Partiellement | Le Calculateur repond a leur besoin, mais le hero Home les envoie vers l'Extracteur (inutile pour eux -- ils n'ont pas de factures) |
| **Abonnes actuels** | Partiellement | L'Extracteur + Optimiseur sont pour eux, mais le parcours n'est pas guide |

### Problemes

1. **Le hero Home ne segmente pas les publics.** Le titre "La boite a outils complete pour votre budget Communauto" suppose que le visiteur est deja abonne. Un non-abonne ne se sent pas interpelle.

2. **Pas de message pour les non-abonnes.** Nulle part sur le site on ne lit : "Pas encore abonne? Decouvrez combien couterait Communauto pour vos trajets." C'est le message du simulateur, mais il n'est pas explicite.

3. **Le Calculateur ne mentionne pas le cas d'usage "non-abonne".** Le hero dit "Simulez vos trajets au dollar pres" mais pas "Decouvrez combien couterait Communauto".

### Recommandation : Segmenter dans le hero

```
Option A : Double CTA explicite
- "Je suis abonne" -> /extractor (upload factures)
- "Je suis curieux" -> /calculator (simulateur)

Option B : Message generique + un seul CTA (simulateur)
- "Que vous soyez abonne ou curieux, commencez par simuler vos trajets."
- CTA primaire : Simulateur
- CTA secondaire : "Deja abonne? Importez vos factures"
```

---

## 6. RECOMMANDATIONS CONCRETES (par priorite)

### Priorite 1 -- Corriger les ruptures du funnel

#### 1.1 Inverser les CTAs du hero Home
- **Primaire :** "Essayer le simulateur gratuit" -> /calculator
- **Secondaire :** "J'ai des factures a analyser" -> /extractor

#### 1.2 Ajouter un CTA de transition sur Calculator (bottom)
Apres la section "Testez vos scenarios maintenant", ajouter :
```
Section "Allez plus loin"
"Le simulateur estime. Vos factures reelles prouvent.
 Importez vos factures et decouvrez vos economies exactes."
CTA: "Analyser mes vraies factures" -> /extractor
```

#### 1.3 Ajouter un CTA de transition sur Extractor (bottom)
La page Extractor se termine brutalement apres la grille de fonctionnalites. Ajouter :
```
Section "Et maintenant?"
"Vos donnees sont pretes. Decouvrez combien vous pourriez economiser
 en changeant de forfait."
CTA: "Lancer l'optimisation -- 14.99$" -> /optimizer
Note: "Garantie 30 jours -- aucune economie = rembourse"
```

#### 1.4 Corriger le CTA Optimizer
Le bouton "Commencer l'audit" est un `<button>` HTML sans action. Le transformer en `<Link>` fonctionnel vers le flow d'achat ou d'upload.

#### 1.5 Ajouter un CTA de sortie sur FAQ
```
Section bottom:
"Pret a voir combien vous pourriez economiser?"
CTA: "Essayer le simulateur" -> /calculator
```

### Priorite 2 -- Renforcer la justification du prix

#### 2.1 Ajouter un bloc ROI sur Optimizer
Entre le hero et le workflow interactif :
```
"14.99$ pour 12 mois d'acces"
- Economies typiques : 100$ a 500$/an
- Paiement unique -- pas d'abonnement
- Garantie 30 jours
- Moins cher qu'un cafe par semaine
```

#### 2.2 Remplacer les faux temoignages
Retirer Thomas R., Sarah L., Marc D. et les remplacer par :
- Un bloc "Precision technique" (moteur valide au centime pres)
- Un bloc "Garantie" bien visible
- Un chiffre factuel ("Notre algorithme teste X combinaisons par analyse")

### Priorite 3 -- Ameliorer la confiance

#### 3.1 Enrichir la section securite
- Mentionner le chiffrement specifique (AES-256 ou equivalent)
- Ajouter une mention de conformite Loi 25 / PIPEDA
- Lien vers une politique de confidentialite (meme simple)

#### 3.2 Ajouter un footer avec les mentions legales
Actuellement absent. Un footer avec :
- Lien politique de confidentialite
- Lien conditions d'utilisation
- Mention "Projet independant -- non affilie a Communauto"

### Priorite 4 -- Segmenter les publics

#### 4.1 Adapter le message hero Home
Ajouter un sous-titre qui adresse les deux publics :
```
"Que vous decouvriez Communauto ou que vous soyez abonne depuis 5 ans,
 nos outils vous montrent exactement combien ca coute."
```

#### 4.2 Adapter le hero Calculator
Ajouter une ligne pour les non-abonnes :
```
"Pas encore abonne? Decouvrez combien couterait Communauto pour votre profil."
```

---

## 7. SYNTHESE

### Ce qui fonctionne bien

- Les pages individuelles sont bien designees (propres, style Notion, coherent)
- Le workflow interactif en 3 etapes est efficace pedagogiquement
- La Navbar est bien structuree (Calculateur / Extracteur / Optimiseur / FAQ)
- Le bouton Navbar "Essayer gratuitement" est aligne avec la strategie
- Le prix 14.99$ est bien positionne (pas cache, pas agressif)
- La garantie 30 jours existe (meme si sous-exploitee)

### Ce qui ne fonctionne pas

1. **Le funnel est casse.** Les pages sont des culs-de-sac sans narration de progression.
2. **Le CTA principal de Home contredit la strategie.** Il pousse vers l'Extracteur (friction) au lieu du Calculateur (zero friction).
3. **Le moment de tension maximale n'existe pas.** L'apercu flou des economies apres upload (prevu dans la strategie) n'est pas implemente.
4. **Les faux temoignages detruisent la confiance** plutot que de la construire.
5. **Le bouton CTA de l'Optimizer ne fonctionne pas** (pas de link, pas d'action).
6. **Les non-abonnes ne sont pas adresses** explicitement dans le messaging.

### Score funnel

| Critere | Score | Note |
|---------|-------|------|
| Narration Calculator -> Extractor | 0/5 | Aucun pont |
| Narration Extractor -> Optimizer | 0/5 | Aucun pont |
| Justification du prix | 2/5 | Presente mais insuffisante |
| Elements de confiance | 1/5 | Faux temoignages, securite basique |
| CTAs et hierarchie | 2/5 | Incoherence hero vs strategie |
| Segmentation des publics | 1/5 | Non-abonnes ignores |
| **Score global** | **6/30** | **Funnel non fonctionnel** |

### Conclusion

Le site est bien designe visuellement mais le funnel de conversion est non fonctionnel. Les trois outils sont presentes comme des iles independantes au lieu d'un parcours guide. La priorite absolue est de creer les ponts narratifs entre les etapes et d'aligner le CTA principal de Home avec la strategie (Calculateur = porte d'entree).
