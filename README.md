# SPS LEGAL SERVICES – Site vitrine officiel

Site vitrine du cabinet / service juridique **SPS LEGAL SERVICES**, développé en **React** avec **Vite** et **Tailwind CSS**.

Ce site présente :

- l’historique du cabinet (créé le **21 août 2020**) ;
- les **services juridiques et administratifs** ;
- les **prestations ANIP** (24h–48h\*) ;
- les **domaines d’intervention** ;
- l’**équipe dirigeante** ;
- les **coordonnées** et réseaux sociaux.

\*Sous réserve des délais institutionnels et de la complétude des dossiers.

---

## 1. Stack technique

- **React 18**
- **Vite** (bundler / dev server)
- **Tailwind CSS 3** (design responsive)
- CSS utilitaire + quelques classes globales pour la charte graphique.

---

## 2. Installation du projet

Assure-toi d’avoir **Node.js** et **npm** ou **yarn** installés sur ta machine.

```bash
# Cloner / ouvrir le dossier du projet
cd SPS-LEGAL-SERVICES

# Installer les dépendances
npm install
# ou
yarn
```

---

## 3. Scripts disponibles

Dans le dossier du projet, tu peux lancer :

- **Développement**

  ```bash
  npm run dev
  # ou
  yarn dev
  ```

  Puis ouvre l’URL indiquée par Vite (par défaut `http://localhost:5173`).

- **Build de production**

  ```bash
  npm run build
  # ou
  yarn build
  ```

- **Prévisualisation du build**

  ```bash
  npm run preview
  # ou
  yarn preview
  ```

---

## 4. Structure principale

```text
SPS-LEGAL-SERVICES
├─ index.html          # Entrée HTML Vite
├─ package.json        # Dépendances et scripts
├─ vite.config.mjs     # Configuration Vite + React
├─ tailwind.config.cjs # Configuration Tailwind (couleurs, fonts)
├─ postcss.config.cjs  # Configuration PostCSS
└─ src
   ├─ main.jsx         # Point d’entrée React
   ├─ App.jsx          # Mise en page principale (toutes les sections)
   └─ index.css        # Tailwind + styles globaux (charte SPS)
```

Toutes les sections du site se trouvent dans `src/App.jsx` :

- **Navbar** (menu + appel à l’action),
- **Hero / Accueil** (présentation rapide + coordonnées clés),
- **Historique & positionnement**,
- **Services du cabinet** (services juridiques, ANIP, procédures),
- **Domaines d’intervention & charte graphique**,
- **Équipe dirigeante**,
- **Contact & rendez-vous**,
- **Footer**.

---

## 5. Charte graphique & logos

La charte graphique SPS LEGAL SERVICES est respectée dans le thème Tailwind :

- Couleurs principales : **bleu marine** (`sps-navy`), **or** (`sps-gold`), fond **sombre / institutionnel** (`sps-dark`).
- Typographies :
  - Titres : `Playfair Display`
  - Textes : `Montserrat`
- Style visuel : sobre, institutionnel, premium, sans couleurs flashy.

### Logo principal (institutionnel)

Le site utilise **uniquement le logo principal** (institutionnel) dans l’interface, conformément à la règle : _« Un visuel = un seul logo »_.

Dans le code, le logo institutionnel est référencé via :

```js
const LOGO_PRIMARY_SRC = '/assets/logo-principal.jpeg';
```

Pour l’utiliser :

1. Crée le dossier `public/assets` à la racine du projet (si nécessaire).
2. Place ton **logo institutionnel** (version fond sombre / doré) dans `public/assets` sous le nom :

```text
public/assets/logo-principal.jpeg
```

3. Recharge le site : le logo apparaîtra dans la carte de présentation de la page d’accueil.

### Logo secondaire (communication)

Le logo secondaire (plus illustratif, destiné aux publications, réseaux sociaux, flyers...) **n’est pas affiché sur le site** pour respecter la frontière institutionnel / communication.

Tu peux néanmoins :

- placer le fichier dans `public/assets/logo-secondaire.png` pour un usage ultérieur (ex. pages de blog, outils marketing, etc.) ;
- l’utiliser dans d’autres supports (affiches, visuels réseaux sociaux), mais **pas dans l’interface institutionnelle du site**.

---

## 6. Contenus modifiables rapidement

Les éléments que tu voudras le plus souvent ajuster :

- **Texte d’accroche, description et historique** : section « Hero » et « Historique & positionnement » dans `App.jsx`.
- **Services et prestations ANIP** : tableaux de données `coreServices`, `anipServices`, `procedureServices`.
- **Domaines d’intervention** : tableau `domainesIntervention`.
- **Coordonnées & réseaux sociaux** : section `ContactSection` (téléphones, email, WhatsApp, réseaux).
- **Mentions légales / note sur les délais** : zone informative dans `ServicesSection` et `ContactSection`.

Chaque bloc est structuré de manière simple (listes JavaScript + mapping React) pour faciliter les mises à jour.

---

## 7. Déploiement

Après un `npm run build`, le dossier `dist` généré par Vite contient la version statique du site.  
Tu peux la déployer sur n’importe quel hébergeur de fichiers statiques (Netlify, Vercel, GitHub Pages, OVH, etc.).

---

## 8. Contact du cabinet (rappel)

- **Email** : `sandrellesoglohoun05@gmail.com`
- **Localisation** : Cococodji, Oiseaux Blanc – Maison SOGLOHOUN
- **Services clients** :
  - 01 91 11 60 64
  - 01 91 98 62 38
- **WhatsApp** : 01 64 94 93 13
- **Réseaux sociaux** :
  - Facebook : SPS LEGAL SERVICES
  - Instagram : Sandrelle SOGLOHOUN
  - LinkedIn : Sandrelle SOGLOHOUN

