# Fonctionnalites Produit - Communauto CC

## 1. Calculateur (Gratuit, sans inscription)

### Description
Simulateur qui compare les 5 forfaits Communauto a partir de trajets hypothetiques. L'utilisateur decrit ses habitudes de deplacement et obtient instantanement le forfait le moins cher.

### Fonctionnalites

**Saisie de trajets**
- Ajouter plusieurs trajets avec : date, heure de depart, duree (ou heure de fin), distance en km
- Nommer chaque trajet (ex: "Epicerie", "Chalet", "Bureau")
- Choisir le type de vehicule par trajet : Station, Flex, ou "le moins cher"
- Modifier ou supprimer un trajet a tout moment

**Recurrence**
- Definir un trajet comme recurrent : quotidien, hebdomadaire ou mensuel
- Choisir l'intervalle (ex: toutes les 2 semaines)
- Pour l'hebdomadaire : selectionner les jours de la semaine
- Definir la fin : par date ou par nombre d'occurrences
- Les occurrences sont generees automatiquement pour le calcul

**Calcul en temps reel**
- Recalcul automatique a chaque modification de trajet (300ms de debounce)
- Etat de chargement visible pendant le calcul
- Les resultats precedents restent affiches en grise pendant le recalcul

**Tableau comparatif des 5 forfaits**
- Liberte, Liberte+, Economique, Economique+, Economique Extra
- Pour chaque forfait : cout des trajets, abonnement mensuel, total mensuel, total annuel
- Le forfait optimal (le moins cher au total) est mis en evidence avec une etoile
- Animation de mise en evidence quand le forfait optimal change

**Double mode de calcul**
- Chaque trajet est calcule en mode Station ET en mode Flex
- L'utilisateur peut basculer le type de vehicule par trajet et voir l'impact instantanement
- Le mode "le moins cher" selectionne automatiquement Station ou Flex selon ce qui coute le moins

**Tarification precise**
- 6 grilles tarifaires historiques (avril 2021 a aujourd'hui)
- Prise en compte des supplements week-end, heures de nuit (gratuites sur Eco+ et Eco Extra)
- Formules : regulier, aller-retour, longue distance (>300 km), travail (Eco Extra seulement)
- Tarifs saisonniers pour la longue distance (haute saison : 15 juin - 15 octobre)
- Cout des abonnements mensuels proratis avec support des co-abonnes

**Assistant IA (requiert un compte)**
- Bouton pour ouvrir un assistant conversationnel
- Decrire ses trajets en langage naturel
- Redirection vers la page de connexion si non authentifie

---

## 2. Extracteur (Gratuit, requiert un compte)

### Description
Outil qui transforme les factures PDF Communauto (illisibles) en donnees structurees, claires et exportables. Resout le probleme concret que les PDF Communauto sont impossibles a lire et a copier.

### Fonctionnalites

**Import de factures**
- Glisser-deposer ou selection de fichiers
- Import de 1 a 24 fichiers PDF a la fois (~2 ans de factures)
- Taille maximale : 50 Mo par fichier
- Validation automatique du format (PDF uniquement)

**Traitement automatique**
- Extraction en quelques secondes par facture
- Suivi de progression par fichier : en attente, envoi, traitement, termine
- Detection automatique des doublons (facture deja importee)
- Bouton de reessai pour les fichiers en erreur (erreurs reseau/systeme)

**Donnees extraites par facture**
- Informations du compte : numero d'abonne, numero de facture, periode de facturation, forfait actuel, date d'expiration du forfait
- Solde : ancien solde, paiements recus, interets de retard, TPS, TVQ, nouveau solde
- Tableau des trajets : numero de vehicule, numero d'usager, dates/heures debut-fin, duree, distance, prix du temps, prix du km, frais de reservation, autres frais/credits, total du, tarif applique
- Tableau des transactions : credits d'achat, frais annuels, assurance dommages, frais admin, contraventions

**Support bilingue**
- Extraction des factures en francais ET en anglais
- Detection automatique de la langue

**Detection des co-abonnes**
- Identification automatique des differents numeros d'usager dans les trajets
- Association au compte principal
- Les donnees des co-abonnes sont integrees au compte de l'abonne principal

**Validation du compte**
- Premiere facture : le numero de compte est enregistre automatiquement dans le profil
- Factures suivantes : verification que le numero de compte correspond
- Protection contre l'import de factures d'un autre abonne

**Visualisation et export**
- Donnees presentees en tableaux clairs et structures
- Export Excel/CSV
- Statistiques : nombre de trajets, cout moyen par trajet, total depense
- Dashboard avec graphiques et comparaison mois par mois

**Securite**
- Stockage prive et chiffre (fichiers non accessibles publiquement)
- Traitement serverless (donnees traitees puis fichier non conserve en clair)
- Suppression des donnees possible a tout moment

---

## 3. Optimiseur (14,99 $ - paiement unique)

### Description
Audit personnalise qui rejoue l'historique reel de factures de l'utilisateur avec les 5 forfaits Communauto pour identifier le forfait optimal et les economies realisables. Necessite d'avoir importe ses factures avec l'Extracteur.

### Fonctionnalites

**Analyse du forfait ideal**
- Comparaison des 5 forfaits (Liberte, Liberte+, Economique, Economique+, Economique Extra) sur l'historique reel
- Chaque trajet reel est recalcule sous chaque forfait
- Tableau comparatif : cout des trajets + abonnement mensuel = total par forfait
- Identification du forfait optimal avec economies en $ et en %
- Economies moyennes constatees : ~180 $/an

**Filtrage par periode**
- Analyser toute la periode ou un intervalle de dates specifique
- Ajuster le nombre de co-abonnes
- Choisir le forfait de reference pour la comparaison

**Analyse Flex Pass**
- Determine si le Flex Pass (75 $/mois) est rentable pour le profil de l'utilisateur
- Compare le cout avec et sans Flex Pass

**Analyse assurance EDC (Exclusion du Deductible de Collision)**
- Analyse si l'assurance collision (8-15 $/mois) vaut le cout
- Basee sur l'historique reel d'utilisation

**Garanties**
- Garantie satisfait ou rembourse 30 jours
- 12 mois d'acces aux analyses
- ROI moyen annonce : 16x le prix d'achat

---

## Relations entre les fonctionnalites

```
PARCOURS UTILISATEUR TYPE :

1. Calculateur (gratuit, sans compte)
   → "Quel forfait serait le mieux pour moi ?"
   → Basé sur des trajets estimés/hypothétiques

2. Extracteur (gratuit, avec compte)
   → "Je veux voir mes vraies données clairement"
   → Import des factures PDF → données structurées

3. Optimiseur (14,99 $, avec compte + factures importées)
   → "Quel forfait est vraiment optimal pour MON usage réel ?"
   → Analyse basée sur l'historique réel de trajets
```

**Entonnoir de conversion :**
- Le Calculateur attire les visiteurs (gratuit, sans friction)
- L'Extracteur cree le compte et importe les donnees (gratuit, utile en soi)
- L'Optimiseur monetise en apportant une reponse precise basee sur les donnees reelles
