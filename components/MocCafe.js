import { View, Text, Image } from 'react-native'
import React from 'react'
import YildizSvg from '../svg/YildizSvg'
import YildizBosSvg from '../svg/YildizBosSvg'

const MocCafe = () => {
    return (
        <>
            <View style={{
                width: '100%',
                height: 75,
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    width: 75,
                    height: 75,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: 50,
                }}>
                    <Image style={{
                        width: 65,
                        height: 35,
                    }} source={require("../img/MocLogo.png")} />
                </View>
                <View style={{
                    marginLeft: 10,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontFamily: 'Poppins',
                        fontSize: 20,
                        marginTop: 2,
                    }}>Moc Coffee</Text>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 5,
                        width: '100%'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <YildizSvg style={{}} height={17} width={17} fill={'#FE9103'} />
                            <YildizSvg style={{}} height={17} width={17} fill={'#FE9103'} />
                            <YildizSvg style={{}} height={17} width={17} fill={'#FE9103'} />
                            <YildizSvg style={{}} height={17} width={17} fill={'#FE9103'} />
                            <YildizBosSvg style={{}} height={17} width={17} />
                        </View>
                        <Text style={{ fontFamily: 'Poppins', fontSize: 13, color: '#B5B5B5', marginLeft: 'auto', right: 80 }}>Meram</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 5,
                        width: '100%'
                    }}>
                        <Text style={{
                            color: '#B5B5B5',
                            fontFamily: 'Poppins',
                            fontSize: 13,
                            fontWeight: 'regular',
                        }}>2.453 Yorum</Text>

                        <Text style={{
                            color: '#B5B5B5',
                            fontFamily: 'Poppins',
                            fontSize: 13,
                            fontWeight: 'regular',
                            marginLeft: 'auto',
                            right: 80,
                        }}
                        >0,15 km uzaklıkta</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default MocCafe