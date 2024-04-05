import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useMemo } from 'react'
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

import GeriSvg from '../svg/GeriSvg'
import KullaniciSvg from '../svg/KullaniciSvg'
import DetayKisilerSvg from '../svg/DetayKisilerSvg'
import TarihSvg from '../svg/TarihSvg'


const KisiselBilgiler = () => {
  const [value, setValue] = useState('');
  const navigation = useNavigation();
  const [date, setDate] = useState('');

  const handleDateChange = (text) => {
    // Girilen tarihin 10 karakteri geçmesini engelle
    if (text.length <= 10) {
      // Girilen tarihi istenen formata dönüştür: dd/mm/yyyy
      let formattedDate = text.replace(/\//g, ''); // Girilen tarih formatından '/' karakterlerini kaldır
      if (formattedDate.length > 2) {
        formattedDate = formattedDate.replace(/(\d{2})(\d{0,2})/, '$1/$2'); // İlk 2 karakterden sonra '/' ekle
      }
      if (formattedDate.length > 5) {
        formattedDate = formattedDate.replace(/(\d{2})\/(\d{2})(\d{0,4})/, '$1/$2/$3'); // Sonraki 2 karakterden sonra '/' ekle
      }
      if (formattedDate.length > 9) {
        formattedDate = formattedDate.replace(/(\d{2})\/(\d{2})\/(\d{4})(\d{0,4})/, '$1/$2/$3'); // Yıl kısmına kadar 4 karakter girildiyse, sonraki karakterleri göz ardı et
      }
      // Güncellenmiş tarihi set et
      setDate(formattedDate);
    }
  };

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

          <TouchableOpacity onPress={() => handleMenuPress('DogralulamaYHO')}>
            <GeriSvg height={30} width={30} fiil={'#fff'} />
          </TouchableOpacity>

          <Text style={{
            color: '#fff',
            fontFamily: 'Poppins',
            fontSize: 27,
            fontWeight: 'medium',
            marginTop: 37
          }}>Kişisel Bilgileriniz</Text>

          <Text style={{
            color: '#D8D8D8',
            fontSize: 16,
            fontFamily: 'Poppins',
            fontWeight: 'light',
          }}>
            Bilgilerinizi Giriniz
          </Text>

          <View>
            <Text style={{
              color: '#D8D8D8',
              marginTop: 70,
              fontFamily: 'Poppins',
              fontSize: 16,
              paddingTop: 0
            }}>Adınız</Text>
            <View style={{ width: '100%', height: 50, marginTop: 15, borderRadius: 50, borderWidth: 1, borderColor: '#BCB8B6', flexDirection: 'row' }}>
              <KullaniciSvg fill={'#fff'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, left: 8 }} />
              <TextInput style={{
                flex: 1,
                color: '#fff',
                paddingHorizontal: 10
              }}
                placeholderTextColor="#fff"
                placeholder='Örn. Ahmet'
              />
            </View>
          </View>

          <View>
            <Text style={{
              color: '#D8D8D8',
              marginTop: 25,
              fontFamily: 'Poppins',
              fontSize: 16,
              paddingTop: 0
            }}>Adınız</Text>
            <View style={{ width: '100%', height: 50, marginTop: 15, borderRadius: 50, borderWidth: 1, borderColor: '#BCB8B6', flexDirection: 'row' }}>
              <DetayKisilerSvg fill={'#fff'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, left: 8 }} />
              <TextInput style={{
                flex: 1,
                color: '#fff',
                paddingHorizontal: 10
              }}
                placeholderTextColor="#fff"
                placeholder='Örn. Yılmaz'
              />
            </View>
          </View>

          <View>
            <Text style={{
              color: '#D8D8D8',
              marginTop: 25,
              fontFamily: 'Poppins',
              fontSize: 16,
              paddingTop: 0
            }}>Doğum Tarihiniz</Text>
            <View style={{ width: '100%', height: 50, marginTop: 15, borderRadius: 50, borderWidth: 1, borderColor: '#BCB8B6', flexDirection: 'row' }}>
              <TarihSvg fill={'#fff'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, left: 8 }} />
              <TextInput
                style={{
                  flex: 1,
                  color: '#fff',
                  paddingHorizontal: 10
                }}
                placeholderTextColor="#fff"
                placeholder='Örn. 19/01/1993'
                value={date}
                onChangeText={handleDateChange}
              />
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.text}>Cinsiyetiniz</Text>
            <View style={styles.radioGroup}>
              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={styles.radioButtonContainer}>
                  <RadioButton.Item value="kadın" color="#fff" />
                  <Text style={{ color: '#fff', marginLeft: -15 }}>Kadın</Text>
                  <RadioButton.Item value="erkek" color="#fff" />
                  <Text style={{ color: '#fff', marginLeft: -15 }}>Erkek</Text>
                </View>
              </RadioButton.Group>
            </View>
          </View>

          <TouchableOpacity onPress={() => handleMenuPress('Sifre')}>
            <View style={{
              marginTop: 82,
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
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 'auto',
    marginTop: 20,
    marginLeft: -15
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins',
    marginLeft: -50
  },
  radioGroup: {
    flexDirection: 'row',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default KisiselBilgiler