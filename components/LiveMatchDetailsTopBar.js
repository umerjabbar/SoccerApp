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

export class LiveMatchDetailsTopBar extends React.Component {


    renderTeam(image, name, isFollowing) {
        return (
            <View style={styles.teamView}>
                <Image style={styles.iconImage} source={{ uri: image }} />
                <Text style={[styles.teamTitle, { margin: 4 }]}>{name}</Text>
                <TouchableOpacity style={[styles.followTouchable, { backgroundColor: isFollowing ? ThemeBackgroundColor.variant_green : 'white' }]}>
                    <Text style={[styles.followButton, { color: isFollowing ? 'white' : ThemeBackgroundColor.variant_green }]}> FOLLOW </Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.leagueView}>
                    <Image style={styles.leageImage} source={{ uri: 'https://i.pinimg.com/originals/13/96/2a/13962a0dcecb036ad514ce76e4fa4f8f.png' }} />
                    <Text style={styles.leaguetext}>English Premier League</Text>
                </View>
                <Text style={[styles.teamTitle, { color: 'gray' }]}>Round 05</Text>


                <View style={styles.teamContainer}>

                    {this.renderTeam('https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png', 'Man City', false)}

                    <View style={styles.timingContainer}>

                        <Text style={styles.timeText}>2-0</Text>

                        <Text style={[styles.teamTitle, { color: 'gray' }]}>1st half</Text>

                        <View style={{backgroundColor: ThemeBackgroundColor.variant_green, padding: 2, borderRadius: 2}}>
                            <Text style={styles.timeCompleted}> 30:48 </Text>
                        </View>


                    </View>

                    {this.renderTeam('https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png', 'Brighton', true)}

                </View>

            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: 'center', borderBottomColor: ThemeBackgroundColor.variant_green, borderBottomWidth: 2, height: '100%', width: '100%', backgroundColor: 'white' },
    teamView: { alignItems: 'center', padding: 4 },
    iconImage: { height: 80, aspectRatio: 1, borderRadius: 40, resizeMode: 'contain' },

    teamTitle: { fontSize: 15, fontWeight: '500' },

    followTouchable: { borderWidth: 1, borderColor: ThemeBackgroundColor.variant_green, padding: 3, borderRadius: 2, alignItems: 'center', justifyContent: 'center' },
    followButton: { fontSize: 14, fontWeight: '500' },

    leagueView: { flexDirection: 'row', alignItems: 'center', paddingLeft: 25 },
    leageImage: { position: 'absolute', left: -15, height: 35, aspectRatio: 1, resizeMode: 'contain' },
    leaguetext: { fontSize: 17, fontWeight: '500' },
    teamContainer: { flexDirection: 'row', alignItems: 'center' },

    timingContainer: { marginHorizontal: 14, paddingBottom: 20, alignItems: 'center', justifyContent: 'center' },
    timeText: { fontSize: 55, fontWeight: '600' },
    timeCompleted: { fontSize: 15, fontWeight: '600', color: 'white' },
})