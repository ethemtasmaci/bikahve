import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'


import GeriSvg from '../svg/GeriSvg'
import TelefonSvg from '../svg/TelefonSvg'
import AnahtarSvg from '../svg/AnahtarSvg'
import GozSvg from '../svg/GozSvg'

const GirisYap = () => {
    const [isSelected, setSelection] = useState(false);
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    return (
        <>
            <View style={{
                backgroundColor: '#121212',
                width: '100%',
                height: '100%',
            }}>
                <View style={{
                    width: '85%',
                    left: 25,
                    right: 25,
                    top: 50
                }}>
                    <TouchableOpacity onPress={() => handleMenuPress('AnasayfaK')}>
                        <GeriSvg height={30} width={30} fiil={'#fff'} />
                    </TouchableOpacity>

                    <Image style={{ marginLeft: 'auto', marginRight: 'auto', top: 40, height: 40, width: 120 }} source={require("../img/logo.png")} />

                    <View>
                        <Text style={{
                            color: '#fff',
                            top: 70,
                            fontFamily: 'Poppins',
                            fontSize: 16,
                            paddingTop: 0
                        }}>Telefon Numaranız</Text>
                        <View style={{ width: '100%', height: 50, top: 85, borderRadius: 50, borderWidth: 2, borderColor: '#7E7E7E', flexDirection: 'row' }}>
                            <TelefonSvg fill={'#d8d8d8'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, left: 5 }} />
                            <TextInput style={{
                                flex: 1,
                                color: '#fff',
                                paddingHorizontal: 10
                            }}
                                placeholderTextColor="#fff"
                                placeholder='0505 505 5005'
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={{
                            color: '#fff',
                            top: 110,
                            fontFamily: 'Poppins',
                            fontSize: 16,
                            paddingTop: 0
                        }}>Parolanız</Text>
                        <View style={{ width: '100%', height: 50, top: 125, borderRadius: 50, borderWidth: 2, borderColor: '#7E7E7E', flexDirection: 'row' }}>
                            <AnahtarSvg fill={'#D8D8D8'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, left: 5 }} />
                            <TextInput style={{
                                flex: 1,
                                color: '#fff',
                                paddingHorizontal: 10
                            }}
                                placeholderTextColor="#fff"
                                placeholder='*********'
                            />
                            <GozSvg fill={'#D8D8D8'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, right: 5 }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', top: 145 }}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={{ alignSelf: 'center', borderRadius: 12, }}
                                tintColors={{ true: '#FFFFFF', false: '#FFFFFF' }}
                            />
                            <Text style={{ color: '#fff', marginLeft: 8 }}>Beni Hatırla</Text>
                            <TouchableOpacity style={{ color: '#fff', marginLeft: 'auto' }} onPress={() => handleMenuPress('SifreUnuttum')}>
                                <Text style={{ color: '#fff', marginLeft: 'auto' }}>Şifreti Unuttum</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ top: 125 + 140 }}>
                        <TouchableOpacity onPress={() => handleMenuPress('AnasayfaG')}>
                            <View style={{
                                width: '100%',
                                height: 60,
                                backgroundColor: '#582E11',
                                borderRadius: 35,
                            }}>
                                <Text style={{
                                    color: '#fff',
                                    textAlign: 'center',
                                    width: '100%',
                                    fontSize: 18,
                                    fontFamily: 'Poppins',
                                    fontWeight: 'light',
                                    marginTop: 17,
                                }}>Giriş Yap</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleMenuPress('YeniHesapOlustur')}>
                            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 14, fontFamily: 'Poppins', top: 35 }}>Yeni Hesap Oluştur</Text>
                        </TouchableOpacity>

                        <View style={{
                            flexDirection: 'row',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}>
                            <View style={{ borderBottomColor: '#2D2D2D', borderBottomWidth: 1, height: 1, width: '45%', marginTop: 60 }} />
                            <Text style={{
                                color: '#2D2D2D',
                                textAlign: 'center',
                                fontSize: 14,
                                fontFamily: 'Poppins',
                                marginTop: 50,
                                marginLeft: 5,
                                marginRight: 5
                            }}> veya </Text>
                            <View style={{ borderBottomColor: '#2D2D2D', borderBottomWidth: 1, height: 1, width: '45%', marginTop: 60 }} />
                        </View>


                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                            <View style={{
                                width: 60,
                                height: 60,
                                borderRadius: 10,
                                borderColor: '#2D2D2D',
                                borderWidth: 1,
                                backgroundColor: '#121212',
                                top: 50,
                            }}>
                                <Image style={{ marginLeft: 'auto', marginRight: 'auto', top: 15 }} source={require("../img/google-svgrepo-com.png")} />
                            </View>


                            <View style={{
                                width: 60,
                                height: 60,
                                borderRadius: 10,
                                borderColor: '#2D2D2D',
                                borderWidth: 1,
                                backgroundColor: '#121212',
                                top: 50,
                                marginLeft: 35
                            }}>
                                <Image style={{ marginLeft: 'auto', marginRight: 'auto', top: 15 }} source={require("../img/apple-round-svgrepo-com.png")} />
                            </View>


                            <View style={{
                                width: 60,
                                height: 60,
                                borderRadius: 10,
                                borderColor: '#2D2D2D',
                                borderWidth: 1,
                                backgroundColor: '#121212',
                                top: 50,
                                marginLeft: 35
                            }}>
                                <Image style={{ marginLeft: 'auto', marginRight: 'auto', top: 15 }} source={require("../img/facebook-svgrepo-com.png")} />
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        </>
    )
}

export default GirisYap