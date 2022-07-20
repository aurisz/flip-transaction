import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  TransactionList: undefined;
  TransactionDetail: {
    transactionId: string;
  };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'TransactionDetail'
>;
