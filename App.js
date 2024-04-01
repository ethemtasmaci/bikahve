import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import YanMenu from './components/YanMenu';
import AnaMenu from './components/AnaMenu';

import AnasayfaG from './src/AnasayfaG';
import AnasayfaK from './src/AnasayfaK';
import OnKisim1 from './src/OnKisim1';
import OnKisim2 from './src/OnKisim2';
import OnKisim3 from './src/OnKisim3';
import GirisYap from './src/GirisYap';
import SifreUnuttum from './src/SifreUnuttum';
import DogralulamaSU from './src/DogralulamaSU';
import YeniParola from './src/YeniParola';
import SUTamamlandi from './src/SUTamamlandi';
import YeniHesapOlustur from './src/YeniHesapOlustur';
import DogralulamaYHO from './src/DogralulamaYHO';
import KisiselBilgiler from './src/KisiselBilgiler';
import Sifre from './src/Sifre';
import YHOTamamlandi from './src/YHOTamamlandi';
import Hesabim from './src/Hesabim';

const Drawer = createDrawerNavigator();

function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      setTimeout(() => {
        SplashScreen.hide();
      }, 3000);
    }
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="OnKisim1"
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <AnaMenu {...props} />}
      >
        <Drawer.Screen name="AnaMenu" component={AnaMenu} />
        <Drawer.Screen name="YanMenu" component={YanMenu} />

        <Drawer.Screen name="OnKisim1" component={OnKisim1} />
        <Drawer.Screen name="OnKisim2" component={OnKisim2} />
        <Drawer.Screen name="OnKisim3" component={OnKisim3} />

        <Drawer.Screen name="AnasayfaG" component={AnasayfaG} />
        <Drawer.Screen name="AnasayfaK" component={AnasayfaK} />
        <Drawer.Screen name="Hesabim" component={Hesabim} />

        <Drawer.Screen name="GirisYap" component={GirisYap} />
        
        <Drawer.Screen name="SifreUnuttum" component={SifreUnuttum} />
        <Drawer.Screen name="DogralulamaSU" component={DogralulamaSU} />
        <Drawer.Screen name="YeniParola" component={YeniParola} />
        <Drawer.Screen name="SUTamamlandi" component={SUTamamlandi} />

        <Drawer.Screen name="YeniHesapOlustur" component={YeniHesapOlustur} />
        <Drawer.Screen name="DogralulamaYHO" component={DogralulamaYHO} />
        <Drawer.Screen name="KisiselBilgiler" component={KisiselBilgiler} />
        <Drawer.Screen name="Sifre" component={Sifre} />
        <Drawer.Screen name="YHOTamamlandi" component={YHOTamamlandi} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
