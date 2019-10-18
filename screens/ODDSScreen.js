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

export class ODDSScreen extends React.Component {

    constructor(props) {
        super(props)
        this.items = [
            {
                title : "Double Chance",
                items : [
                    {
                        
                    }
                ]
            }
        ]
    }

    renderLogoAndScore(image, score) {
        return (
            <View style={{ alignItems: 'center' }}>
                <Image style={styles.logoStyle} uri={image} />
                <Text style={styles.fontStyle}>{score}</Text>
            </View>
        );
    }

    renderUpperPart() {
        return (
            <View style={styles.upperView}>
                <Text style={styles.OODSText}>ODDS</Text>
                <View style={styles.OODSScore}>

                    {this.renderLogoAndScore('', 1.25)}

                    {this.renderLogoAndScore('', 5.5)}

                    {this.renderLogoAndScore('', 12.5)}

                </View>
            </View>
        );
    }

    renderStylishTitleBar() {
        return (
            <View style={styles.stylishTitleBar}>
                <Text style={[styles.stylishText, { color: ThemeBackgroundColor.variant_green }]}>Soccerfy <Text style={[styles.stylishText, { color: 'black' }]}>Match Forecast</Text></Text>
            </View>
        );
    }

    renderCenteredText() {
        return (
            <Text style={styles.centeredText}>
                This is expected to be a comfortable HOMEWIN with a 80% chance of a home win.
                This is expected to be a comfortable HOMEWIN with a 80% chance of a home win.
                This is expected to be a comfortable HOMEWIN with a 80% chance of a home win.
            </Text>
        );
    }


    renderTeamChances(image, text, chance) {
        return (
            <View style={styles.chancesContainer}>
                <Image style={styles.scoreTeamImage} uri={image} />
                <Text style={{ fontSize: 18 }}>{text}</Text>
                <Image style={styles.scoreTeamImage} uri={image} />
                <Text style={{ fontSize: 18 }}>({chance}% Chances)</Text>
            </View>
        );
    }

    renderChancesView() {
        return (
            <View style={{ alignItems: 'stretch' }}>
                {this.renderTeamChances('', 'Home 2-0 Away', 10)}
                {this.renderTeamChances('', 'Home 3-0 Away', 10)}
            </View>
        );
    }

    _renderBlockContent(item) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Text style={{ fontSize: 11, color: ThemeFontColor.inactive, fontWeight: '500' }}>1X</Text>
                <View style={styles.whitebar}>
                    <Image style={{ height: 10, aspectRatio: 1, backgroundColor: 'gray', marginRight: 4 }} />
                    <Text>1.03</Text>
                </View>
            </View>
        )
    }

    _renderBlock2X({ item }) {
        return (
           <View style={{width: '49%'}}>
               {this._renderBlockContent(item)}
           </View>
        );
    }

    _renderBlock3X({ item }) {
        return (
            <View style={{width: '33%'}}>
               {this._renderBlockContent(item)}
           </View>
        );
    }



    _renderItem({ item }) {
        return (
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                
                {this._renderBlock3X(item)}
                {this._renderBlock3X(item)}
                {this._renderBlock3X(item)}
            </View>
        );
    }

    render() {
        return (
            <StickyScroll {...this.props} style={[styles.container]}>

                <FlatList
                    ref={(flatList) => { this.flatList = flatList }}
                    data={this.items}
                    renderItem={(rowData) => this._renderItem(rowData)}
                    keyExtractor={(item, index) => `${index}`}

                // horizontal={true}
                // alwaysBounceHorizontal={false}
                />

            </StickyScroll>
        );
    }


}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F1F4FB', padding: 20 },
    upperView: { marginVertical: 16 },
    OODSText: { fontSize: 15, fontWeight: 'bold', textAlign: 'center' },
    OODSScore: { flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'baseline' },
    logoStyle: { height: 54, aspectRatio: 1, backgroundColor: 'gray', margin: 8 },
    fontStyle: { fontSize: 15 },

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
    centeredText: { fontSize: 15, fontWeight: '400', color: 'darkgray', margin: 16, textAlign: 'center', textAlignVertical: 'center' },

    scoreTeamImage: { height: 30, aspectRatio: 1, borderRadius: 15, marginHorizontal: 6, backgroundColor: 'gray' },
    chancesContainer: { marginHorizontal: 8, marginVertical: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' },


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