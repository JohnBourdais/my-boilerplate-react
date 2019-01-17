======================
===== PRE-REQUIS =====
======================

- NodeJS
- Yarn


=======================
===== INIT PROJET =====
=======================
Installation du kit starter de react (cf : https://facebook.github.io/create-react-app/docs/getting-started)

$ yarn create react-app my-boilerplate-react

Création du fichier INSTALL.md permettant de décrire l'installation du projet

$ c:/workspace/my-boilerplate-react/ touch INSTALL.md

Installation des dépendances

$ c:/workspace/my-boilerplate-react/ yarn

Démarrage de l'application

$ c:/workspace/my-boilerplate-react/ yarn start

Ajout de ESLint pour afficher les erreurs de syntaxe

$ c:/workspace/my-boilerplate-react/ touch .eslintrc.json

Edition du fichier .eslinttrc.json

{
  "extends": "react-app"
}

Installation du debuger Chrome

https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
https://facebook.github.io/create-react-app/docs/setting-up-your-editor

Installation de StoryBook (cf : https://storybook.js.org/basics/guide-react/)

$ c:/workspace/my-boilerplate-react/ npx -p @storybook/cli sb init

Lancement du StoryBook

$ c:/workspace/my-boilerplate-react/ yarn storybook
