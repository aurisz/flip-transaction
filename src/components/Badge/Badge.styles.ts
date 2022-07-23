import { StyleSheet } from 'react-native';

import theme from '@theme/index';

export default StyleSheet.create({
  badgeContainer: {
    justifyContent: 'center',
  },
  badgeText: {
    paddingVertical: theme.space.xs,
    paddingHorizontal: theme.space.sm,
    fontWeight: 'bold',
    borderRadius: theme.radius.xs,
  },
  success: {
    color: theme.color.white,
    backgroundColor: theme.color.green,
    borderRadius: theme.radius.xs,
  },
  pending: {
    color: theme.color.black,
    backgroundColor: theme.color.white,
    borderWidth: theme.borderWidth.base,
    borderColor: theme.color.orange,
  },
});
