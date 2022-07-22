import type {
  TransactionListNavigationProp,
  TransactionItem,
} from '@customTypes/index';
import type { TransactionListItemProps } from './TransactionListItem/TransactionListItem.types';

export interface TransactionListProps {
  navigation: TransactionListNavigationProp;
}

export type GetTransactionItemProps = (
  transactionItem: TransactionItem,
  navigation: TransactionListNavigationProp,
) => TransactionListItemProps;

export type RenderTransactionItem = (
  props: TransactionListItemProps,
) => JSX.Element;
