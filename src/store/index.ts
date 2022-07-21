import { atom } from 'jotai';
import { loadable } from 'jotai/utils';

import { formatTransactionList, filterTransactionList } from '@utils/index';

const url = 'https://recruitment-test.flip.id/frontend-test';

const fetchTransactionsAtom = atom(async () => {
  const response = await fetch(url);

  const data = await response.json();

  return formatTransactionList(data);
});

export const transactionsAtom = loadable(fetchTransactionsAtom);

export const filterAtom = atom('');

export const transactionListAtom = atom(get => {
  const filter = get(filterAtom);
  const list = get(transactionsAtom);

  if (list.state === 'loading') {
    return { isLoading: true, data: [] };
  }

  if (list.state === 'hasError') {
    return { isError: true };
  }

  const result = !filter ? list.data : filterTransactionList(list.data, filter);

  return {
    data: result,
  };
});
