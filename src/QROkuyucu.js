import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';

import CarpiSvg from '../svg/CarpiSvg';
import QRGecis from '../components/QRGecis';

const QROkuyucu = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [scanned, setScanned] = useState(false);

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };

    const onSuccess = (e) => {
        try {
            if (!scanned && e.data) {
                setLoading(true); // Yükleme ekranını göster
                setTimeout(() => {
                    // QR kodu değeri varsa işlem yap
                    console.log(`QR Kod: ${e.data}`);
                    // İstediğiniz yönlendirmeyi yapabilirsiniz
                    if (e.data === 'https://ljajans.com.tr/') {
                        handleMenuPress('IsletmeMenu');
                    } else {
                        console.log('Tanımlı bir yönlendirme bulunamadı.');
                        handleMenuPress('IsletmeMenu');
                    }
                    setScanned(true);
                    setLoading(false); // Yükleme ekranını gizle
                }, 4000); // 5 saniye gecikme                
            } else {
                // QR kodu değeri yoksa veya daha önce tarandıysa işlem yapma
                console.log('QR kodu bulunamadı veya daha önce tarandı.');
            }
        } catch (error) {
            // Hata durumunda console'a hatayı yazdır
            console.error('Bir hata oluştu:', error);
            setLoading(false); // Yükleme ekranını gizle
        }
    };

    return (
        <View style={{
            flex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: '#121212',
            position: 'relative',
        }}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}>
                {loading ? <QRGecis /> : <></>}
            </View>
            <View style={{ flex: 1 }}>
                <View style={{
                    left: 25,
                    right: 25,
                    top: 50,
                    flexDirection: 'row',
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
                    <QRCodeScanner
                        onRead={onSuccess}
                        containerStyle={{ flex: 1 }}
                        cameraStyle={{
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            width: '100%',
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default QROkuyucu;