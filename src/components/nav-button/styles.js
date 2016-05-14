import {
  StyleSheet,
} from 'react-native';

import * as _ from '../../constants';

export default StyleSheet.create({
  button: {
    backgroundColor: _.COLOURS.WHITE,
    padding: _.SIZE * 1.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: _.COLOURS.BORDER,
  },
  buttonText: {
    fontSize: _.SIZE,
    fontWeight: _.WEIGHT.BOLD,
  },
});
