import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

import YildizSvg from '../svg/YildizSvg'
import YildizBosSvg from '../svg/YildizBosSvg'

const BİMekanMekanlar = () => {
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    return (
        <>
            <ScrollView>
                <View style={{
                    height: 700
                }}>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }} onPress={() => handleMenuPress('BiMekanDetay')}>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Image style={{
                                width: 110,
                                height: 110,
                                borderRadius: 10
                            }} source={require('../img/cafee.png')} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontFamily: 'Poppins',
                                    marginTop: 10
                                }}>
                                    Moc Coffee
                                </Text>

                                <Text style={{
                                    color: '#B5B5B5',
                                    fontSize: 13,
                                    fontFamily: 'Poppins',
                                }}>
                                    Meram
                                </Text>

                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 10,
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
                                    marginTop: 10
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
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }} onPress={() => handleMenuPress('BiMekanDetay')}>

                        <View style={{ flexDirection: 'row', marginTop: 20 }} >
                            <Image style={{
                                width: 110,
                                height: 110,
                                borderRadius: 10
                            }} source={require('../img/cafee.png')} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontFamily: 'Poppins',
                                    marginTop: 10
                                }}>
                                    Starbucks
                                </Text>

                                <Text style={{
                                    color: '#B5B5B5',
                                    fontSize: 13,
                                    fontFamily: 'Poppins',
                                }}>
                                    Meram
                                </Text>

                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 10,
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
                                    marginTop: 10
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
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }} onPress={() => handleMenuPress('BiMekanDetay')}>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Image style={{
                                width: 110,
                                height: 110,
                                borderRadius: 10
                            }} source={require('../img/cafee.png')} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontFamily: 'Poppins',
                                    marginTop: 10
                                }}>
                                    Kocatepe Kahve Evi
                                </Text>

                                <Text style={{
                                    color: '#B5B5B5',
                                    fontSize: 13,
                                    fontFamily: 'Poppins',
                                }}>
                                    Meram
                                </Text>

                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 10,
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
                                    marginTop: 10
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
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }} onPress={() => handleMenuPress('BiMekanDetay')}>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Image style={{
                                width: 110,
                                height: 110,
                                borderRadius: 10
                            }} source={require('../img/cafee.png')} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontFamily: 'Poppins',
                                    marginTop: 10
                                }}>
                                    Moc Coffee
                                </Text>

                                <Text style={{
                                    color: '#B5B5B5',
                                    fontSize: 13,
                                    fontFamily: 'Poppins',
                                }}>
                                    Meram
                                </Text>

                                <View style={{
                                    flexDirection: 'row',
                                    marginTop: 10,
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
                                    marginTop: 10
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
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView >
        </>
    )
}

export default BİMekanMekanlar