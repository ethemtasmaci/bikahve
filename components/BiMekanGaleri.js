import { View, Text, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import VideoBaslatSvg from '../svg/VideoBaslatSvg'

const BiMekanGaleri = () => {
    return (
        <>
            <View style={{
                height: 80,
                marginTop: 40,

            }}>
                <ScrollView style={{ flexDirection: 'row' }} horizontal showsHorizontalScrollIndicator={false}>

                    <Image style={{
                        width: 75,
                        height: 75,
                        marginRight: 10,
                        position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }} source={require("../img/BiMekanVideo.png")} />
                    <VideoBaslatSvg height={28} width={28} style={{
                        position: 'absolute',
                        top: 25,
                        left: 25,
                    }} />

                    <Image style={{
                        width: 75,
                        height: 75,
                        marginRight: 10
                    }} source={require("../img/MocCafeGaleri1.png")} />

                    <Image style={{
                        width: 75,
                        height: 75,
                        marginRight: 10
                    }} source={require("../img/MocCafeGaleri1.png")} />

                    <Image style={{
                        width: 75,
                        height: 75,
                        marginRight: 10
                    }} source={require("../img/MocCafeGaleri1.png")} />

                    <Image style={{
                        width: 75,
                        height: 75,
                        marginRight: 10
                    }} source={require("../img/MocCafeGaleri1.png")} />

                    <Image style={{
                        width: 75,
                        height: 75,
                        marginRight: 10
                    }} source={require("../img/MocCafeGaleri1.png")} />
                </ScrollView>
            </View>
        </>
    )
}

export default BiMekanGaleri