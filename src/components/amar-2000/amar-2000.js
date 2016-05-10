'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

export default class AMAR2000ReactNative extends Component {
  constructor() {
    super();

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const dataSource = ds.cloneWithRows([
      'Blue Area',
      'Large Area',
      'Metro Side',
      'Meeting Room A',
      'Meeting Room B',
      'Reception'
    ]); // todo: shouldn't this data come from the Web API?

    this.state = {
      dataSource,
    };
  }

  _renderRow(rowData) {
    return (
      <Text
        style={styles.item}>
        {rowData}
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.logo}>
            AMAR2000
          </Text>
          <Text style={styles.slogan}>
            everything is okay
          </Text>
        </View>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          />
      </View>
    );
  }
}

const baseFontSize = 16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: baseFontSize * 2,
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    fontSize: baseFontSize * 4,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: baseFontSize / 2,
  },
  slogan: {
    flex: 1,
    flexDirection: 'row',
    fontSize: baseFontSize * 1.5,
    lineHeight: baseFontSize,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: baseFontSize / 2,
    marginBottom: baseFontSize * 2,
  },
  list: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f00',
    borderBottomColor: '#00f',
    borderBottomWidth: 2,
    padding: baseFontSize / 3,
  },
});
