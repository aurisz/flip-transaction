import { StyleSheet } from 'react-native';

import theme from '@theme/index';

export default StyleSheet.create({
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: theme.radius.xs,
  },
  badgeText: {
    paddingVertical: theme.space.xs,
    paddingHorizontal: theme.space.sm,
    fontWeight: 'bold',
  },
  success: {
    backgroundColor: theme.color.green,
    borderRadius: theme.radius.xs,
  },
  pending: {
    backgroundColor: theme.color.white,
    borderWidth: theme.borderWidth.base,
    borderColor: theme.color.orange,
  },
  successText: {
    color: theme.color.white,
  },
  pendingText: {
    color: theme.color.black,
  },
});
