import React from 'react';
import {
  ScrollView,
  Text,
  Navigator,
} from 'react-native';

import NavButton from '../nav-button/nav-button';
import navButtonsData from './data';
import styles from './styles';

let key = 0;
const navButtons = navButtonsData.map(navButtonData => {
  key = key + 1;
  return (
    <NavButton
      key={key}
      text={navButtonData}
      onPress={() => {
        this.props.navigator.push({
          message: 'Swipe right to dismiss',
          sceneConfig: Navigator.SceneConfigs.FloatFromRight,
        });
      } }
      />
  );
});

export default class NavMenu extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scene}>
        <Text style={styles.name}>{this.props.name}</Text>
        {navButtons}
      </ScrollView>
    );
  }
}
