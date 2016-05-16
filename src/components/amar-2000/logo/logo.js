import React from 'react';
import {
  Text,
} from 'react-native';

import styles from './styles';

export default class Logo extends React.Component {
  render() {
    return (
      <Text style={styles.logo}>
        {this.props.text}
      </Text>
    );
  }
}
