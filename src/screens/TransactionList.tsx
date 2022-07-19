import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { HomeScreenNavigationProp } from '../types';

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

function TransactionList({ navigation }: HomeScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Transaction List</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('TransactionDetail')}
      />
    </View>
  );
}

export default TransactionList;
