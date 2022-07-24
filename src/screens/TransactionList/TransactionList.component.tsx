import * as React from 'react';
import {
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  View,
  Button,
} from 'react-native';
import { useAtomValue, useSetAtom, useAtom } from 'jotai';

import {
  transactionListAtom,
  selectTransactionAtom,
  refreshAtom,
} from '@store/index';
import routes from '@navigation/routes';

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
    navigation.navigate(routes.TransactionDetail);
    setTransaction(id);
  },
});

const _renderTransactionItem: RenderTransactionItem = props => (
  <TransactionListItem {...props} />
);

const _renderLoading = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" />
  </View>
);

const _renderError = (onRefresh: () => void) => (
  <View style={styles.loadingContainer}>
    <Text style={styles.errorText}>Maaf, terjadi kesalahan.</Text>
    <Button onPress={onRefresh} title="Coba Lagi" />
  </View>
);

const _renderEmptyList = () => (
  <View style={styles.emptyContainer}>
    <Text>Pencarian tidak menemukan hasil</Text>
  </View>
);

const _renderFooterList = () => <View style={styles.footerContainer} />;

function TransactionList({ navigation }: TransactionListProps) {
  const value = useAtomValue(transactionListAtom);
  const setTransaction = useSetAtom(selectTransactionAtom);
  const [refresh, setRefresh] = useAtom(refreshAtom);

  const onRefresh = () => {
    setRefresh(!refresh);
  };

  if (value.isLoading) {
    return _renderLoading();
  }

  if (value.isError) {
    return _renderError(onRefresh);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        initialNumToRender={8}
        data={value.data}
        ListHeaderComponent={<TransactionListHeader />}
        ListEmptyComponent={_renderEmptyList()}
        ListFooterComponent={_renderFooterList()}
        onRefresh={onRefresh}
        refreshing={false}
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
