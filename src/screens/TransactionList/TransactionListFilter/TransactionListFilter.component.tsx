import * as React from 'react';
import { useSetAtom } from 'jotai';

import { filterAtom } from '@store/index';
import useDebounce from '@hooks/useDebounce';
import SearchInput from '@components/SearchInput';

const TransactionListFilter = () => {
  const [value, setValue] = React.useState('');
  const setFilter = useSetAtom(filterAtom);

  const debouncedValue = useDebounce(value, 250);

  const handleChange = (val: string) => {
    setValue(val);
  };

  // call set filter with debounced value to prevent rerender on every keystroke
  React.useEffect(() => {
    setFilter(debouncedValue);
  }, [debouncedValue, setFilter]);

  return <SearchInput value={value} onChange={handleChange} />;
};

export default TransactionListFilter;
