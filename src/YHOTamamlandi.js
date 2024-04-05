import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const YHOTamamlandi = () => {
  const navigation = useNavigation();

  const handleMenuPress = (screenName) => {
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };
  return (
    <>
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#121212',
        justifyContent: 'center'
      }}>

        <Image style={{ height: 309, width: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: 90 }} source={require('../img/HesapBasarili.png')} />

        <View style={{
          width: '85%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>

          <Text style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '70%',
            fontFamily: 'Poppins',
            color: '#fff',
            fontSize: 27,
            textAlign: 'center',
          }}
          >Hesabınız başarıyla
            oluşturuldu</Text>

          <Text style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            color: '#B9B9B9',
            fontFamily: 'Poppins',
            fontSize: 16,
            fontWeight: 'light',
            marginTop: 12,
            textAlign: 'center',
          }}>Kullanıcı girişi yaparak kafelog'un ayrıcalıklarla dünyasını keşfetmeye hazır mısın?</Text>


          <TouchableOpacity onPress={() => handleMenuPress('AnasayfaG')}>
            <View style={{
              marginTop: 122,
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
                Keşfetmeye Başla
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default YHOTamamlandi