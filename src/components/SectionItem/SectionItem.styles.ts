import { StyleSheet } from 'react-native';

import theme from '@theme/index';

export default StyleSheet.create({
  column: {
    paddingVertical: theme.space.sm,
    flexDirection: 'column',
  },
  title: {
    color: theme.color.black,
    fontWeight: '600',
  },
  text: {
    color: theme.color.black,
  },
});
