import { View, Text } from 'react-native'
import React from 'react'

const Yonlendir = () => {
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
                    marginTop: 6,
                    marginLeft: 15,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    Uygulamayı tüm özellikleri ile kullanabilmek için lütfen <Text style={{ fontWeight: '800' }}>kayıt olun</Text > veya <Text style={{ fontWeight: '800' }}>giriş yapınız</Text>.
                </Text>
            </View>
        </>
    )
}

export default Yonlendir