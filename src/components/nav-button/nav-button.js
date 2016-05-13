import React from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';

import * as _ from '../../constants';
import styles from './styles';

export default class NavButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor={_.COLOURS.BUTTON.ACTIVE}
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
