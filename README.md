# Challenge

## Libraries
- react
- react-native
- react-native-dotenv
- react-native-screens
- react-native-vector-icons
- react-native-elements
- react-native-linear-gradient
- react-navigation
- react-navigation-stack
- redux
- redux-actions
- redux-thunk
- styled-components
- typescript

## Installation

- Install NPM
- Install React Native (https://facebook.github.io/react-native/docs/getting-started) and Android SDK
- Download Repository and run 
```bash
npm i
cd ios
pod install
```
- Run APP
```bash
npx react-native run-ios
```
or
```bash
npx react-native run-android
```


## Question (How to handle a big amount of data in on a List)

A quick answer would be implement VirtualizedList from React Native to handle less memory ram, and implement Pagination (with onEndReached method) so when someone get to the end of the scroll refresh with new data.
It's good to use PureComponent to avoid unnecessary renders too.

