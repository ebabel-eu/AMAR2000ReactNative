import React from 'react';
import {
  ScrollView,
  Text,
  Navigator,
} from 'react-native';

import * as _ from '../../constants';
import NavButton from '../nav-button/nav-button';
import styles from './styles';

const navButtonsData = [
  'Blue Area',
  'Large Room',
  'Tramside Corner',
  'Reception',
  'Meeting Room A',
  'Meeting Room B',
];

let key = 0;
const navButtons = navButtonsData.map(navButtonData => {
  key = key + 1;
  return (
    <NavButton
      key={key}
      text={navButtonData}
    />
  );
});

export default class NavMenu extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scene}>
        <Text style={styles.messageText}>{this.props.message}</Text>

        {navButtons}

        <NavButton
          onPress={() => {
            this.props.navigator.push({
              message: 'Swipe right to dismiss',
              sceneConfig: Navigator.SceneConfigs.FloatFromRight,
            });
          } }
          text="Float in from right"
          />
        <NavButton
          onPress={() => {
            this.props.navigator.push({
              message: 'Swipe down to dismiss',
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            });
          } }
          text="Float in from bottom"
          />
        <NavButton
          onPress={() => {
            this.props.navigator.pop();
          } }
          text="Pop"
          />
        <NavButton
          onPress={() => {
            this.props.navigator.popToTop();
          } }
          text="Pop to top"
          />
        <NavButton
          onPress={() => {
            this.props.navigator.push({ id: 'navbar' });
          } }
          text="Navbar Example"
          />
        <NavButton
          onPress={() => {
            this.props.navigator.push({ id: 'jumping' });
          } }
          text="Jumping Example"
          />
        <NavButton
          onPress={() => {
            this.props.navigator.push({ id: 'breadcrumbs' });
          } }
          text="Breadcrumbs Example"
          />
        <NavButton
          onPress={() => {
            this.props.onExampleExit();
          } }
          text="Exit <Navigator> Example"
          />
      </ScrollView>
    );
  }
}
