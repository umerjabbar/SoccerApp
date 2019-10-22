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

    renderHashTagView(){
        return(
            <View style={styles.hashContainer}>
                <Text style={styles.hashText}>LIVE Twitter feed</Text>
                <Text style={styles.hashSubText}>#Soccerfy #liv #Nor</Text>
            </View>
        );
    }

    renderTwitterView(){
        return(
            <View style={styles.twitterContainer}>
                <Image style={styles.twitterImage} source={{uri: 'https://icon-library.net/images/twitter-icon-white/twitter-icon-white-29.jpg'}} />
                <Text style={styles.twitterText}>To share event-related information, use twitter hashtags</Text>
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

    hashContainer: {backgroundColor: 'white', paddingVertical: 25, paddingHorizontal: 16, alignItems: 'center', justifyContent: 'center'},
    hashText : {fontSize: 17, fontWeight: '600', marginBottom: 6},
    hashSubText: {fontSize: 16, fontWeight: '600', color: '#5FB6E8'},

    twitterContainer: { paddingVertical: 25, paddingHorizontal: 16, alignItems: 'center', justifyContent: 'center'},
    twitterImage: {height: 110, aspectRatio: 1, borderRadius: 55, marginVertical: 16},
    twitterText: {fontSize: 15, fontWeight: '500', marginBottom: 6, color: '#525252'},


});