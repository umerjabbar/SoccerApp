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

export default class MatchesScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      isRefreshing: false,
    };
    this.items = [
      {
        ended: false,
      },
      {
        ended: true,
      },
      {
        ended: true,
      },
      {
        ended: true,
      },
      {
        ended: true,
      },
      {
        ended: true,
      },
      {
        ended: true,
      },
      {
        ended: true,
      }
    ]
  }

  componentDidMount() {
    // this.handleRefresh()
  }

  handleRefresh = () => {
    this.setState({
      isRefreshing: true,
    }, () => {

    });
  };

  itemPressed(item) {

  }

  renderHeader = () => {
    return (
      <View style={{ marginTop: 14 }}>

      </View>
    );
  }

  renderFooter = () => {
    return (
      <View style={{ marginTop: 14 }}>
        <View style={{ height: 200 }}></View>
      </View>
    );
  }

  renderSeparator = () => {
    return (
      <View style={styles.lineStyle}>

      </View>
    );
  }

  _renderItem({ item }) {
    return (
      <View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
          <Image style={{ aspectRatio: 1, height: 35, backgroundColor: 'gray' }}
          // source={{ uri: '' }} 
          />
          <View style={{ marginHorizontal: 14, justifyContent: 'center' }}>
            <Text style={[styles.titleLabel]}>Premier League</Text>
            <Text style={styles.bodyLabel}>Soccerfy ratings</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 14, marginTop: 14 }}>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={[styles.subTitleLabel, { width: 60, textAlign: 'center' }]}>10/08/19</Text>
              <Text style={[styles.subTitleLabel, { width: 60, textAlign: 'center' }]}>FT</Text>
            </View>
            <View style={{ width: 2, height: 30, marginLeft: 10, backgroundColor: 'gray' }}></View>
            <View>
              <View style={{ flexDirection: 'row', marginBottom: 4, alignItems: 'center' }}>
                <View style={{ backgroundColor: 'gray', height: 2, width: 10 }}></View>
                <Image style={{ aspectRatio: 1, height: 24, backgroundColor: 'gray', marginRight: 10, marginLeft: 2 }} />
                <Text style={styles.titleLabel}>Man City</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'gray', height: 2, width: 10 }}></View>
                <Image style={{ aspectRatio: 1, height: 24, backgroundColor: 'gray', marginRight: 10, marginLeft: 2 }} />
                <Text style={styles.titleLabel}>Brighton</Text>
              </View>
            </View>
          </View>

          {!item.ended && <TouchableOpacity style={{ aspectRatio: 1, height: 25, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }} onPress={() => this.itemPressed(item)}>
            <Image style={{ backgroundColor: 'gray', width: '90%', aspectRatio: 1 }} />
          </TouchableOpacity>}

          {item.ended && <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <TouchableOpacity style={{ aspectRatio: 1, height: 25, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }} onPress={() => this.itemPressed(item)}>
              <Image style={{ backgroundColor: 'gray', width: '90%', aspectRatio: 1 }} />
            </TouchableOpacity>

            <View>
              <Text style={[styles.subTitleLabel, { margin: 4 }]}>3</Text>
              <Text style={[styles.subTitleLabel, { margin: 4 }]}>2</Text>
            </View>

            <TouchableOpacity style={{ aspectRatio: 1, height: 25, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }} onPress={() => this.itemPressed(item)}>
              <Image style={{ backgroundColor: 'gray', width: '90%', aspectRatio: 1 }} />
            </TouchableOpacity>

          </View>}

        </View>

      </View>
    );
  }

  render() {
    return (
      <StickyScroll {...this.props} style={[styles.container]}>
        {/* <LinearGradient colors={[Colors.backColor1, Colors.backColor2, Colors.backColor3]} style={styles.backgroundImage}></LinearGradient> */}
        <FlatList
          ref={(flatList) => { this.flatList = flatList }}
          data={this.items}
          renderItem={(rowData) => this._renderItem(rowData)}
          keyExtractor={(item, index) => `${index}`}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader.bind(this)}
          ListFooterComponent={this.renderFooter.bind(this)}
        // refreshing={this.state.isRefreshing}
        // onRefresh={this.handleRefresh}
        // onEndThreshold={0}
        />
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
  titleLabel: { fontSize: 16, fontWeight: '600', marginBottom: 0 },
  bodyLabel: { fontSize: 15, fontWeight: '500', color: '#3BD06A' },
  subTitleLabel: { fontSize: 15, marginBottom: 2 },
  boxStyle: { marginBottom: 24 },
  rectStyle: { width: '33%', paddingHorizontal: 4 },
  lineStyle: { width: '90%', height: 1, backgroundColor: '#DDDDDD', margin: 14 },
});