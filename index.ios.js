import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

class AMAR2000ReactNative extends Component {
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
        <Text style={styles.logo}>AMAR2000</Text>
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
    paddingTop: 30,
  },
  logo: {
    flex: 2,
    backgroundColor: '#fcf',
    flexDirection: 'row',
  },
  list: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 2,
    padding: 5,
  },
});

AppRegistry.registerComponent('AMAR2000ReactNative', () => AMAR2000ReactNative);
