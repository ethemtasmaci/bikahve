import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

import KahveSvg from '../svg/KahveSvg';
import QRMenu from '../svg/QRMenu';
import SosyalSvg from '../svg/SosyalSvg';
import FirsatSvg from '../svg/FirsatSvg';
import MekanSvg from '../svg/MekanSvg';
import MarketSvg from '../svg/MarketSvg';

const Islemler = () => {
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    return (
        <>
            <View style={{
                flexDirection: 'row',
                width: '90%',
                marginRight: 'auto',
                left: 15,
                marginTop: 34,
                marginBottom: 15
            }}>
                <KahveSvg height={21} width={21} fill={'#fff'} />
                <Text style={{
                    color: '#fff',
                    fontFamily: 'Poppins',
                    fontSize: 18,
                }}>
                    İşlemler
                </Text>
            </View>

            <View style={{
                width: '100%',
            }}>
                <View style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity onPress={() => handleMenuPress('QROkuyucu')}>
                    {/* <TouchableOpacity onPress={() => handleMenuPress('IsletmeMenu')}> */}
                        <View style={{
                            height: 120,
                            width: 120,
                            backgroundColor: '#2A2A2A',
                            borderRadius: 10,
                            marginRight: 11,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <QRMenu height={41} width={41} />
                            <Text style={{
                                color: '#fff',
                                fontFamily: 'Poppins',
                                fontSize: 19,
                                marginTop: 6,
                            }}>
                                bi<Text style={{ color: '#AD681F' }}>menü</Text>
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{
                        height: 120,
                        width: 120,
                        backgroundColor: '#2A2A2A',
                        marginRight: 11,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <SosyalSvg height={41} width={65.15} />
                        <Text style={{
                            color: '#fff',
                            fontFamily: 'Poppins',
                            fontSize: 19,
                            marginTop: 6,
                        }}>
                            bi<Text style={{ color: '#AD681F' }}>sosyal</Text>
                        </Text>
                    </View>

                    <View style={{
                        height: 120,
                        width: 120,
                        backgroundColor: '#2A2A2A',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <FirsatSvg height={41} width={50} />
                        <Text style={{
                            color: '#fff',
                            fontFamily: 'Poppins',
                            fontSize: 19,
                            marginTop: 6,
                        }}>
                            bi<Text style={{ color: '#AD681F' }}>fırsat</Text>
                        </Text>
                    </View>

                </View>
            </View>


            <View style={{
                width: '100%',
                marginTop: 12,
            }}>
                <View style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    flexDirection: 'row',
                }}>

                    <TouchableOpacity onPress={() => handleMenuPress('BiMekan')}>
                        <View style={{
                            height: 120,
                            width: 120,
                            backgroundColor: '#2A2A2A',
                            borderRadius: 10,
                            marginRight: 11,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <MekanSvg height={41} width={41} />
                            <Text style={{
                                color: '#fff',
                                fontFamily: 'Poppins',
                                fontSize: 19,
                                marginTop: 6,
                            }}>
                                bi<Text style={{ color: '#AD681F' }}>mekan</Text>
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{
                        height: 120,
                        width: 120,
                        backgroundColor: '#2A2A2A',
                        marginRight: 11,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <MarketSvg height={41} width={50} />
                        <Text style={{
                            color: '#fff',
                            fontFamily: 'Poppins',
                            fontSize: 19,
                            marginTop: 6,
                        }}>
                            bi<Text style={{ color: '#AD681F' }}>market</Text>
                        </Text>
                    </View>

                    <View style={{
                        height: 120,
                        width: 120,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                    </View>

                </View>
            </View>
        </>
    )
}

export default Islemler