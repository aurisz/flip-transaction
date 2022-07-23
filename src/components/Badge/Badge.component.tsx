import * as React from 'react';
import { Text, View } from 'react-native';

import getStyles from './Badge.styles';

import type { Props } from './Badge.types';

const Badge = ({ label, variant }: Props) => {
  const styles = React.useMemo(() => getStyles(variant), [variant]);

  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{label}</Text>
    </View>
  );
};

export default Badge;
