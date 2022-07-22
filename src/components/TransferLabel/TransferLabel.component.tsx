import * as React from 'react';
import { View, Text } from 'react-native';

import type { Props } from './TransferLabel.types';
import styles from './TransferLabel.styles';

const TransferLabel = ({ senderBank, beneficiaryBank }: Props) => (
  <View style={styles.container}>
    <Text style={styles.bankLabel}>{senderBank}</Text>
    <Text style={styles.rightArrow}>➔</Text>
    <Text style={styles.bankLabel}>{beneficiaryBank}</Text>
  </View>
);

export default TransferLabel;
