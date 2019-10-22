import React, { Component } from 'react';
import { Text, View, SafeAreaView, Platform, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import StickyTabs from '../components/StickyTabs';
import { ForecastScreen } from './ForecastScreen';
import { H2HFormScreen } from './H2HFormScreen';
import { NewsScreen } from './NewsScreen';
import { PreMatchDetailsTopBar } from '../components/PreMatchDetailsTopBar';
import { ThemeBackgroundColor, ThemeFontColor, RNHeight, DividerColor, deviceWidth, RNWidth } from '../constants/Constant';
import { StatsScreen } from './StatsScreen';
import { PreviewScreen } from './PreviewScreen';
import { ODDSScreen } from './ODDSScreen';
import { LineupScreen } from './LineupScreen';
import { LiveMatchDetailsTopBar } from '../components/LiveMatchDetailsTopBar';


const TabNavigator = createMaterialTopTabNavigator(
    {
        Summary: {
            screen: ForecastScreen,
        },
        Stats: {
            screen: StatsScreen,
        },
        'H2H Form': {
            screen: H2HFormScreen,
        },
        ODDS: {
            screen: ODDSScreen
        },
        Lineups: {
            screen: LineupScreen,
        },
        News: {
            screen: NewsScreen,
        },
    },
    {
        tabBarPosition: 'top',
        tabBarOptions: {
            // showIcon: true,
            scrollEnabled: true,
            upperCaseLabel: false,
            activeTintColor: ThemeFontColor.active,
            inactiveTintColor: ThemeFontColor.inactive,
            tabStyle: {
                width: deviceWidth / 4, 
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
                width: deviceWidth / 4, 
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
                headerHeight={218}
                headerComponent={
                    <LiveMatchDetailsTopBar />
                }
                contentComponent={<TabNavigator navigation={this.props.navigation} />}
            />
        );
    }

}

const materialTabNavigation = createStackNavigator(
    {
        Main: TabScreens,
    },
    {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: 'white',
                borderBottomColor: 'rgba(0, 0, 0, 0.0)',
                ...Platform.select({
                    ios: {
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.1,
                        shadowRadius: 6.0,
                    },
                    android: {
                        elevation: 4,
                    },
                }),
            },
            headerTitle: <Text style={{ textAlignVertical: 'bottom', fontSize: 30, fontWeight: 'bold', color: ThemeBackgroundColor.variant_green }}>Soccerfy</Text>,
            headerLeft: <TouchableOpacity><Image style={{ height: 30, aspectRatio: 1, backgroundColor: 'gray', marginHorizontal: 14 }} /></TouchableOpacity>
        }
    }
);

export default materialTabNavigation;