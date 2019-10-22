import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

// import TabBarIcon from '../components/TabBarIcon';
import DetailsScreen from '../screens/DetailsScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import MatchesScreen from '../screens/MatchesScreen';
import TabScreens from '../screens/TabScreens';
import MatchesTabScreens from '../screens/MatchDetailsTabNavigation';
import LiveMatchesTabScreens from '../screens/LiveMatchDetailsTabNavigation';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// const HomeStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//   },
//   config
// );

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

// HomeStack.path = '';

// const LinksStack = createStackNavigator(
//   {
//     Links: LinksScreen,
//   },
//   config
// );

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
//   ),
// };

// LinksStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: SettingsScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

// SettingsStack.path = '';

// const tabNavigator = createBottomTabNavigator({
//   HomeStack,
//   LinksStack,
//   SettingsStack,
// });

// tabNavigator.path = '';


const tabNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: DetailsScreen,
    navigationOptions: { title: 'Details' }
  },
  Link: {
    screen: StatisticsScreen,
    navigationOptions: { title: 'Statistics' }
  },
  Settings: {
    screen: MatchesScreen,
    navigationOptions: { title: 'Matches' }
  },
},
  {
    tabBarPosition: 'top',
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      pressColor: '#3BD06A',
      labelStyle: {
        fontWeight: 'bold',
        fontSize: 13,
      },
      indicatorStyle: {
        backgroundColor: '#3BD06A'
      },
      style: {
        backgroundColor: 'white'
      }
    }
  }
);

const defaultStack = createStackNavigator(
  {
    Main: tabNavigator,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#3BD06A',
        height: 240,
      },
    },
    navigationOptions: ({ navigation }) => {
      return {
        title: 'New Message',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#3BD06A',
          borderBottomColor: '#3BD06A',
          ...Platform.select({
            ios: {},
            android: {
              elevation: 1,
            },
          }),
        },
      };
    },
  }
);

defaultStack.path = '';

const MainNavigator = createStackNavigator({
  TabScreens,

}, {
  // defaultNavigationOptions: {
  //   title: "Demo"
  // }
})

export default TabScreens;
