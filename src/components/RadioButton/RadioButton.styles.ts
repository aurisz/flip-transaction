import { StyleSheet } from 'react-native';

import theme from '@theme/index';

const getStyles = (isSelected: boolean) =>
  StyleSheet.create({
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
    icon: {
      color: theme.color.orange,
      fontSize: theme.text.size[isSelected ? 'xxl' : 'xl'],
    },
  });

export default getStyles;
