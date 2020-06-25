import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import Login from './screens/Login'
import ShowCactus from './screens/ShowCactus'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ShowCactus" component={ShowCactus} 
          options={({route}) => ({title: route.params?.item?.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

