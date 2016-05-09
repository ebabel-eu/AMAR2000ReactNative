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
    const dataSource = ds.cloneWithRows(['Blue Area', 'Large Area', 'Metro Side', 'Meeting Room A', 'Meeting Room B', 'Reception']);
    
    this.state = {
      dataSource,
    };
  }
  
  _renderRow(rowData) {
    return (
      <Text
        style={styles.row}>
        {rowData}
      </Text>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
  },
});

AppRegistry.registerComponent('AMAR2000ReactNative', () => AMAR2000ReactNative);
