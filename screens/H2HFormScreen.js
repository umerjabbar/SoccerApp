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

export class H2HFormScreen extends React.Component {

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
                name: `${randomKey}`,
                name2: 'Man City',
                name3: 'Livepool',
                name4: `${randomKey}`,
            })
        }
        for (let index = 0; index < 8; index++) {
            const randomKey = randomUI16();
            this.state.hosts.push({
                id: `${randomKey}`,
                name: `${randomKey}`,
                name2: 'Man City',
                name3: 'Livepool',
                name4: `${randomKey}`,
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

                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={[styles.titleLabel ,{marginRight: 4, width: 60}]}>{item.name}</Text>
                    <Text style={styles.titleLabel}>{item.name2}</Text>
                </View>
                <Text style={styles.titleLabel}>{item.name3}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.titleLabel}>{item.name4}</Text>
                    <View style={{ backgroundColor: ThemeBackgroundColor.variant_green, justifyContent: 'center', alignItems: 'center', margin: 4, aspectRatio: 1, height: 16 }}>
                        <Text style={{ color: 'white' }}>w</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    _renderSectionHeader = ({ section }) => {
        return (
            <View style={styles.stylishTitleBar}>
                <Text style={[styles.stylishText, { color: 'black' }]}>{section.title}</Text>
            </View>
        );
    };

    _renderSectionFooter = ({ section }) => {
        return (
            <View style={[styles.stylishTitleBar, styles.sectionFooter]}>
                <Text style={[styles.stylishText, { color: 'gray' }]}>  Show more  </Text>
                <Image style={{ backgroundColor: 'gray', height: 15, aspectRatio: 1 }} />
            </View>
        );
    };

    render() {
        return (
            <StickyScroll {...this.props} style={[styles.container]}>

                <SectionList
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader}
                    renderSectionFooter={this._renderSectionFooter}
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

    onSelectionButton (text){
        this.setState({selectedButton: text })
        console.log(`${text}`)
    }

    renderSelectionButton(text){
        return (
            <TouchableOpacity onPress={() => this.onSelectionButton(text)}>
                <Text style={[styles.selectionButton, {color: (this.selectedButton === text) ? 'black' : 'gray'}]}>{text}</Text>
            </TouchableOpacity>
        );
    }

    renderVerticalSeparator(){
        return(
            <View style={{width: 1, height : '30%', backgroundColor: 'darkgray'}} />
        );
    }

    renderHeader = () => {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 4 }}>
                {this.renderSelectionButton('ALL')}
                {this.renderVerticalSeparator()}
                {this.renderSelectionButton('HOME')}
                {this.renderVerticalSeparator()}
                {this.renderSelectionButton('AWAY')}
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
                elevation: 2,
            },
        }),
    },
    stylishText: { fontSize: 17, fontWeight: '600', },
    sectionFooter: { flexDirection: 'row', backgroundColor: 'transparent', borderTopColor: '#CED0CE', borderTopWidth: 1 },
    titleLabel: { fontSize: 15, fontWeight: '500', marginBottom: 0 },
    selectionButton: { fontSize: 16, fontWeight: '600', margin: 8 },
});
