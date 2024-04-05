import { View, Text, Image } from 'react-native'
import React from 'react'

import AnaMenu from '../components/AnaMenu'
import BulunduguMekan from '../components/BulunduguMekan';
import Yonlendir from '../components/Yonlendir';
import InstaStorys from '../components/InstaStorys';
import Islemler from '../components/Islemler';
import HosGelin from '../components/HosGelin';


const AnasayfaG = () => {
 
  return (
    <>
      <View style={{
        backgroundColor: '#121212',
        width: '100%',
        height: '100%',
      }}>
        
        <AnaMenu />

        <InstaStorys />

        <BulunduguMekan />

        {/* <Yonlendir /> */}

        <HosGelin />

        <Islemler />

      </View>
    </>
  )
}

export default AnasayfaG