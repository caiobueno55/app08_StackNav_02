import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './src/Telas/Principal';
import Paris from './src/Telas/Paris';
import Toquio from './src/Telas/Toquio';
import NovaYork from './src/Telas/NovaYork';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen 
          name="Principal" 
          component={Principal} 
          options={{
            title: 'Bem-vindo(a) ao Guia',
            headerStyle: { backgroundColor: '#1E3A8A' },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen 
          name="Paris" 
          component={Paris} 
          options={{
            title: 'França - Paris',
            headerStyle: { backgroundColor: '#E11D48' },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen 
          name="Toquio" 
          component={Toquio} 
          options={{
            title: 'Japão - Tóquio',
            headerStyle: { backgroundColor: '#059669' },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen 
          name="NovaYork" 
          component={NovaYork} 
          options={{
            title: 'EUA - Nova York',
            headerStyle: { backgroundColor: '#D97706' },
            headerTintColor: '#FFF',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}