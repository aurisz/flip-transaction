import * as React from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './RadioButton.styles';

import type { Props } from './RadioButton.types';

const RadioButton = ({ options, onSelect, selected }: Props) => (
  <React.Fragment>
    {options.map(item => (
      <Pressable key={item.value} onPress={() => onSelect(item)}>
        <View style={styles.optionContainer}>
          <Text style={styles.optionIcon}>
            {item.value === selected.value ? '◉' : '○'}
          </Text>
          <Text style={styles.option}>{item.label}</Text>
        </View>
      </Pressable>
    ))}
  </React.Fragment>
);

export default RadioButton;
