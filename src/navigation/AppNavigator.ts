import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import { MainStack, MainRoutes } from './MainNavigation';

const AppStack = createAnimatedSwitchNavigator(
  {
    Main: MainStack,
  },
  { initialRouteName: 'Main' },
);

// @ts-ignore
export default createAppContainer(AppStack);

export type Routes = MainRoutes;
