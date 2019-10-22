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
import { ThemeBackgroundColor, ThemeFontColor, deviceHeight } from '../constants/Constant';

import { randomUI16 } from 'uuid-js';


export class LineupScreen extends React.Component {

    constructor(props) {
        super(props)
        this.upperitems = [
            [
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "Clodio Bravo",
                },
            ],
            [
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "John Stones",
                },
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "Kyle Walker",
                },
            ],
            [
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "Kyle Walker",
                },
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "John Stones",
                },
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "Kyle Walker",
                },
            ],
            [
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "John Stones",
                },
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "Kyle Walker",
                },
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "John Stones",
                },
            ],
        ]
        this.loweritems = [
            [
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "Clodio Bravo",
                },
            ],
            [
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "Kyle Walker",
                },
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "John Stones",
                },
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "Kyle Walker",
                },
            ],
            [
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "John Stones",
                },
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "Kyle Walker",
                },
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "John Stones",
                },
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "Kyle Walker",
                },
                
            ],
            [
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "Kyle Walker",
                },
                {
                    image: "https://qph.fs.quoracdn.net/main-qimg-8c5ea2930025b21f9a394cf0a3b95759",
                    name: "John Stones",
                },

            ],
        ]
    }

    renderItem(item) {
        return (
            <View key={randomUI16()} style={styles.item} >
                <Image style={styles.itemImage} source={{ uri: item.image || '' }} />
                <Text style={styles.itemText}>{item.name || 'Not Available'}</Text>
            </View>
        );
    }

    renderHeaderFooter(name, array) {
        const string = array.map((value) => {
            console.log(value)
            return value.length + '-'
        })
        return (
            <View style={styles.sectionHeader}>
                <Text style={styles.headerText} >{name}</Text>
                <Text style={styles.headerText} >{string}</Text>
            </View>
        );
    }

    render() {

        return (
            <StickyScroll {...this.props} style={[styles.container]}>

                <View style={styles.subContainer}>

                    <Image style={styles.backgroundImage} source={{uri: 'https://cdn.pixabay.com/photo/2013/07/12/15/41/football-ground-150320_960_720.png'}} />

                    <View key={randomUI16()} style={styles.sectionStyle}>
                        {this.renderHeaderFooter('WALES', this.upperitems)}
                        {
                            this.upperitems.map((value) => {
                                return (
                                    <View key={randomUI16()} style={styles.rowStyle}>
                                        {value.map((val) => {
                                            return (
                                                this.renderItem(val)
                                            );
                                        })}
                                    </View>
                                );
                            })
                        }
                    </View>

                    <View key={randomUI16()} style={[styles.sectionStyle, {flexDirection: 'column-reverse'}]}>
                        {this.renderHeaderFooter('OTHER', this.loweritems)}
                        {
                            this.loweritems.map((value) => {
                                return (
                                    <View key={randomUI16()} style={styles.rowStyle}>
                                        {value.map((val) => {
                                            return (
                                                this.renderItem(val)
                                            );
                                        })}
                                    </View>
                                );
                            })
                        }
                    </View>

                </View>

            </StickyScroll>
        );
    }


}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F1F4FB' },

    item: { justifyContent: 'center', alignItems: 'center' },
    itemImage: { height: 30, aspectRatio: 1, backgroundColor: 'gray', borderRadius: 15, margin: 2, justifyContent: 'center', alignItems: 'center' },
    itemText: { fontSize: 11 },

    sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', padding: 4 },
    headerText: { fontSize: 15, fontWeight: '500' },

    subContainer: { width: '100%', height: deviceHeight * 0.9 },

    backgroundImage: { position: 'absolute', height: '100%', left: -80, right: -80, opacity: 0.1, resizeMode: 'contain', overflow: 'visible', transform: [{ rotate: '90deg'}] },

    sectionStyle: { flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '50%', padding: 20 },

    rowStyle: { flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '100%' },

});
