import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';
import React from 'react'


import CarpiSvg from '../svg/CarpiSvg'

const QROkuyucu = () => {
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
                    width: '100%',
                    left: 25,
                    right: 25,
                    top: 50,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: '87%'
                    }}>
                        <Image style={{ marginLeft: 'auto', marginRight: 'auto' }} source={require("../img/logo.png")} />
                    </View>
                    <TouchableOpacity style={{ marginLeft: 'auto', marginTop: 6 }} onPress={() => handleMenuPress('AnasayfaG')}>
                        <CarpiSvg style={{ marginLeft: 'auto', marginRight: 55 }} height={25} width={25} />
                    </TouchableOpacity>
                </View>

                <View style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}>
                    <Text style={{
                        color: '#fff',
                        fontFamily: 'Poppins',
                        fontSize: 19,
                        fontWeight: '600',
                        textAlign: 'center',
                        top: 80,
                        width: 130,
                        borderBottomColor: '#AD681F',
                        borderBottomWidth: 1
                    }}>
                        Menü QR Kodu
                    </Text>
                </View>
                <Text style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    fontWeight: 'light',
                    top: 50,
                    marginTop: 50,
                    marginLeft: 5,
                    marginRight: 5
                }}>
                    Mekanda yer alan menü kare kodunu okutarak dijital menüye ulaşabilirsiniz.
                </Text>


                {/* Bu View tam içine tamamen dolduracak şekilde qr okuyucu kamera gelecek diğe kısımlarad bi değişiklik vs. durumu olmuyacak */}
                <View style={{
                    borderColor: '#fff',
                    borderWidth: 1,
                    width: '90%',
                    height: '70%',
                    borderRadius: 23,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    top: 90,
                }}>

                    <RNCamera
                        onBarCodeRead={({ data }) => {
                            console.log('QR Kod: ', data);
                            if (data === 'AnasayfaG') {
                                navigation.navigate(data); // QR kod içeriği 'AnasayfaG' ise, bu sayfaya yönlendirir
                            } else {
                                navigation.navigate('HataSayfasi'); // Aksi halde hata sayfasına yönlendirir
                            }
                        }}
                        style={{
                            width: '75%', height: '78%', borderRadius: 20, marginLeft: 'auto', marginRight: 'auto', marginTop: 20
                        }}
                    />


                </View>

            </View>
        </>
    )
}

export default QROkuyucu