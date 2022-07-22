import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import TransferLabel from '@components/TransferLabel';
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
        <TransferLabel
          senderBank={props.senderBank}
          beneficiaryBank={props.beneficiaryBank}
        />
        <Text>{props.beneficiaryName}</Text>
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
