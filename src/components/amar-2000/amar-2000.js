import React from 'react';
import {
  Text,
  View,
  ListView,
  Navigator,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import * as _ from '../../constants';
import NavButton from '../nav-button/nav-button';
import styles from './styles';

export default class AMAR2000ReactNative extends React.Component {
  componentWillMount() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const dataSource = ds.cloneWithRows(_.ROOMS);

    this.setState({
      dataSource,
    });
  }

  renderRow(rowData) {
    return (
      <NavButton text={rowData} />
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
