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
import { ThemeBackgroundColor } from '../constants/Constant';

export class NewsScreen extends React.Component {


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

    renderStylishTitleBar(){
        return(
            <View style={styles.stylishTitleBar}>
                <Text style={[styles.stylishText, { color: ThemeBackgroundColor.variant_green}]}>Soccerfy <Text style={[styles.stylishText, {color: 'black'}]}>Match Forecast</Text></Text>
            </View>
        );
    }

    renderCenteredText (){
        return(
            <Text style={styles.centeredText}>
                This is expected to be a confortable HOMEWIN with a 80% chance of a home win.
                This is expected to be a confortable HOMEWIN with a 80% chance of a home win.
                This is expected to be a confortable HOMEWIN with a 80% chance of a home win.
            </Text>
        );
    }
    

    renderTeamChances(image, text, chance){
        return(
            <View style={styles.chancesContainer}>
                <Image style={styles.scoreTeamImage} uri={image}/>
                <Text style={{fontSize: 18}}>{text}</Text>
                <Image style={styles.scoreTeamImage} uri={image}/>
                <Text style={{fontSize: 18}}>({chance}% Chances)</Text>
            </View>
        );
    }

    renderChancesView(){
        return(
            <View style={{alignItems: 'stretch'}}>
                {this.renderTeamChances('', 'Home 2-0 Away', 10)}
                {this.renderTeamChances('', 'Home 3-0 Away', 10)}
            </View>
        );
    }

    renderHashTagView(){
        return(
            <View style={{backgroundColor: 'white', paddingVertical: 25, paddingHorizontal: 16, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 17, fontWeight: '600', marginBottom: 6}}>LIVE Twitter feed</Text>
                <Text style={{fontSize: 16, fontWeight: '600', color: '#5FB6E8'}}>#Soccerfy #liv #Nor</Text>
            </View>
        );
    }

    renderTwitterView(){
        return(
            <View style={{ paddingVertical: 25, paddingHorizontal: 16, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{height: 110, aspectRatio: 1, backgroundColor: 'gray', borderRadius: 55, marginVertical: 16}} />
                <Text style={{fontSize: 15, fontWeight: '500', marginBottom: 6, color: '#525252'}}>To share event-related information, use twitter hashtags</Text>
            </View>
        );
    }

    render() {
        return (
            <StickyScroll {...this.props} style={[styles.container]}>

                {this.renderHashTagView()}

                {this.renderTwitterView()}

            </StickyScroll>
        );
    }


}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F1F4FB'},
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
    stylishText: {fontSize: 17, fontWeight: '600',},
    centeredText: {fontSize: 15, fontWeight: '400', color: 'darkgray', margin: 16, textAlign: 'center', textAlignVertical: 'center'},

    scoreTeamImage: {height: 30, aspectRatio: 1, borderRadius: 15, marginHorizontal: 6, backgroundColor: 'gray'},
    chancesContainer : {marginHorizontal: 8, marginVertical: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'},
});