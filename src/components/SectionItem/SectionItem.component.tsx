import * as React from 'react';
import { Text, View } from 'react-native';

import styles from './SectionItem.styles';

import type { Props } from './SectionItem.types';

const SectionItem = ({ title, children }: Props) => (
  <View style={styles.column}>
    <Text style={styles.title}>{title.toUpperCase()}</Text>
    <Text style={styles.text}>{children}</Text>
  </View>
);

export default SectionItem;
