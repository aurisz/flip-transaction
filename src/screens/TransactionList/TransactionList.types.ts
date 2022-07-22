import type {
  TransactionScreenNavigationProp,
  TransactionItem,
} from '@customTypes/index';
import type { TransactionListItemProps } from './TransactionListItem/TransactionListItem.types';

export interface TransactionListProps {
  navigation: TransactionScreenNavigationProp;
}

export type GetTransactionItemProps = (
  transactionItem: TransactionItem,
  navigation: TransactionScreenNavigationProp,
  setTransaction: (id: string) => void,
) => TransactionListItemProps;

export type RenderTransactionItem = (
  props: TransactionListItemProps,
) => JSX.Element;
