import { useEffect, useReducer } from 'react';

import { formatTransactionList } from '../utils/transaction';

import type { ResponseData, TransactionItem } from '../types/transaction';

const url: string = 'https://recruitment-test.flip.id/frontend-test';
interface State {
  data?: TransactionItem[];
  error?: Error;
}

type Action =
  | { type: 'loading' }
  | { type: 'fetched'; payload: ResponseData }
  | { type: 'error'; payload: Error };

function useFetchTransaction(): State {
  const initialState: State = {
    error: undefined,
    data: undefined,
  };

  const fetchReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'loading':
        return { ...initialState };
      case 'fetched':
        return { ...initialState, data: formatTransactionList(action.payload) };
      case 'error':
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'loading' });

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();

        dispatch({ type: 'fetched', payload: data });
      } catch (error) {
        dispatch({ type: 'error', payload: error as Error });
      }
    };

    fetchData();
  }, []);

  return state;
}

export default useFetchTransaction;
