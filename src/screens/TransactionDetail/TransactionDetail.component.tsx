import * as React from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import { useAtomValue } from 'jotai';
import Clipboard from '@react-native-clipboard/clipboard';

import { selectedTransactionAtom } from '@store/index';
import TransferLabel from '@components/TransferLabel';
import SectionItem from '@components/SectionItem';
import styles from './TransactionDetail.styles';

import type { TransactionDetailProps } from './TransactionDetail.types';

function TransactionDetail({ navigation }: TransactionDetailProps) {
  const transaction = useAtomValue(selectedTransactionAtom);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.section, styles.row, styles.alignCenter]}>
        <Text style={styles.header}>ID TRANSAKSI: #{transaction.id}</Text>
        <Pressable onPress={() => Clipboard.setString(transaction.id)}>
          <Text style={styles.copyIcon}>⎘</Text>
        </Pressable>
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
        <View style={[styles.row, styles.detailContainer]}>
          <View style={styles.flex}>
            <SectionItem title={transaction.beneficiaryName}>
              {transaction.accountNumber}
            </SectionItem>
            <SectionItem title="Berita Transfer">
              {transaction.remark}
            </SectionItem>
            <SectionItem title="Waktu Dibuat">
              {transaction.createdAt}
            </SectionItem>
          </View>
          <View style={styles.flex}>
            <SectionItem title="Nominal">
              {transaction.amountFormatted}
            </SectionItem>
            <SectionItem title="Kode Unik">
              {transaction.uniqueCode}
            </SectionItem>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TransactionDetail;
