# 🌿 Blog Étudiant – Entre Main et Énergie

## 📌 Description

Ce projet est un blog dynamique réalisé en HTML, CSS et JavaScript.
Il permet d’afficher des articles à partir d’un fichier JSON, sans avoir à créer une page HTML pour chaque article.

L’utilisateur peut consulter une liste d’articles sur la page d’accueil, puis accéder au contenu complet d’un article en cliquant sur “Lire l’article”.

---

## 🚀 Fonctionnalités

* 📄 Affichage dynamique des articles depuis un fichier JSON
* 🔍 Navigation vers une page article grâce au système de **slug**
* 🧠 Chargement du contenu avec `fetch` (JavaScript)
* 📱 Design responsive (desktop + mobile)
* 🍔 Menu burger pour la navigation mobile
* 🔙 Bouton retour à l’accueil

---

## 🧩 Technologies utilisées

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* JSON (stockage des données)

---

## 📂 Structure du projet

```bash
blog-etudiant/
│
├── data/
│   └── articles.json
│
├── js/
│   └── main.js
│
├── css/
│   └── style.css
│
├── home.html
├── article.html
├── login.html
├── signup.html
```

---

## ⚙️ Fonctionnement

### 🔹 Page d’accueil

* Récupération des articles via `fetch`
* Parcours des données avec `forEach`
* Création dynamique des cartes avec le DOM

### 🔹 Navigation

Chaque bouton “Lire l’article” redirige vers :

```bash
article.html?slug=nom-de-l-article
```

---

### 🔹 Page article

* Récupération du slug avec `URLSearchParams`
* Recherche de l’article correspondant avec `.find()`
* Affichage dynamique du contenu

---

## 📱 Responsive Design

* 💻 Desktop : affichage en grille (plusieurs colonnes)
* 📱 Mobile : affichage en colonne (1 article par ligne)
* 🍔 Menu burger activé en dessous de 785px

---

## 🧠 Choix techniques

* Utilisation d’un fichier JSON pour simuler une base de données
* Séparation des données (JSON) et de l’affichage (JS)
* Utilisation du slug pour éviter de multiplier les pages HTML

---

## 🐞 Problèmes rencontrés

* Conflit entre plusieurs fonctions JavaScript
* Mauvais ciblage des éléments HTML (ID)
* Gestion du slug dans l’URL
* Responsive du menu burger

---

## ✅ Améliorations possibles

* Ajout d’images dans les articles
* Système de filtres par catégorie
* Ajout d’une base de données réelle
* Formulaire fonctionnel (connexion / inscription)

---

## 👨‍💻 Auteur

Projet réalisé par [Ton Nom]

---

## 📎 Remarque

Ce projet a été réalisé dans un cadre pédagogique pour apprendre :

* la manipulation du DOM
* la gestion des données en JavaScript
* la création d’un site responsive

---
