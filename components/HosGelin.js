import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import HesabimSvg from '../svg/HesabimSvg';

const HosGelin = () => {
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    return (
        <>
            <View style={{
                width: '90%',
                flexDirection: 'row',
                marginLeft: 'auto',
                marginRight: 'auto',
                left: -8
            }}>
                <View style={{
                    width: '60%',
                    height: 67,
                    backgroundColor: '#2A2A2A',
                    borderLeftColor: '#AD681F',
                    borderLeftWidth: 10,
                    borderRadius: 10,
                    marginTop: 13,
                    marginRight: 'auto',
                    marginLeft: 'auto',
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 19,
                        fontFamily: 'Poppins',
                        width: '70%',
                        left: 15,
                        top: 8,
                    }}>
                        Hoş geldin, <Text> Ahmet <Text style={{ color: '#AD681F' }}> Gökhan </Text> </Text>
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        width: '30%',
                        height: 67,
                        backgroundColor: '#2A2A2A',
                        borderLeftColor: '#B5B5B5',
                        borderLeftWidth: 10,
                        borderRadius: 10,
                        marginTop: 13,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => handleMenuPress('Hesabim')}>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <HesabimSvg height={30} width={30} />
                        <Text style={{
                            color: '#b5b5b5',
                            fontSize: 15,
                            fontFamily: 'Poppins',
                        }}>Hesabım</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default HosGelin