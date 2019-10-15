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
            attendees: ([]),
            hosts: ([]),
            selectedButton: 'ALL'
        };
        this.makeSections();
    }

    makeSections() {
        for (let index = 0; index < 8; index++) {
            const randomKey = randomUI16();
            this.state.attendees.push({
                id: `${randomKey}`,
                name: 'Corner kicks',
                score1: '11',
                score2: '2',
            })
        }
        for (let index = 0; index < 8; index++) {
            const randomKey = randomUI16();
            this.state.hosts.push({
                id: `${randomKey}`,
                name: 'Total shots',
                score1: '15',
                score2: '12',
            })
        }
        this.sections = [
            { data: this.state.hosts, title: 'Last Matches: Man City' },
            { data: this.state.attendees, title: 'Last Matches: Brighton' },
        ]
    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={this._onPress} activeOpacity={0.8} style={styles.sectionContentContainer}>

                <Text style={styles.titleLabel}>{item.score1}</Text>
                <Text style={styles.titleLabel}>{item.name}</Text>
                <Text style={styles.titleLabel}>{item.score2}</Text>

            </TouchableOpacity>
        );
    };

    _renderSectionHeader = ({ section }) => {
        return (
            <View style={{height: 12}}>
                
            </View>
        );
    };

    render() {
        return (
            <StickyScroll {...this.props} style={[styles.container]}>

                <SectionList
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader}
                    stickySectionHeadersEnabled={true}
                    keyExtractor={(item, index) => item.id}
                    sections={this.sections}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={<View style={{ height: 40 }}></View>}
                />
            </StickyScroll>
        );
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "90%",
                    backgroundColor: "#CED0CE",
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
    titleLabel: { fontSize: 15, fontWeight: '500', marginBottom: 0 },
    selectionButton: { fontSize: 16, fontWeight: '600', margin: 8 },
});
