import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './TransactionListItem.styles';

import type { TransactionListItemProps } from './TransactionListItem.types';

const TransactionListItem = (props: TransactionListItemProps) => {
  const isSuccess = props.status === 'SUCCESS';

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSuccess ? styles.containerSuccess : styles.containerPending,
      ]}
      onPress={props.onPress}>
      <View>
        <View style={styles.bankInfo}>
          <Text style={styles.bankLabel}>{props.senderBank}</Text>
          <Text style={styles.rightArrow}>➔</Text>
          <Text style={styles.bankLabel}>{props.beneficiaryBank}</Text>
        </View>
        <Text>{`${isSuccess ? '' : '- '}${props.beneficiaryName}`}</Text>
        <View style={styles.additionalInfo}>
          <Text>{props.amountFormatted}</Text>
          <Text style={styles.bullet}>●</Text>
          <Text>{props.createdAt}</Text>
        </View>
      </View>
      <View style={styles.badgeContainer}>
        <Text
          style={[
            styles.badgeText,
            isSuccess ? styles.badgeSuccess : styles.badgePending,
          ]}>
          {props.statusLabel}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionListItem;
