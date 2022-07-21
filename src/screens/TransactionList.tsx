import * as React from 'react';
import { Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { useAtom } from 'jotai';

import { transactionListAtom } from '@store/index';

import TransactionListItem, {
  type TransactionListItemProps,
} from '@components/TransactionListItem';
import TransactionListFilter from '@components/TransactionListFilter';

import type { HomeScreenNavigationProp } from '../types/navigation';
import type { TransactionItem } from '../types/transaction';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const _getTransactionListItemProps = (
  {
    id,
    senderBank,
    beneficiaryBank,
    beneficiaryName,
    amountFormatted,
    createdAt,
    status,
    statusLabel,
  }: TransactionItem,
  navigation: HomeScreenNavigationProp,
): TransactionListItemProps => ({
  senderBank,
  beneficiaryBank,
  beneficiaryName,
  amountFormatted,
  createdAt,
  status,
  statusLabel,
  onPress: () =>
    navigation.navigate('TransactionDetail', { transactionId: id }),
});

const _renderItem = (props: TransactionListItemProps) => (
  <TransactionListItem {...props} />
);

function TransactionList({ navigation }: HomeScreenProps) {
  const [value] = useAtom(transactionListAtom);

  if (value.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (value.isError) {
    return <Text>There is an error.</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TransactionListFilter />
      <FlatList
        initialNumToRender={8}
        data={value.data}
        renderItem={({ item }) =>
          _renderItem(_getTransactionListItemProps(item, navigation))
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TransactionList;
