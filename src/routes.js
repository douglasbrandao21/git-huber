import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import Welcome from './pages/Welcome/Welcome'
import Repositories from './pages/Repositories/Repositories'
import Organizations from './pages/Organizations/Organizations'
import { colors } from './styles/index'

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        UserLogged: createBottomTabNavigator(
          {
            Repositories,
            Organizations
          },
          {
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              activeTintColor: colors.white,
              inactiveTintColor: colors.whiteTransparent,
              style: {
                backgroundColor: colors.secondary
              }
            }
          }
        )
      },
      {
        initialRouteName: userLogged ? 'UserLogged' : 'Welcome'
      }
    )
  )

export default Routes
