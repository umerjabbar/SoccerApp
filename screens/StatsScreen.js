import React, { useState } from 'react';
import {
    FlatList,
    Dimensions,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    SectionList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { randomUI16 } from 'uuid-js';

import StickyScroll from '../components/StickyScroll';
import { ThemeBackgroundColor } from '../constants/Constant';

export class StatsScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedButton: 'ALL'
        };
        this.sections = [
            {
                title: '',
                data: [
                    {
                        name: 'Ball possessions',
                        score1: 57,
                        score2: 43,
                        unit: '%'
                    }
                ],
            },
            {
                title: '',
                data: [
                    {
                        name: 'Total shots',
                        score1: 15,
                        score2: 12,
                        unit: ''
                    },
                    {
                        name: 'Shots on target',
                        score1: 7,
                        score2: 5,
                        unit: ''
                    },
                    {
                        name: 'Shots off target',
                        score1: 5,
                        score2: 5,
                        unit: ''
                    },
                    {
                        name: 'Blocked shots',
                        score1: 3,
                        score2: 2,
                        unit: ''
                    },
                    {
                        name: 'Total shots',
                        score1: 15,
                        score2: 12,
                        unit: ''
                    },
                    {
                        name: 'Total shots',
                        score1: 15,
                        score2: 12,
                        unit: ''
                    },
                ],
            },
            {
                title: '',
                data: [
                    {
                        name: 'Corner kicks',
                        score1: 11,
                        score2: 2,
                        unit: ''
                    },
                    {
                        name: 'Offsides',
                        score1: 0,
                        score2: 5,
                        unit: ''
                    },
                    {
                        name: 'Fouls',
                        score1: 9,
                        score2: 9,
                        unit: ''
                    },
                    {
                        name: 'Yellow cards',
                        score1: 0,
                        score2: 2,
                        unit: ''
                    },
                    {
                        name: 'Blocked shots',
                        score1: 3,
                        score2: 2,
                        unit: ''
                    },
                ],
            }
        ]
    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={this._onPress} activeOpacity={0.8} style={styles.sectionContentContainer}>

                {(item.score1 >= item.score2) &&
                    <Text style={styles.greenScoreLabel}>{item.score1 + item.unit}</Text>
                }

                {(item.score1 < item.score2) &&
                    <Text style={styles.scoreLabel}>{item.score1 + item.unit}</Text>
                }
                <Text style={styles.titleLabel}>{item.name}</Text>

                {(item.score2 >= item.score1) &&
                    <Text style={styles.greenScoreLabel}>{item.score2 + item.unit}</Text>
                }
                {(item.score2 < item.score1) &&
                    <Text style={styles.scoreLabel}>{item.score2 + item.unit}</Text>
                }

            </TouchableOpacity>
        );
    };

    _renderSectionHeader = ({ section }) => {
        return (
            <View style={{ height: 12 }}>

            </View>
        );
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "90%",
                    backgroundColor: "#CED0CE",
                    opacity: 0.5,
                    marginLeft: "6%"
                }}
            />
        );
    };

    onSelectionButton(text) {
        this.setState({ selectedButton: text })
        console.log(`${text}`)
    }

    renderSelectionButton(text) {
        return (
            <TouchableOpacity onPress={() => this.onSelectionButton(text)}>
                <Text style={[styles.selectionButton, { color: (this.selectedButton === text) ? 'black' : 'gray' }]}>{text}</Text>
            </TouchableOpacity>
        );
    }

    renderVerticalSeparator() {
        return (
            <View style={{ width: 1, height: '30%', backgroundColor: 'darkgray' }} />
        );
    }

    renderHeader = () => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 4 }}>
                {this.renderSelectionButton('ALL')}
                {this.renderVerticalSeparator()}
                {this.renderSelectionButton('1ST')}
                {this.renderVerticalSeparator()}
                {this.renderSelectionButton('2ND')}
            </View>
        );
    }


    render() {
        return (
            <StickyScroll {...this.props} style={[styles.container]}>

                <SectionList
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader}
                    stickySectionHeadersEnabled={true}
                    keyExtractor={(item, index) => `${index}`}
                    sections={this.sections}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={<View style={{ height: 40 }}></View>}
                />
            </StickyScroll>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F4FB',
    },
    sectionContentContainer: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        // backgroundColor: 'white'
    },
    stylishTitleBar: {
        width: '100%',
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.1,
                shadowRadius: 6.0,
            },
            android: {
                elevation: 6,
            },
        }),
    },
    stylishText: { fontSize: 17, fontWeight: '600', },
    sectionFooter: { flexDirection: 'row', backgroundColor: 'transparent', borderTopColor: '#CED0CE', borderTopWidth: 1 },
    titleLabel: { fontSize: 15, fontWeight: '400', marginBottom: 0 },

    scoreLabel: { fontSize: 15, fontWeight: '500' },
    greenScoreLabel: { fontSize: 15, fontWeight: '500', color: ThemeBackgroundColor.variant_green },

    selectionButton: { fontSize: 16, fontWeight: '600', margin: 8 },
});
