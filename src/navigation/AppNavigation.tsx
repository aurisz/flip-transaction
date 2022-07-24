import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TransactionList from '@screens/TransactionList';
import TransactionDetail from '@screens/TransactionDetail';
import routes from './routes';

const Stack = createNativeStackNavigator();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={routes.TransactionList}>
      <Stack.Screen
        name={routes.TransactionList}
        component={TransactionList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.TransactionDetail}
        component={TransactionDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
