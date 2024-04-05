import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

import YildizSvg from '../svg/YildizSvg';
import YildizBosSvg from '../svg/YildizBosSvg';

const KaydirmaliMekan = () => {
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    return (
        <>
            <ScrollView style={{ marginTop: 20 }} horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={{ marginRight: 15, }} onPress={() => handleMenuPress('BiMekanDetay')}>
                    <View>
                        <Image style={{
                            width: 232,
                            height: 156,
                            borderRadius: 10,
                            position: 'relative',
                        }} source={require("../img/cafee.png")} />
                        <View style={{
                            backgroundColor: '#000',
                            width: 232,
                            height: 156,
                            borderRadius: 10,
                            position: 'absolute',
                            opacity: 0.3,

                        }} />
                        <Text style={{
                            position: 'absolute',
                            fontSize: 16,
                            fontFamily: 'Poppins',
                            color: '#fff',
                            marginTop: 55,
                            marginLeft: 10
                        }}>
                            Moc Coffee
                        </Text>

                        <Text style={{
                            position: 'absolute',
                            fontSize: 12,
                            marginTop: 80,
                            marginLeft: 10,
                            fontFamily: 'Poppins',
                            color: '#B5B5B5'
                        }}>
                            Meram
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            position: 'absolute',
                            marginTop: 105,
                            marginLeft: 10
                        }}>
                            <YildizSvg style={{}} height={20} width={20} fill={'#ad681f'} />
                            <YildizSvg style={{}} height={20} width={20} fill={'#ad681f'} />
                            <YildizSvg style={{}} height={20} width={20} fill={'#ad681f'} />
                            <YildizSvg style={{}} height={20} width={20} fill={'#ad681f'} />
                            <YildizBosSvg style={{}} height={20} width={20} />
                        </View>
                        <View style={{
                            width: 232,
                            flexDirection: 'row',
                            position: 'absolute',
                            marginLeft: 10,
                            marginTop: 130
                        }}>
                            <Text style={{
                                position: 'absolute',
                                fontSize: 12,
                                fontFamily: 'Poppins',
                                color: '#B5B5B5',
                            }}>
                                2.563 Yorum
                            </Text>
                            <Text style={{
                                position: 'absolute',
                                fontSize: 12,
                                fontFamily: 'Poppins',
                                color: '#B5B5B5',
                                marginLeft: 115
                            }}>
                                0,15 km uzaklıkta
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginRight: 15, }} onPress={() => handleMenuPress('BiMekanDetay')}>
                    <View style={{ marginRight: 15 }}>
                        <Image style={{
                            width: 232,
                            height: 156,
                            borderRadius: 10,
                            position: 'relative',
                        }} source={require("../img/cafee.png")} />
                        <View style={{
                            backgroundColor: '#000',
                            width: 232,
                            height: 156,
                            borderRadius: 10,
                            position: 'absolute',
                            opacity: 0.3,

                        }} />
                        <Text style={{
                            position: 'absolute',
                            fontSize: 16,
                            fontFamily: 'Poppins',
                            color: '#fff',
                            marginTop: 55,
                            marginLeft: 10
                        }}>
                            Starbucks
                        </Text>

                        <Text style={{
                            position: 'absolute',
                            fontSize: 12,
                            marginTop: 80,
                            marginLeft: 10,
                            fontFamily: 'Poppins',
                            color: '#B5B5B5'
                        }}>
                            Meram
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            position: 'absolute',
                            marginTop: 105,
                            marginLeft: 10
                        }}>
                            <YildizSvg style={{}} height={20} width={20} fill={'#ad681f'} />
                            <YildizSvg style={{}} height={20} width={20} fill={'#ad681f'} />
                            <YildizSvg style={{}} height={20} width={20} fill={'#ad681f'} />
                            <YildizSvg style={{}} height={20} width={20} fill={'#ad681f'} />
                            <YildizBosSvg style={{}} height={20} width={20} />
                        </View>
                        <View style={{
                            width: 232,
                            flexDirection: 'row',
                            position: 'absolute',
                            marginLeft: 10,
                            marginTop: 130
                        }}>
                            <Text style={{
                                position: 'absolute',
                                fontSize: 12,
                                fontFamily: 'Poppins',
                                color: '#B5B5B5',
                            }}>
                                2.563 Yorum
                            </Text>
                            <Text style={{
                                position: 'absolute',
                                fontSize: 12,
                                fontFamily: 'Poppins',
                                color: '#B5B5B5',
                                marginLeft: 115
                            }}>
                                0,15 km uzaklıkta
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </>
    )
}

export default KaydirmaliMekan