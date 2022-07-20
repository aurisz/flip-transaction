import * as React from 'react';
import { View, Text, FlatList } from 'react-native';

import useFetchTransaction from '../hooks/useFetchTransaction';

import TransactionListItem, {
  type TransactionListItemProps,
} from '../components/TransactionListItem';

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
    amount,
    createdAt,
    status,
    statusText,
  }: TransactionItem,
  navigation: HomeScreenNavigationProp,
): TransactionListItemProps => ({
  senderBank,
  beneficiaryBank,
  beneficiaryName,
  amount,
  createdAt,
  status,
  statusText,
  onPress: () =>
    navigation.navigate('TransactionDetail', { transactionId: id }),
});

const _renderItem = (props: TransactionListItemProps) => (
  <TransactionListItem {...props} />
);

function TransactionList({ navigation }: HomeScreenProps) {
  const { data, error } = useFetchTransaction();

  if (!data) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>There is an error.</Text>;
  }

  return (
    <View>
      <FlatList
        initialNumToRender={8}
        data={data}
        renderItem={({ item }) =>
          _renderItem(_getTransactionListItemProps(item, navigation))
        }
      />
    </View>
  );
}

export default TransactionList;
