# Pokémon Battle Arena

Bienvenue dans **Pokémon Battle Arena**, un jeu web interactif où vous pouvez construire votre propre équipe de Pokémon et les faire combattre dans une arène virtuelle. Ce projet est développé avec React et utilise l'API Pokémon pour récupérer des données en temps réel sur les Pokémon de la première génération.

## Fonctionnalités

- **Landing Page** : Une page d'accueil accueillante avec le logo Pokémon où vous pouvez commencer votre aventure.
- **Team Builder** : Une interface intuitive pour sélectionner et organiser votre équipe de Pokémon à partir des 151 Pokémon de la première génération.
- **Battle Arena** : Une arène où vous pouvez faire combattre vos Pokémon contre des adversaires aléatoires ou choisis.

## Aperçu du Jeu

1. **Landing Page** :
   - Lorsque vous arrivez sur la page d'accueil, vous êtes accueilli par le logo Pokémon et une option pour commencer à construire votre équipe.

2. **Team Builder** :
   - Dans cette section, vous pouvez sélectionner jusqu'à 6 Pokémon pour former votre équipe.
   - Chaque Pokémon est affiché avec son image, ses types, ses points de vie (PV) et ses compétences.
   - Vous pouvez ajouter des Pokémon à votre équipe en cliquant sur le bouton **Ajouter** ou les retirer de votre équipe.

3. **Battle Arena** :
   - Une fois votre équipe prête, vous pouvez sélectionner un Pokémon de votre équipe et un Pokémon adverse pour lancer un combat.
   - Le combat est simulé en comparant les PV des Pokémon sélectionnés, et le résultat du combat est affiché à l'écran.

## Installation

### Prérequis

- Node.js et npm doivent être installés sur votre machine.

### Étapes d'installation

1. Clonez ce dépôt sur votre machine locale :

   ```bash
   git clone https://github.com/votre-utilisateur/pokemon-battle-arena.git


## Schéma d'Architecture Backend
[ Client (React App) ]
      |
      |---(1)--- [ Landing Page ]
      |            - Affichage du logo
      |            - Option pour commencer
      |
      |---(2)--- [ Team Builder ]
      |            - Sélection et organisation de Pokémon
      |            - Affichage des détails des Pokémon
      |
      |---(3)--- [ Battle Arena ]
                   - Sélection des Pokémon pour combat
                   - Affichage des résultats du combat
      |
      v
[ API Pokémon ] <---> [ External Pokémon Data ]
      |
      |---(4)--- [ Pokémon Data Retrieval ]
                   - Requêtes API pour obtenir les données des Pokémon
