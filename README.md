# 🎮 GameHost Manager API

API Node.js permettant de gérer une plateforme de location de serveurs de jeux vidéo.

---

## Fonctionnalités

- Gestion des serveurs de jeux
- Location de serveurs
- Annulation de location
- Dashboard de statistiques
- Health check (CPU / RAM simulés)
- Interface frontend simple (cartes + actions)

---

## Technologies utilisées

- Node.js
- Express
- JavaScript
- HTML / CSS / JS (frontend simple)

---

## Structure du projet

```
server-rental-api/
│── server.js
│── package.json
│
├── src/
│   ├── app.js
│   ├── controllers/
│   ├── routes/
│   └── data/
│
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## Lancer le projet

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur

```bash
npm run dev
```

API disponible sur :

```
http://localhost:3000
```

---

## Lancer le frontend

- Ouvrir `frontend/index.html` avec Live Server (VS Code recommandé)

---

## 📡 Routes principales

### Servers

- `GET /servers` → récupérer tous les serveurs
- `POST /servers` → créer un serveur
- `POST /servers/:id/rent` → louer un serveur
- `GET /servers/:id/health` → état du serveur (CPU / RAM simulés)

---

### Rentals

- `GET /rentals` → récupérer toutes les locations
- `PATCH /rentals/:id/cancel` → annuler une location

---

### Dashboard

- `GET /dashboard/stats` → statistiques globales

---

## Logique métier

- Un **server** représente une machine disponible à la location
- Un **rental** représente une location active ou annulée
- Le statut du serveur est synchronisé avec les locations
- Le dashboard fournit une vision globale (business + technique)

---

## Objectif du projet

Ce projet a été réalisé pour :

- démontrer des compétences en développement backend Node.js
- structurer une API REST propre (routes / controllers / data)
- implémenter une logique métier cohérente
- simuler des problématiques réelles (location, monitoring, stats)

---

## Améliorations possibles

- Ajouter une base de données (MongoDB / PostgreSQL)
- Authentification utilisateurs
- Déploiement (Docker / cloud)
- Interface frontend plus avancée

---

## Auteur

Projet réalisé dans le cadre d’un entraînement au développement backend en nodejs.
