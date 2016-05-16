import {
  StyleSheet,
} from 'react-native';

import * as _ from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
    backgroundColor: _.COLOURS.BACKGROUND.DARK,
  },
  name: {
    fontSize: _.SIZE * 1.5,
    fontWeight: _.WEIGHT.NORMAL,
    padding: _.SIZE,
    color: _.COLOURS.TEXT.LIGHT,
    textAlign: 'center',
  },
});
