import * as React from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './RadioButton.styles';

import type { Props } from './RadioButton.types';

const RadioButton = ({ options, onSelect, selected }: Props) => (
  <React.Fragment>
    {options.map(item => {
      const isSelectedOption = item.value === selected.value;

      return (
        <Pressable key={item.value} onPress={() => onSelect(item)}>
          <View style={styles.optionContainer}>
            <Text
              style={[
                styles.iconColor,
                isSelectedOption ? styles.iconSelected : styles.icon,
              ]}>
              {isSelectedOption ? '◉' : '○'}
            </Text>
            <Text style={styles.option}>{item.label}</Text>
          </View>
        </Pressable>
      );
    })}
  </React.Fragment>
);

export default RadioButton;
