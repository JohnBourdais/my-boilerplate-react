# Debug

## Initialisation du fichier launcher pour VSCode

Appuyer sur **F5** pour générer la première fois le répertoire **.vscode** à la racine du projet. Il propose plusieurs options de lancement mais pour notre projet nous partirons sur Chrome.

Une fois cette option choisi il suffit d'appuyer à nouveau sur **F5** pour que le navigateur ce lance en mode debug avec Chrome.

----

**Pour que cela fonctionne parfaitement il faut s'assurer d'avoir le plugin de Debug pour chrome au sein de l'IDE.**

----

Voici un exemple de ce que devrait contenir le fichier **launch.json**

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```