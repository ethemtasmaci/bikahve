import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const Yonlendir = () => {
    const navigation = useNavigation();

    const onPressMenu = () => {
        navigation.navigate('GirisYap');
    };
    return (
        <>
            <View style={{
                width: '90%',
                height: 50,
                backgroundColor: '#2A2A2A',
                borderLeftColor: '#AD681F',
                borderLeftWidth: 10,
                borderRadius: 10,
                marginTop: 13,
                marginRight: 'auto',
                marginLeft: 'auto',
            }}>
                <Text style={{
                    color: '#B5B5B5',
                    width: '89%',
                    height: 67,
                    marginTop: 4,
                    marginLeft: 15,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    Uygulamayı tüm özellikleri ile kullanabilmek için lütfen
                    <TouchableOpacity onPress={onPressMenu}>
                        <Text style={{ fontWeight: '800', color: '#B5B5B5', }}> kayıt olun </Text>
                    </TouchableOpacity>
                    veya
                    <TouchableOpacity onPress={onPressMenu}>
                        <Text style={{ fontWeight: '800', color: '#B5B5B5', }}> giriş yapınız</Text>
                    </TouchableOpacity>
                    .
                </Text>
            </View>
        </>
    )
}

export default Yonlendir