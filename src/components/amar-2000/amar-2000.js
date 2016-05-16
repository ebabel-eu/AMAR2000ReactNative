import React from 'react';
import {
  View,
} from 'react-native';

import Logo from './logo/logo';
import Slogan from './slogan/slogan';
import Routing from '../routing/routing';
import styles from './styles';

export default class AMAR2000ReactNative extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Logo text="AMAR2000" />
          <Slogan text="everything is okay" />
        </View>
        <Routing />
      </View>
    );
  }
}
