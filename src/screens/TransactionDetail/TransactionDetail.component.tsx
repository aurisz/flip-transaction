import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useAtom } from 'jotai';

import { selectedTransactionAtom } from '@store/index';
import TransferLabel from '@components/TransferLabel';
import styles from './TransactionDetail.styles';

import type { TransactionDetailProps } from './TransactionDetail.types';

function TransactionDetail({ navigation }: TransactionDetailProps) {
  const [transaction] = useAtom(selectedTransactionAtom);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>ID TRANSAKSI: #{transaction.id}</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.header}>DETAIL TRANSAKSI</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.closeButton}>Tutup</Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <TransferLabel
          senderBank={transaction.senderBank}
          beneficiaryBank={transaction.beneficiaryBank}
        />
        <View style={styles.row}>
          <View style={styles.flex}>
            <View style={styles.column}>
              <Text style={styles.header}>{transaction.beneficiaryName}</Text>
              <Text>{transaction.accountNumber}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.header}>BERITA TRANSFER</Text>
              <Text>{transaction.remark}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.header}>WAKTU DIBUAT</Text>
              <Text>{transaction.createdAt}</Text>
            </View>
          </View>
          <View style={styles.flex}>
            <View style={styles.column}>
              <Text style={styles.header}>NOMINAL</Text>
              <Text>{transaction.amountFormatted}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.header}>KODE UNIK</Text>
              <Text>{transaction.uniqueCode}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default TransactionDetail;
