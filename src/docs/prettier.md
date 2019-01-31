# Prettier

Installation du pre-commit :

```yarn
    yarn add lint-staged husky --dev
```

Modification du **package.json**

```json
    {
    "husky": {
        "hooks": {
        "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "*.{js,json,css,md}": ["prettier --write", "git add"]
    }
    }
```