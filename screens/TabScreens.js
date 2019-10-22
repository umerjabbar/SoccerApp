import React, { Component } from 'react';
import { Text, View, SafeAreaView, Platform, Image, TouchableOpacity, } from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import StickyTabs from '../components/StickyTabs';

import DetailsScreen from '../screens/DetailsScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import MatchesScreen from '../screens/MatchesScreen';
import { ThemeBackgroundColor, ThemeFontColor, RNHeight, DividerColor, deviceWidth, RNWidth } from '../constants/Constant';
import { PlayerTopBar } from '../components/PlayerTopBar';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const TabNavigator = createMaterialTopTabNavigator(
    {
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
            // showIcon: true,
            // scrollEnabled: true,
            upperCaseLabel: false,
            activeTintColor: ThemeFontColor.active,
            inactiveTintColor: ThemeFontColor.inactive,
            tabStyle: {
                //     width: deviceWidth / 4,
                padding: 3,
                height: 30 * RNHeight,
                borderRightColor: DividerColor,
                borderRightWidth: 1,
                marginVertical: 5
            },
            style: {
                backgroundColor: ThemeBackgroundColor.variant_white
            },
            labelStyle: {
                fontSize: 13,
                fontWeight: '600',
                padding: 0,
                textAlign: 'left'
            },
            indicatorStyle: {
                // width: deviceWidth / 4,
                backgroundColor: ThemeBackgroundColor.variant_green
            },
        },
    }
);

class TabScreens extends Component {

    static router = TabNavigator.router;

    render() {
        return (

            <StickyTabs
                headerHeight={190}
                headerComponent= {<PlayerTopBar navigation={this.props.navigation}/>}
                contentComponent={<TabNavigator navigation={this.props.navigation} />}
            />
        );
    }
}

class PlayerHeader extends Component {

    render() {
        return (
            <SafeAreaView
                style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}
            >
                <Image
                    style={{ height: '80%', resizeMode: 'contain' }}
                    source={require('../assets/images/animation-logo.png')} />
            </SafeAreaView>
        );
    }

}

const materialTabNavigation = createStackNavigator(
    {
        Main: TabScreens,
    },
    {
        headerLayoutPreset: 'center',
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#3BD06A',
                borderBottomColor: 'rgba(0, 0, 0, 0.0)',
                ...Platform.select({
                    ios: {},
                    android: {
                        elevation: 0,
                    },
                }),
            },
            headerTitle: <PlayerHeader />,
            headerLeft: <TouchableOpacity onPress={() => { }} ><Image style={{ height: 30, aspectRatio: 1, marginHorizontal: 14 }} source={require('../assets/images/back.png')} /></TouchableOpacity>
        }
    }
);

export default materialTabNavigation;