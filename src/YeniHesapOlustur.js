import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

import GeriSvg from '../svg/GeriSvg'
import TelefonSvg from '../svg/TelefonSvg'

const YeniHesapOlustur = () => {
  const navigation = useNavigation();

  const handleMenuPress = (screenName) => {
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };
  return (
    <>
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#121212'
      }}>
        <View style={{
          width: '85%',
          left: 25,
          right: 25,
          top: 50
        }}>

          <TouchableOpacity onPress={() => handleMenuPress('GirisYap')}>
            <GeriSvg height={30} width={30} fiil={'#FFFFFF'} />
          </TouchableOpacity>

          <Text style={{
            color: '#FFFFFF',
            fontFamily: 'Poppins',
            fontSize: 27,
            fontWeight: 'medium',
            marginTop: 37
          }}>Yeni Hesap Oluştur</Text>

          <Text style={{
            color: '#D8D8D8',
            fontSize: 16,
            fontFamily: 'Poppins',
            fontWeight: 'light',
          }}>
            Bilgilerinizi Girin
          </Text>

          <View>
            <Text style={{
              color: '#D8D8D8',
              top: 70,
              fontFamily: 'Poppins',
              fontSize: 16,
              paddingTop: 0
            }}>Telefon Numaranız</Text>
            <View style={{ width: '100%', height: 50, top: 85, borderRadius: 50, borderWidth: 1, borderColor: '#BCB8B6', flexDirection: 'row' }}>
              <TelefonSvg fill={'#fff'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, left: 5 }} />
              <TextInput style={{
                flex: 1,
                color: '#fff',
                paddingHorizontal: 10
              }}
                placeholderTextColor="#fff"
                placeholder='Örn. 0505 505 5005'
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => handleMenuPress('DogralulamaYHO')}>
            <View style={{
              marginTop: 484,
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
                İleri
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default YeniHesapOlustur