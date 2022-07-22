import * as React from 'react';
import { View } from 'react-native';

import TransactionListFilter from '../TransactionListFilter';
import TransactionListSort from '../TransactionListSort';
import styles from './TransactionListHeader.styles';

const TransactionListHeader = () => (
  <View style={styles.container}>
    <TransactionListFilter />
    <TransactionListSort />
  </View>
);

export default TransactionListHeader;
