import * as React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { useAtom } from 'jotai';

import { filterAtom } from '@store/index';
import useDebounce from '@hooks/useDebounce';
import TransactionListSort from '@components/TransactionListSort';

const TransactionListFilter = () => {
  const [value, setValue] = React.useState('');
  const [, setFilter] = useAtom(filterAtom);

  // debounce value to improve performance
  const debouncedValue = useDebounce(value, 500);

  const handleChange = (val: string) => {
    setValue(val);
  };

  // call set filter when debounced value changes instead of every keystroke
  React.useEffect(() => {
    setFilter(debouncedValue);
  }, [debouncedValue, setFilter]);

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>&#128269;</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={value}
        placeholder="Cari nama, bank, atau nominal"
      />
      <TransactionListSort />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 6,
    margin: 12,
    padding: 10,
  },
  icon: {
    paddingRight: 5,
  },
  input: {
    flex: 1,
    color: 'black',
    height: 40,
  },
});

export default TransactionListFilter;
