import { StyleSheet } from 'react-native';

import theme from '@theme/index';
import constants from '@constants/index';

import type { BadgeVariant } from './Badge.types';

const {
  transactionStatus: { SUCCESS, PENDING },
} = constants;

const badgeTextColor = {
  [SUCCESS]: theme.color.white,
  [PENDING]: theme.color.black,
};

const badgeTextContainer = {
  [SUCCESS]: {
    backgroundColor: theme.color.green,
    borderRadius: theme.radius.xs,
    borderColor: theme.color.green,
  },
  [PENDING]: {
    backgroundColor: theme.color.white,
    borderWidth: theme.borderWidth.base,
    borderColor: theme.color.orange,
  },
};

const getStyles = (variant: BadgeVariant) =>
  StyleSheet.create({
    badgeContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: theme.radius.xs,
      ...badgeTextContainer[variant],
    },
    badgeText: {
      paddingVertical: theme.space.xs,
      paddingHorizontal: theme.space.sm,
      fontWeight: 'bold',
      color: badgeTextColor[variant],
    },
  });

export default getStyles;
