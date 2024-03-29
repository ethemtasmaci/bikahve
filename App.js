import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AnasayfaG from './src/AnasayfaG';
import AnasayfaK from './src/AnasayfaK';

import OnKisim1 from './src/OnKisim1';
import OnKisim2 from './src/OnKisim2';
import OnKisim3 from './src/OnKisim3';

const Stack = createStackNavigator();

function App() {
   useEffect(() => {
    if (Platform.OS === "android") {
      // SplashScreen.hide() çağrıldıktan 3 saniye sonra açılış ekranını gizle
      setTimeout(() => {
        SplashScreen.hide();
      }, 3000); // 3000 milisaniye (3 saniye)
    }
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnKisim1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnKisim1" component={OnKisim1} />
        <Stack.Screen name="OnKisim2" component={OnKisim2} />
        <Stack.Screen name="OnKisim3" component={OnKisim3} />
        <Stack.Screen name="AnasayfaG" component={AnasayfaG} />
        <Stack.Screen name="AnasayfaK" component={AnasayfaK} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
