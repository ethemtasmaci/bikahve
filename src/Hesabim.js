import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import CarpiSvg from '../svg/CarpiSvg';
import OnaySvg from '../svg/OnaySvg';
import KahveCekirdekSvg from '../svg/KahveCekirdekSvg';
import KullaniciSvg from '../svg/KullaniciSvg';
import YonlendirSvg from '../svg/YonlendirSvg';
import KullaniciSvg2 from '../svg/KullaniciSvg2';
import AyarlarSvg from '../svg/AyarlarSvg';

const Hesabim = () => {
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

                    }}>Kullanıcı Hesabı</Text>
                    <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => handleMenuPress('AnasayfaG')}>
                        <CarpiSvg style={{ marginLeft: 'auto', marginRight: 55 }} height={25} width={25} />
                    </TouchableOpacity>
                </View>

                <View style={{
                    width: '100%',
                    left: 25,
                    right: 25,
                    top: 70,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: '100%',
                        height: 60,
                    }}>

                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            marginTop: 30
                        }}>
                            <Image
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    marginRight: 'auto',
                                    borderColor: '#707070',
                                    borderWidth: 2,

                                }}
                                source={require("../img/profilfotografi.png")} />
                            <View style={{ left: -20 }}>
                                <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Poppins', marginRight: 'auto', top: 10, left: -22 }}>Ahmet <Text style={{ color: '#7D573E' }} > Gökhan </Text></Text>
                                <Text style={{
                                    color: '#fff',
                                    fontFamily: 'Poppins',
                                    fontSize: 16,
                                    left: -22,
                                    marginTop: 5
                                }}>Konya</Text>
                            </View>
                            <OnaySvg height={17} width={17} style={{ marginRight: 'auto', left: -35, top: 15 }} />

                            <TouchableOpacity onPress={() => handleMenuPress('AnasayfaK')}>
                                <Text style={{
                                    color: '#fff',
                                    width: 85,
                                    height: 31,
                                    borderRadius: 20,
                                    backgroundColor: '#7D573E',
                                    textAlign: 'center',
                                    paddingTop: 6,
                                    marginTop: 18,
                                    right: 50,
                                    marginLeft: 'auto',
                                }}>
                                    Çıkış Yap
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <View style={{
                    top: 120,
                    width: '90%',
                    height: 67,
                    backgroundColor: '#2A2A2A',
                    borderLeftColor: '#7D573E',
                    borderLeftWidth: 10,
                    borderRadius: 10,
                    marginTop: 13,
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: 50,
                        height: 50,
                        left: 10,
                        top: 8,
                        borderRadius: 25,
                        backgroundColor: '#191919',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <KahveCekirdekSvg height={27} width={27} />
                    </View>
                    <View style={{
                        left: 25,
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 15,
                            fontFamily: 'Poppins',
                        }}>
                            Çekirdek Puanın
                        </Text>
                        <Text style={{
                            color: '#fff',
                            fontSize: 15,
                            fontFamily: 'Poppins',
                        }}>
                            550
                        </Text>
                    </View>
                </View>


                <Text style={{
                    color: '#B5B5B5',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    top: 150,
                    left: 25
                }}>Menü</Text>

                <View>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        left: 25,
                        right: 25,
                        top: 170,

                    }}>
                        <KullaniciSvg2 height={28} width={28} style={{ marginRight: 10 }} />

                        <Text style={{ color: '#fff', fontFamily: 'Poppins', fontSize: 16, paddingTop: 3 }}>Profilimi Düzenle</Text>

                        <YonlendirSvg style={{ marginLeft: 'auto', marginRight: 60 }} height={12} width={15} />
                    </View>
                </View>

                <View>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        left: 25,
                        right: 25,
                        top: 190,

                    }}>
                        <AyarlarSvg height={28} width={28} style={{ marginRight: 10 }} />

                        <Text style={{ color: '#fff', fontFamily: 'Poppins', fontSize: 16, paddingTop: 3 }}>Uygulama Tercihleri</Text>

                        <YonlendirSvg style={{ marginLeft: 'auto', marginRight: 60 }} height={12} width={15} />
                    </View>
                </View>

            </View>
        </>
    )
}

export default Hesabim