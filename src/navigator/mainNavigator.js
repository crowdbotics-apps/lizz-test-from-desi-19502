import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen290456Navigator from '../features/BlankScreen290456/navigator';
import BlankScreen190244Navigator from '../features/BlankScreen190244/navigator';
import BlankScreen089751Navigator from '../features/BlankScreen089751/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen290456: { screen: BlankScreen290456Navigator },
BlankScreen190244: { screen: BlankScreen190244Navigator },
BlankScreen089751: { screen: BlankScreen089751Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
