import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const OnKisim1 = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <Image source={require('../img/onkisim1.png')} style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, resizeMode: 'cover' }} />
    <LinearGradient
      colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,1)']}
      style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
    />

    <View style={{
      marginTop: 551
    }}>
      <Text style={{
        color: '#fff',
        fontSize: 27,
        fontFamily: 'Poppins',
        fontWeight: '800',
        width: '60%',
        left: 24
      }}>
        Kahve'nin büyüsünü
        keşfedin!
      </Text>
      <Text style={{
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: 'light',
        width: '60%',
        left: 24,
        marginTop: 17
      }}>
        Kahve dünyasının büyülü sesine
        kulak verin.
      </Text>
    </View>
    <View style={{
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <View style={{
        width: 120,
        height: 4,
        // marginTop: 63,
        marginTop: 33,
        borderRadius: 50,
        backgroundColor: '#A1541E',
      }} />

      <View style={{
        width: 120,
        height: 4,
        // marginTop: 63,
        marginTop: 33,
        marginLeft: 11,
        borderRadius: 50,
        backgroundColor: '#978D86',
      }} />

      <View style={{
        width: 120,
        height: 4,
        // marginTop: 63,
        marginTop: 33,
        marginLeft: 11,
        borderRadius: 50,
        backgroundColor: '#978D86',
      }} />
    </View>

    <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
      <View style={{
        width: 380,
        height: 60,
        backgroundColor: '#582E11',
        borderRadius: 35,
        // marginTop: 58
        marginTop: 38
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('OnKisim2')}>
          <Text style={{
            color: '#fff',
            fontSize: 18,
            marginTop: 17,
            fontFamily: 'Poppins',
            fontWeight: 'light',
            textAlign: 'center',
            width: '100%'
          }}>İleri</Text>
        </TouchableOpacity>
      </View>
    </View>

  </View>
);

export default OnKisim1;
