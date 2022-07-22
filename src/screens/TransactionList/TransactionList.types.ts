import type { TransactionListNavigationProp } from '../../types/navigation';
import type { TransactionItem } from '../../types/transaction';
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
