import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

import SifreDegistirSvg from '../svg/SifreDegistirSvg'
import GeriSvg from '../svg/GeriSvg';

const SUTamamlandi = () => {
  const navigation = useNavigation();

  const handleMenuPress = (screenName) => {
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };
  return (
    <>
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center'
      }}>
        <View style={{
          width: '85%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>

          <View style={{
            left: 10
          }}>
            <SifreDegistirSvg height={244} width={242} style={{ marginLeft: 'auto', marginRight: 'auto' }} />
          </View>

          <Text style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '70%',
            fontFamily: 'Poppins',
            color: '#121212',
            fontSize: 27,
            marginTop: 55,
            textAlign: 'center',
          }}
          >Parolanız başarıyla
            değiştirildi</Text>

          <Text style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '90%',
            color: '#B9B9B9',
            fontFamily: 'Poppins',
            fontSize: 16,
            fontWeight: 'light',
            marginTop: 12,
            textAlign: 'center',
          }}>Yeni parolanız ile giriş yaparak kafelog'un benzersiz ayrıcalıklarından yararlanmaya devam edebilirsiniz.</Text>


          <TouchableOpacity onPress={() => handleMenuPress('GirisYap')}>
            <View style={{
              marginTop: 185,
              height: 60,
              width: '100%',
              borderRadius: 35,
              backgroundColor: '#582E11',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                color: '#fff',
                fontFamily: 'Poppins',
                fontSize: 18,
                fontWeight: 'light',
                textAlign: 'center'
              }}>
                Keşfetmeye Devam Et
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default SUTamamlandi