# Guide Pratique React Native et Expo - Composants Fondamentaux et Mise en Page Mobile

Projet pedagogique complet dedie a l'apprentissage des bases du developpement mobile avec React Native et l'ecosysteme Expo SDK 53, articule autour des composants fondamentaux (Core Components), des interactions tactiles et du systeme de mise en page Flexbox.

L'objectif est d'illustrer de maniere concrète comment ecrire une seule base de code en JavaScript / React pour produire des interfaces natives fluides a la fois sur iOS et Android.

## Principes Cles de React Native

React Native permet de developper des applications mobiles en utilisant la syntaxe declarative de React. Contrairement aux approches hybrides basees sur des WebViews, les composants React Native sont traduits a l'execution en veritables elements d'interface utilisateur natifs (UIKit sur iOS et Android View sur Android).

L'environnement de developpement repose sur Expo, simplifiant le cycle de vie du projet, les outils de build et le test en direct sur terminal reel via Expo Go.

## Composants Fondamentaux (Core Components)

Le projet explore et met en oeuvre les briques materielles incontournables :

### 1. Structure et Rendu Visuel
- View : Conteneur universel de mise en page, supportant le positionnement Flexbox, les bordures et les espacements.
- Text : Composant obligatoire pour afficher des chaines de caracteres (en React Native, une chaine ne peut pas exister hors d'un element `<Text>`).
- Image et ImageBackground :
  - Affichage de visuels locaux integres via `require('./assets/...')` ou de ressources distantes via `{ uri: '...' }`.
  - Controle du dimensionnement et du mode d'ajustement (`resizeMode="contain"`).
  - Utilisation de `ImageBackground` pour superposer du texte ou d'autres widgets au-dessus d'un arriere-plan image.
- ScrollView : Conteneur a defilement fluide vertical ou horizontal pour les contenus depassant la hauteur de l'ecran, utilisant la propriete `contentContainerStyle` pour gerer ses marges internes.

### 2. Interactions Tactiles et Retours Utilisateur
- Button : Bouton standard natif pre-style adapte aux actions rapides simples.
- Pressable : Composant de capture tactile moderne et polyvalent, permettant d'adapter dynamiquement le style lors de l'appui de l'utilisateur grace a la fonction d'etat `style={({ pressed }) => [...]}`.
- Modal : Fenetre en superposition native pour afficher des vues secondaires ou des formulaires, avec gestion de l'animation de transition (`animationType="slide"`) et fermeture controlee (`onRequestClose`).
- ActivityIndicator : Indicateur de chargement circulaire natif parametrable en taille (`large`, `small`) et en couleur.
- Alert : Declenchement de boites de dialogue d'alerte et de confirmation systeme natives (`Alert.alert()`) avec gestion des boutons d'annulation et de validation.
- StatusBar : Personnalisation de la barre d'etat du telephone (couleur de fond sur Android et style d'icones `light-content` ou `dark-content`).

### 3. Mise en Page Flexbox et Feuille de Style (StyleSheet)
- Moteur Flexbox en React Native :
  - Orientation par defaut : en React Native, `flexDirection` est egal a `column` par defaut (alors qu'il vaut `row` sur le Web).
  - Proprietes de distribution : `justifyContent`, `alignItems`, `flexWrap`, `alignSelf` et `flex: 1` pour occuper l'espace disponible.
- Gestion des ombres multiplateformes :
  - Sous iOS : utilisation combinee de `shadowColor`, `shadowOffset`, `shadowOpacity` et `shadowRadius`.
  - Sous Android : utilisation de la propriete native d'elevation `elevation: 8` pour projeter une ombre materielle conforme a Material Design.
- Optimisation avec `StyleSheet.create` : separation des regles de style pour une meilleure lisibilite et validation a la compilation grace a des identifiants numeriques optimises.

## Organisation des Sources

- `App.js` : Point d'entree principal orchestrant le defilement, la barre d'etat, les bannières images et l'ouverture des modales.
- `component/Modal.js` : Composant modal didactique integrant un loader `ActivityIndicator`, un message d'accueil et des dialogues `Alert`.
- `component/Style.js` : Demonstration de la combinaison de styles, bordures pointillees et ombres iOS/Android.
- `component/FlexBox.js` : Demonstration visuelle des alignements Flexbox multi-boites.
- `component/Box.js` : Composant graphique elementaire reutilisable pour les tests de mise en page.
- `component/Greet.js` : Composant fonctionnel illustrant le passage de proprietes (props).
- `package.json` : Configuration des dependances Expo 53 et React Native 0.79.

## Prerequis et Demarrage Local

### Prerequis

- Node.js (version 18 ou superieure recommandee)
- Gestionnaire de paquets npm ou yarn
- L'application mobile Expo Go installee sur votre smartphone (disponible sur Google Play Store et Apple App Store)

### Etapes d'Installation

1. Cloner le depot :

```bash
git clone https://github.com/maximedefaleouna/react-native-course.git
cd react-native-course
```

2. Installer les modules du projet :

```bash
npm install
```

3. Demarrer le serveur de developpement Expo :

```bash
npx expo start
```

4. Visualiser l'application :
- Sur smartphone reel : Scannez le QR Code affiche dans votre terminal a l'aide de l'application Expo Go.
- Sur emulateur Android : Appuyez sur la touche `a` dans le terminal.
- Sur simulateur iOS (macOS requis) : Appuyez sur la touche `i` dans le terminal.
- Sur navigateur Web : Appuyez sur la touche `w` dans le terminal.

## Auteur

- Concepteur : Maxime DEFALEOUNA ([@maximedefaleouna](https://github.com/maximedefaleouna))

## Licence

Ce projet est distribue sous licence MIT. Libre a vous de l'utiliser a des fins pedagogiques pour vos premiers pas dans le developpement mobile avec React Native.
