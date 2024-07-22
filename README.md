# Projet HRNet avec React et Vite

## Description

Ce projet est une refonte d'une application basée sur jQuery, mise à jour pour utiliser React avec Vite. L'application est conçue pour gérer des informations d'employés et comprend des fonctionnalités telles que la gestion des dates, la sélection d'options et la validation de formulaires. L'objectif est de tirer parti des capacités modernes de React et Redux Toolkit pour une expérience utilisateur plus fluide et une architecture plus maintenable.

## Composants du Projet

Voici une vue d'ensemble des composants principaux de ce projet :

### 1. `Header`

Le composant `Header` rend la section d'en-tête de l'application, y compris le logo et le titre de l'application, ainsi que la barre de navigation (`Navbar`).

### 2. `Navbar`

Le composant `Navbar` est utilisé pour la navigation à travers l'application. Il affiche des liens vers les différentes pages en fonction de la route actuelle.

### 3. `Form`

Le composant `Form` est le cœur de l'application, permettant aux utilisateurs de saisir des informations sur les employés. Il comprend des champs pour le prénom, le nom, la date de naissance, l'adresse et la date de début. Il utilise le composant `DateTimePicker` pour la sélection des dates et le composant `ReactSelect` pour les sélections d'options.

### 4. `DateTimePicker`

Le composant `DateTimePicker` permet aux utilisateurs de sélectionner une date et une heure. Il est personnalisable avec des dates minimales et maximales et utilise le package `react-datepicker`.

### 5. `ReactSelect`

Le composant `ReactSelect` est une version personnalisée du composant de sélection pour gérer les options déroulantes. Il est stylisé pour correspondre au design de l'application et prend en charge les options dynamiques.

## Installation

### Prérequis

- **Node.js** : Assurez-vous d'avoir Node.js installé. Pour ce projet, nous recommandons la version 18.x ou supérieure.
- **Visual Studio Code** : Bien que tout éditeur de texte puisse être utilisé, Visual Studio Code est recommandé pour son support étendu de l'écosystème JavaScript et React.

### Étapes d'installation

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/votre-utilisateur/jquery_react.git
   cd jquery_react

   ```

2. **Installer les dépendances**

npm install

3. **Installer visual studio code**

Téléchargez et installez Visual Studio Code à partir du site officiel : Visual Studio Code.

4. **Lancer le projet**
   npm run dev

Ouvrez votre navigateur et accédez à http://localhost:3000 pour voir l'application en action.

Utilisation de la Modal

Le projet utilise le package modal_hrnet_project pour les modaux. Assurez-vous d'importer et d'utiliser ce package selon les besoins de votre application. Vous pouvez consulter la documentation de ce package pour plus d'informations sur son utilisation.

## Dépendances

Voici les principales dépendances du projet :

    React : Pour construire l'interface utilisateur.
    Redux Toolkit : Pour la gestion de l'état global.
    Material-UI : Pour les composants UI modernes.
    React Datepicker : Pour la sélection de dates.
    React Select : Pour les menus déroulants personnalisés.
    ESLint : Pour le linting du code JavaScript et JSX.

## Développement

Pour contribuer au développement :

    Créez une branche pour votre fonctionnalité ou correction de bug.
    Effectuez vos modifications.
    Testez les modifications localement.
    Soumettez une demande de tirage (Pull Request) avec une description claire des modifications apportées.