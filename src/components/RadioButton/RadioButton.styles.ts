import { StyleSheet } from 'react-native';

import theme from '@theme/index';

export default StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    fontSize: theme.text.size.md,
    color: theme.color.black,
    paddingVertical: theme.space.md,
    paddingHorizontal: theme.space.sm,
  },
  iconColor: {
    color: theme.color.orange,
  },
  iconSelected: {
    fontSize: theme.text.size.xxl,
  },
  icon: {
    fontSize: theme.text.size.xl,
  },
});
