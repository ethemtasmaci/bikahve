import { View, Text } from 'react-native'
import React from 'react'
import KonumSvg from '../svg/KonumSvg'
import MenuAciciSvg from '../svg/MenuAciciSvg'

const BulunduguMekan = () => {
    return (
        <>
            <View style={{
                flexDirection: 'row',
                width: '100%',
                height: 50,
                marginLeft: 35,
                marginRight: 35,
            }}>
                <KonumSvg height={22} width={22} style={{ marginTop: 10, marginRight: 15 }} />
                <View>
                    <Text style={{
                        color: '#B5B5B5',
                        fontFamily: 'Poppins',
                        fontSize: 14,
                    }}>
                        Bulunduğunuz Mekan
                    </Text>
                    <Text style={{
                        color: '#AD681F',
                        fontFamily: 'Poppins',
                        fontSize: 14,
                    }}>
                        Moc Coffee Meram
                    </Text>

                </View>
                <MenuAciciSvg style={{ marginLeft: 'auto', right: 70, marginTop:10 }} height={12} width={12} />
            </View>
        </>
    )
}

export default BulunduguMekan