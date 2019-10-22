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

export class ForecastScreen extends React.Component {


    renderLogoAndScore(image, score) {
        return (
            <View style={{ alignItems: 'center' }}>
                <Image style={styles.logoStyle} source={{uri: image}} />
                <Text style={styles.fontStyle}>{score}</Text>
            </View>
        );
    }

    renderUpperPart() {
        return (
            <View style={styles.upperView}>
                <Text style={styles.OODSText}>ODDS</Text>
                <View style={styles.OODSScore}>

                    {this.renderLogoAndScore('https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png', 1.25)}

                    {this.renderLogoAndScore('', 5.5)}

                    {this.renderLogoAndScore('https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png', 12.5)}

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
                <Image style={styles.scoreTeamImage} source={{uri: image}}/>
                <Text style={{fontSize: 18}}>{text}</Text>
                <Image style={styles.scoreTeamImage} source={{uri: image}}/>
                <Text style={{fontSize: 18}}>({chance}% Chances)</Text>
            </View>
        );
    }

    renderChancesView(){
        return(
            <View style={{alignItems: 'stretch'}}>
                {this.renderTeamChances('https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png', 'Home 2-0 Away', 10)}
                {this.renderTeamChances('https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png', 'Home 3-0 Away', 10)}
            </View>
        );
    }

    render() {
        return (
            <StickyScroll {...this.props} style={[styles.container]}>

                {this.renderUpperPart()}

                {this.renderStylishTitleBar()}

                {this.renderCenteredText()}

                {this.renderChancesView()}

            </StickyScroll>
        );
    }


}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F1F4FB'},
    upperView: { marginVertical: 16 },
    OODSText: { fontSize: 15, fontWeight: 'bold', textAlign: 'center' },
    OODSScore: { flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'baseline' },
    logoStyle: { height: 50, aspectRatio: 1, margin: 8 },
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
    centeredText: {fontSize: 15, fontWeight: '400', color: 'gray', marginVertical: 20, marginHorizontal: 30, textAlign: 'center', textAlignVertical: 'center'},

    scoreTeamImage: {height: 30, aspectRatio: 1, borderRadius: 15, marginHorizontal: 6},
    chancesContainer : {marginHorizontal: 8, marginVertical: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'},
});