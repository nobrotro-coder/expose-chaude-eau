# Structure du Projet - Composants Chauffe-Eau Électrique

## Pages Principales

### 1. index.html - Page d'accueil
- **Hero Section** : Présentation visuelle d'un chauffe-eau avec animation
- **Vue d'ensemble** : Schéma interactif d'un chauffe-eau avec points clés
- **Composants principaux** : Cartes interactives pour chaque composant
- **Navigation** : Accès rapide aux autres sections

### 2. composants.html - Détail des composants
- **Résistance électrique** : Types blindée/stéatite, fonctionnement
- **Thermostat** : Régulation température, types (canne, bulbe, électronique)
- **Anode de magnésium** : Protection anti-corrosion, maintenance
- **Groupe de sécurité** : Régulation pression, sécurité
- **Cuve et isolation** : Matériaux, fonctionnement stratification
- **Vase d'expansion** : Compensation dilatation thermique

### 3. fonctionnement.html - Fonctionnement et schémas
- **Principe de stratification** : Animation du fonctionnement
- **Circuit hydraulique** : Flux d'eau froide/chaude
- **Circuit électrique** : Schéma de câblage interactif
- **Cycle de chauffe** : Étapes du processus
- **Sécurité et régulation** : Systèmes de protection

### 4. maintenance.html - Entretien et diagnostic
- **Outils de diagnostic** : Calculateurs et testeurs
- **Maintenance préventive** : Calendrier et check-list
- **Dépannage** : Problèmes courants et solutions
- **Pièces détachées** : Références et compatibilités
- **Guide de remplacement** : Tutoriels visuels

## Fonctionnalités Interactives

### Calculateurs et Outils
- **Calculateur de puissance** : Taille de résistance adaptée
- **Testeur d'anode** : État de corrosion
- **Diagnostic thermostat** : Test de fonctionnement
- **Calculateur de capacité** : Taille de chauffe-eau nécessaire

### Visualisations
- **Schéma interactif** : Explorer les composants
- **Animation stratification** : Voir le fonctionnement
- **Graphiques performance** : Consommation et efficacité
- **Timeline maintenance** : Planification entretien

### Effets Visuels
- **Hero shader** : Animation fluide en arrière-plan
- **Cards 3D** : Composants en perspective
- **Hover effects** : Interactions au survol
- **Scroll animations** : Apparition progressive
- **Image gallery** : Composants en détail

## Design et Style

### Palette de Couleurs
- **Primaire** : Bleu industriel (#1e3a8a)
- **Secondaire** : Orange technique (#f97316)
- **Neutres** : Gris acier (#64748b)
- **Accent** : Rouge sécurité (#dc2626)

### Typographie
- **Titre** : Inter Bold (moderne, technique)
- **Corps** : Inter Regular (lisible, professionnel)

### Animation
- **Bibliothèques** : Anime.js, ECharts.js, p5.js
- **Effets** : Morphing, particules, transitions fluides
- **Performance** : Optimisation GPU, animations légères

## Structure Technique

### Fichiers
- `index.html` - Page principale
- `composants.html` - Détail composants
- `fonctionnement.html` - Schémas et animations
- `maintenance.html` - Outils et guides
- `main.js` - Logique interactive
- `resources/` - Images et assets

### Bibliothèques
- **Animation** : Anime.js, p5.js
- **Visualisation** : ECharts.js, Matter.js
- **Interface** : Splide.js, Shader-park
- **Utilitaires** : ECharts.js pour les graphiques

### Navigation
- **Header fixe** : Navigation fluide
- **Breadcrumbs** : Localisation dans le site
- **Footer** : Informations et liens
- **Mobile responsive** : Adaptation tous écrans