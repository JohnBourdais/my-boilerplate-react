# ESLint + Prettier

```yarn
    yarn add --dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

```yarn
    yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier
```

```yarn
    yarn add --dev husky lint-staged pretty-quick
```

https://medium.com/quick-code/how-to-integrate-eslint-prettier-in-react-6efbd206d5c4

Création du fichier **.eslintrc.json**

```json
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```
