import { StyleSheet } from 'react-native';

import theme from '@theme/index';

export default StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    fontSize: theme.text.size.xl,
    color: theme.color.orange,
  },
  option: {
    fontSize: theme.text.size.md,
    color: theme.color.black,
    paddingVertical: theme.space.md,
    paddingHorizontal: theme.space.sm,
  },
});
