
# README - Projet Test Postman pour EverShop API

https://github.com/user-attachments/assets/0add79e9-f49b-49f2-9ef2-a54402079f61

<img width="722" height="390" alt="Capture d’écran 2025-07-15 à 12 37 01" src="https://github.com/user-attachments/assets/952e2b2e-6db3-44c4-890d-058c9b71f3a9" />
<img width="1440" height="778" alt="Capture d’écran 2025-07-15 à 12 37 57" src="https://github.com/user-attachments/assets/0df9bd25-7cd5-4b42-ba73-53d2c913b458" />


---

## 📦 Présentation

Ce projet contient une suite de tests automatisés Postman visant à valider les APIs liées à EverShop, notamment la gestion des méthodes d’expédition.  
Les résultats de tests sont reportés via **Allure**, offrant un rapport visuel clair et détaillé.

---

## 🚀 Prérequis

- **Node.js** (version 14+ recommandée)  
- **Newman** (outil CLI pour exécuter les collections Postman)  
- **Allure Commandline** (pour générer et visualiser les rapports)  
- Postman collection et environnement configurés pour EverShop (fournis dans `/postman`)

---

## 📂 Structure du projet

```
/
├── allure-results/                               # Résultats bruts des tests Allure
├── allure-report/                                # Rapport Allure généré (HTML)
│ 
│ 
├── Test/
│   ├── evershopAPI.postman_collection.json           # Collection Postman des APIs EverShop
│   ├── url.postman_environment.json                  # Environnement Postman 
│   ├── workspace.postman_globals.json                # Environnement Postman 
│ 
│ 
├── package.json
├── README.md
└── run-tests.sh                                      # Script shell pour lancer les tests et rapports
```

---

## ⚙️ Installation

1. Cloner le projet

```bash
git clone <repo-url>
cd <project-folder>
```

2. Installer les dépendances

```bash
npm install
```

3. Installer Newman et Allure (si pas déjà installés globalement)

```bash
npm install -g newman
npm install -g allure-commandline
```

---

## ▶️ Exécution des tests

### Via script shell

```bash
./run-tests.sh
```

Ce script :

- Supprime les anciens résultats dans `reports/allure-results`  
- Exécute la collection Postman avec Newman en générant les résultats Allure dans `reports/allure-results`  
- Génère le rapport HTML Allure dans `reports/allure-report`  
- Ouvre automatiquement le rapport dans le navigateur  

---

### Manuellement

1. Supprimer les anciens résultats :

```bash
rm -rf allure-results allure-report
```

2. Lancer les tests Newman

```bash
npm run test
```

3. Générer le rapport Allure

```bash
allure generate ./allure-results --clean -o ./allure-report
allure open ./allure-report
```

4. Ouvrir le rapport

```bash
allure open ./allure-report
```

---

## 🧩 Configuration

- **Collection Postman** : `evershopAPI.postman_collection.json `  
  Contient toutes les requêtes API nécessaires pour tester EverShop.

- **Environnement Postman** : `url.postman_environment.json`  
  Paramètres d’URL, clés API, (ex : `{{baseUrl}}`, `{{cart_id}}`) etc.


---

## 🔧 Personnalisation

- Pour modifier les tests, ouvrez la collection dans Postman et adaptez les requêtes / assertions.  
- Pour ajouter des tests, ajoutez des requêtes dans la collection Postman avec les scripts tests.  
- Adaptez `run-tests.sh` ou les scripts npm pour correspondre à votre structure de dossier.

---

## ⚠️ Notes importantes

- Vérifiez que l’API EverShop soit accessible et que les données de test soient valides avant de lancer les tests.  

---

## 💬 Support / Contributions

Pour toute question ou contribution, merci de créer une issue ou un pull request dans ce dépôt.

---

## 📄 Licence

Ce projet est sous licence MIT.
Chafik Mouram

---

# Annexes

### Exemple de script `run-tests.sh`

```bash
#!/bin/bash

echo "Suppression des anciens résultats Allure..."
rm -rf allure-results allure-report

echo "Lancement des tests Postman avec Newman..."
npm run test 

echo "Génération du rapport Allure..."
allure generate ./allure-results --clean -o ./allure-report

echo "Ouverture du rapport Allure..."
allure open ./allure-report
```

---
