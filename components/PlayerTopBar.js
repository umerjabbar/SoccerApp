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

export class PlayerTopBar extends React.Component {


    render() {
        return (
            <View style={styles.container} >
                <Image style={{ height: 100, aspectRatio: 1, borderRadius: 50, backgroundColor: 'gray', marginBottom: 4 }} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UMluiEICd_3Y3XZ81AZFl-ruVVjTWx0xu_mgVvz9eYhHdYFiAA'}} />
                <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>Kevin De Bruyne</Text>
                <TouchableOpacity style={[styles.followTouchable]}>
                    <Text style={[styles.followButton]}>FOLLOW</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 11, fontWeight: '500', color: 'white' }}>108k followers</Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: { backgroundColor: '#3BD06A', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' },
    followTouchable: { borderWidth: 1, borderColor: 'white', padding: 3, borderRadius: 2, alignItems: 'center', justifyContent: 'center', margin: 2 },
    followButton: { fontSize: 14, fontWeight: '500', color: 'white' },

})