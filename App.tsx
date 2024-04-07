import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './src/nav/Tabs';
import {  RootParamList } from './src/types';
import InfoScreen from './src/screens/InfoScreen';
import ChatScreen from './src/screens/ChatScreen';

const Stack = createNativeStackNavigator<RootParamList>();

function Root(){
  return Tabs();
}

function App(): React.JSX.Element {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          animation:'fade_from_bottom',
          headerShown:false,
        }}>
          <Stack.Screen name="Root" component={Root}/>
          <Stack.Screen name="Info" component={InfoScreen}/>
          <Stack.Screen name="Chat" component={ChatScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
