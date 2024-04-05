import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import GeriSvg from '../svg/GeriSvg';
import KahveSvg from '../svg/KahveSvg';
import BuyutecSvg from '../svg/BuyutecSvg';
import FilirtreSvg from '../svg/FilirtreSvg';
import YakinimdekilerSvg from '../svg/YakinimdekilerSvg';
import YildizSvg from '../svg/YildizSvg';
import YildizBosSvg from '../svg/YildizBosSvg';
import KaydirmaliMekan from '../components/KaydirmaliMekan';
import AtesSvg from '../svg/AtesSvg';
import BİMekanMekanlar from '../components/BİMekanMekanlar';

const BiMekan = () => {
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    return (
        <>
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#121212'
            }}>

                <View style={{
                    width: '85%',
                    left: 25,
                    right: 25,
                    top: 50
                }}>

                    <TouchableOpacity style={{ backgroundColor: '#121212', height: 45 }} onPress={() => handleMenuPress('AnasayfaK')}>
                        <GeriSvg height={30} width={30} fiil={'#fff'} />
                    </TouchableOpacity>

                    <ScrollView>

                        <View style={{
                            marginTop: 40,
                            flexDirection: 'row',
                        }}>
                            <KahveSvg height={20} width={20} fill={'#fff'} />
                            <Text style={{
                                color: '#fff',
                                fontSize: 18,
                                fontFamily: 'Poppins',
                                fontWeight: 'regular',
                                bottom: 2,
                                left: 2,
                            }}>
                                Mekanları <Text style={{ color: '#AD681F' }}> Keşfter </Text>
                            </Text>
                        </View>

                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <View style={{ flexDirection: 'row', width: '80%', height: 60, top: 25, borderRadius: 10, backgroundColor: '#2A2A2A' }}>
                                <BuyutecSvg fill={'#d8d8d8'} height={22} width={22} style={{ marginHorizontal: 10, marginTop: 18, left: 5 }} />
                                <TextInput style={{
                                    flex: 1,
                                    color: '#fff',
                                    paddingHorizontal: 10
                                }}
                                    placeholderTextColor="#fff"
                                    placeholder='Mekan Adı'
                                />
                            </View>
                            <TouchableOpacity onPress={() => handleMenuPress('BiMekanFilitre')}>
                                <View style={{
                                    height: 60,
                                    width: 60,
                                    backgroundColor: '#2A2A2A',
                                    borderRadius: 10,
                                    top: 25,
                                    marginLeft: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <FilirtreSvg height={22} width={22} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            marginTop: 40,
                            flexDirection: 'row',
                        }}>
                            <YakinimdekilerSvg height={22} width={22} fill={'#fff'} />
                            <Text style={{
                                color: '#fff',
                                fontSize: 18,
                                fontFamily: 'Poppins',
                                fontWeight: 'regular',
                                bottom: 2,
                                left: 2,
                            }}>
                                Yakınımdakiler
                            </Text>
                        </View>

                        {/* kafelerin yana doğru kaydırmalı olan kısmının componenti */}
                        <KaydirmaliMekan />

                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                width: '49%',
                                height: 55,
                                backgroundColor: '#7D573E',
                                borderRadius: 10,
                                marginTop: 20,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <YildizSvg height={20} width={20} fill={'#fff'} />
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 16,
                                    fontFamily: 'Poppins',
                                    marginLeft: 5
                                }}>
                                    Popüler Mekanlar
                                </Text>
                            </View>


                            <View style={{
                                flexDirection: 'row',
                                width: '49%',
                                height: 55,
                                backgroundColor: '#2A2A2A',
                                borderRadius: 10,
                                marginTop: 20,
                                marginLeft: 12,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <AtesSvg height={25} width={25} fill={'#B5B5B5'} />
                                <Text style={{
                                    color: '#B5B5B5',
                                    fontSize: 16,
                                    fontFamily: 'Poppins',
                                    marginLeft: 5
                                }}>
                                    Popüler Mekanlar
                                </Text>
                            </View>
                        </View>


                        <BİMekanMekanlar />

                    </ScrollView>
                </View>
            </View>
        </>
    )
}

export default BiMekan