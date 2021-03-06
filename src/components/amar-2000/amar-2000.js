import React, {
  Component,
} from 'react';

import {
  Text,
  View,
  ListView,
} from 'react-native';

import styles from './styles';
import * as _ from '../../constants';

export default class AMAR2000ReactNative extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const dataSource = ds.cloneWithRows(_.ROOMS);

    this.setState({
      dataSource,
    });
  }

  renderRow(rowData) {
    return (
      <Text
        style={styles.item}
      >
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
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}
