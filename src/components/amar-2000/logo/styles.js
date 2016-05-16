import {
  StyleSheet,
} from 'react-native';

import * as _ from '../../../constants';

export default StyleSheet.create({
  logo: {
    flex: 1,
    flexDirection: 'row',
    fontSize: _.SIZE * 4,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: _.SIZE / 2,
    color: _.COLOURS.TEXT.DARK,
    fontWeight: _.WEIGHT.BOLD,
  },
});
