import { StyleSheet } from 'react-native';

import theme from '@theme/index';

export default StyleSheet.create({
  sortButton: {
    padding: theme.space.sm,
    height: theme.space.xxl,
    backgroundColor: theme.color.white,
    color: theme.color.orange,
    justifyContent: 'center',
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortLabel: {
    color: theme.color.orange,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sortIcon: {
    color: theme.color.orange,
    fontWeight: 'bold',
    fontSize: theme.text.size.base,
    paddingLeft: theme.space.xs,
  },
});
