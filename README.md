Projet crée à partir de l'image suivante : [Create React App](https://github.com/facebook/create-react-app).

## Script disponible

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Prérequis

## Language

* NPM : https://www.npmjs.com/

## Extensions

* Debug :
  * https://github.com/Microsoft/vscode-chrome-debug
* Linter :
  * ESLint : https://github.com/Microsoft/vscode-eslint
  * Prettier : https://github.com/prettier/prettier-vscode
* Language :
  * React : https://github.com/dsznajder/vscode-es7-javascript-react-snippets
* Utilitaires :
  * Markdown : https://github.com/yzhang-gh/vscode-markdown
  * TODO Highlight : https://github.com/wayou/vscode-todo-highlight

# Installation

## Initialisation du boilerplate de react en version typescript

```yarn
yarn create react-app boilerplate-react --typescript
```

## Initialisation du fichier launcher VSCode

Appuyer sur **F5** pour générer la première fois le répertoire de configuration pour l'éditeur. Il propose plusieurs options de lancement mais pour notre projet nous partirons sur Chrome.
Une fois cette option choisi il suffit d'appuyer à nouveau sur **F5** pour que le navigateur ce lance en mode debug avec Chrome. Pour que cela fonctionne parfaitement il faut égallement s'assurer d'avoir le plugin de Debug pour chrome au sein de l'IDE.

## Initialisation de la structure

Initialisation de la strucure du projet

```folder
 - .vscode
 - node_modules
 - public
 - config
 - src
    - components
    - config
    - containers
    - docs
    App.css
    App.test.tsx
    App.tsx
    index.css
    index.tsx
    logo.svg
    react-app-env.d.ts
    serviceWorker.ts
  .gitignore
  package.json
  README.md
  TODO.md
  tsconfig.json
  yarn.lock
```









