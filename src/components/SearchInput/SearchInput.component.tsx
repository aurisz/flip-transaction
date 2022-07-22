import * as React from 'react';
import { Text, TextInput } from 'react-native';

import styles from './SearchInput.styles';
import type { Props } from './SearchInput.types';

const SearchInput = ({ value, onChange }: Props) => (
  <React.Fragment>
    <Text style={styles.icon}>🔍</Text>
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      value={value}
      placeholder="Cari nama, bank, atau nominal"
    />
  </React.Fragment>
);

export default SearchInput;
