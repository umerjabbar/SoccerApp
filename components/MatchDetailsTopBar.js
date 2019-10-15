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
import { ThemeColors } from 'react-navigation';
import { ThemeBorderBottomColor, ThemeBackgroundColor } from '../constants/Constant';

export class PreMatchDetailsTopBar extends React.Component {


    renderTeam(image, name, isFollowing) {
        return (
            <View style={styles.teamView}>
                <Image style={styles.iconImage} uri={image} />
                <Text style={[styles.teamTitle, { margin: 4 }]}>{name}</Text>
                <TouchableOpacity style={[styles.followTouchable, { backgroundColor: isFollowing ? ThemeBackgroundColor.variant_green : 'white' }]}>
                    <Text style={[styles.followButton, { color: isFollowing ? 'white' : ThemeBackgroundColor.variant_green }]}>FOLLOW</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.leagueView}>
                    <Image style={styles.leageImage} />
                    <Text style={styles.leaguetext}>English Premier League</Text>
                </View>

                <View style={styles.teamContainer}>

                    {this.renderTeam('', 'Man City', false)}

                    <View style={styles.timingContainer}>

                        <Text style={[styles.teamTitle, { marginBottom: 8 }]}>Round 05</Text>

                            <Text style={[styles.teamTitle, { marginBottom: 4 }]}>14 Sept 2019</Text>
                            <Text style={styles.teamTitle}>10:00 am</Text>

                        <Text style={styles.timeText}>30:17:24</Text>

                    </View>

                    {this.renderTeam('', 'Brighton', true)}

                </View>

            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: 'center', borderBottomColor: ThemeBackgroundColor.variant_green, borderBottomWidth: 2, height: '100%', width: '100%', backgroundColor: 'white' },
    teamView: { alignItems: 'center', padding: 4 },
    iconImage: { height: 90, aspectRatio: 1, borderRadius: 45, backgroundColor: 'gray' },
    teamTitle: { fontSize: 15, fontWeight: '500' },
    followTouchable: { borderWidth: 1, borderColor: ThemeBackgroundColor.variant_green, padding: 4, alignItems: 'center', justifyContent: 'center' },
    followButton: {fontSize: 15,fontWeight: '500'},
    leagueView: { flexDirection: 'row', alignItems: 'center', margin: 2 },
    leageImage: { height: 40, aspectRatio: 1, backgroundColor: 'gray', marginHorizontal: 6 },
    leaguetext: { fontSize: 17, fontWeight: '500' },
    teamContainer : { flexDirection: 'row', alignItems: 'center' },

    timingContainer : { marginHorizontal: 14, paddingBottom: 24, height: '100%', alignItems: 'center' }, 
    timeText : { fontSize: 20, fontWeight: '700', marginTop: 8 },
})