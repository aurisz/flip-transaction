import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

type Option = {
  label: string;
  value: string;
};

interface Props {
  onSelect: (arg0: Option) => void;
  options: Option[];
  selected: Option;
}

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

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    fontSize: 28,
    color: 'orange',
  },
  option: {
    fontSize: 20,
    color: 'black',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
});

export default RadioButton;
