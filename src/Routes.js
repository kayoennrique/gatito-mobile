import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Services from './screens/Services';
import Cart from './screens/Cart';
import { colors } from './styles';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.purple,
        inactiveTintColor: colors.clear,
        activeBackgroundColor: colors.purple,
        inactiveBackgroundColor: colors.orange,
        style: {
          height: 70,
        },
        labelStyle: {
          width: '100%',
          flex: 1,
          fontWeight: 'bold',
          fontSize: 16,
          lineHeight: 21,
          marginTop: 3,
          paddingTop: 21,
          backgroundColor: colors.orange
        },
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="Serviços" component={Services} />
      <Tab.Screen name="Carrinho" component={Cart} />
    </Tab.Navigator>
  </NavigationContainer>
}