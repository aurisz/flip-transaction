import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import routes from '@navigation/routes';

const { TransactionDetail } = routes;

export type RootStackParamList = {
  TransactionList: undefined;
  TransactionDetail: undefined;
};

export type TransactionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  typeof TransactionDetail
>;
