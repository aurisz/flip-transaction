import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TransactionList from '@screens/TransactionList';
import TransactionDetail from '@screens/TransactionDetail';

const Stack = createNativeStackNavigator();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="TransactionList">
      <Stack.Screen
        name="TransactionList"
        component={TransactionList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetail}
        options={{ title: 'Rincian Transaksi' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
