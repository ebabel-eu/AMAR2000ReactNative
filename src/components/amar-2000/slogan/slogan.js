import React from 'react';
import {
  Text,
} from 'react-native';

import styles from './styles';

export default class Slogan extends React.Component {
  render() {
    return (
      <Text style={styles.slogan}>
        {this.props.text}
      </Text>
    );
  }
}
