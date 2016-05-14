import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import NavMenu from '../nav-menu/nav-menu';
import styles from './styles';

export default class AMAR2000ReactNative extends React.Component {
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
        <NavMenu message="Office overview" />
      </View>
    );
  }
}
