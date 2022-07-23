import { StyleSheet } from 'react-native';

import theme from '@theme/index';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.white,
    borderRadius: theme.radius.xs,
    margin: theme.space.sm,
    padding: theme.space.sm,
  },
});
