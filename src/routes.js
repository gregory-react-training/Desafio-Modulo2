import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import Repositories from '~/pages/Repositories';
import Issues from '~/pages/Issues';

import {colors} from '~/styles';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Repositories,
      Issues,
    },
    {
      defaultNavigationOptions: {
        headerTintColor: colors.black,
        headerBackTitle: null,
      },
    },
  ),
);

export default Routes;
