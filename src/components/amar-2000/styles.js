import {
  StyleSheet,
} from 'react-native';

import * as _ from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: _.SIZE * 2,
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    fontSize: _.SIZE * 4,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: _.SIZE / 2,
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
  },
  list: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f00',
    borderBottomColor: '#00f',
    borderBottomWidth: 2,
    padding: _.SIZE / 3,
  },
});