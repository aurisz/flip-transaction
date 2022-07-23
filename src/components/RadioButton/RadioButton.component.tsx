import * as React from 'react';
import { View, Text, Pressable } from 'react-native';

import getStyles from './RadioButton.styles';

import type { Props, OptionProps } from './RadioButton.types';

const RadioButtonOption = ({ option, onSelect, selected }: OptionProps) => {
  const isSelectedOption = option.value === selected.value;
  const styles = React.useMemo(
    () => getStyles(isSelectedOption),
    [isSelectedOption],
  );

  const handleSelectRadio = () => onSelect(option);

  return (
    <Pressable onPress={handleSelectRadio}>
      <View style={styles.optionContainer}>
        <Text style={styles.icon}>{isSelectedOption ? '◉' : '○'}</Text>
        <Text style={styles.option}>{option.label}</Text>
      </View>
    </Pressable>
  );
};

const RadioButton = ({ options, onSelect, selected }: Props) => (
  <React.Fragment>
    {options.map(option => (
      <RadioButtonOption
        key={option.value}
        option={option}
        onSelect={onSelect}
        selected={selected}
      />
    ))}
  </React.Fragment>
);

export default RadioButton;
