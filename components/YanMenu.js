import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import CarpiSvg from '../svg/CarpiSvg'
import SikcaSorularSvg from '../svg/SikcaSorularSvg'
import YonlendirSvg from '../svg/YonlendirSvg'
import HakkindaSvg from '../svg/HakkindaSvg'
import GelistirciSvg from '../svg/GelistirciSvg'

const YanMenu = () => {
  const navigation = useNavigation();

  const handleMenuPress = (screenName) => {
      navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };
  return (
    <>
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#010101',
      }}>
        <View style={{
          width: '100%',
          left: 25,
          right: 25,
          top: 50,
          flexDirection: 'row'
        }}>
          <Text style={{
            color: '#fff',
            fontFamily: 'Poppins',
            fontSize: 20,
            fontWeight: '600',

          }}>Menü</Text>
          <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => handleMenuPress('AnasayfaK')}>
            <CarpiSvg style={{ marginLeft: 'auto', marginRight: 55 }} height={25} width={25} />
          </TouchableOpacity>
        </View>

        <View style={{
          width: '100%',
          flexDirection: 'row',
          left: 25,
          right: 25,
          top: 95,

        }}>
          <SikcaSorularSvg height={25} width={25} style={{ marginRight: 7 }} />

          <Text style={{ color: '#fff', fontFamily: 'Poppins', fontSize: 16, paddingTop: 2 }}>Sıkça Sorulan Sorular</Text>

          <YonlendirSvg style={{ marginLeft: 'auto', marginRight: 60 }} height={12} width={15} />
        </View>


        <View style={{
          width: '100%',
          flexDirection: 'row',
          left: 25,
          right: 25,
          top: 95 + 33,

        }}>
          <HakkindaSvg height={25} width={25} style={{ marginRight: 7 }} />

          <Text style={{ color: '#fff', fontFamily: 'Poppins', fontSize: 16, paddingTop: 0 }}>Hakkında</Text>

          <YonlendirSvg style={{ marginLeft: 'auto', marginRight: 60 }} height={12} width={15} />
        </View>

        <View style={{
          width: '100%',
          flexDirection: 'row',
          left: 25,
          right: 25,
          top: 95 + 33 + 33,

        }}>
          <GelistirciSvg height={25} width={25} style={{ marginRight: 7 }} />

          <Text style={{ color: '#fff', fontFamily: 'Poppins', fontSize: 16, paddingTop: 0 }}>Geliştirici Ekibine Ulaşın</Text>

          <YonlendirSvg style={{ marginLeft: 'auto', marginRight: 60 }} height={12} width={15} />
        </View>

      </View>
    </>
  )
}

export default YanMenu