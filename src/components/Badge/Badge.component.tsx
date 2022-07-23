import * as React from 'react';
import { Text, View } from 'react-native';

import styles from './Badge.styles';

import type { Props } from './Badge.types';

const Badge = ({ label, variant }: Props) => (
  <View style={[styles.badgeContainer, styles[variant]]}>
    <Text
      style={[
        styles.badgeText,
        variant === 'success' ? styles.successText : styles.pendingText,
      ]}>
      {label}
    </Text>
  </View>
);

export default Badge;
