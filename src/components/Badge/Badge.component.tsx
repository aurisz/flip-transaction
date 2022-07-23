import * as React from 'react';
import { Text, View } from 'react-native';

import styles from './Badge.styles';

import type { Props } from './Badge.types';

const Badge = ({ label, variant }: Props) => (
  <View style={styles.badgeContainer}>
    <Text style={[styles.badgeText, styles[variant]]}>{label}</Text>
  </View>
);

export default Badge;
