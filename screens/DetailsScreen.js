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

export default class DetailsScreen extends React.Component {

  static navigationOptions = () => {
    return null;
  };

  constructor() {
    super();
    
  }

  renderHeader = () => {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.subTitleLabel}>Receive notifications for this player.</Text>
      </View>
    );
  }

  renderMatchInfo = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
        <Image style={{ aspectRatio: 1, height: 50, backgroundColor: 'gray' }} source={{ uri: '' }} />
        <View style={{ marginHorizontal: 14, justifyContent: 'center' }}>
          <Text style={[styles.titleLabel, { color: '#000000', textAlign: 'auto' }]}>MANCHESTER CITY</Text>
          <Text style={styles.bodyLabel}>Contract until 30 Jun 2023</Text>
        </View>
      </View>
    );
  }

  renderProperty = (value1, value2) => {
    return (
      <View style={styles.boxStyle}>
        <Text style={styles.titleLabel}>{value1}</Text>
        <Text style={styles.bodyLabel}>{value2}</Text>
      </View>
    );
  }

  renderPropertyWithImage = (value1, value2, image) => {
    return (
      <View style={styles.boxStyle}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image style={styles.smallImage} source={{ uri: image }} />
          <Text style={styles.titleLabel}>{value1}</Text>
        </View>
        <Text style={styles.bodyLabel}>{value2}</Text>
      </View>
    );
  }

  renderFooter = () => {
    return (
      <View style={{ justifyContent: 'center' }}>

        <View style={styles.lineStyle}></View>

        {this.renderMatchInfo()}

        <View style={styles.lineStyle}></View>

        <View style={styles.propertiesView}>

          <View style={styles.rectStyle}>

            {this.renderPropertyWithImage('BEL', 'Nationality', '')}

            {this.renderProperty('Right', 'Preferred foot')}

          </View>
          <View style={styles.rectStyle}>

            {this.renderProperty('28 Yrs', '28 Jun 1991')}

            {this.renderProperty('MF', 'Position')}

            {this.renderProperty('135M $', 'Player Value')}

          </View>
          <View style={styles.rectStyle}>

            {this.renderProperty('181 cm', 'Height')}

            {this.renderProperty('17', 'Shirt Number')}

          </View>
        </View>

        <View style={{ height: 200 }}></View>

      </View>
    );
  }

  render() {
    return (
      <StickyScroll {...this.props} style={[styles.container]}>

        {this.renderHeader()}

        {this.renderFooter()}

      </StickyScroll>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F4FB',
    // paddingVertical: 14,
  },

  headerStyle: {
    marginHorizontal: 14,
    marginTop: 14
  },
  titleLabel: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
    color: '#3BD06A',
    marginBottom: 2
  },
  bodyLabel: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: '#A3A4AA'
  },
  subTitleLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2
  },
  boxStyle: {
    marginBottom: 24
  },
  rectStyle: {
    width: '33%',
    paddingHorizontal: 4
  },
  lineStyle: {
    width: '90%',
    height: 1,
    backgroundColor: '#DDDDDD',
    margin: 14
  },
  smallImage: {
    width: 16,
    aspectRatio: 1,
    marginRight: 4,
    backgroundColor: 'gray'
  },
  propertiesView: {
    marginHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'center'
  },
});