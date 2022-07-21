import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export type TransactionListItemProps = {
  senderBank: string;
  beneficiaryBank: string;
  beneficiaryName: string;
  amountFormatted: string;
  createdAt: string;
  status: string;
  statusLabel: string;
  onPress: () => void;
};

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
          <Text style={styles.rightArrow}>{'\u2794'}</Text>
          <Text style={styles.bankLabel}>{props.beneficiaryBank}</Text>
        </View>
        <Text>{`${isSuccess ? '' : '- '}${props.beneficiaryName}`}</Text>
        <View style={styles.additionalInfo}>
          <Text>{props.amountFormatted}</Text>
          <Text style={styles.bullet}>{'\u2B24'}</Text>
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

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    borderLeftWidth: 6,
    borderRadius: 6,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerSuccess: {
    borderLeftColor: '#22c55e',
  },
  containerPending: {
    borderLeftColor: 'orange',
  },
  bankInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  bankLabel: {
    fontWeight: 'bold',
    color: 'black',
  },
  rightArrow: {
    marginHorizontal: 3,
    color: '#000000',
  },
  additionalInfo: {
    flexDirection: 'row',
  },
  bullet: {
    marginHorizontal: 4,
    color: '#000000',
  },
  badgeContainer: {
    justifyContent: 'center',
  },
  badgeText: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontWeight: 'bold',
    borderRadius: 6,
  },
  badgeSuccess: {
    color: '#ffffff',
    backgroundColor: '#22c55e',
    borderRadius: 6,
  },
  badgePending: {
    color: 'black',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'orange',
  },
});

export default TransactionListItem;
