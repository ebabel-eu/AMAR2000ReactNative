import {
  StyleSheet,
} from 'react-native';

import * as _ from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: _.SIZE * 2,
    backgroundColor: _.COLOURS.BACKGROUND.LIGHT,
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    fontSize: _.SIZE * 4,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: _.SIZE / 2,
    color: _.COLOURS.TEXT.DARK,
  },
  slogan: {
    flex: 1,
    flexDirection: 'row',
    fontSize: _.SIZE * 1.5,
    lineHeight: _.SIZE,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: _.SIZE / 2,
    marginBottom: _.SIZE * 2,
    color: _.COLOURS.TEXT.DARKER,
  },
});
