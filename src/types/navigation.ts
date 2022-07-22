import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  TransactionList: undefined;
  TransactionDetail: undefined;
};

export type TransactionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'TransactionDetail'
>;
