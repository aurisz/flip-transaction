import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export type TransactionListItemProps = {
  senderBank: string;
  beneficiaryBank: string;
  beneficiaryName: string;
  amount: string;
  createdAt: string;
  status: string;
  statusText: string;
  onPress: () => void;
};

const TransactionListItem = (props: TransactionListItemProps) => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <View>
      <View style={styles.bankInfo}>
        <Text style={styles.bankLabel}>{props.senderBank}</Text>
        <Text style={styles.rightArrow}>{'\u2794'}</Text>
        <Text style={styles.bankLabel}>{props.beneficiaryBank}</Text>
      </View>
      <Text>{props.beneficiaryName}</Text>
      <View style={styles.additionalInfo}>
        <Text>{props.amount}</Text>
        <Text style={styles.bullet}>{'\u2B24'}</Text>
        <Text>{props.createdAt}</Text>
      </View>
    </View>
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{props.status}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 12,
    margin: 12,
    borderLeftWidth: 6,
    borderLeftColor: '#22c55e',
    borderRadius: 6,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bankInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  bankLabel: {
    fontWeight: 'bold',
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
  badge: {
    justifyContent: 'center',
  },
  badgeText: {
    backgroundColor: '#22c55e',
    color: '#ffffff',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
});

export default TransactionListItem;
