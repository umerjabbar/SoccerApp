import React, { useState } from 'react';
import {
    FlatList,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import StickyScroll from '../components/StickyScroll';
import { ThemeBackgroundColor, ThemeFontColor } from '../constants/Constant';

import { randomUI16 } from 'uuid-js';

export class ODDSScreen extends React.Component {

    constructor(props) {
        super(props)
        this.items = [
            {
                title: "Double Chance",
                items: [
                    {
                        title: "1X",
                        value: 1.03,
                        trending: 0
                    },
                    {
                        title: "2X",
                        value: 3.75,
                        trending: 1
                    },
                    {
                        title: "12",
                        value: 1.11,
                        trending: 0
                    },
                ]
            },
            {
                title: "1st Half",
                items: [
                    {
                        title: "1",
                        value: 1.66,
                        trending: 0
                    },
                    {
                        title: "X",
                        value: 2.50,
                        trending: 1
                    },
                    {
                        title: "2",
                        value: 10.00,
                        trending: 0
                    },
                ]
            },
            {
                title: "Draw no bet",
                items: [
                    {
                        title: "1",
                        value: 1.66,
                        trending: 0
                    },
                    {
                        title: "2",
                        value: 10.00,
                        trending: 1
                    },
                ]
            },
            {
                title: "Both team to score",
                items: [
                    {
                        title: "Yes",
                        value: 2.75,
                    },
                    {
                        title: "No",
                        value: 1.40,
                    },
                ]
            },
            {
                title: "First team to score",
                items: [
                    {
                        title: "Man United",
                        value: 1.66,
                    },
                    {
                        title: "No Goal",
                        value: 12.00,
                        trending: 1
                    },
                    {
                        title: "Brighton",
                        value: 6.00,
                        trending: 0
                    },
                ]
            },
            {
                title: "Match Goals",
                items: [
                    {
                        title: "Man United",
                        value: 0.5,
                    },
                    {
                        title: "No Goal",
                        value: 1.05,
                        trending: 0
                    },
                    {
                        title: "Brighton",
                        value: 12.00,
                        trending: 1
                    },
                ]
            },
        ]
    }

    _renderBlockContent(item) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Text style={{ fontSize: 11, color: ThemeFontColor.inactive, fontWeight: '500' }}>{item.title}</Text>
                <View style={styles.whitebar}>
                    {(item.trending !== undefined) && <Image style={{ height: 10, aspectRatio: 1, backgroundColor: 'gray', marginRight: 4 }} />}
                    <Text>{item.value}</Text>
                </View>
            </View>
        )
    }

    _renderBlock2X(item) {
        return (
            <View style={{ width: '49.7%' }} key={randomUI16()}>
                {this._renderBlockContent(item)}
            </View>
        );
    }

    _renderBlock3X(item) {
        return (
            <View style={{ width: '33%' }} key={randomUI16()}>
                {this._renderBlockContent(item)}
            </View>
        );
    }

    _renderBlock4X(item) {
        return (
            <View style={{ width: '24.7%' }} key={randomUI16()}>
                {this._renderBlockContent(item)}
            </View>
        );
    }

    _renderItem({ item }) {

        const items = item.items.map((value) => {
            if (item.items.length === 2) {
                return this._renderBlock2X(value)
            } else if (item.items.length === 3) {
                return this._renderBlock3X(value)
            } else if (item.items.length === 4) {
                return this._renderBlock4X(value)
            }
        });

        return (
            <View>
                <Text style={{textAlign: 'center', fontWeight: '500'}}>{item.title}</Text>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginVertical: 4 }}>
                    {items}
                </View>
            </View>
        );
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    marginVertical: 6, 
                    width: "90%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "6%"
                }}
            />
        );
    };

    render() {
        return (
            <StickyScroll {...this.props} style={[styles.container]}>

                <FlatList
                    ref={(flatList) => { this.flatList = flatList }}
                    data={this.items}
                    renderItem={(rowData) => this._renderItem(rowData)}
                    keyExtractor={(item, index) => `${index}`}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListFooterComponent={<View style={{ height: 60 }}></View>}
                // horizontal={true}
                // alwaysBounceHorizontal={false}
                />

            </StickyScroll>
        );
    }


}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F1F4FB', padding: 20 },
    whitebar: {
        width: '100%',
        flexDirection: 'row',
        marginVertical: 4,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 4,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.05,
                shadowRadius: 2.0,
            },
            android: {
                elevation: 2,
            },
        })
    }

});
