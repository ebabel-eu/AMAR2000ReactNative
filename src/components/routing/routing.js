import React from 'react';
import {
  Navigator,
} from 'react-native';

import NavMenu from '../nav-menu/nav-menu';

export default class Routing extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Office overview', index: 0 }}
        renderScene={(route, navigator) =>
          <NavMenu
            name={route.name}
            onForward={() => {
              var nextIndex = route.index + 1;
              navigator.push({
                name: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            } }
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            } }
            />
        }
        />
    );
  }
}
