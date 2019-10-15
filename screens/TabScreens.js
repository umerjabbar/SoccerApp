import React, { Component } from 'react';
import { Text, View , SafeAreaView, Platform, Image, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation';

import StickyTabs from '../components/StickyTabs';

import DetailsScreen from '../screens/DetailsScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import MatchesScreen from '../screens/MatchesScreen';
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
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            pressColor: '#3BD06A',
            labelStyle: {
                fontWeight: 'bold',
            },
            indicatorStyle: {
                backgroundColor: '#3BD06A'
            },
            style: {
                backgroundColor: 'white',
            },
        },
    }
);

class TabScreens extends Component {

    static router = TabNavigator.router;

    render() {
        return (

            <StickyTabs
                headerHeight={150}
                headerComponent={
                    <View style={{ backgroundColor: '#3BD06A', height: '100%', width: '100%', paddingVertical: 14, justifyContent: 'center', alignItems: 'center' }} >
                        <Image style={{height: 120, aspectRatio: 1, borderRadius: 60, backgroundColor: 'gray'}} />
                    </View>
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
                backgroundColor: '#3BD06A',
                borderBottomColor: 'rgba(0, 0, 0, 0.0)',
                ...Platform.select({
                    ios: {},
                    android: {
                        elevation: 0,
                    },
                }),
            },
            headerTitle: <Text style={{textAlignVertical: 'bottom', fontSize: 30, fontWeight: 'bold', color: 'white'}}>Soccerfy</Text>,
            headerLeft: <TouchableOpacity><Image style={{height: 30, aspectRatio: 1, backgroundColor: 'gray', marginHorizontal: 14}}/></TouchableOpacity>
        }
    }
);

export default materialTabNavigation;