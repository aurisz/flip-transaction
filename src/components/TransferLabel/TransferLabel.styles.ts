import { StyleSheet } from 'react-native';

import theme from '@theme/index';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  bankLabel: {
    fontSize: theme.text.size.base,
    fontWeight: 'bold',
    color: theme.color.black,
  },
  rightArrow: {
    marginHorizontal: theme.space.xs,
    color: theme.color.black,
  },
});
