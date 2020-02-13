import {createStackNavigator} from 'react-navigation-stack';
import {Home, FetchDrink} from '../screens';

const noHeader = {header: null};

const stack = {
  Home: {
    screen: Home,
    navigationOptions: noHeader,
  },
  FetchDrink: {
    screen: FetchDrink,
    navigationOptions: noHeader,
  },
};

export const MainStack = createStackNavigator(stack);
export type MainRoutes = keyof typeof stack;
