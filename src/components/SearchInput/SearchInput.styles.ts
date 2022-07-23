import { StyleSheet } from 'react-native';

import theme from '@theme/index';

export default StyleSheet.create({
  icon: {
    paddingRight: theme.space.xs,
  },
  input: {
    flex: 1,
    color: theme.color.black,
    height: theme.space.xl,
  },
});
