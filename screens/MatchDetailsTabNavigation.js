import React, { Component } from 'react';
import { Text, View, SafeAreaView, Platform, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import StickyTabs from '../components/StickyTabs';
import { ForecastScreen } from './ForecastScreen';
import { H2HFormScreen } from './H2HFormScreen';
import { NewsScreen } from './NewsScreen';
import { PreMatchDetailsTopBar } from '../components/MatchDetailsTopBar';
import { ThemeBackgroundColor, ThemeFontColor, RNHeight, DividerColor, deviceWidth, RNWidth } from '../constants/Constant';
import { StatsScreen } from './StatsScreen';
import { PreviewScreen } from './PreviewScreen';
import { ODDSScreen } from './ODDSScreen';


const TabNavigator = createMaterialTopTabNavigator(
    {
        Forecast: {
            screen: ForecastScreen,
        },
        'H2H Form': {
            screen: H2HFormScreen,
        },
        ODDS: {
            screen: ODDSScreen
        },
        News: {
            screen: NewsScreen,
        },
        Stats: {
            screen: StatsScreen,
        },
        Preview: {
            screen: PreviewScreen,
        }
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
            // activeTintColor: 'black',
            // inactiveTintColor: 'gray',
            // pressColor: '#3BD06A',
            // labelStyle: {
            //     fontWeight: 'bold',
            // },
            // indicatorStyle: {
            //     backgroundColor: '#3BD06A'
            // },
            // style: {
            //     backgroundColor: 'white',
            // },
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
                    <PreMatchDetailsTopBar />
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