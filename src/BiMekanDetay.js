import { View, Text, TouchableOpacity, Image } from 'react-native'
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'

import GeriSvg from '../svg/GeriSvg';
import MocCafe from '../components/MocCafe';
import BiMekanDetayİcons from '../components/BiMekanDetayİcons';
import BiMekanGaleri from '../components/BiMekanGaleri';
import TelefonSvg from '../svg/TelefonSvg';
import BiMekanTelefonSvg from '../svg/BiMekanTelefonSvg';
import { ScrollView } from 'react-native-gesture-handler';

const BiMekanDetay = () => {
    const [value, setValue] = useState('');
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
                    left: 25,
                    right: 25,
                    top: 50
                }}>


                    <TouchableOpacity style={{ backgroundColor: '#121212', height: 40 }} onPress={() => handleMenuPress('BiMekan')}>
                        <GeriSvg height={30} width={30} fiil={'#fff'} />
                    </TouchableOpacity>

                    <ScrollView>

                        <View style={{
                            width: '85%',
                            height: 930,
                        }}>



                            <Image style={{
                                height: 213,
                                width: '100%',
                                borderRadius: 9,
                                marginTop: 45,
                                position: 'relative' // Image'i pozisyonlandır
                            }} source={require("../img/BiMekanDeyauResim.png")} />

                            <View style={{
                                flexDirection: 'row',
                                position: 'absolute', // Radio düğmelerini Image'in üzerine yerleştir
                                marginTop: 220, // Image'in üstüne çıkacak şekilde ayarla
                                width: '100%',
                                justifyContent: 'flex-end',
                                right: 22
                            }}>
                                <RadioButton.Item
                                    style={{ width: 33, height: 17, marginRight: -7 }}
                                    value="1"
                                    color="#ffff"
                                    uncheckedColor='#fff'
                                    onPress={() => setValue("1")} // Seçildiğinde value değerini güncelle
                                />
                                <RadioButton.Item
                                    style={{ width: 33, height: 17, marginRight: -7 }}
                                    value="2"
                                    color="#ffff"
                                    uncheckedColor='#fff'
                                    onPress={() => setValue("2")} // Seçildiğinde value değerini güncelle
                                />
                                <RadioButton.Item
                                    style={{ width: 33, height: 17, marginRight: -7 }}
                                    value="3"
                                    color="#ffff"
                                    uncheckedColor='#fff'
                                    onPress={() => setValue("3")} // Seçildiğinde value değerini güncelle
                                />
                                <RadioButton.Item
                                    style={{ width: 33, height: 17, marginRight: -7 }}
                                    value="4"
                                    color="#ffff"
                                    uncheckedColor='#fff'
                                    onPress={() => setValue("4")} // Seçildiğinde value değerini güncelle
                                />
                                <RadioButton.Item
                                    style={{ width: 33, height: 17, marginRight: 5 }}
                                    value="5"
                                    color="#ffff"
                                    uncheckedColor='#fff'
                                    onPress={() => setValue("5")} // Seçildiğinde value değerini güncelle
                                />
                            </View>

                            <MocCafe />

                            <BiMekanDetayİcons />

                            <Text style={{
                                color: '#B5B5B5',
                                width: '100%',
                                fontSize: 14,
                                fontFamily: 'Poppins',
                                fontWeight: 'regular',
                                marginTop: 30,
                            }}>
                                Moc Coffee, sizi Meram'ın kalbinde sıcak bir kahve serüvenine davet ediyor. Lezzetli aromaların dans ettiği
                                bu mekan, tutkulu kahve severlerin buluşma noktası. İster bir latte'nin krema bulutunda kaybolun, ister bir
                                espresso'nun derinliklerine dalın, zevkinize uygun bir içecek burada sizi bekliyor. Huzurlu atmosferiyle
                                Moc Coffee, unutulmaz bir kahve deneyimi sunuyor.
                            </Text>

                            <BiMekanGaleri />

                            <View style={{
                                width: '100%',
                                marginTop: 20,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    width: '75%',
                                    height: 60,
                                    color: '#fff',
                                    backgroundColor: '#7D573E',
                                    borderRadius: 10,
                                    fontSize: 18,
                                    fontFamily: 'Poppins',
                                    fontWeight: 'regular',
                                    textAlign: 'center',
                                    marginRight: 20,
                                    paddingTop: 16,
                                }}>
                                    Yol Tarifi Al
                                </Text>

                                <View style={{
                                    width: '20%',
                                    height: 60,
                                    color: '#fff',
                                    backgroundColor: '#2A2A2A',
                                    borderRadius: 10,
                                    fontSize: 18,
                                    fontFamily: 'Poppins',
                                    fontWeight: 'regular',
                                    paddingTop: 18,
                                    paddingLeft: 21
                                }}>
                                    <BiMekanTelefonSvg height={25} width={25} fill={'#B5B5B5'} />
                                </View>

                            </View>

                        </View>
                    </ScrollView>
                </View>
            </View >
        </>
    )
}

export default BiMekanDetay