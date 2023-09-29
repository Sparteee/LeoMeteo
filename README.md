# LeoMeteo

## Description du projet

Petite application météo qui permet de récupérer la météo de la ville de La Rochelle et d'envoyer un SMS avec la température actuelle et le temps qu'il fait. Cette application utilise Twilio pour envoyer le SMS.

## Objectif du projet

L'objectif de ce projet est de découvrir l'utilisation d'un module npm pour envoyer des SMS et de découvrir l'utilisation de l'API OpenWeatherMap.

## Améliorations possibles

Le projet n'est pas terminé, il est possible d'ajouter des fonctionnalités comme :

- [ ] Ajouter la possibilité de choisir la ville
- [ ] Ajouter la possibilité de choisir l'heure d'envoi du SMS
- [ ] Ajouter la possibilité de choisir la fréquence d'envoi du SMS
- [ ] Mettre en place l'application sur un serveur avec un cron pour envoyer le SMS automatiquement à une heure précise 

## Installation

Pour installer le projet, il faut cloner le projet sur votre machine :

```bash
git clone https://github.com/Sparteee/LeoMeteo.git
```

Ensuite, il faut installer les dépendances du projet via npm :

```bash
npm install
```

## Utilisation

Pour utiliser le projet, il faut que vous ayez un compte Twilio et que vous ayez un numéro de téléphone vérifié. Il faut également que vous ayez un compte OpenWeatherMap et que vous ayez une clé d'API.

Ensuite il faut renseigner tous les éléments demandés dans le fichier config.json présent dans le projet.

```json
{
  "NUM_TWILIO" : "YOUR_TWILIO_NUMBER",
  "YOUR_NUM" : "YOUR_NUMBER",
  "API_KEY_WEATHER" : "YOUR_API_KEY",
  "ACCOUNT_ID_TWILIO" : "YOUR_ACCOUNT_ID",
  "AUTH" : "YOUR_AUTH"
}
```

Et pour finir, il faut lancer le projet via la commande :

```bash
node .
```

## Auteur

Ce projet a été réalisé par moi-même