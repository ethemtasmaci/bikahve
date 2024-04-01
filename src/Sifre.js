import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

import GeriSvg from '../svg/GeriSvg'
import TelefonSvg from '../svg/TelefonSvg'
import AnahtarSvg from '../svg/AnahtarSvg';
import GozSvg from '../svg/GozSvg';

const Sifre = () => {
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

                    <TouchableOpacity onPress={() => handleMenuPress('KisiselBilgiler')}>
                        <GeriSvg height={30} width={30} fiil={'#fff'} />
                    </TouchableOpacity>

                    <Text style={{
                        color: '#fff',
                        fontFamily: 'Poppins',
                        fontSize: 27,
                        fontWeight: 'medium',
                        marginTop: 37
                    }}>Parolanız</Text>

                    <Text style={{
                        color: '#D8D8D8',
                        fontSize: 16,
                        fontFamily: 'Poppins',
                        fontWeight: 'light',
                    }}>
                        Parolanızı Giriniz
                    </Text>

                    <View>
                        <Text style={{
                            color: '#D8D8D8',
                            top: 47,
                            fontFamily: 'Poppins',
                            fontSize: 16,
                            paddingTop: 0
                        }}>Parolanız</Text>
                        <View style={{ width: '100%', height: 50, top: 67, borderRadius: 50, borderWidth: 2, borderColor: '#7E7E7E', flexDirection: 'row' }}>
                            <AnahtarSvg fill={'#fff'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, left: 5 }} />
                            <TextInput style={{
                                flex: 1,
                                color: '#fff',
                                paddingHorizontal: 10
                            }}
                                placeholderTextColor="#fff"
                                placeholder='*********'
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={{
                            color: '#D8D8D8',
                            top: 87,
                            fontFamily: 'Poppins',
                            fontSize: 16,
                            paddingTop: 0
                        }}>Parola Tekrarı</Text>
                        <View style={{ width: '100%', height: 50, top: 97, borderRadius: 50, borderWidth: 2, borderColor: '#7E7E7E', flexDirection: 'row' }}>
                            <AnahtarSvg fill={'#fff'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, left: 5 }} />
                            <TextInput style={{
                                flex: 1,
                                color: '#fff',
                                paddingHorizontal: 10
                            }}
                                placeholderTextColor="#fff"
                                placeholder='*********'
                            />
                        </View>
                    </View>


                    <TouchableOpacity onPress={() => handleMenuPress('YHOTamamlandi')}>
                        <View style={{
                            marginTop: 412,
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
                                Tamamla
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </>
    )
}

export default Sifre