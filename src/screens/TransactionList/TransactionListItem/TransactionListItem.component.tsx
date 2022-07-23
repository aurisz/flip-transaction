import * as React from 'react';
import { View, Text, Pressable } from 'react-native';

import TransferLabel from '@components/TransferLabel';
import Badge, { type BadgeVariant } from '@components/Badge';
import getStyles from './TransactionListItem.styles';

import type { TransactionListItemProps } from './TransactionListItem.types';

const TransactionListItem = (props: TransactionListItemProps) => {
  const badgeVariant = props.status as BadgeVariant;
  const styles = React.useMemo(() => getStyles(props.status), [props.status]);

  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <View>
        <TransferLabel
          senderBank={props.senderBank}
          beneficiaryBank={props.beneficiaryBank}
        />
        <Text style={styles.text}>{props.beneficiaryName}</Text>
        <View style={styles.additionalInfo}>
          <Text style={styles.text}>{props.amountFormatted}</Text>
          <Text style={styles.bullet}>●</Text>
          <Text style={styles.text}>{props.createdAt}</Text>
        </View>
      </View>
      <Badge variant={badgeVariant} label={props.statusLabel} />
    </Pressable>
  );
};

export default TransactionListItem;
