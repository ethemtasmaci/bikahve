import { View, Text, Image } from 'react-native'
import React from 'react'
import MenuSvg from '../svg/MenuSvg'


const AnaMenu = () => {
    return (
        <View style={{
            flexDirection: 'row',
            marginTop: 47,
            marginLeft: 25,
            marginRight: 30,
            width: '90%',
            height: 50
        }}>
            <Image style={{

            }} source={require("../img/logo.png")} />
            <MenuSvg style={{ marginLeft: 'auto' }} height={32} width={32} />
        </View>
    )
}

export default AnaMenu