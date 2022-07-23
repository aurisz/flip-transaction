import { StyleSheet } from 'react-native';

import theme from '@theme/index';
import constants from '@constants/index';
import type { TransactionStatus } from '@customTypes/index';

const {
  transactionStatus: { SUCCESS, PENDING },
} = constants;

const statusBorderColor = {
  [SUCCESS]: theme.color.green,
  [PENDING]: theme.color.orange,
};

const getStyles = (status: TransactionStatus) =>
  StyleSheet.create({
    container: {
      padding: theme.space.md,
      marginVertical: theme.space.xs,
      marginHorizontal: theme.space.sm,
      borderLeftWidth: theme.borderWidth.xl,
      borderRadius: theme.radius.xs,
      backgroundColor: theme.color.white,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderLeftColor: statusBorderColor[status],
    },
    text: {
      color: theme.color.black,
      fontWeight: '400',
    },
    additionalInfo: {
      flexDirection: 'row',
    },
    bullet: {
      marginHorizontal: theme.space.xs,
      color: theme.color.black,
    },
    badgeContainer: {
      justifyContent: 'center',
    },
    badgeText: {
      paddingVertical: theme.space.xs,
      paddingHorizontal: theme.space.sm,
      fontWeight: 'bold',
      borderRadius: theme.radius.xs,
    },
    badgeSuccess: {
      color: theme.color.white,
      backgroundColor: theme.color.green,
      borderRadius: theme.radius.xs,
    },
    badgePending: {
      color: theme.color.black,
      backgroundColor: theme.color.white,
      borderWidth: theme.borderWidth.base,
      borderColor: theme.color.orange,
    },
  });

export default getStyles;
