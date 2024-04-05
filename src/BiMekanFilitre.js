import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react'

import GeriSvg from '../svg/GeriSvg'
import Ozellikler from '../components/Ozellikler';

const BiMekanFilitre = () => {
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
                    width: '85%',
                    left: 25,
                    right: 25,
                    top: 50
                }}>
                    <TouchableOpacity onPress={() => handleMenuPress('BiMekan')}>
                        <GeriSvg height={30} width={30} fiil={'#fff'} />
                    </TouchableOpacity>

                    <Text style={{
                        color: '#fff',
                        fontFamily: 'Poppins',
                        fontSize: 27,
                        fontWeight: 'medium',
                        marginTop: 37
                    }}>
                        Filtrele
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'Poppins',
                        color: '#D8D8D8',
                        fontWeight: 'light',
                    }}>
                        Mekanları filtreleyin
                    </Text>

                    {/* <Slider
                        style={{ width: 200, height: 40 }}
                        minimumValue={0}
                        maximumValue={10}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#7D573E"
                    /> */}

                    <View>
                        <Text style={{
                            fontSize: 22,
                            fontFamily: 'Poppins',
                            color: '#fff',
                            marginTop: 25
                        }}>Uzaklık</Text>
                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                            <View style={{
                                width: '100%',
                                height: 50,
                                flexDirection: 'row',
                                marginTop: 15
                            }}>
                                <RadioButton.Item style={{ marginLeft: -25, height: 20, width: 35, }} value="1km" color="#7D573E" />
                                <View style={{
                                    borderBottomColor: '#7D573E',
                                    borderBottomWidth: 1,
                                    height: 1,
                                    width: '18%',
                                    marginTop: 8.5,
                                    marginLeft: 10,
                                }} />

                                <RadioButton.Item style={{ marginLeft: -25, height: 20, width: 35, }} value="3km" color="#7D573E" />
                                <View style={{
                                    borderBottomColor: '#7D573E',
                                    borderBottomWidth: 1,
                                    height: 1,
                                    width: '18%',
                                    marginTop: 8.5,
                                    marginLeft: 10,
                                }} />

                                <RadioButton.Item style={{ marginLeft: -25, height: 20, width: 35, }} value="5km" color="#7D573E" />
                                <View style={{
                                    borderBottomColor: '#7D573E',
                                    borderBottomWidth: 1,
                                    height: 1,
                                    width: '18%',
                                    marginTop: 8.5,
                                    marginLeft: 10,
                                }} />

                                <RadioButton.Item style={{ marginLeft: -25, height: 20, width: 35, }} value="7km" color="#7D573E" />
                                <View style={{
                                    borderBottomColor: '#7D573E',
                                    borderBottomWidth: 1,
                                    height: 1,
                                    width: '18%',
                                    marginTop: 8.5,
                                    marginLeft: 10,
                                }} />
                                <RadioButton.Item style={{ marginLeft: -25, height: 20, width: 35, }} value="10km" color="#7D573E" />
                            </View>
                        </RadioButton.Group>
                        <View style={{ flexDirection: 'row', marginTop: -17 }}>
                            <Text style={{ fontSize: 11, color: '#fff', fontFamily: 'Poppins', width: '23.5%' }}>1km</Text>
                            <Text style={{ fontSize: 11, color: '#fff', fontFamily: 'Poppins', width: '23%' }}>3km</Text>
                            <Text style={{ fontSize: 11, color: '#fff', fontFamily: 'Poppins', width: '23.5%' }}>5km</Text>
                            <Text style={{ fontSize: 11, color: '#fff', fontFamily: 'Poppins', width: '23%' }}>7km</Text>
                            <Text style={{ fontSize: 11, color: '#fff', fontFamily: 'Poppins', width: '25%' }}>10km</Text>
                        </View>
                    </View>

                    <Ozellikler />

                </View>
            </View>
        </>
    )
}

export default BiMekanFilitre