import { atom } from 'jotai';
import { loadable } from 'jotai/utils';

import {
  formatTransactionList,
  filterTransactionList,
  sortArrayByField,
} from '@utils/index';
import constants from '@constants';

import type { SortOrder, SortValue, SortOption } from '../types/transaction';

const url = 'https://recruitment-test.flip.id/frontend-test';
const { sortOptions } = constants;
const defaultSort = sortOptions[0].value as SortOption;

const fetchTransactionsAtom = atom(async () => {
  const response = await fetch(url);

  const data = await response.json();

  return formatTransactionList(data);
});

export const transactionsAtom = loadable(fetchTransactionsAtom);
export const filterAtom = atom('');
export const sortAtom = atom<SortOption>(defaultSort);

export const transactionListAtom = atom(get => {
  const filter = get(filterAtom);
  const sort = get(sortAtom);
  const list = get(transactionsAtom);

  if (list.state === 'loading') {
    return { isLoading: true, data: [] };
  }

  if (list.state === 'hasError') {
    return { isError: true };
  }

  const filtered = !filter
    ? list.data
    : filterTransactionList(list.data, filter);

  const getSortValueOrder = sort.split('|');
  const sortValue = getSortValueOrder[0] as SortValue;
  const sortOrder = getSortValueOrder[1] as SortOrder;
  const sorted = sortArrayByField(filtered, sortValue, sortOrder);

  return {
    data: sorted,
  };
});
