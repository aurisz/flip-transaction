import { atom } from 'jotai';
import { loadable } from 'jotai/utils';

import {
  formatTransactionList,
  filterTransactionList,
  sortArrayByField,
} from '@utils/index';
import constants from '@constants/index';

import type { SortOrder, SortValue, TransactionItem } from '@customTypes/index';

const { sortOptions } = constants;
const defaultSortOption = sortOptions[0];

const fetchTransactionsAtom = atom(async () => {
  const url = 'https://recruitment-test.flip.id/frontend-test';
  const response = await fetch(url);

  const data = await response.json();

  return formatTransactionList(data);
});

export const loadableTransactionsAtom = loadable(fetchTransactionsAtom);

export const transactionsAtom = atom(get => {
  const list = get(loadableTransactionsAtom);

  if (list.state === 'loading') {
    return { isLoading: true, isError: false, data: [] };
  }

  if (list.state === 'hasError') {
    return { isError: true, isLoading: false, data: [] };
  }

  return {
    isLoading: false,
    isError: false,
    data: list.data,
  };
});

export const filterAtom = atom('');
export const sortAtom = atom(defaultSortOption);

export const transactionListAtom = atom(get => {
  const filter = get(filterAtom);
  const sort = get(sortAtom);
  const transactions = get(transactionsAtom);

  const filtered = !filter
    ? transactions.data
    : filterTransactionList(transactions.data, filter);

  const getSortValueOrder = sort.value.split('|');
  const sortValue = getSortValueOrder[0] as SortValue;
  const sortOrder = getSortValueOrder[1] as SortOrder;
  const sorted = sortArrayByField(filtered, sortValue, sortOrder);

  return {
    ...transactions,
    data: sorted,
  };
});

export const selectedTransactionAtom = atom<
  TransactionItem | Record<string, never>
>({});

export const selectTransactionAtom = atom(null, (get, set, transactionId) => {
  const list = get(transactionListAtom);
  const selectedTransaction = list.data.find(
    el => el.id === transactionId,
  ) as TransactionItem;

  set(selectedTransactionAtom, selectedTransaction);
});
