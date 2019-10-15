import React from 'react';
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

export default class StatisticsScreen extends React.Component {

  constructor() {
    super();
    // this.state = {
    //   isLoading: false,
    //   isRefreshing: false,
    // };
    this.items = [
      {
        score: 7.3
      },
      {
        score: 8.5
      },
      {
        score: 7.1
      },
      {
        score: 10
      },
      {
        score: 7.3
      },
    ]
  }

  itemPressed(item) {

  }

  _renderItem({ item }) {
    var color = 'pink'
    if (item.score >= 9.0) {
      color = 'blue'
    } else if (item.score >= 7.5) {
      color = 'green'
    } else if (item.score >= 5.0) {
      color = 'orange'
    } else {
      color = 'red'
    }
    return (
      <TouchableOpacity style={{ alignItems: 'center', marginHorizontal: 8 }} onPress={() => this.itemPressed(item)} activeOpacity={0.8}>
        <View style={{ height: 60, width: 50, flexDirection: 'column-reverse', alignItems: 'center' }}>
          <Image style={{ height: 34, aspectRatio: 1, backgroundColor: 'gray' }} />
          <Text style={{ margin: 4 }}>23 Sep</Text>
        </View>
        <View style={{ height: 100, width: 50, marginTop: 40, marginBottom: 8 }}>
          <View style={{ flexDirection: 'column-reverse', height: `${100 - (item.score * 10)}%`, alignItems: 'center' }}>
            <View style={{ backgroundColor: color, height: 35, aspectRatio: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{item.score}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  renderScoreLines = () => {
    return (
      <View style={{ alignItems: 'center', marginHorizontal: 8 }} activeOpacity={0.8}>
        <View style={{ height: 60, flexDirection: 'column-reverse' }} />
        <View style={{ height: 100, flexDirection: 'column-reverse', marginTop: 8, marginBottom: 35 }}>
          <View style={{ backgroundColor: 'red', height: '50%', width: 6 }} />
          <View style={{ backgroundColor: 'orange', height: '25%', width: 6 }} />
          <View style={{ backgroundColor: 'green', height: '15%', width: 6 }} />
          <View style={{ backgroundColor: 'blue', height: '10%', width: 6 }} />
        </View>
      </View>
    );
  }

  render() {
    return (
      <StickyScroll {...this.props} style={{ backgroundColor: '#F1F4FB' }} >
        <View style={[styles.container]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 24 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Image style={{ height: 36, aspectRatio: 1, backgroundColor: 'gray', marginRight: 8 }} />
              <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                  <Text style={styles.titleLabel}>Premier League</Text>
                  <Image style={{ height: 10, aspectRatio: 1, backgroundColor: 'gray', marginLeft: 4 }} />
                </TouchableOpacity>
                <Text style={styles.bodyLabel}>Manchester City</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                <Text style={styles.titleLabel}>19/20</Text>
                <Image style={{ height: 10, aspectRatio: 1, backgroundColor: 'gray', marginHorizontal: 4 }} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.lineStyle}></View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 14, alignContent: 'center' }}>
            <Text style={styles.titleLabel}>Avg. <Text style={[styles.titleLabel, { color: '#3BD06A' }]}>Soccerfy</Text> rating</Text>
            <Text style={styles.largeNumber}>8.19</Text>
          </View>

          <View style={styles.scoreFlatList}>
            <FlatList
              ref={(flatList) => { this.flatList = flatList }}
              data={this.items}
              renderItem={(rowData) => this._renderItem(rowData)}
              keyExtractor={(item, index) => `${index}`}
              horizontal={true}
              alwaysBounceHorizontal={false}
            />
            {this.renderScoreLines()}
          </View>

          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 14 }}>
            <Text style={styles.titleLabel}>Season Heatmaps</Text>
            <Image style={{ height: 10, aspectRatio: 1, backgroundColor: 'gray', marginHorizontal: 4 }} />
          </TouchableOpacity>

          <View style={styles.lineStyle}></View>

          <View style={{ marginHorizontal: 14, marginBottom: 25 }}>
            <Text style={[styles.titleLabel, { marginBottom: 14, color: '#3BD06A' }]}>Matches</Text>
            <View style={styles.scoresView}>
              <Text style={styles.subTitleLabel}>Total played</Text>
              <Text style={styles.subTitleLabel}>2</Text>
            </View>
            <View style={styles.scoresView}>
              <Text style={styles.subTitleLabel}>Started</Text>
              <Text style={styles.subTitleLabel}>6</Text>
            </View>
            <View style={styles.scoresView}>
              <Text style={styles.subTitleLabel}>Minutes per game</Text>
              <Text style={styles.subTitleLabel}>65</Text>
            </View>
          </View>
        </View>
        <View style={{height: 200}}></View>
      </StickyScroll>
    );
  }

}

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 14, backgroundColor: '#F1F4FB', },
  lineStyle: { width: '90%', height: 1, backgroundColor: '#DDDDDD', margin: 14 },
  titleLabel: { fontSize: 17, fontWeight: '600', color: 'black', marginBottom: 2 },
  subTitleLabel: { fontSize: 15, fontWeight: '500', color: 'black', marginBottom: 2 },
  bodyLabel: { fontSize: 15, fontWeight: '600', color: '#A3A4AA' },
  largeNumber: { fontSize: 20, color: 'black' },
  scoreFlatList: { height: 212, width: '100%', flexDirection: 'row', borderColor: '#DDDDDD', borderTopWidth: 1, borderBottomWidth: 1, marginVertical: 14 },
  scoresView: { flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', marginBottom: 8 },
});
