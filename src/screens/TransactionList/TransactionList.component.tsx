import * as React from 'react';
import { Text, FlatList, SafeAreaView } from 'react-native';
import { useAtom } from 'jotai';

import { transactionListAtom, selectTransactionAtom } from '@store/index';

import TransactionListItem from './TransactionListItem';
import TransactionListHeader from './TransactionListHeader';
import styles from './TransactionList.styles';

import type {
  TransactionListProps,
  RenderTransactionItem,
  GetTransactionItemProps,
} from './TransactionList.types';

const _getTransactionItemProps: GetTransactionItemProps = (
  {
    id,
    senderBank,
    beneficiaryBank,
    beneficiaryName,
    amountFormatted,
    createdAt,
    status,
    statusLabel,
  },
  navigation,
  setTransaction,
) => ({
  senderBank,
  beneficiaryBank,
  beneficiaryName,
  amountFormatted,
  createdAt,
  status,
  statusLabel,
  onPress: () => {
    navigation.navigate('TransactionDetail');
    setTransaction(id);
  },
});

const _renderTransactionItem: RenderTransactionItem = props => (
  <TransactionListItem {...props} />
);

function TransactionList({ navigation }: TransactionListProps) {
  const [value] = useAtom(transactionListAtom);
  const [, setTransaction] = useAtom(selectTransactionAtom);

  if (value.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (value.isError) {
    return <Text>There is an error.</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TransactionListHeader />
      <FlatList
        initialNumToRender={8}
        data={value.data}
        renderItem={({ item }) =>
          _renderTransactionItem(
            _getTransactionItemProps(item, navigation, setTransaction),
          )
        }
      />
    </SafeAreaView>
  );
}

export default TransactionList;
